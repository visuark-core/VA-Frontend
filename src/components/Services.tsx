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
      image: 'https://metropolitan.hu/_next/image?url=https%3A%2F%2Fgephaz.metropolitan.hu%2Fstorage%2Fcontents%2F1200x800%20(5)-1733215548.png%3Fv%3D1764162419&w=1080&q=100'
    },
    {
      icon: <Video className="h-10 w-10 text-green-400" />,
      title: 'Video Editing',
      description: 'Professional video production and editing services. Transform raw footage into compelling visual stories.',
      features: ['Commercial Videos', 'Social Media Content', 'Motion Graphics', 'Color Grading'],
      color: 'green',
      image: 'https://blog.stockmusic.net/wp-content/uploads/2024/01/sanjeev-nagaraj-u4bvBOOpZB4-unsplash.jpg'
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