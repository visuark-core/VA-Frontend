import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, DollarSign, Users, Heart, Coffee, Zap, Award } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const Careers = () => {
  const openPositions = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      salary: '$120k - $160k',
      description: 'We\'re looking for a senior frontend developer to join our team and help build amazing user experiences.',
      requirements: [
        '5+ years of React experience',
        'Strong TypeScript skills',
        'Experience with modern build tools',
        'Knowledge of web performance optimization'
      ]
    },
    {
      id: 2,
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$90k - $130k',
      description: 'Join our design team to create intuitive and beautiful user interfaces for our clients.',
      requirements: [
        '3+ years of UX/UI design experience',
        'Proficiency in Figma and Adobe Creative Suite',
        'Strong portfolio demonstrating design process',
        'Experience with user research and testing'
      ]
    },
    {
      id: 3,
      title: 'Video Editor',
      department: 'Creative',
      location: 'Remote',
      type: 'Contract',
      salary: '$50 - $80/hour',
      description: 'We need a talented video editor to help create compelling video content for our clients.',
      requirements: [
        'Expert-level skills in Adobe Premiere Pro and After Effects',
        'Experience with motion graphics',
        'Strong storytelling abilities',
        'Portfolio of professional video work'
      ]
    },
    {
      id: 4,
      title: 'Project Manager',
      department: 'Operations',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$80k - $110k',
      description: 'Help us deliver exceptional projects on time and within budget as our new project manager.',
      requirements: [
        'PMP certification preferred',
        '3+ years of project management experience',
        'Experience with digital agency workflows',
        'Strong communication and leadership skills'
      ]
    }
  ];

  const benefits = [
    {
      icon: <Heart className="h-8 w-8 text-red-400" />,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, dental, vision, and wellness programs'
    },
    {
      icon: <Coffee className="h-8 w-8 text-orange-400" />,
      title: 'Work-Life Balance',
      description: 'Flexible hours, remote work options, and unlimited PTO policy'
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-400" />,
      title: 'Growth & Learning',
      description: 'Professional development budget, conference attendance, and skill training'
    },
    {
      icon: <Award className="h-8 w-8 text-green-400" />,
      title: 'Recognition',
      description: 'Performance bonuses, equity options, and regular recognition programs'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-400" />,
      title: 'Team Culture',
      description: 'Collaborative environment, team events, and inclusive workplace'
    },
    {
      icon: <DollarSign className="h-8 w-8 text-purple-400" />,
      title: 'Financial Benefits',
      description: '401(k) matching, stock options, and competitive salary packages'
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We encourage creative thinking and embrace new technologies to solve complex problems.'
    },
    {
      title: 'Collaborative Spirit',
      description: 'We believe the best work comes from diverse teams working together towards common goals.'
    },
    {
      title: 'Quality Excellence',
      description: 'We maintain high standards in everything we do, from code quality to client relationships.'
    },
    {
      title: 'Continuous Learning',
      description: 'We invest in our team\'s growth and encourage continuous skill development.'
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
                Join Our <span className="text-cyan-400">Team</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
                Be part of a creative team that's shaping the future of digital experiences. 
                We're always looking for talented individuals who share our passion for excellence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Company Culture */}
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
                Why Work at <span className="text-cyan-400">Visuark</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're more than just a digital agency – we're a family of creative professionals 
                who believe in doing great work while having fun.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-r from-cyan-400/20 to-orange-400/20 rounded-lg p-8 backdrop-blur-sm border border-gray-700">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Team working together"
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Benefits & <span className="text-cyan-400">Perks</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We believe in taking care of our team with comprehensive benefits and perks.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 rounded-lg p-8 border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="mb-6">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
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
                Open <span className="text-cyan-400">Positions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready to make an impact? Check out our current openings and find your next opportunity.
              </p>
            </motion.div>

            <div className="space-y-8">
              {openPositions.map((position, index) => (
                <motion.div
                  key={position.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 rounded-lg p-8 border border-gray-700 hover:border-cyan-400 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                      <p className="text-cyan-400 font-semibold mb-4">{position.department}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <span className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {position.location}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {position.type}
                      </span>
                      <span className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-1" />
                        {position.salary}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {position.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {position.requirements?.map((req, reqIndex) => (
                        <li key={reqIndex} className="text-gray-300 flex items-start">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-300 hover:to-blue-400 transform hover:scale-105 transition-all duration-300">
                    Apply Now
                  </button>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Don't see a perfect fit?
                </h3>
                <p className="text-gray-300 mb-6">
                  We're always interested in hearing from talented individuals. 
                  Send us your resume and let us know how you'd like to contribute to our team.
                </p>
                <button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-300 hover:to-blue-400 transform hover:scale-105 transition-all duration-300">
                  Send Resume
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Careers;