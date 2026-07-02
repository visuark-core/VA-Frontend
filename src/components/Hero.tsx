import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown, Star, Play, ArrowRight, Rocket, Users, Award, Smile } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-gray-950 flex flex-col justify-center relative overflow-hidden px-4 pt-32 pb-16 lg:py-24"
    >
      {/* 1. Subtle Dot Grid Background */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{
        backgroundImage: 'radial-gradient(#399ed2 1.5px, transparent 1.5px)',
        backgroundSize: '32px 32px'
      }}></div>

      {/* 2. Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/10 w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute top-1/3 right-1/10 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Main Grid: Columns divided on large screens */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Content Column */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">

            {/* Trusted Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black border border-gray-700 shadow-sm text-xs font-semibold text-gray-300 mb-6"
            >
              <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
              <span>Trusted by <span className="text-cyan-500 font-bold">30+</span> Businesses</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.15] tracking-tight"
            >
              We Build Digital Experiences That{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 block sm:inline">
                Drive Real Results.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-300 max-w-xl mb-8 leading-relaxed font-light"
            >
              From powerful websites to stunning visuals and smart marketing, we help brands grow, engage, and stand out in the digital world.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-12 w-full sm:w-auto"
            >
              <Link
                to="/contact"
                className="px-6 py-3.5 bg-gradient-to-r from-cyan-400 to-blue-600 text-black rounded-full font-bold shadow-md shadow-cyan-400/20 hover:shadow-cyan-400/35 hover:scale-[1.02] transition-all duration-300 flex items-center gap-2 text-sm sm:text-base justify-center flex-1 sm:flex-initial"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <button
                onClick={scrollToAbout}
                className="px-6 py-3.5 bg-black border border-gray-700 text-gray-300 rounded-full font-bold hover:bg-gray-700/10 hover:scale-[1.02] transition-all duration-300 flex items-center gap-2 text-sm sm:text-base justify-center flex-1 sm:flex-initial"
              >
                <div className="w-5 h-5 rounded-full border border-gray-400 flex items-center justify-center">
                  <Play className="w-3.5 h-3.5 fill-gray-400 text-gray-400 ml-0.5" />
                </div>
                <span>View Our Work</span>
              </button>
            </motion.div>

            {/* Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-4 w-full"
            >
              {[
                { icon: <Rocket className="w-5 h-5 text-cyan-600" />, value: '50+', label: 'Projects Delivered' },
                { icon: <Users className="w-5 h-5 text-cyan-600" />, value: '30+', label: 'Happy Clients' },
                { icon: <Award className="w-5 h-5 text-cyan-600" />, value: '4+', label: 'Years Experience' },
                { icon: <Smile className="w-5 h-5 text-cyan-600" />, value: '99%', label: 'Client Satisfaction' }
              ].map((metric, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-cyan-100/60 border border-cyan-200/50 flex items-center justify-center shrink-0">
                    {metric.icon}
                  </div>
                  <div>
                    <span className="text-lg sm:text-xl font-extrabold text-white block leading-none">{metric.value}</span>
                    <span className="text-[10px] sm:text-xs text-gray-400 font-medium block mt-1 leading-tight">{metric.label}</span>
                  </div>
                </div>
              ))}
            </motion.div>

          </div>

          {/* Right Mockup Column */}
          <div className="lg:col-span-7 relative z-10 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-2xl lg:max-w-none flex justify-center items-center lg:pl-4"
            >
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-full flex justify-center items-center"
              >
                <img
                  src="/img/hero_mockup.png"
                  alt="VA Digital Mockup"
                  className="w-full h-auto object-contain max-h-[620px] lg:scale-110 xl:scale-115 transition-transform duration-500 origin-center"
                />
              </motion.div>
            </motion.div>
          </div>

        </div>

        {/* Trusted By Brands (Moved outside the grid to take full container width) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full pt-8 border-t border-gray-700/50 flex flex-col md:flex-row md:items-center gap-6 mt-16"
        >
          <div className="text-xs text-gray-400 font-semibold tracking-wider uppercase leading-snug max-w-[160px] shrink-0 text-left">
            Trusted by amazing <span className="text-cyan-500">brands</span> worldwide
          </div>
          <div className="flex flex-wrap items-center gap-x-5 sm:gap-x-8 gap-y-4">
            <img className="h-6 sm:h-7 object-contain opacity-75 hover:opacity-100 transition-opacity duration-300 select-none pointer-events-none" src="/img/CRC GLOBAL.png" alt="CRC Global Logo" />
            <img className="h-6 sm:h-7 object-contain opacity-75 hover:opacity-100 transition-opacity duration-300 select-none pointer-events-none" src="/img/satlaa.png" alt="Satlaa Logo" />
            <img className="h-6 sm:h-7 object-contain opacity-75 hover:opacity-100 transition-opacity duration-300 select-none pointer-events-none" src="/img/MonsterDetailing.png" alt="Monster Detailing Logo" />
            <img className="h-6 sm:h-7 object-contain opacity-75 hover:opacity-100 transition-opacity duration-300 select-none pointer-events-none" src="/img/nirdesham.png" alt="Nirdesham Media Logo" />
            <img className="h-6 sm:h-7 object-contain opacity-75 hover:opacity-100 transition-opacity duration-300 select-none pointer-events-none brightness-0" src="/img/Graphic Line.png" alt="Graphic Line Logo" />
            <img className="h-6 sm:h-7 object-contain opacity-75 hover:opacity-100 transition-opacity duration-300 select-none pointer-events-none" src="/img/AND Offset.png" alt="AND Offset Logo" />
            <img className="h-7 sm:h-8 object-contain opacity-75 hover:opacity-100 transition-opacity duration-300 select-none pointer-events-none" src="/img/TechfrigateLogo.png" alt="Techfrigate Logo" />
          </div>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <ChevronDown className="h-8 w-8 text-gray-400/50" />
      </div>
    </section>
  );
};

export default Hero;