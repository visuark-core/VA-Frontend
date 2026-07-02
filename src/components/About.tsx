import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Target, 
  Users, 
  Award, 
  Zap, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  Terminal, 
  Compass, 
  Rocket 
} from 'lucide-react';

const InteractiveHub = () => {
  const [activeNode, setActiveNode] = React.useState<number | null>(null);

  const nodes = [
    {
      id: 0,
      title: 'Design',
      icon: <Layers className="h-5 w-5" />,
      color: 'from-cyan-500 to-blue-500',
      shadowColor: 'rgba(6, 182, 212, 0.4)',
      bgLight: 'bg-cyan-500/10',
      borderGlow: 'border-cyan-500/30 group-hover:border-cyan-400/80',
      labelColor: 'text-cyan-400',
      description: 'Professional cinematic video editing, storytelling, and high-end post-production services.',
      tech: ['Premiere Pro', 'After Effects', 'Color Grading', 'Motion Graphics'],
      metric: 'Video Editing'
    },
    {
      id: 1,
      title: 'Code',
      icon: <Terminal className="h-5 w-5" />,
      color: 'from-orange-500 to-amber-500',
      shadowColor: 'rgba(249, 115, 22, 0.4)',
      bgLight: 'bg-orange-500/10',
      borderGlow: 'border-orange-500/30 group-hover:border-orange-400/80',
      labelColor: 'text-orange-400',
      description: 'Sleek, responsive, and secure Web Development solutions tailored to your business goals.',
      tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      metric: 'Web Development'
    },
    {
      id: 2,
      title: 'Strategy',
      icon: <Compass className="h-5 w-5" />,
      color: 'from-emerald-500 to-teal-500',
      shadowColor: 'rgba(16, 185, 129, 0.4)',
      bgLight: 'bg-emerald-500/10',
      borderGlow: 'border-emerald-500/30 group-hover:border-emerald-400/80',
      labelColor: 'text-emerald-400',
      description: 'Data-driven Performance Marketing campaigns to accelerate business growth and maximize ROI.',
      tech: ['SEO Optimization', 'Ad Campaigns', 'Analytics', 'Conversion Funnels'],
      metric: 'Performance Marketing'
    },
    {
      id: 3,
      title: 'Launch',
      icon: <Rocket className="h-5 w-5" />,
      color: 'from-purple-500 to-pink-500',
      shadowColor: 'rgba(168, 85, 247, 0.4)',
      bgLight: 'bg-purple-500/10',
      borderGlow: 'border-purple-500/30 group-hover:border-purple-400/80',
      labelColor: 'text-purple-400',
      description: 'Creative Videography, camera operations, on-site directing, and integrated production editing.',
      tech: ['Cinematography', 'Directing', 'Sound Design', 'Final Cut'],
      metric: 'Videography & Editing'
    }
  ];

  // Node position coordinates offset outwards
  const positionClasses = [
    'top-0 left-1/2 -translate-x-1/2 -translate-y-5', // Top
    'right-0 top-1/2 translate-x-5 -translate-y-1/2', // Right
    'bottom-0 left-1/2 -translate-x-1/2 translate-y-5', // Bottom
    'left-0 top-1/2 -translate-x-5 -translate-y-1/2'  // Left
  ];

  const current = activeNode !== null ? nodes[activeNode] : null;

  return (
    <div className="flex flex-col items-center w-full max-w-[360px] mx-auto select-none my-8 lg:my-0">
      
      {/* Circle System Container */}
      <div className="relative w-[280px] h-[280px] flex items-center justify-center">
        {/* Dynamic colored pulsing background aura */}
        <div className={`absolute inset-0 rounded-full blur-3xl pointer-events-none transition-all duration-700 opacity-65 ${
          activeNode === 0 ? 'bg-cyan-500/10' :
          activeNode === 1 ? 'bg-orange-500/10' :
          activeNode === 2 ? 'bg-emerald-500/10' :
          activeNode === 3 ? 'bg-purple-500/10' : 'bg-gradient-to-tr from-cyan-500/5 via-transparent to-orange-400/5'
        }`} />
        
        {/* Central Rotating Orbit Lines */}
        <div className="absolute w-[80%] h-[80%] rounded-full border border-gray-800 border-dashed animate-[spin_60s_linear_infinite] pointer-events-none" />
        <div className="absolute w-[60%] h-[60%] rounded-full border border-gray-700/35 pointer-events-none" />
        <div className="absolute w-[40%] h-[40%] rounded-full border border-cyan-500/10 pointer-events-none" />

        {/* Connection Lines */}
        {activeNode !== null && (
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <motion.line
              x1="50%"
              y1="50%"
              x2={
                activeNode === 0 ? '50%' :
                activeNode === 1 ? '100%' :
                activeNode === 2 ? '50%' : '0%'
              }
              y2={
                activeNode === 0 ? '0%' :
                activeNode === 1 ? '50%' :
                activeNode === 2 ? '100%' : '50%'
              }
              stroke={`url(#line-gradient-${activeNode})`}
              strokeWidth="2"
              strokeDasharray="4 4"
              initial={{ strokeDashoffset: 20 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />
            <defs>
              <linearGradient id={`line-gradient-${activeNode}`} x1="50%" y1="50%" x2="50%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2" />
                <stop offset="100%" stopColor={activeNode === 0 ? '#06b6d4' : activeNode === 1 ? '#f97316' : activeNode === 2 ? '#10b981' : '#a855f7'} stopOpacity="1" />
              </linearGradient>
            </defs>
          </svg>
        )}

        {/* Central Core Button */}
        <div className="relative w-[38%] h-[38%] rounded-full bg-gray-900 border border-gray-800 shadow-2xl flex flex-col items-center justify-center p-3 text-center z-10 overflow-hidden">
          {/* Core glow background */}
          <div className={`absolute inset-0 bg-gradient-to-tr ${current ? current.color : 'from-cyan-500/10 to-orange-400/10'} opacity-20 blur-md transition-all duration-500`} />
          
          {/* Futuristic tech radar overlay - pulsing core wave matching node color */}
          <div className={`absolute inset-0 rounded-full border-2 animate-ping opacity-35 pointer-events-none transition-colors duration-500 ${
            current 
              ? (current.id === 0 ? 'border-cyan-400' : current.id === 1 ? 'border-orange-400' : current.id === 2 ? 'border-emerald-400' : 'border-purple-400') 
              : 'border-cyan-500/20'
          }`} />
          
          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              key={activeNode ?? 'idle'}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-[9px] uppercase tracking-[0.2em] text-gray-500 block mb-1">
                {current ? current.title : 'System'}
              </span>
              <span className={`text-[10px] sm:text-xs font-extrabold tracking-wider ${current ? current.labelColor : 'text-cyan-400'} block max-w-[90px] uppercase leading-tight`}>
                {current ? current.metric : 'VISUARK'}
              </span>
              <span className="text-[8px] font-mono text-gray-400 block mt-1">
                {current ? 'ACTIVE NODE' : 'ACTIVE CORE'}
              </span>
            </motion.div>
          </div>
        </div>

        {/* Floating Orbital Nodes */}
        {nodes.map((node) => {
          const isHovered = activeNode === node.id;
          
          // Vibrant color styles mapping for nodes in light theme
          const nodeStyle = [
            // Design (Cyan)
            isHovered
              ? 'bg-cyan-500/20 border-cyan-400 text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.45)]'
              : 'bg-gray-800 border-cyan-500/35 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-500/[0.06]',
            // Code (Orange)
            isHovered
              ? 'bg-orange-500/20 border-orange-400 text-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.45)]'
              : 'bg-gray-800 border-orange-500/35 text-orange-400 hover:border-orange-400 hover:bg-orange-500/[0.06]',
            // Strategy (Emerald)
            isHovered
              ? 'bg-emerald-500/20 border-emerald-400 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.45)]'
              : 'bg-gray-800 border-emerald-500/35 text-emerald-400 hover:border-emerald-400 hover:bg-emerald-500/[0.06]',
            // Launch (Purple)
            isHovered
              ? 'bg-purple-500/20 border-purple-400 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.45)]'
              : 'bg-gray-800 border-purple-500/35 text-purple-400 hover:border-purple-400 hover:bg-purple-500/[0.06]'
          ][node.id];

          return (
            <div
              key={node.id}
              className={`absolute ${positionClasses[node.id]} z-20`}
              onMouseEnter={() => setActiveNode(node.id)}
              onMouseLeave={() => setActiveNode(null)}
            >
              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 relative border group shadow-lg ${nodeStyle}`}
              >
                <div className={`transition-all duration-300 ${isHovered ? 'scale-110' : 'opacity-90 group-hover:opacity-100'}`}>
                  {node.icon}
                </div>
                
                {/* Tooltip Label */}
                <div className="absolute top-14 left-1/2 -translate-x-1/2 bg-gray-950 border border-gray-800 text-white text-[9px] font-bold tracking-widest px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-xl pointer-events-none uppercase">
                  {node.title}
                </div>
              </motion.button>
            </div>
          );
        })}
      </div>

      {/* Lower Detail Card Display - Cleanly positioned below the circle */}
      <div className="w-full min-h-[145px] z-20 mt-8">
        <AnimatePresence mode="wait">
          {current ? (
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="bg-gray-950/90 backdrop-blur-md rounded-2xl p-4 border border-gray-800 shadow-2xl relative overflow-hidden h-full"
              style={{
                borderColor: `rgba(${current.id === 0 ? '6,182,212' : current.id === 1 ? '249,115,22' : current.id === 2 ? '16,185,129' : '168,85,247'}, 0.25)`
              }}
            >
              {/* Subtle top indicator bar */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${current.color}`} />
              
              <h5 className={`text-xs font-bold uppercase tracking-wider mb-1 ${current.labelColor}`}>
                {current.metric} Excellence
              </h5>
              <p className="text-[11px] text-gray-400 leading-relaxed mb-3">
                {current.description}
              </p>
              
              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5">
                {current.tech.map((t) => (
                  <span key={t} className="text-[9px] font-mono font-semibold px-2 py-0.5 bg-gray-900 border border-gray-800 text-gray-300 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="idle-desc"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="bg-gray-950/40 backdrop-blur-sm rounded-2xl p-5 border border-gray-800/40 text-center flex flex-col items-center justify-center h-[145px] relative overflow-hidden group"
            >
              {/* Rainbow flowing gradient border on hover/idle */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500 via-orange-500 via-emerald-500 to-purple-500 animate-gradient" />
              
              <span className="text-[11px] text-gray-400 font-mono tracking-wider mb-2">
                VISUARK SERVICES CORE
              </span>
              <span className="text-[10px] text-gray-500 font-mono tracking-wide">
                Hover outer nodes to scan core capacities
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const About = () => {
  const values = [
    {
      num: '01',
      icon: <Target className="h-6 w-6 text-cyan-400" />,
      title: 'Precision',
      description: 'Every pixel matters, every line of code counts',
      colorClass: 'hover:shadow-[0_20px_40px_rgba(6,182,212,0.15)] hover:border-cyan-400/60 border-cyan-500/20',
      iconBg: 'bg-cyan-500/10 group-hover:bg-cyan-500/20',
      labelColor: 'text-cyan-400',
      glowColor: 'bg-cyan-400/5',
      barColor: 'bg-cyan-400'
    },
    {
      num: '02',
      icon: <Users className="h-6 w-6 text-orange-400" />,
      title: 'Collaboration',
      description: 'We work closely with clients to bring visions to life',
      colorClass: 'hover:shadow-[0_20px_40px_rgba(249,115,22,0.15)] hover:border-orange-400/60 border-orange-500/20',
      iconBg: 'bg-orange-500/10 group-hover:bg-orange-500/20',
      labelColor: 'text-orange-400',
      glowColor: 'bg-orange-400/5',
      barColor: 'bg-orange-400'
    },
    {
      num: '03',
      icon: <Award className="h-6 w-6 text-green-400" />,
      title: 'Excellence',
      description: 'Delivering exceptional quality in every project',
      colorClass: 'hover:shadow-[0_20px_40px_rgba(34,197,94,0.15)] hover:border-green-400/60 border-emerald-500/20',
      iconBg: 'bg-green-500/10 group-hover:bg-green-500/20',
      labelColor: 'text-green-400',
      glowColor: 'bg-green-400/5',
      barColor: 'bg-green-400'
    },
    {
      num: '04',
      icon: <Zap className="h-6 w-6 text-yellow-400" />,
      title: 'Innovation',
      description: 'Staying ahead with cutting-edge technologies',
      colorClass: 'hover:shadow-[0_20px_40px_rgba(234,179,8,0.15)] hover:border-yellow-400/60 border-yellow-500/20',
      iconBg: 'bg-yellow-500/10 group-hover:bg-yellow-500/20',
      labelColor: 'text-yellow-400',
      glowColor: 'bg-yellow-400/5',
      barColor: 'bg-yellow-400'
    }
  ];

  const missionPoints = [
    {
      title: 'Anchored Quality',
      description: 'We maintain strict precision in design alignments and code optimization.',
      icon: <ShieldCheck className="h-5 w-5 text-cyan-400" />,
      colorClass: 'text-cyan-400 border-cyan-500/30',
      bgGlow: 'bg-cyan-500/[0.04]',
      hoverBorder: 'hover:border-cyan-400/50 border-cyan-500/20',
      leftBar: 'bg-cyan-400',
      iconBg: 'bg-cyan-500/10'
    },
    {
      title: 'Agile Implementation',
      description: 'Iterative, collaborative sprints to deliver updates quickly and transparently.',
      icon: <Zap className="h-5 w-5 text-orange-400" />,
      colorClass: 'text-orange-400 border-orange-500/30',
      bgGlow: 'bg-orange-500/[0.04]',
      hoverBorder: 'hover:border-orange-400/50 border-orange-500/20',
      leftBar: 'bg-orange-400',
      iconBg: 'bg-orange-500/10'
    },
    {
      title: 'Scalable Systems',
      description: 'Clean backend architectures designed to handle growth and custom features.',
      icon: <Cpu className="h-5 w-5 text-emerald-400" />,
      colorClass: 'text-emerald-400 border-emerald-500/30',
      bgGlow: 'bg-emerald-500/[0.04]',
      hoverBorder: 'hover:border-emerald-400/50 border-emerald-500/20',
      leftBar: 'bg-emerald-400',
      iconBg: 'bg-emerald-500/10'
    }
  ];

  const leaders = [
    {
      name: 'Neeraj Kumhar',
      role: 'Founder',
      initials: 'NK',
      colorClass: 'hover:shadow-[0_20px_40px_rgba(6,182,212,0.15)] hover:border-cyan-400/60 border-cyan-500/20',
      glowColor: 'bg-cyan-400/5',
      iconBg: 'bg-cyan-500/10 group-hover:bg-cyan-500/20',
      labelColor: 'text-cyan-400',
      borderColor: 'border-cyan-500/30',
      avatarGradient: 'from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30 group-hover:border-cyan-400/80',
      description: "Visionary strategist defining Visuark's core direction and aesthetic design standards."
    },
    {
      name: 'Sunil Sharma',
      role: 'CEO',
      initials: 'SS',
      colorClass: 'hover:shadow-[0_20px_40px_rgba(249,115,22,0.15)] hover:border-orange-400/60 border-orange-500/20',
      glowColor: 'bg-orange-400/5',
      iconBg: 'bg-orange-500/10 group-hover:bg-orange-500/20',
      labelColor: 'text-orange-400',
      borderColor: 'border-orange-500/30',
      avatarGradient: 'from-orange-500/20 to-amber-500/20 text-orange-400 border-orange-500/30 group-hover:border-orange-400/80',
      description: 'Operations driver scaling engineering teams and executing client transformation goals.'
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

        {/* Mission and Interactive Dashboard Row */}
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
            <div className="space-y-4">
              {missionPoints.map((point, index) => (
                <motion.div 
                  key={index} 
                  whileHover={{ x: 6 }}
                  className={`flex items-start space-x-4 p-4 rounded-2xl bg-gray-900/40 backdrop-blur-sm border transition-all duration-300 group cursor-pointer relative overflow-hidden ${point.hoverBorder}`}
                >
                  {/* Left indicator bar */}
                  <div className={`absolute left-0 top-0 bottom-0 w-[4px] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center ${point.leftBar}`} />

                  {/* Subtle hover background highlight */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${point.bgGlow}`} />
                  
                  <div className={`mt-0.5 flex items-center justify-center w-9 h-9 rounded-xl border transition-all duration-300 group-hover:scale-110 shadow-sm relative z-10 ${point.iconBg} ${point.colorClass}`}>
                    {point.icon}
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-white font-bold text-base tracking-wide group-hover:text-white transition-colors">{point.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed mt-0.5">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Interactive Technology System Widget */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center justify-center w-full min-h-[460px] pb-16 lg:pb-0"
          >
            <InteractiveHub />
          </motion.div>
        </div>

        {/* Leadership Team Section */}
        <div className="mb-20 sm:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-extrabold text-white mb-4">Leadership Team</h3>
            <p className="text-gray-400 text-sm max-w-xl mx-auto">
              Meet the minds driving innovation, engineering excellence, and digital transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className={`bg-gray-800/80 backdrop-blur-md rounded-3xl p-6 border border-gray-700/70 transition-all duration-500 group cursor-pointer relative overflow-hidden flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 ${leader.colorClass}`}
              >
                {/* Subtle background glow */}
                <div className={`absolute -top-12 -left-12 w-24 h-24 rounded-full blur-2xl pointer-events-none transition-opacity duration-500 opacity-50 group-hover:opacity-100 ${leader.glowColor}`} />

                {/* Avatar Placeholder */}
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center font-mono text-2xl font-bold tracking-wider border-2 transition-all duration-500 shadow-inner shrink-0 bg-gray-950 ${leader.avatarGradient}`}>
                  {leader.initials}
                </div>

                <div className="text-center md:text-left relative z-10 flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h4 className="text-xl font-bold text-white tracking-wide group-hover:text-white transition-colors">{leader.name}</h4>
                    <span className={`inline-block text-xs font-mono font-bold tracking-widest uppercase border px-2 py-0.5 rounded-full mt-1 md:mt-0 max-w-fit mx-auto md:mx-0 ${leader.borderColor} ${leader.labelColor}`}>
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

        {/* Value Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-12">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              viewport={{ once: true, margin: "-30px" }}
              whileHover={{ y: -8 }}
              className={`bg-gray-800/80 backdrop-blur-md rounded-2xl p-7 border border-gray-700/70 transition-all duration-500 group cursor-pointer relative overflow-hidden ${value.colorClass}`}
            >
              {/* Futuristic Number Badge */}
              <span className="absolute top-4 right-4 text-xs font-mono font-bold text-gray-600/40 select-none group-hover:text-gray-500/70 transition-colors duration-300">
                {value.num}
              </span>

              {/* Inner subtle glow blob */}
              <div className={`absolute -top-12 -left-12 w-24 h-24 rounded-full blur-2xl pointer-events-none transition-opacity duration-500 opacity-50 group-hover:opacity-100 ${value.glowColor}`} />

              <div className="flex justify-center mb-5">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-inner ${value.iconBg}`}>
                  {value.icon}
                </div>
              </div>
              
              <h4 className="text-xl font-bold text-white mb-3 tracking-wide group-hover:text-white transition-colors">{value.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>

              {/* Expanding Bottom Glow Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-transparent flex justify-center">
                <div className={`h-full w-0 group-hover:w-full transition-all duration-500 ease-out ${value.barColor}`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;