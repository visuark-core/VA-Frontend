import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Award, Zap, ShieldCheck } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="h-6 w-6 text-cyan-500" />,
      title: 'Precision',
      description: 'Every pixel matters, every line of code counts',
      colorClass: 'hover:shadow-[0_20px_40px_rgba(6,182,212,0.15)] hover:border-cyan-400/60',
      iconBg: 'bg-cyan-500/10 group-hover:bg-cyan-500/20',
      labelColor: 'text-cyan-500',
      glowColor: 'bg-cyan-400/5'
    },
    {
      icon: <Users className="h-6 w-6 text-orange-500" />,
      title: 'Collaboration',
      description: 'We work closely with clients to bring visions to life',
      colorClass: 'hover:shadow-[0_20px_40px_rgba(249,115,22,0.15)] hover:border-orange-400/60',
      iconBg: 'bg-orange-500/10 group-hover:bg-orange-500/20',
      labelColor: 'text-orange-500',
      glowColor: 'bg-orange-400/5'
    },
    {
      icon: <Award className="h-6 w-6 text-green-500" />,
      title: 'Excellence',
      description: 'Delivering exceptional quality in every project',
      colorClass: 'hover:shadow-[0_20px_40px_rgba(34,197,94,0.15)] hover:border-green-400/60',
      iconBg: 'bg-green-500/10 group-hover:bg-green-500/20',
      labelColor: 'text-green-500',
      glowColor: 'bg-green-400/5'
    },
    {
      icon: <Zap className="h-6 w-6 text-yellow-500" />,
      title: 'Innovation',
      description: 'Staying ahead with cutting-edge technologies',
      colorClass: 'hover:shadow-[0_20px_40px_rgba(234,179,8,0.15)] hover:border-yellow-400/60',
      iconBg: 'bg-yellow-500/10 group-hover:bg-yellow-500/20',
      labelColor: 'text-yellow-500',
      glowColor: 'bg-yellow-400/5'
    }
  ];

  const missionPoints = [
    {
      title: 'Anchored Quality',
      description: 'We maintain strict precision in design alignments and code optimization.'
    },
    {
      title: 'Agile Implementation',
      description: 'Iterative, collaborative sprints to deliver updates quickly and transparently.'
    },
    {
      title: 'Scalable Systems',
      description: 'Clean backend architectures designed to handle growth and custom features.'
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-[#399ed2]/3 rounded-full blur-[90px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-orange-400/3 rounded-full blur-[110px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            About <span className="text-cyan-400">Visuark</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are a team of passionate creators, developers, and designers who believe 
            in the power of digital storytelling to transform businesses and connect people.
          </p>
        </motion.div>

        {/* Mission and Image Collage Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 sm:mb-24">
          
          {/* Left: Text Content & Structured List */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-extrabold text-white mb-6">Our Mission</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              At Visuark, we anchor your digital dreams to reality through innovative design 
              and development solutions. Our mission is to help businesses navigate the digital 
              landscape with confidence, precision, and creativity.
            </p>

            {/* Structured Mission Milestones */}
            <div className="space-y-5">
              {missionPoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="mt-1 flex items-center justify-center w-8 h-8 rounded-lg bg-cyan-400/10 text-cyan-400 shadow-inner">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base tracking-wide">{point.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed mt-0.5">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Premium Glassmorphism Image Collage Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group cursor-pointer"
          >
            {/* Outer offset neon gradient border frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-orange-400 rounded-3xl opacity-20 blur-xl group-hover:opacity-35 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="bg-gray-800/80 backdrop-blur-md rounded-3xl p-6 border border-gray-700/80 hover:border-cyan-400/30 transition-all duration-500 relative overflow-hidden shadow-2xl">
              {/* Dot Grid texture overlay */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
                backgroundImage: 'radial-gradient(#399ed2 1.5px, transparent 1.5px)',
                backgroundSize: '24px 24px'
              }}></div>
              
              <img 
                src="img/team.png"
                alt="Team collaboration"
                className="rounded-2xl shadow-xl w-full object-cover transform group-hover:scale-[1.01] transition-transform duration-700 relative z-10"
              />
            </div>
          </motion.div>
        </div>

        {/* Value Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-12">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              viewport={{ once: true, margin: "-30px" }}
              whileHover={{ y: -6 }}
              className={`bg-gray-800/80 backdrop-blur-md rounded-2xl p-7 border border-gray-700/70 transition-all duration-500 group cursor-pointer relative overflow-hidden ${value.colorClass}`}
            >
              {/* Inner subtle glow blob */}
              <div className={`absolute -top-12 -left-12 w-24 h-24 rounded-full blur-2xl pointer-events-none transition-opacity duration-500 opacity-50 group-hover:opacity-100 ${value.glowColor}`} />

              <div className="flex justify-center mb-5">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-inner ${value.iconBg}`}>
                  {value.icon}
                </div>
              </div>
              
              <h4 className="text-xl font-bold text-white mb-3 tracking-wide">{value.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;