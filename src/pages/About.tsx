import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Lock, Sparkles, Globe } from 'lucide-react';
import PageTransition from '../components/PageTransition';

// Reusable Notification Success Card (overlapping the images like Yousign page)
const NotificationCard = ({ title, subtitle, info, align = 'left' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`absolute z-20 shadow-xl bg-gray-800 border-2 border-dashed border-cyan-400/50 rounded-2xl p-4 max-w-[210px] transition-transform duration-300 hover:scale-105 ${
        align === 'left' 
          ? '-left-4 md:-left-8 top-10' 
          : '-right-4 md:-right-8 bottom-10'
      }`}
    >
      <div className="flex items-center gap-2 mb-1.5">
        <div className="w-5 h-5 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600">
          <Check className="w-3 h-3 stroke-[3]" />
        </div>
        <span className="text-[9px] font-mono font-bold tracking-wider text-cyan-500 uppercase">Success</span>
      </div>
      <h4 className="text-xs font-bold text-white mb-0.5 leading-snug">{title}</h4>
      <p className="text-[9px] text-gray-400 mb-1.5 leading-normal">{subtitle}</p>
      <span className="text-[9px] font-bold text-cyan-600 bg-cyan-50 px-2 py-0.5 rounded block w-fit">
        {info}
      </span>
    </motion.div>
  );
};

// Pipeline checklist element (Left-side mockup in Section 3)
const PipelineChecklist = () => {
  const steps = [
    { name: 'UI/UX Prototype Approval', status: 'approved' },
    { name: 'React Development & Clean Code', status: 'approved' },
    { name: 'API Integrations & Payment Gateways', status: 'active' },
    { name: 'SEO Optimization & Core Web Vitals', status: 'pending' },
  ];
  return (
    <div className="w-full max-w-[270px] bg-gray-800 border border-gray-700/30 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex items-center gap-2 mb-4 border-b border-gray-700/20 pb-3">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        <span className="text-[9px] font-mono text-gray-400 ml-auto uppercase tracking-wider">Pipeline</span>
      </div>
      <div className="space-y-3.5">
        {steps.map((step, idx) => (
          <div key={idx} className="flex items-start gap-2.5">
            {step.status === 'approved' && (
              <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </div>
            )}
            {step.status === 'active' && (
              <div className="w-4 h-4 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 shrink-0 mt-0.5 relative">
                <span className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-75" />
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 relative z-10" />
              </div>
            )}
            {step.status === 'pending' && (
              <div className="w-4 h-4 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 shrink-0 mt-0.5 border border-gray-700/50">
                <div className="w-1 h-1 rounded-full bg-gray-400" />
              </div>
            )}
            <span className={`text-[11px] font-bold leading-normal ${step.status === 'pending' ? 'text-gray-400 font-medium' : 'text-white'}`}>
              {step.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Phone Mockup with Animated Signature path (Right-side mockup in Section 3)
const PhoneMockup = () => {
  return (
    <div className="w-full max-w-[210px] h-[320px] bg-white border-[10px] border-white rounded-[32px] shadow-2xl flex flex-col overflow-hidden relative">
      {/* Phone Notch/Speaker */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-4 bg-white rounded-b-xl z-20" />
      
      {/* Phone Screen Container */}
      <div className="flex-1 bg-gray-950 flex flex-col p-4 pt-6 justify-between text-left">
        {/* Status Bar */}
        <div className="flex justify-between items-center text-[8px] font-mono text-gray-400 mb-1">
          <span>09:41</span>
          <div className="flex items-center gap-1">
            <span>5G</span>
            <div className="w-2.5 h-1.5 border border-gray-400 rounded-sm" />
          </div>
        </div>

        {/* Screen Content */}
        <div className="flex-1 flex flex-col justify-center">
          <span className="text-[8px] uppercase font-mono tracking-wider text-cyan-400 mb-0.5">Deployment</span>
          <h5 className="text-[11px] font-bold text-white mb-2 leading-tight">Confirm Deliverables</h5>
          
          {/* Interactive Signature Box */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-2 mb-3 relative overflow-hidden flex flex-col items-center justify-center">
            <span className="absolute top-1.5 left-2 text-[7px] font-mono text-gray-500 uppercase">Draw Sign</span>
            <svg className="w-full h-12" viewBox="0 0 200 100">
              <motion.path
                d="M 25 60 C 45 30, 60 90, 80 60 C 100 30, 110 80, 130 55 C 150 30, 170 90, 185 45"
                fill="transparent"
                strokeWidth="5"
                stroke="#399ed2" 
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
              />
            </svg>
            <div className="w-full h-[1px] border-b border-dashed border-gray-800 absolute bottom-2.5" />
          </div>

          <button className="w-full py-1.5 bg-gradient-to-r from-cyan-400 to-cyan-500 text-black text-[10px] font-bold rounded-lg shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-center">
            Approve & Deploy
          </button>
        </div>

        {/* Home Indicator */}
        <div className="w-14 h-0.5 bg-gray-800 rounded-full mx-auto mt-1" />
      </div>
    </div>
  );
};

const About = () => {
  return (
    <PageTransition>
      {/* Main Page Wrapper */}
      <div className="pt-20 bg-gray-950 relative min-h-screen overflow-hidden">
        
        {/* Wavy SVG Background Flow (Matches the Yousign path line layout but styled with our cyan/blue brand colors) */}
        <div className="absolute inset-0 pointer-events-none z-0 hidden lg:block">
          <svg className="w-full h-full" viewBox="0 0 1440 2800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <motion.path
              d="M -50 220 C 350 180, 250 680, 750 480 C 1250 280, 1150 920, 800 980 C 450 1040, 100 1120, 150 1450 C 200 1780, 800 1650, 950 1900 C 1100 2150, 1000 2420, 700 2520"
              stroke="url(#line-gradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="10 15"
              animate={{ strokeDashoffset: [0, -120] }}
              transition={{ repeat: Infinity, duration: 9, ease: "linear" }}
              className="opacity-25"
            />
            <defs>
              <linearGradient id="line-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#399ed2" />
                <stop offset="35%" stopColor="#0284c7" />
                <stop offset="70%" stopColor="#0369a1" />
                <stop offset="100%" stopColor="#075985" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Ambient Glows */}
        <div className="absolute top-1/10 left-[-10%] w-[350px] h-[350px] bg-cyan-400/5 rounded-full blur-[90px] pointer-events-none z-0" />
        <div className="absolute top-1/2 right-[-10%] w-[450px] h-[450px] bg-blue-400/5 rounded-full blur-[100px] pointer-events-none z-0" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10 max-w-7xl">
          
          {/* SECTION 1: HERO HEADER (Two columns - text left, image right) */}
          <section className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-24 md:mb-32">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 text-left"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-cyan-100/80 text-cyan-600 text-xs font-mono font-bold tracking-widest uppercase rounded-full shadow-sm mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>WHO WE ARE</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.15] tracking-tight">
                We're designing a new way to build{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 block sm:inline">
                  digital experiences.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-light mb-8 max-w-xl">
                Our custom design, development, and branding solutions help connect businesses with their clients, companies with their audience, and accelerate growth in the modern digital landscape.
              </p>
            </motion.div>

            {/* Right Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 flex justify-center relative"
            >
              <div className="relative w-full max-w-md aspect-[4/5] md:aspect-square lg:aspect-[4/5]">
                {/* Colored Offset Background Card (Replaces Yousign coral with our cyan accent) */}
                <div className="absolute bottom-[-16px] right-[-16px] w-[95%] h-[95%] bg-cyan-100/60 rounded-3xl z-[-1]" />
                
                {/* Main image wrapper */}
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-gray-700/30">
                  <img
                    src="/img/about_hero_man.png"
                    alt="Visuark client looking at smartphone"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Overlapping Notification Success Badge */}
                <NotificationCard
                  title="Congratulations! Project Live"
                  subtitle="Vagwiin E-Commerce Site"
                  info="Performance Score: 99%"
                  align="left"
                />
              </div>
            </motion.div>
          </section>

          {/* SECTION 2: LEFT IMAGE, RIGHT TEXT */}
          <section className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-24 md:mb-32">
            {/* Left Image (Order 2 on mobile, Order 1 on desktop) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 flex justify-center order-2 lg:order-1 relative"
            >
              <div className="relative w-full max-w-md aspect-[4/5] md:aspect-square lg:aspect-[4/5]">
                {/* Colored Offset Background Card (Pastel blue/cyan) */}
                <div className="absolute top-[-16px] left-[-16px] w-[95%] h-[95%] bg-cyan-200/40 rounded-3xl z-[-1]" />
                
                {/* Image wrapper */}
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-gray-700/30">
                  <img
                    src="/img/about_woman_phone.png"
                    alt="Visuark team member reviewing application design"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Overlapping Notification Badge */}
                <NotificationCard
                  title="Congratulations! Audit Complete"
                  subtitle="Satlaa Brand Strategy"
                  info="Engagement ROI: +180%"
                  align="right"
                />
              </div>
            </motion.div>

            {/* Right Content (Order 1 on mobile, Order 2 on desktop) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 text-left order-1 lg:order-2 lg:pl-8"
            >
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 leading-tight">
                Making it easy to say <span className="text-cyan-500 font-black">"yes"</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-light mb-6">
                Dozens of forward-thinking brands choose Visuark to design and launch their digital presence. Our specialized workflows streamline the design-to-development pipeline, secure your online assets, and offer a premium experience to your audience, clients, and partners.
              </p>
              <div className="space-y-4 text-gray-400 font-light text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 shrink-0 mt-1">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>High-performance React/Next.js architectures designed to scale as your business grows.</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 shrink-0 mt-1">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>Aesthetic, brand-tailored interfaces crafted by award-winning visual designers.</span>
                </div>
              </div>
            </motion.div>
          </section>

          {/* SECTION 3: RIGHT IMAGE (MOCKUPS), LEFT TEXT */}
          <section className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-24 md:mb-32">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 text-left lg:pr-8"
            >
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 leading-tight">
                Solutions based on <span className="text-cyan-500">speed</span> and <span className="text-cyan-500">security</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-light mb-6">
                We're committed to delivering lightning-fast, premium digital platforms with secure code and responsive design at their core. By utilizing modern web standards, we optimize load speeds and SEO rankings so you can focus on building user trust and scaling your operations.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-4 bg-gray-800 border border-gray-700/20 rounded-2xl">
                  <Lock className="w-6 h-6 text-cyan-500 mb-2" />
                  <h4 className="text-sm font-bold text-white mb-1">Secure by Design</h4>
                  <p className="text-xs text-gray-400 font-light">End-to-end data encryption and secure checkout gateways integrated natively.</p>
                </div>
                <div className="p-4 bg-gray-800 border border-gray-700/20 rounded-2xl">
                  <Globe className="w-6 h-6 text-cyan-500 mb-2" />
                  <h4 className="text-sm font-bold text-white mb-1">Global Delivery</h4>
                  <p className="text-xs text-gray-400 font-light">Cloudflare/Vercel edge networks ensure sub-second latency worldwide.</p>
                </div>
              </div>
            </motion.div>

            {/* Right Interactive Mockups Device Block (Matches Yousign style phone mockup layout) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 flex justify-center items-center relative py-8"
            >
              <div className="relative w-full max-w-md h-[400px] flex items-center justify-center">
                {/* Soft Light Blue Backdrop shape */}
                <div className="absolute inset-4 bg-cyan-100/50 rounded-3xl z-[-1]" />
                
                {/* Left/Background Mockup: The Pipeline checklist */}
                <div className="absolute left-2 md:left-6 top-6 z-10">
                  <PipelineChecklist />
                </div>
                
                {/* Right/Foreground Mockup: The smartphone showing signature */}
                <div className="absolute right-2 md:right-6 bottom-4 z-20">
                  <PhoneMockup />
                </div>
              </div>
            </motion.div>
          </section>

          {/* SECTION 4: LEFT IMAGE (TEAM), RIGHT TEXT */}
          <section className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16">
            {/* Left Image (Team Group Photo) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 flex justify-center relative"
            >
              <div className="relative w-full max-w-md aspect-[4/3] sm:aspect-[1.4] md:aspect-[1.5] lg:aspect-[4/3]">
                {/* Background Card blocks (Slate navy and Cyan blue layers like Yousign) */}
                <div className="absolute bottom-[-16px] left-[-16px] w-[50%] h-[75%] bg-white rounded-3xl z-[-1]" /> {/* Maps to dark slate navy */}
                <div className="absolute top-[-16px] right-[-16px] w-[50%] h-[50%] bg-cyan-300 rounded-3xl z-[-2]" />
                
                {/* Team image wrapper */}
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-gray-700/30 bg-gray-900">
                  <img
                    src="/img/Visuark Team.png"
                    alt="Visuark Founders and leadership team"
                    className="w-full h-full object-cover grayscale-[25%] hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 text-left lg:pl-8"
            >
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 leading-tight">
                Our team is always <span className="text-cyan-500">growing</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-light mb-6">
                Visuark was built with a vision to merge top-tier software engineering with premium, aesthetic brand design. Headquartered with a distributed group of creative minds, we design and build platforms for businesses worldwide. Our team is constantly expanding, and we are looking for like-minded people.
              </p>
              
              <div className="mt-8 border-t border-gray-700/25 pt-6 text-left">
                <span className="text-xs font-mono font-bold tracking-widest text-cyan-600 uppercase block mb-3">Come work with us</span>
                <Link
                  to="/careers"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-600 text-black font-bold rounded-full shadow-md shadow-cyan-400/20 hover:shadow-cyan-400/35 hover:scale-[1.02] transition-all duration-300"
                >
                  <span>Explore current openings</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </section>

        </div>
      </div>
    </PageTransition>
  );
};

export default About;