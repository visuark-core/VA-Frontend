import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Video, Smartphone, CheckCircle2, ArrowRight } from 'lucide-react';
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
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80'
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
      image: 'https://images.unsplash.com/photo-1626785773968-3e52ea351b6a?auto=format&fit=crop&w=1200&q=80'
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
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf6d44d?auto=format&fit=crop&w=1200&q=80'
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
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1200&q=80'
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

  const getColorClasses = (color: string) => {
    const map: Record<string, string> = {
      cyan: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
      orange: 'text-orange-400 bg-orange-400/10 border-orange-400/20',
      green: 'text-green-400 bg-green-400/10 border-green-400/20',
      purple: 'text-purple-400 bg-purple-400/10 border-purple-400/20'
    };
    return map[color] || map.cyan;
  };

  const getBorderColor = (color: string) => {
    const map: Record<string, string> = {
      cyan: 'border-cyan-400',
      orange: 'border-orange-400',
      green: 'border-green-400',
      purple: 'border-purple-400'
    };
    return map[color] || map.cyan;
  };

  const getButtonColor = (color: string) => {
    const map: Record<string, string> = {
      cyan: 'bg-cyan-500 hover:bg-cyan-400 shadow-cyan-500/25',
      orange: 'bg-orange-500 hover:bg-orange-400 shadow-orange-500/25',
      green: 'bg-green-500 hover:bg-green-400 shadow-green-500/25',
      purple: 'bg-purple-500 hover:bg-purple-400 shadow-purple-500/25'
    };
    return map[color] || map.cyan;
  };

  return (
    <PageTransition>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-48 -mt-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -ml-48 -mb-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
                Elevate Your Brand with <br/> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Premium Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
                We blend creativity, technology, and strategy to build digital solutions that don't just look good, but drive real business results.
              </p>
              <div className="flex justify-center gap-4">
                <Link to="/contact" className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/25 flex items-center transform hover:-translate-y-1">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Detailed Service Sections */}
        <div className="bg-gray-900 py-10">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <section key={service.id} id={service.id} className={`py-20 ${isEven ? 'bg-gray-800/30' : 'bg-gray-900'}`}>
                <div className="container mx-auto px-4">
                  <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
                    
                    {/* Left/Right Text Content */}
                    <motion.div 
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="w-full lg:w-1/2"
                    >
                      <div className="inline-block mb-6 p-4 rounded-2xl bg-gray-800 border border-gray-700 shadow-xl">
                        {service.icon}
                      </div>
                      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        {service.title}
                      </h2>
                      <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                        {service.fullDescription}
                      </p>
                      
                      <div className="grid sm:grid-cols-2 gap-4 mb-10">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-center text-gray-300">
                            <CheckCircle2 className={`h-5 w-5 mr-3 text-${service.color}-400`} />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2 mb-10">
                        {service.technologies.map((tech, i) => (
                          <span key={i} className={`px-4 py-2 rounded-full text-sm font-medium border ${getColorClasses(service.color)}`}>
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Get Started Button replacing Investment */}
                      <div className="mt-8">
                        <Link to="/contact" className={`inline-flex items-center text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg flex items-center transform hover:-translate-y-1 ${getButtonColor(service.color)}`}>
                          Get Started
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </div>
                    </motion.div>

                    {/* Left/Right Visual/Image */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                      className="w-full lg:w-1/2"
                    >
                      <div className={`aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden relative group border-2 ${getBorderColor(service.color)} shadow-2xl`}>
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60 z-10 pointer-events-none"></div>
                        <img 
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    </motion.div>

                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* Process */}
        <section className="py-24 bg-gray-800">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Proven <span className="text-cyan-400">Process</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
                  className="bg-gray-900 rounded-2xl p-8 border-t-4 border-t-cyan-400 border border-gray-700 hover:shadow-xl hover:shadow-cyan-400/10 transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 -mt-6 -mr-6 text-9xl font-bold text-gray-800 opacity-50 select-none pointer-events-none">
                    {step.step}
                  </div>
                  <div className="relative z-10">
                    <div className="text-2xl font-bold text-cyan-400 mb-4 inline-block bg-cyan-400/10 px-4 py-1 rounded-full">Step {step.step}</div>
                    <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-gradient-to-t from-gray-900 to-gray-800 text-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-cyan-900/40 to-blue-900/40 border border-cyan-500/30 rounded-3xl p-12 max-w-4xl mx-auto shadow-2xl"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Digital Presence?</h2>
              <p className="text-xl text-gray-300 mb-10">
                Let's discuss how our services can help you achieve your business objectives.
              </p>
              <Link to="/contact" className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105">
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