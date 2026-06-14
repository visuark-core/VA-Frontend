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

// Root check route
router.get('/', (req, res) => {
  res.json({ success: true, message: 'API is running smoothly' });
});

// GET all blogs
router.get('/blogs', async (req, res) => {
  try {
    const blogs = await prisma.blog.findMany({
      orderBy: { createdAt: 'desc' }
    });
    res.json({ success: true, blogs });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET blog by ID
router.get('/blogs/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await prisma.blog.findUnique({ where: { id } });
    if (!blog) return res.status(404).json({ success: false, error: 'Blog not found' });
    res.json({ success: true, blog });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// POST new blog
router.post('/blogs', async (req, res) => {
  const { title, summary, author, publishedAt, content, images = [] } = req.body;
  if (!title || !summary || !author || !publishedAt) {
    return res.status(400).json({ success: false, error: 'Required fields missing' });
  }
  try {
    const blog = await prisma.blog.create({
      data: {
        title,
        summary,
        author,
        publishedAt,
        content: content || '',
        images: images || [],
      }
    });
    res.status(201).json({ success: true, blog });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// POST upload images
router.post('/upload-images', upload.array('files'), async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ success: false, error: 'No files uploaded' });
    }

    const uploadPromises = req.files.map(file => {
      return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.v2.uploader.upload_stream(
          { folder: 'blog-posts' },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );
        uploadStream.end(file.buffer);
      });
    });

    const results = await Promise.all(uploadPromises);
    const images = results.map(result => ({
      url: result.secure_url,
      publicId: result.public_id
    }));

    res.json({ success: true, images });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// PUT update blog
router.put('/blogs/:id', async (req, res) => {
  const { id } = req.params;
  const { title, summary, author, publishedAt, content, images = [] } = req.body;
  try {
    const blog = await prisma.blog.update({
      where: { id },
      data: {
        title,
        summary,
        author,
        publishedAt,
        content: content || '',
        images: images || [],
      }
    });
    res.json({ success: true, blog });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// DELETE blog
router.delete('/blogs/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.blog.delete({ where: { id } });
    res.json({ success: true, message: 'Deleted' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.get('/status', (req, res) => {
  res.json({ 
    success: true, 
    message: 'Backend is healthy',
    config: {
      DATABASE_READY: !!process.env.DATABASE_URL,
      CLOUDINARY_READY: !!process.env.CLOUDINARY_CLOUD_NAME,
      NODE_ENV: process.env.NODE_ENV
    }
  });
});

// --- VERCEL ROUTING FIX ---
app.use('/api', router);
app.use('/', router); 

// Catch-all for debugging 404s
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Route not found',
    requested_url: req.url,
    hint: 'This address is not registered in the backend.'
  });
});

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => console.log(`Local: http://localhost:${PORT}`));
}

export default app;
