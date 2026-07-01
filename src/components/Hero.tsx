import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Code, Palette, Video, Smartphone } from 'lucide-react';

const AnchorIcon = () => (
  <svg className="w-16 h-16 text-[#399ed2]/10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="5" r="2" />
    <path d="M12 7v10M8 12h8" />
    <path d="M12 17c0 3-3 4-6 4M12 17c0 3 3 4 6 4M5 18l1-1M19 18l-1-1" />
  </svg>
);

const HelmIcon = () => (
  <svg className="w-16 h-16 text-[#0284c7]/8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v20M2 12h20M5 5l14 14M5 19l14-14" />
    <circle cx="12" cy="12" r="8" />
  </svg>
);

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [wordsIndex, setWordsIndex] = useState(0);

  const words = ["Digital Dreams", "Creative Visions", "Brand Identity", "Web Solutions"];

  useEffect(() => {
    const interval = setInterval(() => {
      setWordsIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    { 
      name: 'Web Development', 
      icon: <Code className="h-6 w-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />, 
      delay: 0 
    },
    { 
      name: 'Graphic Design', 
      icon: <Palette className="h-6 w-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />, 
      delay: 0.15 
    },
    { 
      name: 'Video Editing', 
      icon: <Video className="h-6 w-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />, 
      delay: 0.3 
    },
    { 
      name: 'UI/UX Design', 
      icon: <Smartphone className="h-6 w-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />, 
      delay: 0.45 
    }
  ];

  const floatingShapes = [
    { size: 'w-12 h-12', color: 'bg-cyan-400/10', left: '10%', top: '20%', duration: 15, delay: 0 },
    { size: 'w-20 h-20', color: 'bg-blue-500/5', right: '15%', top: '25%', duration: 22, delay: 2 },
    { size: 'w-8 h-8', color: 'bg-cyan-500/10', left: '22%', bottom: '30%', duration: 12, delay: 4 },
    { size: 'w-16 h-16', color: 'bg-[#399ed2]/8', right: '12%', bottom: '20%', duration: 18, delay: 1 }
  ];

  const techStack = [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'Figma', 
    'Photoshop', 'After Effects', 'Premiere Pro', 'Tailwind CSS',
    'WebGL', 'UI/UX Design', 'SEO Optimization'
  ];

  return (
    <section 
      id="home" 
      onMouseMove={handleMouseMove}
      className="min-h-screen bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black via-gray-950 to-gray-900 flex flex-col justify-center items-center relative overflow-hidden px-2 pt-24 pb-20"
    >
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 25s linear infinite;
        }
      `}</style>
      
      {/* 1. Subtle Dot Grid Background */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none" style={{
        backgroundImage: 'radial-gradient(#399ed2 1.5px, transparent 1.5px)',
        backgroundSize: '32px 32px'
      }}></div>

      {/* 2. Interactive Mouse Backlight Glow */}
      <div 
        className="absolute w-[350px] h-[350px] bg-[#399ed2]/5 rounded-full blur-[90px] pointer-events-none transition-all duration-200 ease-out z-0 hidden md:block"
        style={{
          left: `${mousePos.x - 175}px`,
          top: `${mousePos.y - 175}px`,
        }}
      />

      {/* 3. Background Glow Animation */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#399ed2]/10 via-transparent to-[#0284c7]/10 opacity-30 animate-pulse pointer-events-none"></div>
      
      {/* 4. Glowing Soft Background Blobs */}
      <div className="absolute top-1/4 left-5 sm:left-10 w-64 h-64 sm:w-80 sm:h-80 bg-[#399ed2]/6 rounded-full blur-[90px] animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-5 sm:right-10 w-80 h-80 sm:w-96 sm:h-96 bg-[#0284c7]/6 rounded-full blur-[110px] animate-pulse delay-1000 pointer-events-none"></div>
      
      {/* 5. Floating Geometric Elements (Framer Motion) */}
      {floatingShapes.map((shape, idx) => (
        <motion.div
          key={idx}
          className={`absolute rounded-full blur-[2px] ${shape.size} ${shape.color} pointer-events-none hidden sm:block`}
          style={{
            left: shape.left,
            top: shape.top,
            right: shape.right,
            bottom: shape.bottom
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: shape.delay
          }}
        />
      ))}

      {/* 6. Drifting Theme SVGs */}
      <motion.div 
        className="absolute left-[8%] bottom-[35%] pointer-events-none hidden md:block"
        animate={{ y: [0, -20, 0], rotate: [0, 12, -12, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      >
        <AnchorIcon />
      </motion.div>

      <motion.div 
        className="absolute right-[8%] top-[30%] pointer-events-none hidden md:block"
        animate={{ y: [0, 20, 0], rotate: [0, -15, 15, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      >
        <HelmIcon />
      </motion.div>

      {/* Main Content Area */}
      <div className="container mx-auto px-2 sm:px-4 text-center relative z-10 flex-grow flex flex-col justify-center">
        
        {/* Interactive Logo Wrapper */}
        <motion.div 
          className="flex justify-center mb-6 relative group cursor-pointer"
          whileHover={{ scale: 1.03, y: -4 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          {/* Glowing Aura behind logo on hover */}
          <div className="absolute inset-0 bg-[#399ed2]/15 rounded-full filter blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-75 pointer-events-none"></div>
          <img 
            src="/img/logo.png" 
            alt="Visuark Logo" 
            className="h-24 xs:h-32 sm:h-40 md:h-48 lg:h-56 object-contain relative z-10"
          />
        </motion.div>

        {/* Tagline with cycling text */}
        <h2 className="text-xl xs:text-2xl md:text-4xl text-gray-300 mb-6 max-w-4xl mx-auto font-semibold tracking-wide flex flex-wrap items-center justify-center gap-x-2">
          <span>Anchoring Your</span>
          <span className="text-cyan-400 relative inline-flex justify-center items-center min-w-[160px] xs:min-w-[200px] md:min-w-[280px]">
            <AnimatePresence mode="wait">
              <motion.span
                key={wordsIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="absolute"
              >
                {words[wordsIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
          <span>to Reality</span>
        </h2>

        <p className="text-sm xs:text-base md:text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          We're a creative digital agency specializing in cutting-edge web solutions, 
          stunning visual designs, and immersive user experiences.
        </p>

        {/* Interactive Service Highlights */}
        <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12 max-w-5xl mx-auto w-full">
          {services.map((service) => (
            <motion.div
              key={service.name}
              className="bg-gray-800/80 backdrop-blur-md rounded-2xl p-5 border border-gray-700/80 hover:border-cyan-400/50 hover:bg-gray-800 hover:shadow-[0_20px_40px_rgba(57,158,210,0.12)] transition-all duration-500 flex flex-col items-center justify-center space-y-3 cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: service.delay }}
              whileHover={{ y: -6 }}
            >
              <div className="p-3 bg-cyan-400/10 rounded-xl group-hover:bg-cyan-400/20 transition-colors duration-300">
                {service.icon}
              </div>
              <span className="text-gray-300 font-bold text-sm sm:text-base tracking-wide group-hover:text-cyan-400 transition-colors duration-300">
                {service.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={scrollToAbout}
          className="bg-gradient-to-r from-cyan-400 to-[#0284c7] text-black px-8 py-4 rounded-full font-bold hover:shadow-[0_10px_25px_rgba(57,158,210,0.4)] transform hover:scale-105 transition-all duration-300 w-full max-w-xs mx-auto block"
        >
          Discover Our Story
        </button>

        {/* Horizontal Scrolling Tech Ticker */}
        <div className="w-full max-w-5xl mx-auto overflow-hidden relative mt-12 sm:mt-16 pointer-events-none select-none opacity-30">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-950 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-950 to-transparent z-10"></div>
          <div className="flex space-x-12 whitespace-nowrap animate-marquee">
            {[...techStack, ...techStack].map((tech, idx) => (
              <span key={idx} className="text-gray-400 font-semibold text-xs tracking-widest uppercase">
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* 7. Animated Ocean Waves Graphics */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.08] leading-[0]">
        <motion.svg 
          className="w-[200%] h-[70px] sm:h-[90px]" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
        >
          <path d="M0,50 C150,90 300,30 450,50 C600,70 750,30 900,50 C1050,70 1200,30 1350,50 C1500,70 1650,30 1800,50 L1800,120 L0,120 Z" fill="url(#wave-grad-1)" />
          <defs>
            <linearGradient id="wave-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#399ed2" />
              <stop offset="50%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#399ed2" />
            </linearGradient>
          </defs>
        </motion.svg>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.05] leading-[0] transform translate-y-2">
        <motion.svg 
          className="w-[200%] h-[80px] sm:h-[100px]" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          animate={{ x: ['-50%', '0%'] }}
          transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
        >
          <path d="M0,60 C200,30 400,90 600,60 C800,30 1000,90 1200,60 C1400,30 1600,90 1800,60 L1800,120 L0,120 Z" fill="url(#wave-grad-2)" />
          <defs>
            <linearGradient id="wave-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="50%" stopColor="#399ed2" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
          </defs>
        </motion.svg>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <ChevronDown className="h-8 w-8 text-gray-400/70" />
      </div>
    </section>
  );
};

export default Hero;