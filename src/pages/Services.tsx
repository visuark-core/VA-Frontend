import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Video, Smartphone, ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';

const Services = () => {

  const services = [
    {
      id: 'web-development',
      icon: <Code className="h-16 w-16 text-cyan-400" />,
      title: 'Web Development',
      shortDescription: 'Custom websites and web applications built with modern technologies.',
      fullDescription: 'We create responsive, fast, and scalable web solutions using the latest technologies. From simple landing pages to complex web applications, we deliver exceptional digital experiences tailored to your business goals. We focus on writing clean, maintainable code to ensure your platform grows with you.',
      features: [
        'Responsive Design',
        'React & Next.js Development',
        'E-commerce Solutions',
        'CMS Integration',
        'Performance Optimization',
        'SEO Implementation',
        'API Development',
        'Database Design'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL'],
      color: 'cyan',
      image: '/img/services_web_dev.png'
    },
    {
      id: 'graphic-design',
      icon: <Palette className="h-16 w-16 text-orange-400" />,
      title: 'Graphic Design',
      shortDescription: 'Creative visual solutions that communicate your brand story effectively.',
      fullDescription: 'Our design team creates compelling visual identities and marketing materials that resonate with your audience and strengthen your brand presence across all touchpoints. We believe in aesthetics backed by psychology to create memorable brands.',
      features: [
        'Brand Identity Design',
        'Logo Creation',
        'Print Design',
        'Digital Graphics',
        'Packaging Design',
        'Marketing Materials',
        'Social Media Graphics',
        'Brand Guidelines'
      ],
      technologies: ['Adobe Creative Suite', 'Figma', 'Sketch', 'Procreate'],
      color: 'orange',
      image: '/img/services_graphic_design.png'
    },
    {
      id: 'video-editing',
      icon: <Video className="h-16 w-16 text-green-400" />,
      title: 'Video Editing',
      shortDescription: 'Professional video production and editing services.',
      fullDescription: 'Transform raw footage into compelling visual stories with our professional video editing services. We handle everything from corporate videos to social media content, ensuring high-retention and impactful storytelling that drives engagement.',
      features: [
        'Commercial Videos',
        'Social Media Content',
        'Motion Graphics',
        'Color Grading',
        'Audio Enhancement',
        'Animation',
        '3D Graphics',
        'Live Streaming Setup'
      ],
      technologies: ['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Cinema 4D'],
      color: 'green',
      image: '/img/services_video_editing.png'
    },
    {
      id: 'ui-ux-design',
      icon: <Smartphone className="h-16 w-16 text-purple-400" />,
      title: 'UI/UX Design',
      shortDescription: 'User-centered design that creates intuitive and engaging digital experiences.',
      fullDescription: 'We design user interfaces and experiences that are not only beautiful but also functional, accessible, and conversion-focused through extensive research and testing. We turn complex problems into elegant, easy-to-use workflows.',
      features: [
        'User Research',
        'Wireframing',
        'Prototyping',
        'Usability Testing',
        'Mobile App Design',
        'Web App Design',
        'Design Systems',
        'Accessibility Compliance'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle'],
      color: 'purple',
      image: '/img/services_ui_ux.png'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We start by understanding your business, goals, and target audience through detailed consultations.'
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Based on our findings, we develop a comprehensive strategy tailored to your specific needs.'
    },
    {
      step: '03',
      title: 'Design',
      description: 'Our creative team brings the strategy to life with stunning visuals and user experiences.'
    },
    {
      step: '04',
      title: 'Development',
      description: 'We build your solution using cutting-edge technologies and best practices.'
    },
    {
      step: '05',
      title: 'Testing',
      description: 'Rigorous testing ensures everything works perfectly across all devices and browsers.'
    },
    {
      step: '06',
      title: 'Launch',
      description: 'We deploy your project and provide ongoing support to ensure continued success.'
    }
  ];

  const [activeTab, setActiveTab] = React.useState(0);

  const cardVariants = {
    hidden: (index: number) => ({
      opacity: 0,
      x: [-120, -40, 40, 120][index] || 0,
      rotate: [-8, -3, 3, 8][index] || 0,
    }),
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 80,
        damping: 14,
        delay: index * 0.12,
      }
    })
  };

  const showcaseServices = [
    {
      id: 'web-development',
      title: 'Web Platforms',
      metricLabel: 'Lighthouse Score: 99%',
      details: 'Supercharged React/Next.js architectures designed for speed, security, and organic discovery.',
      image: '/img/services_web_dev.png'
    },
    {
      id: 'graphic-design',
      title: 'Brand Identities',
      metricLabel: 'Industry Benchmark: 4.8x Recall',
      details: 'Bold graphic design systems, bespoke logos, and print/digital collateral that tell your brand story.',
      image: '/img/services_graphic_design.png'
    },
    {
      id: 'video-editing',
      title: 'Cinematic Media',
      metricLabel: 'Audience Completion: 84%',
      details: 'High-production video editing, color grading, motion graphics, and high-impact social edits.',
      image: '/img/services_video_editing.png'
    },
    {
      id: 'ui-ux-design',
      title: 'UI/UX Ecosystems',
      metricLabel: 'Conversion Uplift: +42%',
      details: 'Meticulous wireframing, high-fidelity prototypes, and research-backed accessibility compliance.',
      image: '/img/services_ui_ux.png'
    }
  ];

  return (
    <PageTransition>
      <div className="pt-20 bg-gray-950">
        {/* Hero Section */}
        <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
          {/* Animated decorative grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              
              {/* Left Column - Core Text Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-7 text-left space-y-6"
              >
                <div className="text-xs font-mono font-bold tracking-widest text-gray-500 uppercase">
                  Excellence Redefined
                </div>
                
                <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
                  Elevate Your Brand with <br/> 
                  Premium Services
                </h1>
                
                <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
                  We blend creativity, technology, and strategy to build digital solutions that don't just look good, but drive real business results.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Link to="/contact" className="bg-white hover:bg-gray-200 text-black font-bold py-4 px-8 rounded-full transition-all duration-300 flex items-center transform hover:-translate-y-1">
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <a href="#services" className="border border-gray-800 hover:border-gray-700 hover:bg-gray-900 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 flex items-center transform hover:-translate-y-1">
                    Explore Services
                  </a>
                </div>
              </motion.div>
              
              {/* Right Column - Premium Clean Showcase */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-5 relative"
              >
                {/* Main Clean Dashboard Container */}
                <div className="relative bg-gray-900 border border-gray-800 rounded-3xl p-6 shadow-2xl overflow-hidden">
                  
                  {/* Browser-like header row */}
                  <div className="flex items-center justify-between border-b border-gray-800 pb-4 mb-5">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                      <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                      <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                    </div>
                    <div className="text-[10px] text-gray-500 font-mono tracking-wider">
                      visuark.studio
                    </div>
                    <div className="w-2 h-2"></div>
                  </div>

                  {/* Service selector tabs (text-only, simple) */}
                  <div className="grid grid-cols-4 gap-1 p-1 rounded-xl bg-gray-950 border border-gray-800 mb-6">
                    {showcaseServices.map((tab, idx) => (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveTab(idx)}
                        className={`py-2 rounded-lg text-xs font-semibold text-center transition-all duration-300 ${
                          activeTab === idx 
                            ? 'bg-gray-800 text-white border border-gray-700' 
                            : 'text-gray-500 hover:text-gray-300'
                        }`}
                      >
                        {tab.title.split(' ')[0]}
                      </button>
                    ))}
                  </div>

                  {/* Main Tab Screen Info */}
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-white leading-tight">
                        {showcaseServices[activeTab].title}
                      </h3>
                      <span className="text-[10px] text-gray-500 font-mono">
                        {showcaseServices[activeTab].metricLabel}
                      </span>
                    </div>

                    {/* Image Frame */}
                    <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-gray-800 bg-gray-950">
                      <motion.img 
                        key={activeTab}
                        src={showcaseServices[activeTab].image} 
                        alt={showcaseServices[activeTab].title}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details text */}
                    <p className="text-sm text-gray-400 leading-relaxed min-h-[48px]">
                      {showcaseServices[activeTab].details}
                    </p>

                    {/* Action footer link */}
                    <div className="pt-4 border-t border-gray-800 flex items-center justify-between">
                      <span className="text-[10px] text-gray-500 font-mono">Pillar {activeTab + 1} of 4</span>
                      <a
                        href={`#${showcaseServices[activeTab].id}`}
                        className="text-white hover:text-gray-300 text-xs font-semibold flex items-center gap-1 transition-colors duration-300"
                      >
                        Learn More
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Detailed Service Sections */}
        <section id="services" className="py-24 bg-gray-950 relative z-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => {
                const borderClass = {
                  cyan: 'border-cyan-500/20 hover:border-cyan-400',
                  orange: 'border-orange-500/20 hover:border-orange-400',
                  green: 'border-green-500/20 hover:border-green-400',
                  purple: 'border-purple-500/20 hover:border-purple-400'
                }[service.color] || 'border-gray-800 hover:border-gray-700';

                return (
                  <motion.div
                    key={service.id}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    variants={cardVariants}
                    viewport={{ once: false, amount: 0.1 }}
                    className="group"
                  >
                    <div className={`relative bg-gray-900 border ${borderClass} rounded-3xl overflow-hidden transition-all duration-300 flex flex-col h-full p-6 md:p-8 justify-between`}>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                          {service.title}
                        </h3>

                        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                          {service.fullDescription}
                        </p>
                      </div>

                      {/* CTA Button */}
                      <div className="pt-4">
                        <Link to="/contact" className="inline-flex items-center justify-center bg-white hover:bg-gray-200 text-black font-bold py-3.5 px-6 rounded-full transition-all duration-300 w-full text-sm">
                          Get Started
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-32 bg-gray-900/30 border-y border-gray-900 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                Our Proven Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                A streamlined methodology that ensures successful project delivery, transparency, and top-tier quality every time.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/60 backdrop-blur-md rounded-2xl p-8 border border-gray-800 hover:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 -mt-6 -mr-6 text-9xl font-extrabold text-gray-800/10 group-hover:text-gray-800/20 transition-colors duration-300 select-none pointer-events-none">
                    {step.step}
                  </div>
                  <div className="relative z-10">
                    <div className="text-sm font-bold text-gray-300 mb-4 inline-block bg-gray-800 px-3 py-1 rounded-full border border-gray-750">
                      Step {step.step}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gray-100 transition-colors duration-300">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 bg-gradient-to-t from-gray-950 to-gray-900 text-center relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-900 border border-gray-800 rounded-3xl p-12 max-w-4xl mx-auto shadow-xl relative overflow-hidden"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                Ready to Transform Your <br className="hidden sm:inline" />
                Digital Presence?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Let's discuss how our services can help you achieve your business objectives and elevate your brand.
              </p>
              <Link to="/contact" className="inline-flex items-center justify-center bg-white hover:bg-gray-200 text-black px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-md">
                Book a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Services;