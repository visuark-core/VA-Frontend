import { motion } from 'framer-motion';
import { Code, Palette, Video, Smartphone, ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';

const Services = () => {

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
                  className={`bg-gray-800/50 rounded-lg p-8 border-2 border-gray-700 hover:border-${service.color}-400 transition-all duration-300 hover:transform hover:scale-105`}
                >
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.shortDescription}</p>
                  <Link to={`/services/${service.id}`} className="text-cyan-400 font-semibold flex items-center space-x-2 hover:text-cyan-300 transition-colors">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service details are intentionally removed from this overview page.
            Each card now links to its dedicated service page for full details. */}

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