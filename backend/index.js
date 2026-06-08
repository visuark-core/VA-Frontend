import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';
import { google } from 'googleapis';
import cloudinary from 'cloudinary';

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

// Validate environment variables early with descriptive errors
if (!SHEET_ID) {
  console.error('ERROR: GOOGLE_SHEETS_BLOG_SHEET_ID is missing.');
}

if (!SERVICE_ACCOUNT_PATH && !SERVICE_ACCOUNT_JSON) {
  console.error('ERROR: Google service account credentials are missing (JSON or PATH).');
}

let auth;
try {
  if (SERVICE_ACCOUNT_JSON) {
    // If JSON string is provided in env, use it directly
    auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(SERVICE_ACCOUNT_JSON),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    console.log('Google Auth initialized using GOOGLE_SERVICE_ACCOUNT_JSON env variable.');
  } else if (SERVICE_ACCOUNT_PATH) {
    // Fallback to file path only if it exists (local dev)
    auth = new google.auth.GoogleAuth({
      keyFile: SERVICE_ACCOUNT_PATH,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    console.log('Google Auth initialized using file path:', SERVICE_ACCOUNT_PATH);
  } else {
    console.error('ERROR: No Google service account credentials provided (JSON or PATH).');
  }
} catch (err) {
  console.error('ERROR: Failed to initialize Google Auth:', err.message);
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
      console.log('Blogs sheet not found. Creating it...');
      await sheets.spreadsheets.batchUpdate({
        spreadsheetId: SHEET_ID,
        requestBody: {
          requests: [
            {
              addSheet: {
                properties: {
                  title: 'Blogs',
                },
              },
            },
          ],
        },
      });

      // Add headers
      const headers = [['ID', 'Title', 'Summary', 'Author', 'PublishedAt', 'Content', 'Images']];
      await sheets.spreadsheets.values.update({
        spreadsheetId: SHEET_ID,
        range: 'Blogs!A1:G1',
        valueInputOption: 'RAW',
        requestBody: { values: headers },
      });
      console.log('Blogs sheet created with headers.');
    }
  } catch (error) {
    console.error('Failed to ensure Blogs sheet exists:', error.message);
  }
}

const app = express();

app.use(cors({
  origin: ['https://visuark.vercel.app', 'https://www.visuark.com', 'http://localhost:5173'],
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
    // Fallback if images are not valid JSON
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
  if (!sheets) return res.status(500).json({ success: false, error: 'Google Sheets API not initialized' });
  try {
    const result = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: 'Blogs!A2:G',
    });

    const rows = result.data.values || [];
    const blogs = rows.map(formatBlogRow);
    res.json({ success: true, blogs });
  } catch (error) {
    console.error('Failed to load blog posts from Google Sheets:', error);
    const status = (typeof error.code === 'number') ? error.code : 500;
    const message = error.response?.data?.error?.message || error.errors?.[0]?.message || 'Unable to fetch blogs';
    res.status(status).json({ success: false, error: message });
  }
});

router.get('/blogs/:id', async (req, res) => {
  if (!sheets) return res.status(500).json({ success: false, error: 'Google Sheets API not initialized' });
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
    console.error(`Failed to load blog ${id} from Google Sheets:`, error);
    const status = (typeof error.code === 'number') ? error.code : 500;
    const message = error.response?.data?.error?.message || error.errors?.[0]?.message || 'Unable to fetch blog post';
    res.status(status).json({ success: false, error: message });
  }
});

router.post('/blogs', async (req, res) => {
  if (!sheets) return res.status(500).json({ success: false, error: 'Google Sheets API not initialized' });
  const { title, summary, author, publishedAt, content, images = [] } = req.body;

  if (!title || !summary || !author || !publishedAt) {
    return res.status(400).json({
      success: false,
      error: 'title, summary, author, and publishedAt are required',
    });
  }

  const id = `blog-${Date.now()}`;
  const imagesString = JSON.stringify(images);
  const values = [[id, title, summary, author, publishedAt, content || '', imagesString]];

  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: 'Blogs!A:G',
      valueInputOption: 'RAW',
      requestBody: { values },
    });

    res.status(201).json({ success: true, blog: { id, title, summary, author, publishedAt, content, images } });
  } catch (error) {
    console.error('Failed to append blog post to Google Sheets:', error);
    const status = (typeof error.code === 'number') ? error.code : 500;
    const message = error.response?.data?.error?.message || error.errors?.[0]?.message || 'Unable to save blog post';
    res.status(status).json({ success: false, error: message });
  }
});

router.put('/blogs/:id', async (req, res) => {
  if (!sheets) return res.status(500).json({ success: false, error: 'Google Sheets API not initialized' });
  const { id } = req.params;
  const { title, summary, author, publishedAt, content, images = [] } = req.body;

  try {
    const result = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: 'Blogs!A:A',
    });

    const rows = result.data.values || [];
    const rowIndex = rows.findIndex(row => row[0] === id);

    if (rowIndex === -1) {
      return res.status(404).json({ success: false, error: 'Blog post not found' });
    }

    const sheetRowNumber = rowIndex + 1;
    const imagesString = JSON.stringify(images);
    const values = [[id, title, summary, author, publishedAt, content || '', imagesString]];

    await sheets.spreadsheets.values.update({
      spreadsheetId: SHEET_ID,
      range: `Blogs!A${sheetRowNumber}:G${sheetRowNumber}`,
      valueInputOption: 'RAW',
      requestBody: { values },
    });

    res.json({ success: true, blog: { id, title, summary, author, publishedAt, content, images } });
  } catch (error) {
    console.error('Failed to update blog post:', error);
    const status = (typeof error.code === 'number') ? error.code : 500;
    res.status(status).json({ success: false, error: 'Unable to update blog post' });
  }
});

router.delete('/blogs/:id', async (req, res) => {
  if (!sheets) return res.status(500).json({ success: false, error: 'Google Sheets API not initialized' });
  const { id } = req.params;

  try {
    const spreadsheet = await sheets.spreadsheets.get({
      spreadsheetId: SHEET_ID,
    });
    const sheet = spreadsheet.data.sheets.find(s => s.properties.title === 'Blogs');
    if (!sheet) throw new Error('Blogs sheet not found');
    const sheetId = sheet.properties.sheetId;

    const result = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: 'Blogs!A:A',
    });

    const rows = result.data.values || [];
    const rowIndex = rows.findIndex(row => row[0] === id);

    if (rowIndex === -1) {
      return res.status(404).json({ success: false, error: 'Blog post not found' });
    }

    await sheets.spreadsheets.batchUpdate({
      spreadsheetId: SHEET_ID,
      requestBody: {
        requests: [
          {
            deleteDimension: {
              range: {
                sheetId: sheetId,
                dimension: 'ROWS',
                startIndex: rowIndex,
                endIndex: rowIndex + 1,
              },
            },
          },
        ],
      },
    });

    res.json({ success: true, message: 'Blog post deleted successfully' });
  } catch (error) {
    console.error('Failed to delete blog post:', error);
    const status = (typeof error.code === 'number') ? error.code : 500;
    res.status(status).json({ success: false, error: 'Unable to delete blog post' });
  }
});

// Image upload endpoints
router.post('/upload-image', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, error: 'No file provided' });
    }

    const uploadStream = cloudinary.v2.uploader.upload_stream(
      { folder: 'blog-posts', resource_type: 'auto' },
      (error, result) => {
        if (error) {
          console.error('Cloudinary upload error:', error);
          return res.status(500).json({ success: false, error: 'Failed to upload image' });
        }

        res.json({
          success: true,
          url: result.secure_url,
          publicId: result.public_id,
        });
      }
    );

    uploadStream.end(req.file.buffer);
  } catch (error) {
    console.error('Image upload error:', error);
    res.status(500).json({ success: false, error: 'Failed to process image upload' });
  }
});

router.post('/upload-images', upload.array('files'), async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ success: false, error: 'No files provided' });
    }

    const uploadPromises = req.files.map((file) => {
      return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.v2.uploader.upload_stream(
          { folder: 'blog-posts', resource_type: 'auto' },
          (error, result) => {
            if (error) {
              console.error('Cloudinary upload error:', error);
              reject(error);
            } else {
              resolve({
                url: result.secure_url,
                publicId: result.public_id,
              });
            }
          }
        );
        uploadStream.end(file.buffer);
      });
    });

    const results = await Promise.all(uploadPromises);
    res.json({ success: true, images: results });
  } catch (error) {
    console.error('Images upload error:', error);
    res.status(500).json({ success: false, error: 'Failed to process image uploads' });
  }
});

router.get('/', (req, res) => {
  res.json({ 
    success: true, 
    message: 'Vagwiin Backend API is running',
    status: {
      sheets: !!sheets,
      sheetId: !!SHEET_ID,
      cloudinary: !!process.env.CLOUDINARY_CLOUD_NAME
    }
  });
});

app.use('/api', router);
app.use('/', router);

ensureBlogsSheet().catch(err => console.error('Startup error:', err));

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Blog backend started on http://localhost:${PORT}`);
  });
}

export default app;
