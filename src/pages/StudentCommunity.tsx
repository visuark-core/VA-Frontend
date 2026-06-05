import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Rocket, Award, MessageSquare, Video, Calendar, Zap, GraduationCap, ChevronRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';

const StudentCommunity = () => {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-blue-400" />,
      title: 'Resource Library',
      description: 'Access premium tutorials, design assets, and code snippets curated for students.'
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-green-400" />,
      title: 'Mentorship',
      description: 'Connect with industry professionals for 1-on-1 guidance and portfolio reviews.'
    },
    {
      icon: <Video className="h-8 w-8 text-purple-400" />,
      title: 'Weekly Workshops',
      description: 'Join live sessions covering the latest in tech, design, and career growth.'
    },
    {
      icon: <Calendar className="h-8 w-8 text-orange-400" />,
      title: 'Networking Events',
      description: 'Participate in virtual meetups and hackathons with peers worldwide.'
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-400" />,
      title: 'Exclusive Challenges',
      description: 'Build your portfolio with real-world project briefs and competitions.'
    },
    {
      icon: <Rocket className="h-8 w-8 text-cyan-400" />,
      title: 'Career Launchpad',
      description: 'Get exclusive access to internship and entry-level job opportunities.'
    }
  ];

  return (
    <PageTransition>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center space-x-2 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-full px-6 py-2 mb-8">
                <GraduationCap className="h-5 w-5 text-cyan-400" />
                <span className="text-gray-300 font-medium">Visuark Student Hub</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Empowering the Next <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Generation of Creators</span>
              </h1>

              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Join our vibrant community of student designers, developers, and innovators. Learn, collaborate, and build the future together.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button className="w-full sm:w-auto bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-cyan-300 hover:to-blue-400 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/25 flex items-center justify-center">
                  Join Community For Free
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>
                <Link to="/contact" className="w-full sm:w-auto bg-gray-800 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-700 transform hover:scale-105 transition-all duration-300 border border-gray-700">
                  Partner With Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Everything You Need to <span className="text-cyan-400">Succeed</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Our community provides the tools, knowledge, and network to accelerate your journey from student to professional.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:-translate-y-2 group"
                >
                  <div className="bg-gray-900 rounded-xl p-4 inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats / Social Proof Section */}
        {/* <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border-y border-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { label: 'Active Students', value: '5,000+' },
                { label: 'Universities', value: '120+' },
                { label: 'Workshops Hosted', value: '300+' },
                { label: 'Projects Built', value: '1,000+' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-2">
                    {stat.value}
                  </h4>
                  <p className="text-gray-400 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="py-24 bg-gray-900 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-12 text-center border border-gray-700/50 shadow-2xl"
            >
              <Zap className="h-16 w-16 text-cyan-400 mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to accelerate your career?
              </h2>
              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                Join thousands of students who are already building their future with Visuark. It's completely free for verified students.
              </p>

              <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your .edu email"
                  className="flex-1 bg-gray-900/50 border border-gray-700 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  required
                />
                <button type="submit" className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-4 px-8 rounded-xl transition-colors duration-300 shadow-lg shadow-cyan-500/20 whitespace-nowrap">
                  Get Access
                </button>
              </form>
              <p className="text-sm text-gray-500 mt-4">
                No credit card required. Verify with your student email.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default StudentCommunity;
