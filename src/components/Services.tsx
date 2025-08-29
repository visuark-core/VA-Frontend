import React from 'react';
import { Code, Palette, Video, Smartphone, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="h-12 w-12 text-cyan-400" />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies. From responsive designs to complex web platforms.',
      features: ['React & Next.js', 'E-commerce Solutions', 'CMS Integration', 'Performance Optimization'],
      color: 'cyan'
    },
    {
      icon: <Palette className="h-12 w-12 text-orange-400" />,
      title: 'Graphic Design',
      description: 'Creative visual solutions that communicate your brand story effectively. From logos to complete brand identities.',
      features: ['Brand Identity', 'Print Design', 'Digital Graphics', 'Packaging Design'],
      color: 'orange'
    },
    {
      icon: <Video className="h-12 w-12 text-green-400" />,
      title: 'Video Editing',
      description: 'Professional video production and editing services. Transform raw footage into compelling visual stories.',
      features: ['Commercial Videos', 'Social Media Content', 'Motion Graphics', 'Color Grading'],
      color: 'green'
    },
    {
      icon: <Smartphone className="h-12 w-12 text-purple-400" />,
      title: 'UI/UX Design',
      description: 'User-centered design that creates intuitive and engaging digital experiences. Research-driven design solutions.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      cyan: 'border-cyan-400 hover:shadow-cyan-400/25',
      orange: 'border-orange-400 hover:shadow-orange-400/25',
      green: 'border-green-400 hover:shadow-green-400/25',
      purple: 'border-purple-400 hover:shadow-purple-400/25'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.cyan;
  };

  const getButtonClasses = (color: string) => {
    const colorMap = {
      cyan: 'bg-cyan-400 hover:bg-cyan-300 text-gray-900',
      orange: 'bg-orange-400 hover:bg-orange-300 text-gray-900',
      green: 'bg-green-400 hover:bg-green-300 text-gray-900',
      purple: 'bg-purple-400 hover:bg-purple-300 text-gray-900'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.cyan;
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-cyan-400">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border-2 border-gray-700 hover:${getColorClasses(service.color)} transition-all duration-300 hover:transform hover:scale-105 group`}
            >
              <div className="mb-6">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-8">
                {service.features?.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-400 flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-cyan-400" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className={`${getButtonClasses(service.color)} px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 hover:transform hover:scale-105`}>
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;