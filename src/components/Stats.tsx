import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Lightbulb, BookOpen, Bell, Briefcase, Files } from 'lucide-react';

const Stats = () => {
  const items = [
    {
      icon: <Layers className="h-10 w-10 text-cyan-500 stroke-[1.5]" />,
      title: 'High-Impact Development',
      description: 'Scalable, high-performance web development utilizing React, Next.js, and modern SEO-friendly frameworks to drive business growth.'
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-cyan-500 stroke-[1.5]" />,
      title: 'Cinematic Media Production',
      description: 'Professional, cinematic video editing, color grading, and commercial video production that brings your brand story to life.'
    },
    {
      icon: <BookOpen className="h-10 w-10 text-cyan-500 stroke-[1.5]" />,
      title: 'Strategic Brand Identity',
      description: 'Cohesive brand strategy, logo design, corporate kits, and graphic design that establishes market authority and client trust.'
    },
    {
      icon: <Bell className="h-10 w-10 text-cyan-500 stroke-[1.5]" />,
      title: 'User-Centered Design',
      description: 'UI/UX design featuring user research, clickable high-fidelity wireframes, and intuitive interfaces that boost customer engagement.'
    },
    {
      icon: <Briefcase className="h-10 w-10 text-cyan-500 stroke-[1.5]" />,
      title: 'Global Technical Solutions',
      description: 'Advanced tech infrastructure integration, including international secure payment gateways, e-commerce checkout systems, and custom APIs.'
    },
    {
      icon: <Files className="h-10 w-10 text-cyan-500 stroke-[1.5]" />,
      title: 'Optimized Digital Content',
      description: 'Optimized delivery of files, digital assets, documents, and media resources designed for seamless cross-platform sharing.'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-gray-800 relative overflow-hidden border-t border-gray-700">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Our Core Objectives
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-base sm:text-lg text-gray-300 font-medium"
          >
            Driving innovation, premium design, and scalable technology for your brand.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 h-[1.5px] w-16 bg-cyan-500 mx-auto"
          />
        </div>

        {/* 3-Column Grid with Inside Borders */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-gray-700/40"
        >
          {items.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-5 group bg-gray-800 p-8 sm:p-10 transition-colors duration-300 hover:bg-gray-900/10"
            >
              {/* Left Outline Icon */}
              <div className="shrink-0 text-[#f05a3f] transition-transform duration-300 group-hover:scale-105">
                {item.icon}
              </div>
              
              {/* Right content */}
              <div>
                <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-[14.5px] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Stats;