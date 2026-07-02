import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Target, Users, Award, Zap, Heart, Globe, Lightbulb, Shield, Eye } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const About = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 65%", "end 65%"]
  });

  const valuesRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: valuesScrollProgress } = useScroll({
    target: valuesRef,
    offset: ["start end", "end start"]
  });

  const [factor, setFactor] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useMotionValueEvent(valuesScrollProgress, "change", (latest) => {
    const min = 0.2;
    const max = 0.6;
    const current = Math.min(Math.max((latest - min) / (max - min), 0), 1);
    setFactor(current);
  });

  const scatterCoords = [
    { x: -30, y: -20, rotate: -12 },
    { x: 25, y: -45, rotate: 8 },
    { x: -45, y: 15, rotate: -6 },
    { x: 35, y: 30, rotate: 15 },
    { x: -15, y: -60, rotate: -8 },
    { x: 50, y: -10, rotate: 12 },
    { x: -60, y: -30, rotate: -15 },
    { x: 10, y: 45, rotate: 5 }
  ];

  const getCardStyle = (index: number) => {
    const scatter = scatterCoords[index] || { x: 0, y: 0, rotate: 0 };
    
    let targetX = 0;
    let targetY = 0;

    if (isMobile) {
      targetX = 0;
      targetY = (index - 3.5) * 210;
    } else {
      const row = Math.floor(index / 4);
      const col = index % 4;
      targetX = (col - 1.5) * 280;
      targetY = (row - 0.5) * 240;
    }

    const currentX = scatter.x + (targetX - scatter.x) * factor;
    const currentY = scatter.y + (targetY - scatter.y) * factor;
    const currentRotate = scatter.rotate * (1 - factor);

    return {
      x: currentX,
      y: currentY,
      rotate: currentRotate,
      zIndex: Math.floor(10 + (1 - factor) * (8 - index))
    };
  };

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
        <section className="py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
          {/* Background glow effects */}
          <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
              {/* Left Column - Mission & Vision Cards */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:col-span-7 space-y-6"
              >
                {/* Mission Card */}
                <div className="bg-gray-900/40 backdrop-blur-md border border-gray-800 rounded-3xl p-6 sm:p-8 hover:border-cyan-500/30 hover:bg-gray-900/60 transition-all duration-300 relative group overflow-hidden shadow-xl">
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/10 transition-all duration-300" />
                  
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl text-cyan-400">
                      <Target className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white">Our Mission</h3>
                  </div>
                  
                  <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                    <p>
                      At Visuark, we anchor your digital dreams to reality through innovative design
                      and development solutions. Our mission is to help businesses navigate the digital
                      landscape with confidence and creativity.
                    </p>
                    <p>
                      We combine technical expertise with artistic vision to create digital experiences
                      that not only look amazing but also drive results. From concept to launch, we're
                      your trusted partner in digital transformation.
                    </p>
                  </div>
                </div>

                {/* Vision Card */}
                <div className="bg-gray-900/40 backdrop-blur-md border border-gray-800 rounded-3xl p-6 sm:p-8 hover:border-orange-500/30 hover:bg-gray-900/60 transition-all duration-300 relative group overflow-hidden shadow-xl">
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-orange-500/5 rounded-full blur-3xl group-hover:bg-orange-500/10 transition-all duration-300" />

                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-orange-500/10 border border-orange-500/20 rounded-2xl text-orange-400">
                      <Eye className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white">Our Vision</h3>
                  </div>

                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    To be the world's most trusted digital agency, known for creating
                    transformative digital experiences that inspire, engage, and deliver results. We aspire to set the standard for quality, precision, and performance globally.
                  </p>
                </div>
              </motion.div>

              {/* Right Column - Premium Styled Image Frame */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:col-span-5 relative"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  className="bg-gray-900/40 backdrop-blur-md border border-gray-800 rounded-[32px] p-4 shadow-2xl relative group overflow-hidden"
                >
                  {/* Decorative neon gradient glow */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-orange-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Founders Badge */}
                  <div className="absolute top-8 left-8 z-10 px-3.5 py-1.5 bg-gray-950/80 border border-gray-800/80 text-cyan-400 text-xs font-mono font-bold tracking-widest uppercase rounded-full backdrop-blur-md shadow-lg">
                    THE FOUNDERS
                  </div>

                  <div className="relative rounded-2xl overflow-hidden border border-gray-700/60 bg-gray-950 shadow-inner group-hover:border-cyan-500/50 transition-all duration-500">
                    {/* Color overlay to blend/cool image */}
                    <div className="absolute inset-0 bg-cyan-500/5 mix-blend-color pointer-events-none" />
                    <img
                      src="/img/Visuark Team.png"
                      alt="Neeraj and Sunil - Visuark Team"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section ref={valuesRef} className="py-24 bg-gradient-to-br from-gray-950 to-gray-900 overflow-hidden relative">
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

            {/* Scroll-organizing Cards Deck */}
            <div className="relative w-full flex items-center justify-center h-[1750px] lg:h-[560px] overflow-visible">
              {values.map((value, index) => {
                const style = getCardStyle(index);
                return (
                  <motion.div
                    key={value.title}
                    style={{
                      x: style.x,
                      y: style.y,
                      rotate: style.rotate,
                      zIndex: style.zIndex,
                    }}
                    className="absolute w-[260px] h-[190px] bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-800 hover:border-cyan-400/50 shadow-2xl transition-colors duration-300 flex flex-col items-center text-center justify-center cursor-pointer"
                  >
                    <div className="mb-3 flex justify-center text-cyan-400">{value.icon}</div>
                    <h3 className="text-base md:text-lg font-bold text-white mb-2">{value.title}</h3>
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{value.description}</p>
                  </motion.div>
                );
              })}
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

            <div ref={timelineRef} className="relative">
              {/* Gray vertical track line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1.5 h-full rounded-full bg-gray-800/60" />
              
              {/* Active vertical line drawing itself with scroll */}
              <motion.div 
                style={{ scaleY: scrollYProgress }}
                className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1.5 h-full rounded-full bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 shadow-[0_0_15px_rgba(34,211,238,0.5)] origin-top"
              />
              
              <div className="flex flex-col gap-12 md:gap-24">
                {milestones.map((milestone, index) => (
                  <div
                    key={`${milestone.year}-${milestone.event}`}
                    className={
                      `relative flex flex-col md:flex-row items-center ` +
                      (index % 2 === 0 ? 'md:justify-start' : 'md:justify-end')
                    }
                  >
                    {/* Horizontal Branch Line (Desktop only) */}
                    <motion.div 
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      style={{ originX: index % 2 === 0 ? 1 : 0 }}
                      className={
                        `hidden md:block absolute top-1/2 -translate-y-1/2 h-1 w-8 lg:w-16 bg-gradient-to-r ` +
                        (index % 2 === 0 
                          ? 'right-1/2 from-cyan-400/50 to-transparent rotate-180' 
                          : 'left-1/2 from-blue-500/50 to-transparent')
                      }
                    />

                    {/* Timeline Node (The perfection node) */}
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ type: 'spring', stiffness: 300, damping: 15, delay: 0.2 }}
                      className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 items-center justify-center z-10"
                    >
                      <div className="w-4 h-4 bg-gray-900 rounded-full border-4 border-cyan-400 shadow-[0_0_10px_#22d3ee]"></div>
                      <div className="absolute w-8 h-8 rounded-full bg-cyan-400/20 animate-ping"></div>
                    </motion.div>

                    {/* Event Card */}
                    <div className={
                      `w-full md:w-[45%] lg:w-[42%] ` +
                      (index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12')
                    }>
                      <motion.div 
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 15 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.3 }}
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
                  </div>
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