import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Video, Smartphone, ArrowRight, Check, Star } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const Services = () => {
  const [activeService, setActiveService] = useState('web-development');

  const services = [
    {
      id: 'web-development',
      icon: <Code className="h-12 w-12 text-cyan-400" />,
      title: 'Web Development',
      shortDescription: 'Custom websites and web applications built with modern technologies.',
      fullDescription: 'We create responsive, fast, and scalable web solutions using the latest technologies. From simple landing pages to complex web applications, we deliver exceptional digital experiences.',
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
      pricing: 'Starting from $2,500',
      timeline: '2-8 weeks',
      color: 'cyan'
    },
    {
      id: 'graphic-design',
      icon: <Palette className="h-12 w-12 text-orange-400" />,
      title: 'Graphic Design',
      shortDescription: 'Creative visual solutions that communicate your brand story effectively.',
      fullDescription: 'Our design team creates compelling visual identities and marketing materials that resonate with your audience and strengthen your brand presence across all touchpoints.',
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
      pricing: 'Starting from $1,200',
      timeline: '1-4 weeks',
      color: 'orange'
    },
    {
      id: 'video-editing',
      icon: <Video className="h-12 w-12 text-green-400" />,
      title: 'Video Editing',
      shortDescription: 'Professional video production and editing services.',
      fullDescription: 'Transform raw footage into compelling visual stories with our professional video editing services. We handle everything from corporate videos to social media content.',
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
      pricing: 'Starting from $800',
      timeline: '1-3 weeks',
      color: 'green'
    },
    {
      id: 'ui-ux-design',
      icon: <Smartphone className="h-12 w-12 text-purple-400" />,
      title: 'UI/UX Design',
      shortDescription: 'User-centered design that creates intuitive and engaging digital experiences.',
      fullDescription: 'We design user interfaces and experiences that are not only beautiful but also functional, accessible, and conversion-focused through extensive research and testing.',
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
      pricing: 'Starting from $1,800',
      timeline: '2-6 weeks',
      color: 'purple'
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

  const activeServiceData = services.find(service => service.id === activeService);

  return (
    <PageTransition>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Our <span className="text-cyan-400">Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
                Comprehensive digital solutions to help your business thrive in the modern world.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-gray-800/50 rounded-lg p-8 border-2 border-gray-700 hover:border-${service.color}-400 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer ${
                    activeService === service.id ? `border-${service.color}-400` : ''
                  }`}
                  onClick={() => setActiveService(service.id)}
                >
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.shortDescription}</p>
                  <button className="text-cyan-400 font-semibold flex items-center space-x-2 hover:text-cyan-300 transition-colors">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Details */}
        {activeServiceData && (
          <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
            <div className="container mx-auto px-4">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid lg:grid-cols-2 gap-16 items-center"
              >
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    {activeServiceData.icon}
                    <h2 className="text-4xl font-bold text-white">{activeServiceData.title}</h2>
                  </div>
                  
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    {activeServiceData.fullDescription}
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-white font-semibold mb-3 flex items-center">
                        <Star className="h-5 w-5 text-yellow-400 mr-2" />
                        Pricing
                      </h4>
                      <p className="text-cyan-400 font-bold text-xl">{activeServiceData.pricing}</p>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-3 flex items-center">
                        <Star className="h-5 w-5 text-yellow-400 mr-2" />
                        Timeline
                      </h4>
                      <p className="text-cyan-400 font-bold text-xl">{activeServiceData.timeline}</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-white font-semibold mb-4">Technologies We Use:</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeServiceData.technologies?.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
                  <h3 className="text-2xl font-bold text-white mb-6">What's Included:</h3>
                  <ul className="space-y-3">
                    {activeServiceData.features?.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-300">
                        <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full mt-8 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-300 hover:to-blue-400 transform hover:scale-105 transition-all duration-300">
                    Get Started
                  </button>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Process */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="text-cyan-400">Process</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology that ensures successful project delivery every time.
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
                  className="bg-gray-800/50 rounded-lg p-8 border border-gray-700 hover:border-cyan-400 transition-all duration-300"
                >
                  <div className="text-4xl font-bold text-cyan-400 mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Services;