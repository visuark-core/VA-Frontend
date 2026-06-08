import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Upload, 
  CheckCircle, 
  AlertCircle, 
  X, 
  Image as ImageIcon, 
  Lock, 
  Edit2, 
  Trash2, 
  Eye, 
  Plus,
  RefreshCw,
  Loader2,
  User
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Form State
  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    author: '',
    publishedAt: new Date().toISOString().split('T')[0],
    content: '',
    images: [] as string[],
  });

  // Management State
  const [blogs, setBlogs] = useState<any[]>([]);
  const [isEditing, setIsEditMode] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploadingImages, setUploadingImages] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fetchingBlogs, setFetchingBlogs] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: '',
  });

  // Fetch blogs when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      fetchBlogs();
    }
  }, [isAuthenticated]);

  const fetchBlogs = async () => {
    setFetchingBlogs(true);
    try {
      const response = await fetch('/api/blogs');
      const data = await response.json();
      if (data.success) {
        setBlogs(data.blogs);
      }
    } catch (error) {
      console.error('Failed to fetch blogs:', error);
    } finally {
      setFetchingBlogs(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '787853') {
      setIsAuthenticated(true);
      setLoginError('');
    } else {
      setLoginError('Invalid password');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };

  const handleUploadImages = async () => {
    if (selectedFiles.length === 0) {
      setStatus({
        type: 'error',
        message: 'Please select at least one image',
      });
      return;
    }

    setUploadingImages(true);
    setStatus({ type: null, message: '' });

    try {
      const imageFormData = new FormData();
      selectedFiles.forEach((file) => {
        imageFormData.append('files', file);
      });

      const response = await fetch('/api/upload-images', {
        method: 'POST',
        body: imageFormData,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to upload images');
      }

      const result = await response.json();
      if (result.success) {
        const uploadedUrls = result.images.map((img: any) => img.url);
        setFormData((prev) => ({
          ...prev,
          images: [...prev.images, ...uploadedUrls],
        }));

        setStatus({
          type: 'success',
          message: `${uploadedUrls.length} image(s) uploaded successfully!`,
        });
      }

      setSelectedFiles([]);
      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to upload images',
      });
    } finally {
      setUploadingImages(false);
    }
  };

  const removeImage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const resetForm = () => {
    setFormData({
      title: '',
      summary: '',
      author: '',
      publishedAt: new Date().toISOString().split('T')[0],
      content: '',
      images: [],
    });
    setIsEditMode(false);
    setEditingId(null);
    setSelectedFiles([]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: '' });

    const url = isEditing 
      ? `/api/blogs/${editingId}` 
      : '/api/blogs';
    
    const method = isEditing ? 'PUT' : 'POST';

    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || `Failed to ${isEditing ? 'update' : 'upload'} blog post`);
      }

      setStatus({
        type: 'success',
        message: `Blog post "${formData.title}" ${isEditing ? 'updated' : 'uploaded'} successfully!`,
      });

      resetForm();
      fetchBlogs(); // Refresh the list
      
      // Scroll to list
      document.getElementById('blog-list')?.scrollIntoView({ behavior: 'smooth' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'An error occurred',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (blog: any) => {
    setFormData({
      title: blog.title,
      summary: blog.summary,
      author: blog.author,
      publishedAt: blog.publishedAt,
      content: blog.content,
      images: blog.images || [],
    });
    setIsEditMode(true);
    setEditingId(blog.id);
    setStatus({ type: null, message: '' });
    
    // Scroll to form
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id: string, title: string) => {
    if (!window.confirm(`Are you sure you want to delete "${title}"?`)) return;

    try {
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Blog post deleted successfully',
        });
        fetchBlogs();
        if (editingId === id) resetForm();
      } else {
        throw new Error('Failed to delete');
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to delete blog post',
      });
    }
  };

  if (!isAuthenticated) {
    return (
      <PageTransition>
        <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md w-full bg-gray-800 rounded-xl p-8 shadow-2xl border border-gray-700"
          >
            <div className="flex flex-col items-center mb-8">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mb-4 border border-blue-500/30">
                <Lock className="w-8 h-8 text-blue-500" />
              </div>
              <h1 className="text-2xl font-bold text-white">Admin Access</h1>
              <p className="text-gray-400">Please enter password to continue</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  autoFocus
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition"
                />
                {loginError && (
                  <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {loginError}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition"
              >
                Unlock
              </button>
            </form>
          </motion.div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                Blog Management
              </h1>
              <p className="text-gray-400">
                {isEditing ? 'Update existing article' : 'Publish a new article to your blog'}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={resetForm}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  isEditing 
                    ? 'bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500/20' 
                    : 'bg-blue-600/10 text-blue-500 border border-blue-500/20 hover:bg-blue-600/20'
                }`}
              >
                {isEditing ? <Plus className="w-4 h-4" /> : <RefreshCw className="w-4 h-4" />}
                {isEditing ? 'Cancel Editing' : 'New Post'}
              </button>
              <button 
                onClick={() => setIsAuthenticated(false)}
                className="text-sm text-gray-500 hover:text-white transition"
              >
                Logout
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Form Column */}
            <div className="lg:col-span-7 space-y-8">
              {status.type && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`p-4 rounded-xl flex items-center gap-3 ${
                    status.type === 'success'
                      ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                      : 'bg-red-500/10 border border-red-500/20 text-red-400'
                  }`}
                >
                  {status.type === 'success' ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                  <p className="font-medium">{status.message}</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 shadow-xl space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">Title</label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      required
                      placeholder="e.g. The Future of AI Design"
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">Author</label>
                    <input
                      type="text"
                      name="author"
                      value={formData.author}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">Date</label>
                    <input
                      type="date"
                      name="publishedAt"
                      value={formData.publishedAt}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">Summary</label>
                  <textarea
                    name="summary"
                    value={formData.summary}
                    onChange={handleChange}
                    required
                    rows={2}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">Content (Supports HTML/Linebreaks)</label>
                  <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    required
                    rows={12}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white font-light focus:outline-none focus:border-blue-500 transition-colors resize-none leading-relaxed"
                  />
                </div>

                {/* Media Section */}
                <div className="space-y-4">
                  <label className="block text-xs uppercase tracking-widest text-gray-500 font-bold">Media Management</label>
                  
                  <div className="border-2 border-dashed border-gray-700 rounded-2xl p-8 bg-gray-900/30 text-center">
                    <input
                      type="file"
                      id="images"
                      multiple
                      accept="image/*"
                      onChange={handleFileSelect}
                      className="hidden"
                    />
                    <label htmlFor="images" className="cursor-pointer flex flex-col items-center gap-4">
                      <div className="w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center text-blue-500">
                        <ImageIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Click to select images</p>
                        <p className="text-gray-500 text-sm mt-1">{selectedFiles.length} files selected</p>
                      </div>
                    </label>
                    
                    {selectedFiles.length > 0 && (
                      <button
                        type="button"
                        onClick={handleUploadImages}
                        disabled={uploadingImages}
                        className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 text-white rounded-lg font-bold transition-all flex items-center gap-2 mx-auto"
                      >
                        {uploadingImages ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
                        {uploadingImages ? 'Uploading...' : 'Upload to Cloudinary'}
                      </button>
                    )}
                  </div>

                  {formData.images.length > 0 && (
                    <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
                      {formData.images.map((url, idx) => (
                        <div key={idx} className="relative aspect-square rounded-lg overflow-hidden group border border-gray-700">
                          <img src={url} className="w-full h-full object-cover" alt="" />
                          <button
                            type="button"
                            onClick={() => removeImage(idx)}
                            className="absolute top-1 right-1 bg-red-600 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <X className="w-3 h-3 text-white" />
                          </button>
                          {idx === 0 && (
                            <div className="absolute bottom-0 left-0 right-0 bg-blue-600 text-[10px] text-center font-bold py-0.5 text-white">HERO</div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 disabled:from-gray-700 disabled:to-gray-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-900/20 flex items-center justify-center gap-3"
                >
                  {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <Upload className="w-6 h-6" />}
                  {loading ? (isEditing ? 'Updating...' : 'Publishing...') : (isEditing ? 'Update Blog Post' : 'Publish Blog Post')}
                </button>
              </form>
            </div>

            {/* List Column */}
            <div id="blog-list" className="lg:col-span-5 space-y-6">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-bold text-white">Live Articles ({blogs.length})</h2>
                <button onClick={fetchBlogs} className="text-gray-500 hover:text-white transition-colors">
                  <RefreshCw className={`w-4 h-4 ${fetchingBlogs ? 'animate-spin' : ''}`} />
                </button>
              </div>

              {fetchingBlogs && blogs.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 bg-gray-800/30 rounded-2xl border border-gray-700">
                  <Loader2 className="w-8 h-8 text-blue-500 animate-spin mb-4" />
                  <p className="text-gray-500">Syncing with Google Sheets...</p>
                </div>
              ) : blogs.length === 0 ? (
                <div className="text-center py-20 bg-gray-800/30 rounded-2xl border border-gray-700">
                  <p className="text-gray-500">No blog posts found.</p>
                </div>
              ) : (
                <div className="space-y-4 max-h-[1000px] overflow-y-auto pr-2 custom-scrollbar">
                  {blogs.map((blog) => (
                    <motion.div 
                      key={blog.id}
                      layout
                      className={`p-4 rounded-2xl border transition-all ${
                        editingId === blog.id 
                          ? 'bg-blue-600/10 border-blue-500/50' 
                          : 'bg-gray-800/40 border-gray-700 hover:border-gray-600'
                      }`}
                    >
                      <div className="flex gap-4">
                        {blog.images?.[0] && (
                          <img src={blog.images[0]} className="w-16 h-16 rounded-lg object-cover bg-gray-900" alt="" />
                        )}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-white font-bold truncate">{blog.title}</h3>
                          <div className="flex items-center gap-3 text-xs text-gray-500 mt-1 font-medium">
                            <span className="flex items-center gap-1"><User className="w-3 h-3" /> {blog.author}</span>
                            <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
                          </div>
                          
                          <div className="flex items-center gap-2 mt-4">
                            <button 
                              onClick={() => handleEdit(blog)}
                              className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-xs font-bold transition-colors"
                            >
                              <Edit2 className="w-3 h-3" /> Edit
                            </button>
                            <button 
                              onClick={() => handleDelete(blog.id, blog.title)}
                              className="flex items-center gap-1.5 px-3 py-1.5 bg-red-600/10 hover:bg-red-600 text-red-500 hover:text-white rounded-lg text-xs font-bold transition-all"
                            >
                              <Trash2 className="w-3 h-3" /> Delete
                            </button>
                            <Link 
                              to={`/blog/${blog.id}`} 
                              target="_blank"
                              className="ml-auto flex items-center gap-1 text-xs text-gray-500 hover:text-cyan-400 transition-colors"
                            >
                              <Eye className="w-3 h-3" /> View
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Admin;
