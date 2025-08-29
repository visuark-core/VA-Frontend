import React from 'react';
import { Anchor, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    { name: 'Web Development', delay: '0s' },
    { name: 'Graphic Design', delay: '0.2s' },
    { name: 'Video Editing', delay: '0.4s' },
    { name: 'UI/UX Design', delay: '0.6s' }
  ];

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden px-2">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-orange-400/10 animate-pulse"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-400/20 rounded-full animate-bounce"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-orange-400/20 rounded-full animate-bounce delay-1000"></div>
      
      <div className="container mx-auto px-2 sm:px-4 text-center relative z-10">
        {/* Logo */}
        <div className="flex flex-col items-center justify-center space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 mb-8">
          <Anchor className="h-16 w-16 text-cyan-400 transform rotate-45 animate-pulse" />
        <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-8xl font-bold text-white">
            Visu<span className="text-cyan-400">ark</span>
          </h1>
        </div>

        {/* Tagline */}
        <p className="text-base xs:text-lg md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Anchoring Your Digital Dreams to Reality
        </p>

        <p className="text-sm xs:text-base md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          We're a creative digital agency specializing in cutting-edge web solutions, 
          stunning visual designs, and immersive user experiences.
        </p>

        {/* Service Highlights */}
        <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-10 sm:mb-16">
          {services.map((service, index) => (
            <div
              key={service.name}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700 hover:border-cyan-400 transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: service.delay }}
            >
              <span className="text-cyan-400 font-semibold text-sm md:text-base">
                {service.name}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={scrollToAbout}
          className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-3 xs:px-8 xs:py-4 rounded-full font-semibold hover:from-cyan-300 hover:to-blue-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-400/25 w-full max-w-xs mx-auto"
        >
          Discover Our Story
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;