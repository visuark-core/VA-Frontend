import app from '../backend/index.js';
export default (req, res) => {
  try {
    return app(req, res);
  } catch (error) {
    console.error('Fatal API error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Fatal API error', 
      message: error.message,
      stack: error.stack
    });
  }
};
