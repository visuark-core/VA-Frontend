import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      slug: 'future-of-web-development',
      title: 'The Future of Web Development: Trends to Watch in 2024',
      excerpt: 'Explore the latest trends shaping the web development landscape, from AI integration to progressive web apps.',
      content: 'Full blog post content would go here...',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '5 min read',
      tags: ['Web Development', 'Trends', 'AI', 'PWA']
    },
    {
      id: 2,
      slug: 'design-systems-guide',
      title: 'Building Scalable Design Systems: A Complete Guide',
      excerpt: 'Learn how to create and maintain design systems that scale with your organization and improve consistency.',
      content: 'Full blog post content would go here...',
      author: 'Emily Rodriguez',
      date: '2024-01-10',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '8 min read',
      tags: ['Design Systems', 'UI/UX', 'Scalability']
    },
    {
      id: 3,
      slug: 'video-marketing-strategies',
      title: 'Video Marketing Strategies That Convert in 2024',
      excerpt: 'Discover proven video marketing techniques that drive engagement and boost conversions for your business.',
      content: 'Full blog post content would go here...',
      author: 'David Kim',
      date: '2024-01-05',
      category: 'Marketing',
      image: 'https://images.unsplash.com/photo-1574717024621-6becaaa0d4b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '6 min read',
      tags: ['Video Marketing', 'Conversion', 'Strategy']
    },
    {
      id: 4,
      slug: 'ux-research-methods',
      title: 'Essential UX Research Methods Every Designer Should Know',
      excerpt: 'A comprehensive overview of user research methods and when to use them for maximum impact.',
      content: 'Full blog post content would go here...',
      author: 'Michael Chen',
      date: '2023-12-28',
      category: 'UX Research',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '7 min read',
      tags: ['UX Research', 'User Testing', 'Design Process']
    },
    {
      id: 5,
      slug: 'brand-identity-essentials',
      title: 'Brand Identity Essentials: Creating Memorable Visual Brands',
      excerpt: 'Learn the fundamental principles of creating strong brand identities that resonate with your target audience.',
      content: 'Full blog post content would go here...',
      author: 'Sarah Johnson',
      date: '2023-12-20',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '9 min read',
      tags: ['Branding', 'Visual Identity', 'Logo Design']
    },
    {
      id: 6,
      slug: 'performance-optimization-tips',
      title: 'Web Performance Optimization: Speed Up Your Site',
      excerpt: 'Practical tips and techniques to improve your website\'s loading speed and overall performance.',
      content: 'Full blog post content would go here...',
      author: 'Michael Chen',
      date: '2023-12-15',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '10 min read',
      tags: ['Performance', 'Optimization', 'Web Development']
    }
  ];

  const categories = [
    'all',
    'Web Development',
    'Design',
    'Marketing',
    'UX Research',
    'Branding'
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts[0];
  const regularPosts = filteredPosts.slice(1);

  return (
    <PageTransition>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Our <span className="text-cyan-400">Blog</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
                Insights, tips, and trends from the world of digital design and development.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-12">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-400 text-gray-900'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    {category === 'all' ? 'All' : category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {selectedCategory === 'all' && !searchTerm && (
          <section className="py-12 bg-gray-900">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold text-white mb-8">Featured Article</h2>
                <div className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700 hover:border-cyan-400 transition-all duration-300">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative">
                      <img
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="w-full h-64 lg:h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-cyan-400 text-gray-900 rounded-full text-sm font-semibold">
                          Featured
                        </span>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(featuredPost.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {featuredPost.author}
                        </span>
                        <span>{featuredPost.readTime}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4 hover:text-cyan-400 transition-colors">
                        <Link to={`/blog/${featuredPost.slug}`}>
                          {featuredPost.title}
                        </Link>
                      </h3>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {featuredPost.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {featuredPost.tags?.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm flex items-center"
                          >
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <Link
                        to={`/blog/${featuredPost.slug}`}
                        className="inline-flex items-center space-x-2 text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
                      >
                        <span>Read More</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-12 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-gray-900/80 text-cyan-400 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
                      <Link to={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      
                      <Link
                        to={`/blog/${post.slug}`}
                        className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors flex items-center space-x-1"
                      >
                        <span>Read</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <h3 className="text-2xl font-bold text-white mb-4">No articles found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Blog;