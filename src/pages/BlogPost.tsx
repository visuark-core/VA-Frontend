import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { blogPosts as localBlogPosts, BlogPostData } from '../data/blogs';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const b = localBlogPosts.find((p) => p.slug === slug || p.id === slug);
    if (b) {
      setPost(b);
      setError('');
    } else {
      setError('Article not found');
    }
    setLoading(false);
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) {
    return (
      <PageTransition>
        <div className="min-h-screen flex items-center justify-center bg-[#ffffff]">
          <div className="text-center">
            <Loader2 className="w-12 h-12 text-[#111111] animate-spin mx-auto mb-4" />
            <p className="text-slate-700 text-lg font-serif italic">Retrieving archives...</p>
          </div>
        </div>
      </PageTransition>
    );
  }

  if (error || !post) {
    return (
      <PageTransition>
        <div className="min-h-screen flex items-center justify-center bg-[#ffffff] px-4">
          <div className="text-center p-10 border-2 border-dashed border-[#111111]/30 max-w-lg">
            <h2 className="font-newspaper-serif text-3xl font-bold text-[#111111] uppercase mb-4">Dispatch Not Found</h2>
            <Link to="/blog" className="text-sm font-mono uppercase tracking-wider hover:underline text-[#111111] inline-flex items-center gap-2">
              ← Return to Archives
            </Link>
          </div>
        </div>
      </PageTransition>
    );
  }

  const paragraphs = post.content.split('\n\n');

  return (
    <PageTransition>
      <div className="bg-[#ffffff] min-h-screen pt-28 pb-20 select-text font-newspaper-serif text-[#111111]">
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=UnifrakturMaguntia&family=Special+Elite&display=swap');
            .font-newspaper-gothic { font-family: 'UnifrakturMaguntia', serif; }
            .font-newspaper-serif { font-family: 'Playfair Display', serif; }
            .font-newspaper-typewriter { font-family: 'Special Elite', monospace; }
          `}
        </style>

        {/* Progress Bar (Ink Line) */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-[#111111] z-[100] origin-left"
          style={{ scaleX }}
        />

        <article className="container mx-auto px-4 max-w-4xl">
          {/* Newspaper Page Wrapper */}
          <div className="bg-[#ffffff] border border-[#e2e8f0] shadow-[0_20px_50px_rgba(0,0,0,0.06)] rounded-sm p-6 sm:p-10 lg:p-12 relative overflow-hidden animate-fadeInUp">
            
            {/* Header / Nameplate */}
            <header className="mb-8">
              <div className="border-b border-[#111111] pb-3 mb-6 flex justify-between items-center text-xs font-mono uppercase tracking-widest text-[#555555] select-none">
                <span>Miami, FL</span>
                <span className="font-bold font-newspaper-gothic text-2xl lowercase">the visuark chronicle</span>
                <span>Dispatch</span>
              </div>

              {/* Back Link */}
              <Link to="/blog" className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#555555] hover:text-[#111111] hover:underline mb-6">
                ← Back to Archives
              </Link>

              {/* Title */}
              <h1 className="font-newspaper-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[1.03] text-[#111111] mb-6 text-left hover:underline">
                {post.title}
              </h1>

              {/* Metadata */}
              <div className="text-xs md:text-sm font-mono uppercase tracking-wider text-[#555555] border-b border-[#111111]/20 pb-3 mb-8 text-left select-none">
                BY {post.author.toUpperCase()} — {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).toUpperCase()} — {post.readTime.toUpperCase()}
              </div>
            </header>

            {/* Main Featured Image with Fig. I Caption */}
            {post.image && (
              <div className="border border-[#111111] p-3 bg-[#fafafa] shadow-sm mb-8 w-full">
                <div className="overflow-hidden aspect-video border border-[#111111]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover grayscale contrast-125 brightness-95"
                  />
                </div>
                <p className="mt-2.5 text-xs italic font-serif text-[#555555] text-center border-t border-[#111111]/10 pt-2 select-none">
                  Fig. I — Photographic visual documentation accompanying dispatch.
                </p>
              </div>
            )}

            {/* Article Body in Double Columns */}
            <div className="columns-1 md:columns-2 gap-8 text-justify font-serif text-[#222222] text-[15px] md:text-[17px] leading-relaxed border-b border-[#111111]/20 pb-10">
              {paragraphs.map((para, i) => (
                <p 
                  key={i} 
                  className={`mb-4 leading-relaxed ${
                    i === 0 
                      ? 'first-letter:text-[54px] first-letter:font-newspaper-gothic first-letter:float-left first-letter:mr-3 first-letter:-mt-1 first-letter:text-[#111111]' 
                      : 'indent-6'
                  }`}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Supporting Gallery Images */}
            {post.images.length > 1 && (
              <div className="mt-12 pt-8 border-t border-double border-[#111111]">
                <h3 className="text-xs font-mono font-bold text-[#555555] uppercase tracking-[0.2em] mb-6 text-center select-none">
                  SUPPORTING ARCHIVE VISUALS
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {post.images.slice(1).map((img: string, idx: number) => (
                    <div key={idx} className="border border-[#111111] p-2 bg-[#fafafa]">
                      <img 
                        src={img} 
                        alt={`Supporting visual ${idx + 1}`} 
                        className="w-full aspect-[4/3] object-cover grayscale contrast-110 brightness-95"
                      />
                      <p className="mt-1.5 text-[10px] italic font-serif text-center text-[#555555] select-none">
                        Fig. II.{idx + 1} — Supplementary archive plate.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Footer Navigation */}
            <footer className="mt-12 pt-6 border-t border-dashed border-[#111111]/30 flex items-center justify-between">
              <Link 
                to="/blog" 
                className="text-xs sm:text-sm font-bold uppercase tracking-wider hover:underline text-[#111111] font-mono"
              >
                ← Return to Archives
              </Link>
              <Link 
                to="/blog" 
                className="text-xs sm:text-sm font-bold uppercase tracking-wider hover:underline text-[#111111] font-mono"
              >
                Next Dispatch →
              </Link>
            </footer>

          </div>
        </article>
      </div>
    </PageTransition>
  );
};

export default BlogPost;
