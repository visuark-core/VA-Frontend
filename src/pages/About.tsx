import { motion } from 'framer-motion';
import { Target, Users, Award, Zap, Heart, Globe, Lightbulb, Shield } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const About = () => {
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
    { year: '2026', event: 'Innovation Lab', description: 'Launched R&D division for emerging technologies' }
  ];

  const leaders = [
    {
      name: 'Neeraj Kumhar',
      role: 'Founder',
      initials: 'NK',
      colorClass: 'hover:shadow-[0_20px_40px_rgba(6,182,212,0.15)] hover:border-cyan-400/60',
      glowColor: 'bg-cyan-400/5',
      labelColor: 'text-cyan-400',
      borderColor: 'border-cyan-500/30',
      avatarGradient: 'from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30 group-hover:border-cyan-400/80',
      description: "Visionary strategist defining Visuark's core direction, brand strategy, and aesthetic design standards."
    },
    {
      name: 'Sunil Sharma',
      role: 'CEO',
      initials: 'SS',
      colorClass: 'hover:shadow-[0_20px_40px_rgba(249,115,22,0.15)] hover:border-orange-400/60',
      glowColor: 'bg-orange-400/5',
      labelColor: 'text-orange-400',
      borderColor: 'border-orange-500/30',
      avatarGradient: 'from-orange-500/20 to-amber-500/20 text-orange-400 border-orange-500/30 group-hover:border-orange-400/80',
      description: 'Operations driver scaling engineering teams, managing clients, and executing digital transformation strategies.'
    }
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
                <div className="bg-gradient-to-r from-cyan-400/20 to-orange-400/20 rounded-lg p-4 md:p-8 backdrop-blur-sm border border-gray-700 min-h-[24rem] md:min-h-[30rem]">
                  <img
                    src="/img/Visuark Team.png"
                    alt="Team collaboration"
                    className="rounded-lg shadow-2xl w-full h-full object-contain"
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

        {/* Leadership Section */}
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
                Our <span className="text-cyan-400">Leadership</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet the visionary minds guiding Visuark's mission and engineering success.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {leaders.map((leader, index) => (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  className={`bg-gray-800/40 backdrop-blur-xl rounded-3xl p-6 border border-gray-700/50 transition-all duration-500 group cursor-pointer relative overflow-hidden flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 ${leader.colorClass}`}
                >
                  <div className={`absolute -top-12 -left-12 w-24 h-24 rounded-full blur-2xl pointer-events-none transition-opacity duration-500 opacity-50 group-hover:opacity-100 ${leader.glowColor}`} />

                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center font-mono text-2xl font-bold tracking-wider border-2 transition-all duration-500 shadow-inner shrink-0 bg-gray-950 ${leader.avatarGradient}`}>
                    {leader.initials}
                  </div>

                  <div className="text-center sm:text-left relative z-10 flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white tracking-wide group-hover:text-white transition-colors">{leader.name}</h3>
                      <span className={`inline-block text-xs font-mono font-bold tracking-widest uppercase border px-2 py-0.5 rounded-full mt-1 sm:mt-0 max-w-fit mx-auto sm:mx-0 ${leader.borderColor} ${leader.labelColor}`}>
                        {leader.role}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {leader.description}
                    </p>
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
              {/* Central vertical line (The Tree Trunk) */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1.5 h-full rounded-full bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 shadow-[0_0_15px_rgba(34,211,238,0.5)]"></div>
              
              <div className="flex flex-col gap-12 md:gap-24">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={`${milestone.year}-${milestone.event}`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={
                      `relative flex flex-col md:flex-row items-center ` +
                      (index % 2 === 0 ? 'md:justify-start' : 'md:justify-end')
                    }
                  >
                    {/* Horizontal Branch Line (Desktop only) */}
                    <div className={
                      `hidden md:block absolute top-1/2 -translate-y-1/2 h-1 w-8 lg:w-16 bg-gradient-to-r ` +
                      (index % 2 === 0 
                        ? 'right-1/2 from-cyan-400/50 to-transparent rotate-180' 
                        : 'left-1/2 from-blue-500/50 to-transparent')
                    }></div>

                    {/* Timeline Node (The perfection node) */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 items-center justify-center z-10">
                      <div className="w-4 h-4 bg-gray-900 rounded-full border-4 border-cyan-400 shadow-[0_0_10px_#22d3ee]"></div>
                      <div className="absolute w-8 h-8 rounded-full bg-cyan-400/20 animate-ping"></div>
                    </div>

                    {/* Event Card */}
                    <div className={
                      `w-full md:w-[45%] lg:w-[42%] ` +
                      (index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12')
                    }>
                      <motion.div 
                        whileHover={{ scale: 1.03 }}
                        className="bg-gray-800/40 backdrop-blur-xl rounded-2xl p-6 border-2 border-gray-700/50 hover:border-cyan-400/50 shadow-2xl transition-colors duration-300 relative overflow-hidden group"
                      >
                        {/* Decorative background glow */}
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all"></div>
                        
                        <span className="inline-block text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
                          {milestone.year}
                        </span>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                          {milestone.event}
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                          {milestone.description}
                        </p>
                        
                        {/* Corner Accent */}
                        <div className={
                          `absolute bottom-0 w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 ` +
                          (index % 2 === 0 ? 'right-0' : 'left-0')
                        }></div>
                      </motion.div>
                    </div>
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