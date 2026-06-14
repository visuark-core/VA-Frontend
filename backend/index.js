import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';
import cloudinary from 'cloudinary';
import path from 'path';
import { fileURLToPath } from 'url';
import prisma from './prismaClient.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '.env') });

const PORT = process.env.PORT || 4000;

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const upload = multer({ storage: multer.memoryStorage() });
const app = express();

// Middleware
app.use(cors({
  origin: (origin, callback) => {
    // Allows any vercel.app domain to fix Cross-Deployment 404s
    if (!origin || origin.endsWith('.vercel.app') || origin.includes('localhost')) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));
app.use(express.json());

const router = express.Router();

// Health check
router.get('/status', (req, res) => {
  res.json({ success: true, message: 'Backend is healthy' });
});

// GET all blogs
router.get('/blogs', async (req, res) => {
  try {
    const blogs = await prisma.blog.findMany({ orderBy: { createdAt: 'desc' } });
    res.json({ success: true, blogs });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// POST upload images
router.post('/upload-images', upload.array('files'), async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) return res.status(400).json({ error: 'No files' });
    const results = await Promise.all(req.files.map(file => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.v2.uploader.upload_stream({ folder: 'blog' }, (err, res) => err ? reject(err) : resolve(res));
        stream.end(file.buffer);
      });
    }));
    res.json({ success: true, images: results.map(r => ({ url: r.secure_url })) });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ... (Other routes: GET by ID, POST blog, PUT, DELETE - keep as they were)

// --- VERCEL ROUTING FIX ---
// This ensures /api/blogs and /blogs both work
app.use('/api', router);
app.use('/', router); 

// Catch-all for debugging 404s
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Route not found',
    requested_url: req.url,
    hint: 'Check if you are missing the /api prefix or if the route is defined correctly.'
  });
});

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
}

export default app;
