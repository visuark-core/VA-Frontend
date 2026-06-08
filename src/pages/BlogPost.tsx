import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  Calendar, 
  User, 
  ArrowLeft, 
  Clock, 
  Loader2, 
  ChevronRight
} from 'lucide-react';
import PageTransition from '../components/PageTransition';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:4000/blogs/${slug}`);
        if (!response.ok) throw new Error('Article not found');
        const data = await response.json();
        
        if (data.success) {
          const b = data.blog;
          
          // Calculate read time based on real content
          const wordsPerMinute = 200;
          const textLength = (b.content || '').split(/\s+/).length;
          const readTime = Math.ceil(textLength / wordsPerMinute);

          setPost({
            id: b.id,
            title: b.title,
            summary: b.summary,
            author: b.author,
            date: b.publishedAt,
            image: b.images && b.images.length > 0 ? b.images[0] : null,
            readTime: `${readTime} min read`,
            content: b.content,
            images: b.images || []
          });
        }
      } catch (err) {
        console.error('Error fetching post:', err);
        setError('Article not found or server is offline.');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) {
    return (
      <PageTransition>
        <div className="min-h-screen flex items-center justify-center bg-[#030712]">
          <Loader2 className="w-8 h-8 text-cyan-500 animate-spin" />
        </div>
      </PageTransition>
    );
  }

  if (error || !post) {
    return (
      <PageTransition>
        <div className="min-h-screen flex items-center justify-center bg-[#030712] px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Post Not Found</h2>
            <Link to="/blog" className="text-cyan-500 hover:text-cyan-400 font-medium inline-flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="bg-[#030712] min-h-screen pb-20">
        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-cyan-500 z-[100] origin-left"
          style={{ scaleX }}
        />

        {/* Simple Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#030712]/80 backdrop-blur-md border-b border-white/5">
          <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link to="/blog" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </Link>
            <div className="text-gray-500 text-xs font-mono hidden sm:block uppercase tracking-widest text-right">
              {post.title.length > 30 ? post.title.substring(0, 30) + '...' : post.title}
            </div>
          </div>
        </nav>

        {/* Content Layout */}
        <article className="pt-32 px-6">
          <div className="max-w-3xl mx-auto">
            
            {/* Header Metadata */}
            <header className="mb-12">
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-gray-500 text-sm mb-6 font-medium">
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
                <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </span>
                <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-8 tracking-tight">
                {post.title}
              </h1>

              {post.summary && (
                <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light border-l-2 border-cyan-500/30 pl-6 py-2 italic">
                  {post.summary}
                </p>
              )}
            </header>

            {/* Main Featured Image */}
            {post.image && (
              <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl bg-gray-900/50 aspect-video">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Article Body */}
            <div className="prose prose-invert prose-lg max-w-none">
              <div 
                className="text-gray-300 whitespace-pre-wrap leading-relaxed text-lg font-light"
                dangerouslySetInnerHTML={{ 
                  __html: post.content
                    .replace(/\n\n/g, '</p><p>')
                    .replace(/\n/g, '<br/>')
                }}
              />
            </div>

            {/* Gallery Section - Only if more images exist */}
            {post.images.length > 1 && (
              <div className="mt-20 pt-16 border-t border-white/5">
                <h3 className="text-sm font-bold text-white uppercase tracking-[0.2em] mb-10 text-center opacity-50">
                  Visuals
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {post.images.slice(1).map((img: string, idx: number) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="rounded-xl overflow-hidden bg-gray-900 group"
                    >
                      <img 
                        src={img} 
                        alt={`Supporting visual ${idx + 1}`} 
                        className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Footer Navigation */}
            <footer className="mt-24 pt-12 border-t border-white/5 flex flex-col items-center">
              <Link 
                to="/blog" 
                className="group flex items-center gap-3 text-cyan-500 font-bold text-lg hover:text-cyan-400 transition-colors"
              >
                More Articles
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </footer>

          </div>
        </article>
      </div>
    </PageTransition>
  );
};

export default BlogPost;
