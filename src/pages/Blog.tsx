import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search, Tag, Loader2, Sparkles, Clock } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { blogPosts as localBlogPosts } from '../data/blogs';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const sorted = [...localBlogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    setBlogPosts(sorted);
    setLoading(false);
  }, []);

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

  const featuredPost = filteredPosts[0];
  const regularPosts = filteredPosts.slice(1);

  if (loading) {
    return (
      <PageTransition>
        <div className="pt-20 min-h-screen flex items-center justify-center bg-[#f8fafc]">
          <div className="text-center">
            <Loader2 className="w-12 h-12 text-cyan-600 animate-spin mx-auto mb-4" />
            <p className="text-slate-600 text-lg font-medium">Loading articles...</p>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="pt-20 bg-[#f8fafc] min-h-screen relative overflow-hidden">
        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

        {/* Ambient Glow Orbs */}
        <div className="absolute top-20 left-1/10 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-40 right-1/10 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Hero Section */}
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200/60 text-cyan-600 text-xs font-mono font-bold uppercase tracking-widest mb-6">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                <span>Our Journal</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight leading-none">
                Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Stories</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
                Deep dives, quick tips, and industry trends curated by the Visuark design and engineering team.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Panel */}
        <section className="py-6 relative z-10">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="bg-white/80 backdrop-blur-md border border-slate-200/80 rounded-3xl p-6 shadow-[0_15px_40px_rgba(0,0,0,0.03)] flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md w-full">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search articles by title or keyword..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200/80 rounded-2xl text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all duration-300 shadow-inner"
                />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4.5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/25 scale-[1.02]'
                        : 'bg-slate-50 text-slate-600 border border-slate-200/60 hover:bg-slate-100 hover:text-slate-900 shadow-sm'
                    }`}
                  >
                    {category === 'all' ? 'All Topics' : category}
                  </button>
                ))}
              </div>
            </div>

            {error && (
              <div className="text-center p-8 bg-red-50 border border-red-200 rounded-3xl mt-6">
                <p className="text-red-600 font-medium">{error}</p>
              </div>
            )}
          </div>
        </section>

        {/* Featured Post */}
        {selectedCategory === 'all' && !searchTerm && featuredPost && (
          <section className="py-12 relative z-10">
            <div className="container mx-auto px-4 max-w-6xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2 mb-6">
                  <div className="h-1.5 w-1.5 rounded-full bg-cyan-500 animate-ping" />
                  <h2 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-[0.2em]">Featured Release</h2>
                </div>

                <div className="group bg-white rounded-[32px] overflow-hidden border border-slate-200/80 shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_70px_rgba(6,182,212,0.08)] hover:border-cyan-400/40 transition-all duration-500">
                  <div className="grid lg:grid-cols-12 gap-0">
                    {/* Image block */}
                    <div className="lg:col-span-7 relative overflow-hidden aspect-video lg:aspect-auto min-h-[320px] lg:min-h-[460px]">
                      <img
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent pointer-events-none" />
                      <div className="absolute top-6 left-6">
                        <span className="px-4 py-2 bg-cyan-600/90 backdrop-blur-md text-white rounded-full text-xs font-extrabold uppercase tracking-widest border border-cyan-400/25 shadow-md">
                          Featured
                        </span>
                      </div>
                    </div>

                    {/* Content block */}
                    <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between bg-white relative">
                      <div>
                        <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-400 mb-6">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="h-4.5 w-4.5 text-cyan-600" />
                            {new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                          <span className="flex items-center gap-1.5">
                            <Clock className="h-4.5 w-4.5 text-cyan-600" />
                            {featuredPost.readTime}
                          </span>
                        </div>
                        
                        <h3 className="text-2xl lg:text-3xl font-extrabold text-slate-900 mb-4 hover:text-cyan-600 transition-colors text-left leading-[1.25] tracking-tight">
                          <Link to={`/blog/${featuredPost.slug}`} className="relative inline-block group/title">
                            <span className="relative z-10">{featuredPost.title}</span>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300" />
                          </Link>
                        </h3>
                        
                        <p className="text-slate-500 mb-6 leading-relaxed text-left font-light text-base lg:text-lg">
                          {featuredPost.excerpt}
                        </p>
                      </div>

                      <div>
                        <div className="flex flex-wrap gap-1.5 mb-8">
                          {featuredPost.tags?.map((tag: string) => (
                            <span
                              key={tag}
                              className="px-3.5 py-1 bg-slate-50 border border-slate-200/60 text-slate-500 rounded-full text-xs font-bold flex items-center shadow-sm"
                            >
                              <Tag className="h-3 w-3 mr-1.5 text-slate-400" />
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between border-t border-slate-100 pt-6">
                          <div className="flex items-center space-x-3 text-sm text-slate-600 font-bold">
                            <div className="p-1.5 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-600">
                              <User className="h-4 w-4" />
                            </div>
                            <span>{featuredPost.author}</span>
                          </div>

                          <Link
                            to={`/blog/${featuredPost.slug}`}
                            className="inline-flex items-center space-x-2 text-cyan-600 hover:text-cyan-700 font-extrabold text-sm uppercase tracking-wider group/link"
                          >
                            <span>Read Article</span>
                            <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1.5 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-12 relative z-10">
          <div className="container mx-auto px-4 max-w-6xl">
            {selectedCategory === 'all' && !searchTerm && regularPosts.length > 0 && (
              <h2 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-[0.2em] mb-8 text-left">Recent Stories</h2>
            )}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-[0_12px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)] hover:border-cyan-400/40 transition-all duration-500 hover:-translate-y-2 flex flex-col"
                >
                  {/* Image section */}
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3.5 py-1.5 bg-white/95 backdrop-blur-sm text-cyan-600 rounded-full text-[10px] font-extrabold uppercase tracking-widest shadow-sm border border-slate-100/50">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content section */}
                  <div className="p-6.5 flex flex-col flex-1">
                    <div className="flex items-center space-x-4 text-[11px] font-bold text-slate-400 mb-3">
                      <span className="flex items-center">
                        <Calendar className="h-3.5 w-3.5 mr-1.5 text-cyan-600" />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                      <span className="w-1 h-1 bg-slate-200 rounded-full" />
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-extrabold text-slate-900 mb-3 hover:text-cyan-600 transition-colors text-left leading-snug">
                      <Link to={`/blog/${post.slug}`} className="relative inline-block group/grid-title">
                        <span className="relative z-10">{post.title}</span>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover/grid-title:w-full transition-all duration-300" />
                      </Link>
                    </h3>
                    
                    <p className="text-slate-500 mb-6 line-clamp-3 text-left font-light text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mt-auto border-t border-slate-100 pt-4.5">
                      <div className="flex items-center space-x-2 text-xs text-slate-600 font-bold">
                        <User className="h-3.5 w-3.5 text-slate-400" />
                        <span>{post.author}</span>
                      </div>
                      
                      <Link
                        to={`/blog/${post.slug}`}
                        className="text-cyan-600 font-extrabold hover:text-cyan-700 transition-colors flex items-center space-x-1 text-xs uppercase tracking-wider group/read-link"
                      >
                        <span>Read</span>
                        <ArrowRight className="h-3.5 w-3.5 group-hover/read-link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {filteredPosts.length === 0 && !loading && (
              <div className="text-center py-24 bg-white rounded-[32px] border border-slate-200/80 shadow-[0_12px_30px_rgba(0,0,0,0.03)] mt-12">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">No articles found</h3>
                <p className="text-slate-500 font-light">Try adjusting your search query or choosing another topic category.</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Blog;