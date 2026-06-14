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

// Configure multer for file uploads
const upload = multer({ storage: multer.memoryStorage() });

const app = express();

app.use(cors({
  origin: (origin, callback) => {
    const allowedOrigins = [
      'https://visuark.vercel.app', 
      'https://www.visuark.com', 
      'https://visuark.com', 
      'http://localhost:5173'
    ];
    // Allow Vercel preview URLs
    if (!origin || allowedOrigins.includes(origin) || origin.endsWith('.vercel.app')) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));
app.use(express.json());

const router = express.Router();

// GET all blogs
router.get('/blogs', async (req, res) => {
  try {
    const blogs = await prisma.blog.findMany({
      orderBy: { createdAt: 'desc' }
    });
    res.json({ success: true, blogs });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({ 
      success: false, 
      error: error.message || 'Unable to fetch blogs',
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
});

// GET blog by ID
router.get('/blogs/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await prisma.blog.findUnique({
      where: { id }
    });

    if (!blog) {
      return res.status(404).json({ success: false, error: 'Blog post not found' });
    }

    res.json({ success: true, blog });
  } catch (error) {
    console.error('Error fetching blog by ID:', error);
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
    console.error('Error creating blog:', error);
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
    console.error('Error updating blog:', error);
    if (error.code === 'P2025') {
      return res.status(404).json({ success: false, error: 'Blog not found' });
    }
    res.status(500).json({ success: false, error: error.message });
  }
});

// DELETE blog
router.delete('/blogs/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.blog.delete({
      where: { id }
    });
    res.json({ success: true, message: 'Deleted' });
  } catch (error) {
    console.error('Error deleting blog:', error);
    if (error.code === 'P2025') {
      return res.status(404).json({ success: false, error: 'Blog not found' });
    }
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

app.use('/api', router);

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => console.log(`Local: http://localhost:${PORT}`));
}

export default app;
