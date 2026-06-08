import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';
import { google } from 'googleapis';
import cloudinary from 'cloudinary';
import fs from 'fs';
import path from 'path';

dotenv.config();

const PORT = process.env.PORT || 4000;
const SHEET_ID = process.env.GOOGLE_SHEETS_BLOG_SHEET_ID;
const SERVICE_ACCOUNT_PATH = process.env.GOOGLE_SERVICE_ACCOUNT_JSON_PATH;
const SERVICE_ACCOUNT_JSON = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configure multer for file uploads
const upload = multer({ storage: multer.memoryStorage() });

let auth;
let authError = null;
let authMethod = 'none';

try {
  if (SERVICE_ACCOUNT_JSON) {
    authMethod = 'env_variable';
    let jsonStr = SERVICE_ACCOUNT_JSON.trim();
    if ((jsonStr.startsWith("'") && jsonStr.endsWith("'")) || 
        (jsonStr.startsWith('"') && jsonStr.endsWith('"'))) {
      jsonStr = jsonStr.substring(1, jsonStr.length - 1);
    }
    
    const credentials = JSON.parse(jsonStr);
    if (credentials.private_key && typeof credentials.private_key === 'string') {
      credentials.private_key = credentials.private_key.replace(/\\n/g, '\n');
    }

    auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
  } else if (SERVICE_ACCOUNT_PATH && fs.existsSync(SERVICE_ACCOUNT_PATH)) {
    authMethod = 'file_path';
    auth = new google.auth.GoogleAuth({
      keyFile: SERVICE_ACCOUNT_PATH,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
  } else {
    authError = SERVICE_ACCOUNT_PATH 
      ? `File not found at path: ${path.resolve(SERVICE_ACCOUNT_PATH)}` 
      : 'No credentials found (GOOGLE_SERVICE_ACCOUNT_JSON is missing)';
  }
} catch (err) {
  authError = `Auth Init Failed: ${err.message}`;
}

const sheets = auth ? google.sheets({ version: 'v4', auth }) : null;

async function ensureBlogsSheet() {
  if (!sheets || !SHEET_ID) return;
  try {
    const spreadsheet = await sheets.spreadsheets.get({
      spreadsheetId: SHEET_ID,
    });

    const sheetExists = spreadsheet.data.sheets.some(
      (sheet) => sheet.properties.title === 'Blogs'
    );

    if (!sheetExists) {
      await sheets.spreadsheets.batchUpdate({
        spreadsheetId: SHEET_ID,
        requestBody: {
          requests: [{ addSheet: { properties: { title: 'Blogs' } } }],
        },
      });

      const headers = [['ID', 'Title', 'Summary', 'Author', 'PublishedAt', 'Content', 'Images']];
      await sheets.spreadsheets.values.update({
        spreadsheetId: SHEET_ID,
        range: 'Blogs!A1:G1',
        valueInputOption: 'RAW',
        requestBody: { values: headers },
      });
    }
  } catch (error) {
    console.error('Failed to ensure Blogs sheet exists:', error.message);
  }
}

const app = express();

app.use(cors({
  origin: ['https://visuark.vercel.app', 'https://www.visuark.com', 'https://visuark.com', 'http://localhost:5173'],
  credentials: true
}));
app.use(express.json());

function formatBlogRow(row) {
  try {
    return {
      id: row[0],
      title: row[1],
      summary: row[2],
      author: row[3],
      publishedAt: row[4],
      content: row[5] || '',
      images: row[6] ? JSON.parse(row[6]) : [],
    };
  } catch (e) {
    return {
      id: row[0],
      title: row[1],
      summary: row[2],
      author: row[3],
      publishedAt: row[4],
      content: row[5] || '',
      images: [],
    };
  }
}

const router = express.Router();

router.get('/blogs', async (req, res) => {
  try {
    if (!sheets) throw new Error(authError || 'Google Sheets API not initialized');
    
    const result = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: 'Blogs!A2:G',
    });

    const rows = result.data.values || [];
    const blogs = rows.map(formatBlogRow);
    res.json({ success: true, blogs });
  } catch (error) {
    const status = (typeof error.code === 'number') ? error.code : 500;
    res.status(status).json({ success: false, error: error.message || 'Unable to fetch blogs' });
  }
});

router.get('/blogs/:id', async (req, res) => {
  if (!sheets) return res.status(500).json({ success: false, error: authError || 'Google Sheets API not initialized' });
  const { id } = req.params;

  try {
    const result = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: 'Blogs!A2:G',
    });

    const rows = result.data.values || [];
    const blog = rows.map(formatBlogRow).find((item) => item.id === id);

    if (!blog) {
      return res.status(404).json({ success: false, error: 'Blog post not found' });
    }

    res.json({ success: true, blog });
  } catch (error) {
    const status = (typeof error.code === 'number') ? error.code : 500;
    res.status(status).json({ success: false, error: error.message });
  }
});

router.post('/blogs', async (req, res) => {
  if (!sheets) return res.status(500).json({ success: false, error: authError || 'Google Sheets API not initialized' });
  const { title, summary, author, publishedAt, content, images = [] } = req.body;

  if (!title || !summary || !author || !publishedAt) {
    return res.status(400).json({ success: false, error: 'Required fields missing' });
  }

  const id = `blog-${Date.now()}`;
  const values = [[id, title, summary, author, publishedAt, content || '', JSON.stringify(images)]];

  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: 'Blogs!A:G',
      valueInputOption: 'RAW',
      requestBody: { values },
    });
    res.status(201).json({ success: true, blog: { id, title, summary, author, publishedAt, content, images } });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.put('/blogs/:id', async (req, res) => {
  if (!sheets) return res.status(500).json({ success: false, error: authError || 'Google Sheets API not initialized' });
  const { id } = req.params;
  const { title, summary, author, publishedAt, content, images = [] } = req.body;

  try {
    const result = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: 'Blogs!A:A',
    });

    const rows = result.data.values || [];
    const rowIndex = rows.findIndex(row => row[0] === id);

    if (rowIndex === -1) return res.status(404).json({ success: false, error: 'Not found' });

    const values = [[id, title, summary, author, publishedAt, content || '', JSON.stringify(images)]];
    await sheets.spreadsheets.values.update({
      spreadsheetId: SHEET_ID,
      range: `Blogs!A${rowIndex + 1}:G${rowIndex + 1}`,
      valueInputOption: 'RAW',
      requestBody: { values },
    });

    res.json({ success: true, blog: { id, title, summary, author, publishedAt, content, images } });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.delete('/blogs/:id', async (req, res) => {
  if (!sheets) return res.status(500).json({ success: false, error: authError || 'Google Sheets API not initialized' });
  const { id } = req.params;

  try {
    const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId: SHEET_ID });
    const sheet = spreadsheet.data.sheets.find(s => s.properties.title === 'Blogs');
    if (!sheet) throw new Error('Blogs sheet not found');

    const result = await sheets.spreadsheets.values.get({ spreadsheetId: SHEET_ID, range: 'Blogs!A:A' });
    const rows = result.data.values || [];
    const rowIndex = rows.findIndex(row => row[0] === id);

    if (rowIndex === -1) return res.status(404).json({ success: false, error: 'Not found' });

    await sheets.spreadsheets.batchUpdate({
      spreadsheetId: SHEET_ID,
      requestBody: {
        requests: [{
          deleteDimension: {
            range: { sheetId: sheet.properties.sheetId, dimension: 'ROWS', startIndex: rowIndex, endIndex: rowIndex + 1 }
          }
        }]
      }
    });

    res.json({ success: true, message: 'Deleted' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.get('/', (req, res) => {
  res.json({ 
    success: true, 
    message: 'Backend is running',
    config: {
      GOOGLE_SHEETS_BLOG_SHEET_ID: !!SHEET_ID,
      GOOGLE_SERVICE_ACCOUNT_JSON: !!SERVICE_ACCOUNT_JSON,
      GOOGLE_SERVICE_ACCOUNT_JSON_PATH: SERVICE_ACCOUNT_PATH || 'not_set',
      CLOUDINARY_READY: !!process.env.CLOUDINARY_CLOUD_NAME
    },
    auth: {
      initialized: !!sheets,
      method: authMethod,
      error: authError
    }
  });
});

app.use('/api', router);

ensureBlogsSheet().catch(err => console.error('Startup error:', err));

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => console.log(`Local: http://localhost:${PORT}`));
}

export default app;
