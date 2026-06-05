import { Code, Palette, Video, Smartphone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: <Code className="h-10 w-10 text-cyan-400" />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies. From responsive designs to complex web platforms.',
      features: ['React & Next.js', 'E-commerce Solutions', 'CMS Integration', 'Performance Optimization'],
      color: 'cyan',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <Palette className="h-10 w-10 text-orange-400" />,
      title: 'Graphic Design',
      description: 'Creative visual solutions that communicate your brand story effectively. From logos to complete brand identities.',
      features: ['Brand Identity', 'Print Design', 'Digital Graphics', 'Packaging Design'],
      color: 'orange',
      image: 'data:image/jpeg;base64,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'
    },
    {
      icon: <Video className="h-10 w-10 text-green-400" />,
      title: 'Video Editing',
      description: 'Professional video production and editing services. Transform raw footage into compelling visual stories.',
      features: ['Commercial Videos', 'Social Media Content', 'Motion Graphics', 'Color Grading'],
      color: 'green',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf6d44d?auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <Smartphone className="h-10 w-10 text-purple-400" />,
      title: 'UI/UX Design',
      description: 'User-centered design that creates intuitive and engaging digital experiences. Research-driven design solutions.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
      color: 'purple',
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      cyan: 'border-cyan-400 hover:shadow-cyan-400/25',
      orange: 'border-orange-400 hover:shadow-orange-400/25',
      green: 'border-green-400 hover:shadow-green-400/25',
      purple: 'border-purple-400 hover:shadow-purple-400/25'
    };
    return colorMap[color] || colorMap.cyan;
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service) => (
            <div
              key={service.title}
              className={`flex flex-col h-full bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-gray-700 hover:${getColorClasses(service.color)} transition-all duration-300 hover:transform hover:-translate-y-2 group`}
            >
              {/* Cover Image Area */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gray-900/40 z-10 group-hover:bg-transparent transition-all duration-500"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-6 z-20 bg-gray-900/80 p-3 rounded-xl backdrop-blur-sm border border-gray-700">
                  {service.icon}
                </div>
              </div>

              {/* Card Content Area */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors mt-2">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {service.features?.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-400 flex items-center">
                      <ArrowRight className={`h-4 w-4 mr-3 text-${service.color}-400`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto">
                  <Link to="/services" className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white py-4 rounded-xl font-bold hover:from-cyan-300 hover:to-blue-400 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;