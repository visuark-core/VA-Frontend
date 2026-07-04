import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Loader2 } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { blogPosts as localBlogPosts, BlogPostData } from '../data/blogs';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [blogPosts, setBlogPosts] = useState<BlogPostData[]>([]);
  const [loading, setLoading] = useState(true);

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
        <div className="pt-20 min-h-screen flex items-center justify-center bg-[#ffffff]">
          <div className="text-center">
            <Loader2 className="w-12 h-12 text-[#111111] animate-spin mx-auto mb-4" />
            <p className="text-slate-700 text-lg font-serif italic">Typesetting dispatch...</p>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="pt-20 lg:pt-24 pb-8 min-h-screen lg:h-screen lg:overflow-hidden bg-[#ffffff] flex items-center justify-center font-newspaper-serif select-text">
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=UnifrakturMaguntia&family=Special+Elite&display=swap');
            .font-newspaper-gothic { font-family: 'UnifrakturMaguntia', serif; }
            .font-newspaper-serif { font-family: 'Playfair Display', serif; }
            .font-newspaper-typewriter { font-family: 'Special Elite', monospace; }
          `}
        </style>

        <div className="container mx-auto px-4 max-w-[1550px] lg:h-[calc(100vh-115px)]">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-stretch lg:h-full">
            
            {/* Left/Main Column: The Opened Newspaper (col-span-9) */}
            <div className="xl:col-span-9 bg-[#ffffff] border border-[#e2e8f0] shadow-[0_20px_50px_rgba(0,0,0,0.06)] rounded-sm grid grid-cols-1 lg:grid-cols-2 relative overflow-hidden lg:h-full animate-fadeInUp">
              
              {/* Center Fold Crease Overlay */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[4px] bg-gradient-to-r from-black/[0.02] via-black/[0.06] to-black/[0.02] pointer-events-none z-20 transform -translate-x-1/2"></div>
              
              {/* Left Page (Page 1) */}
              <div className="p-6 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-[#e2e8f0] relative flex flex-col justify-between lg:h-full lg:overflow-y-auto scrollbar-none">
                <div>
                  {/* Left Page Header */}
                  <div className="border-b border-[#111111] pb-3 mb-6 flex justify-between items-center text-xs font-mono uppercase tracking-widest text-[#555555] select-none">
                    <span>Miami, FL</span>
                    <span className="font-bold font-newspaper-gothic text-2xl lowercase">the visuark chronicle</span>
                    <span>Page 1</span>
                  </div>

                  {/* Headline & Featured Article */}
                  {featuredPost ? (
                    <>
                      <h2 className="font-newspaper-serif text-4xl sm:text-5xl md:text-[46px] font-black uppercase tracking-tight leading-[1.03] text-[#111111] mb-6 text-left hover:underline">
                        <Link to={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                      </h2>

                      {/* Main Grayscale Graphic with Caption */}
                      <div className="border border-[#111111] p-3 bg-[#fafafa] shadow-sm mb-6 w-full">
                        <div className="overflow-hidden aspect-[16/10] border border-[#111111]">
                          <img
                            src={featuredPost.image}
                            alt={featuredPost.title}
                            className="w-full h-full object-cover grayscale contrast-125 brightness-95"
                          />
                        </div>
                        <p className="mt-2 text-xs italic font-serif text-[#555555] text-center border-t border-[#111111]/10 pt-2 select-none">
                          Fig. I — Photographic rendering of generative intelligence, Miami, FL.
                        </p>
                      </div>

                      {/* Excerpt with drop cap and metadata */}
                      <div className="border border-[#111111]/20 p-5 bg-[#fafafa] text-justify">
                        <p className="font-serif text-[15px] md:text-[16px] leading-relaxed text-[#222222] first-letter:text-5xl first-letter:font-newspaper-gothic first-letter:float-left first-letter:mr-2.5 first-letter:-mt-1 first-letter:text-[#111111]">
                          {featuredPost.excerpt}
                        </p>
                        <div className="mt-5 pt-4 border-t border-dashed border-[#111111]/20 flex items-center justify-between">
                          <span className="text-xs font-mono uppercase text-[#555555]">By {featuredPost.author}</span>
                          <Link
                            to={`/blog/${featuredPost.slug}`}
                            className="text-sm font-bold uppercase tracking-wider hover:underline text-[#111111] flex items-center gap-1.5"
                          >
                            <span>Read Dispatch</span>
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-20 border border-dashed border-[#111111]/20">
                      <p className="italic text-base text-gray-500">No Featured Article Selected</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Page (Page 2) */}
              <div className="p-6 sm:p-8 lg:p-10 relative flex flex-col justify-between lg:h-full lg:overflow-y-auto scrollbar-none">
                <div>
                  {/* Right Page Header */}
                  <div className="border-b border-[#111111] pb-3 mb-4 flex justify-between items-center text-xs font-mono uppercase tracking-widest text-[#555555] select-none">
                    <span>Saturday, July 4, 2026</span>
                    <span className="font-bold">EDITORIAL & ARCHIVES</span>
                    <span>Page 2</span>
                  </div>

                  {/* Micro Ticker Line */}
                  <div className="py-2 border-b border-[#111111] text-center overflow-hidden whitespace-nowrap text-xs font-mono tracking-widest uppercase text-[#555555] mb-4 select-none">
                    <div className="inline-block animate-marquee">
                      ★ GLOW & CO OPENING NEAR YOU ★ BUILD THE FUTURE IN 2026 ★ EXPERT DESIGN & CODE ★ LATEST RELEASES ★
                    </div>
                  </div>

                  {/* Filter and Search Archives (Minimal Pipe Separated Index) */}
                  <div className="border-b border-[#111111] pb-4 mb-6">
                    <div className="flex flex-col gap-3">
                      {/* Search */}
                      <div className="relative">
                        <span className="absolute left-0 top-1/2 -translate-y-1/2 text-xs font-newspaper-typewriter text-[#555555] uppercase select-none">Search:</span>
                        <input
                          type="text"
                          placeholder="..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="w-full pl-16 pr-2 py-1 bg-transparent border-b border-[#111111]/10 focus:border-[#111111] focus:outline-none font-newspaper-typewriter text-xs text-[#111111] transition-all"
                        />
                      </div>
                      
                      {/* Directory Index Links */}
                      <div className="flex flex-wrap gap-x-3 gap-y-1 items-center text-xs font-mono uppercase tracking-wider text-[#555555]">
                        <span className="font-bold text-[#111111] select-none">Sections:</span>
                        {categories.map((category, idx) => (
                          <span key={category} className="flex items-center gap-3">
                            {idx > 0 && <span className="text-[#111111]/20 select-none">|</span>}
                            <button
                              onClick={() => setSelectedCategory(category)}
                              className={`hover:underline transition-all ${
                                selectedCategory === category
                                  ? 'underline font-bold text-[#111111]'
                                  : 'text-[#666666]'
                              }`}
                            >
                              {category === 'all' ? 'All' : category.split(' ')[0]}
                            </button>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Secondary News Columns list */}
                  <div className="space-y-8">
                    {regularPosts.map((post) => (
                      <article key={post.id} className="border-b border-[#111111]/10 pb-6 last:border-b-0 last:pb-0">
                        <div className="grid grid-cols-12 gap-4 items-start">
                          <div className="col-span-8">
                            <h3 className="font-newspaper-serif text-[19px] font-bold uppercase text-[#111111] leading-tight mb-2 hover:underline text-left">
                              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                            </h3>
                            <p className="font-serif text-sm text-[#333333] leading-relaxed text-justify mb-3">
                              {post.excerpt}
                            </p>
                            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-wider text-[#666666]">
                              <span>By {post.author}</span>
                              <span>•</span>
                              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                            </div>
                          </div>
                          <div className="col-span-4">
                            <div className="border border-[#111111] p-1.5 bg-[#fafafa] aspect-[4/3] overflow-hidden">
                              <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover grayscale contrast-110 brightness-95"
                              />
                            </div>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>

                  {filteredPosts.length === 0 && !loading && (
                    <div className="text-center py-16 border border-dashed border-[#111111]/20 bg-[#fafafa] rounded-sm">
                      <h3 className="font-newspaper-serif text-xl font-bold text-[#111111] uppercase select-none">No Dispatch Found</h3>
                      <p className="font-serif text-sm text-[#555555] italic">Try adjusting search parameters.</p>
                    </div>
                  )}

                  {/* Classified Ad Banner */}
                  {filteredPosts.length > 0 && (
                    <div className="mt-8 p-5 border-2 border-double border-[#111111] bg-[#fafafa] text-center relative overflow-hidden shadow-sm">
                      <div className="absolute top-1 left-3 text-[8px] font-mono tracking-widest text-[#777777] select-none">ADVERTISEMENT</div>
                      <h4 className="font-newspaper-serif text-sm font-black uppercase text-[#111111] mb-1">
                        Partner with Visuark Studio
                      </h4>
                      <p className="font-serif text-xs text-[#444444] mb-3 italic max-w-sm mx-auto">
                        "World-class software engineering, custom user interfaces, and brand systems."
                      </p>
                      <Link
                        to="/contact"
                        className="inline-block px-4 py-1.5 bg-[#111111] text-[#ffffff] font-mono text-[11px] uppercase tracking-wider font-bold hover:bg-[#333333] transition-colors"
                      >
                        Consult Editors →
                      </Link>
                    </div>
                  )}
                </div>
              </div>

            </div>

            {/* Right/Secondary Column: Gazette Classifieds & Notices (col-span-3) */}
            <div className="xl:col-span-3 bg-[#ffffff] border border-[#e2e8f0] shadow-[0_20px_45px_rgba(0,0,0,0.05)] p-6 rounded-sm relative flex flex-col justify-between lg:h-full lg:overflow-y-auto scrollbar-none animate-fadeInUp">
              <div>
                {/* Header */}
                <div className="border-b-2 border-double border-[#111111] pb-2.5 mb-5 text-center select-none">
                  <h3 className="font-newspaper-serif text-base font-black uppercase tracking-wider text-[#111111]">
                    Gazette Classifieds
                  </h3>
                  <span className="text-[10px] font-mono text-[#555555] tracking-wider">PUBLIC NOTICES & OPPORTUNITIES</span>
                </div>

                {/* Notices Listings */}
                <div className="space-y-5">
                  <div className="border border-dashed border-[#111111]/30 p-4 bg-[#fafafa] text-left text-sm">
                    <span className="font-mono text-[9px] font-bold text-slate-500 block mb-1">SECTION I: HELP WANTED</span>
                    <h4 className="font-bold uppercase text-[13px] mb-1">React Developers</h4>
                    <p className="font-serif leading-relaxed text-[#333333]">
                      Seeking skilled engineers in React, TypeScript, and modern styling architectures. Inquire directly inside Visuark Engineering.
                    </p>
                  </div>

                  <div className="border border-dashed border-[#111111]/30 p-4 bg-[#fafafa] text-left text-sm">
                    <span className="font-mono text-[9px] font-bold text-slate-500 block mb-1">SECTION II: SERVICES</span>
                    <h4 className="font-bold uppercase text-[13px] mb-1">Digital Design Systems</h4>
                    <p className="font-serif leading-relaxed text-[#333333]">
                      Custom high-fidelity interfaces, brand development kits, cinematic visual design, and API checkout services.
                    </p>
                  </div>

                  <div className="border border-dashed border-[#111111]/30 p-4 bg-[#fafafa] text-left text-sm">
                    <span className="font-mono text-[9px] font-bold text-slate-500 block mb-1">SECTION III: LATEST NEWS</span>
                    <h4 className="font-bold uppercase text-[13px] mb-1">Visuark 2.0 Architecture</h4>
                    <p className="font-serif leading-relaxed text-[#333333]">
                      Visuark's latest digital layout engine is fully online, optimizing static content packaging and client load speeds.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Copyright */}
              <div className="mt-8 pt-4 border-t border-double border-[#111111] text-center select-none">
                <p className="font-newspaper-typewriter text-xs text-[#666666]">
                  Visuark Gazette Archives © 2026. All rights reserved.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Blog;