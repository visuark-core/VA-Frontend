import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-cyan-400 to-blue-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 animate-pulse"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Sparkles className="h-16 w-16 text-white mx-auto mb-6 animate-bounce" />
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12">
            Let's bring your digital vision to life. Contact us today for a free consultation 
            and discover how we can help your business grow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-cyan-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Get Started Today</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            
            <Link
              to="/portfolio"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-cyan-600 transform hover:scale-105 transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;