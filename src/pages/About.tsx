import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Award, Zap, Heart, Globe, Lightbulb, Shield } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const About = () => {
  const team = [
    {
      name: 'Neeraj Kumhar',
      role: 'Founder & CEO',
      image: '/img/1.png',
      bio: 'A passionate web developer and Founder of Visuark, specializing in crafting impactful digital solutions through expertise in Software Engineering.'
    },
    {
      name: 'Sunil Sharma',
      role: 'Co-Founder',
      image: '/img/4.png',
      bio: 'Visionary co-founder driving strategic growth and innovation at Visuark with a strong background in business development and technology.'
    },
    {
      name: 'Vansh Katiyar',
      role: 'UX/UI Designer',
      image: '/img/3.png',
      bio: 'User experience specialist focused on creating intuitive, accessible designs that delight users and drive conversions.'
    },
    {
      name: 'Yogesh Tandi',
      role: 'Web Developer',
      image: '/img/2.png',
      bio: 'Full-stack developer passionate about creating scalable, performant web applications using cutting-edge technologies.'
    }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-cyan-400" />,
      title: 'Precision',
      description: 'Every pixel matters, every line of code counts. We obsess over details to deliver perfection.'
    },
    {
      icon: <Users className="h-8 w-8 text-orange-400" />,
      title: 'Collaboration',
      description: 'We work closely with clients as partners, ensuring their vision becomes reality.'
    },
    {
      icon: <Award className="h-8 w-8 text-green-400" />,
      title: 'Excellence',
      description: 'Delivering exceptional quality in every project, exceeding expectations consistently.'
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-400" />,
      title: 'Innovation',
      description: 'Staying ahead with cutting-edge technologies and creative problem-solving approaches.'
    },
    {
      icon: <Heart className="h-8 w-8 text-red-400" />,
      title: 'Passion',
      description: 'We love what we do, and it shows in every project we deliver to our clients.'
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-400" />,
      title: 'Global Reach',
      description: 'Serving clients worldwide with 24/7 support and multilingual capabilities.'
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-purple-400" />,
      title: 'Creativity',
      description: 'Thinking outside the box to create unique solutions that stand out from the crowd.'
    },
    {
      icon: <Shield className="h-8 w-8 text-indigo-400" />,
      title: 'Trust',
      description: 'Building long-term relationships based on transparency, reliability, and integrity.'
    }
  ];

  const milestones = [
    { year: '2024', event: 'Visuark Founded', description: 'Started as a small design studio with big dreams' },
    { year: '2024', event: 'First Major Client', description: 'Landed our first Fortune 50 company project' },
    { year: '2025', event: 'Team Expansion', description: 'Grew to 15+ talented professionals' },
    { year: '2025', event: 'Award Recognition', description: 'Won Best Digital Agency at Web Excellence Awards' },
    { year: '2025', event: 'Innovation Lab', description: 'Launched R&D division for emerging technologies' }
  ];

  return (
    <PageTransition>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6">
                About <span className="text-cyan-400">Visuark</span>
              </h1>
              <p className="text-base md:text-xl lg:text-2xl text-gray-300 max-w-2xl md:max-w-4xl mx-auto">
                We're a team of passionate creators, developers, and designers who believe 
                in the power of digital storytelling to transform businesses and connect people.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-8">Our Mission</h2>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                  At Visuark, we anchor your digital dreams to reality through innovative design 
                  and development solutions. Our mission is to help businesses navigate the digital 
                  landscape with confidence and creativity.
                </p>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                  We combine technical expertise with artistic vision to create digital experiences 
                  that not only look amazing but also drive results. From concept to launch, we're 
                  your trusted partner in digital transformation.
                </p>
                <div className="bg-gradient-to-r from-cyan-400/20 to-orange-400/20 rounded-lg p-4 md:p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-3">Our Vision</h3>
                  <p className="text-gray-300">
                    To be the world's most trusted digital agency, known for creating 
                    transformative digital experiences that inspire, engage, and deliver results.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-r from-cyan-400/20 to-orange-400/20 rounded-lg p-4 md:p-8 backdrop-blur-sm border border-gray-700">
                  <img 
                    src="/img/Visuark Team.png"
                    alt="Team collaboration"
                    className="rounded-lg shadow-2xl w-full h-auto max-h-64 md:max-h-96 object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-gray-800 to-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="text-cyan-400">Values</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These core values guide everything we do and shape how we work with our clients.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 rounded-lg p-4 md:p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105 text-center"
                >
                  <div className="mb-2 md:mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{value.title}</h3>
                  <p className="text-gray-300 text-sm md:text-base">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 md:py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Meet Our <span className="text-cyan-400">Team</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The talented individuals behind Visuark's success.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col items-center justify-between bg-gradient-to-br from-cyan-400/10 via-gray-800/60 to-blue-500/10 rounded-3xl border-2 border-cyan-500/30 hover:border-cyan-400 shadow-2xl p-6 md:p-8 backdrop-blur-xl transition-all duration-300 hover:scale-[1.07] hover:shadow-cyan-400/30 group overflow-hidden text-center"
                >
                  {/* Animated glowing border */}
                  <div className="absolute -inset-0.5 rounded-3xl pointer-events-none z-0 group-hover:animate-pulse-glow bg-gradient-to-br from-cyan-400/30 via-transparent to-blue-500/30 blur-lg opacity-60"></div>
                  {/* Futuristic avatar with ring and glow */}
                  <div className="relative mb-6 z-10">
                    <div className="mx-auto w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-cyan-400/40 to-blue-500/30 flex items-center justify-center shadow-xl ring-4 ring-cyan-400/40 group-hover:ring-cyan-400/80 transition-all duration-300">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-4 border-white/10 shadow-lg"
                      />
                    </div>
                    <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs md:text-sm font-bold px-4 py-1 rounded-full shadow-lg border border-white/10 tracking-wide uppercase backdrop-blur-md">{member.role}</span>
                  </div>
                  {/* Name and bio */}
                  <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2 z-10 tracking-wide futuristic-font drop-shadow-lg">{member.name}</h3>
                  <p className="text-cyan-200 text-xs md:text-sm mb-2 z-10 font-mono opacity-90">{member.bio}</p>
                  {/* Subtle animated background particles (optional, can be removed if not desired) */}
                  <div className="absolute inset-0 pointer-events-none z-0">
                    <svg className="absolute top-2 left-2 w-8 h-8 opacity-20 animate-spin-slow" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="cyan" strokeWidth="2" fill="none" /></svg>
                    <svg className="absolute bottom-2 right-2 w-8 h-8 opacity-10 animate-pulse" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="blue" strokeWidth="2" fill="none" /></svg>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-gray-800 to-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="text-cyan-400">Journey</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Key milestones that shaped Visuark into the agency we are today.
              </p>
            </motion.div>

            <div className="relative">
              {/* Vertical line for desktop */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-orange-400"></div>
              <div className="flex flex-col gap-8">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={
                      // Desktop: alternate left/right, Mobile: center
                      `relative flex flex-col md:flex-row items-center mb-4 md:mb-12 ` +
                      (index % 2 === 0 ? 'md:justify-start' : 'md:justify-end')
                    }
                  >
                    {/* Timeline event card */}
                    <div
                      className={
                        // Desktop: alternate left/right, Mobile: full width and centered
                        `w-full md:w-5/12 ` +
                        (index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8') +
                        ' flex justify-center md:block'
                      }
                    >
                      <div className="bg-gray-800/50 rounded-lg p-4 md:p-6 border border-gray-700 max-w-md w-full">
                        <h3 className="text-lg md:text-2xl font-bold text-cyan-400 mb-1 md:mb-2">{milestone.year}</h3>
                        <h4 className="text-base md:text-xl font-semibold text-white mb-2 md:mb-3">{milestone.event}</h4>
                        <p className="text-gray-300 text-xs md:text-base">{milestone.description}</p>
                      </div>
                    </div>
                    {/* Timeline dot: show on desktop only */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-gray-900"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default About;