import React from 'react';
import { Target, Users, Award, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-cyan-400" />,
      title: 'Precision',
      description: 'Every pixel matters, every line of code counts'
    },
    {
      icon: <Users className="h-8 w-8 text-orange-400" />,
      title: 'Collaboration',
      description: 'We work closely with clients to bring visions to life'
    },
    {
      icon: <Award className="h-8 w-8 text-green-400" />,
      title: 'Excellence',
      description: 'Delivering exceptional quality in every project'
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-400" />,
      title: 'Innovation',
      description: 'Staying ahead with cutting-edge technologies'
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-gray-900">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-cyan-400">Visuark</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're a team of passionate creators, developers, and designers who believe 
            in the power of digital storytelling to transform businesses and connect people.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center mb-10 sm:mb-16">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              At Visuark, we anchor your digital dreams to reality through innovative design 
              and development solutions. Our mission is to help businesses navigate the digital 
              landscape with confidence and creativity.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              We combine technical expertise with artistic vision to create digital experiences 
              that not only look amazing but also drive results. From concept to launch, we're 
              your trusted partner in digital transformation.
            </p>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-r from-cyan-400/20 to-orange-400/20 rounded-lg p-8 backdrop-blur-sm border border-gray-700">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="mb-4">{value.icon}</div>
              <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
              <p className="text-gray-300">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;