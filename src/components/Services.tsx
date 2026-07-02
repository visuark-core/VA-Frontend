import React from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Code, Palette, Video, Smartphone } from 'lucide-react';

const Services = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollProgress(latest);
  });

  // Calculate organization factor from 0 (scattered) to 1 (neatly aligned/organized)
  // Transition occurs between scroll progress 0.15 and 0.55
  const startScroll = 0.15;
  const endScroll = 0.55;
  const factor = Math.min(Math.max((scrollProgress - startScroll) / (endScroll - startScroll), 0), 1);

  const services = [
    {
      id: 0,
      icon: <Code className="h-7 w-7 text-cyan-400" />,
      company: 'VISUARK DEV',
      title: 'Web Development',
      subtitle: 'Scalable & High Performance',
      tags: ['React & Next.js', 'E-commerce', 'SEO Friendly'],
      activeProjects: 'Active Projects: 12',
      colorClass: 'text-cyan-400',
      bgGlow: 'hover:shadow-[0_0_40px_rgba(6,182,212,0.25)]',
      bgBacking: 'bg-cyan-500',
      borderClass: 'border-cyan-500/30'
    },
    {
      id: 1,
      icon: <Palette className="h-7 w-7 text-orange-400" />,
      company: 'VISUARK BRANDING',
      title: 'Graphic Design',
      subtitle: 'Brand Story & Identities',
      tags: ['Brand Identity', 'Print & Digital', 'Packaging'],
      activeProjects: 'Completed: 45+',
      colorClass: 'text-orange-400',
      bgGlow: 'hover:shadow-[0_0_40px_rgba(249,115,22,0.25)]',
      bgBacking: 'bg-orange-500',
      borderClass: 'border-orange-500/30'
    },
    {
      id: 2,
      icon: <Video className="h-7 w-7 text-green-400" />,
      company: 'VISUARK MEDIA',
      title: 'Video Editing',
      subtitle: 'Cinematic Storytelling',
      tags: ['Commercial Videos', 'Social Media', 'Color Grading'],
      activeProjects: '180+ Produced',
      colorClass: 'text-green-400',
      bgGlow: 'hover:shadow-[0_0_40px_rgba(34,197,94,0.25)]',
      bgBacking: 'bg-green-500',
      borderClass: 'border-green-500/30'
    },
    {
      id: 3,
      icon: <Smartphone className="h-7 w-7 text-purple-400" />,
      company: 'VISUARK DESIGN',
      title: 'UI/UX Design',
      subtitle: 'User Centered Journeys',
      tags: ['User Research', 'Wireframes', 'Prototyping'],
      activeProjects: 'Active Projects: 8',
      colorClass: 'text-purple-400',
      bgGlow: 'hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]',
      bgBacking: 'bg-purple-500',
      borderClass: 'border-purple-500/30'
    }
  ];

  // Coordinates mapping
  const getTargets = (id: number) => {
    if (isMobile) {
      // Mobile targets: scattered overlapping stack -> organized vertical stack
      const scatterCoords = [
        { rotate: 10, x: 15, y: -20 },
        { rotate: -12, x: -20, y: 0 },
        { rotate: 8, x: 18, y: 15 },
        { rotate: -9, x: -12, y: -10 }
      ];
      const organizeCoords = [
        { rotate: 0, x: 0, y: -270 },
        { rotate: 0, x: 0, y: -90 },
        { rotate: 0, x: 0, y: 90 },
        { rotate: 0, x: 0, y: 270 }
      ];
      return { scatter: scatterCoords[id], organize: organizeCoords[id] };
    } else {
      // Desktop targets: scattered overlapping stack -> organized horizontal layout
      const scatterCoords = [
        { rotate: 12, x: 26, y: -16 },
        { rotate: -16, x: -30, y: 12 },
        { rotate: 10, x: 18, y: 22 },
        { rotate: -12, x: -16, y: -22 }
      ];
      const organizeCoords = [
        { rotate: 0, x: -460, y: 0 },
        { rotate: 0, x: -150, y: 0 },
        { rotate: 0, x: 150, y: 0 },
        { rotate: 0, x: 460, y: 0 }
      ];
      return { scatter: scatterCoords[id], organize: organizeCoords[id] };
    }
  };

  return (
    <section 
      id="services" 
      ref={containerRef} 
      className="py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden"
    >
      {/* Background glowing decorations */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Header Container */}
      <div className="container mx-auto px-4 relative z-10 mb-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Our <span className="text-cyan-400">Services</span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            We design and build premium digital products that scale your business. Watch the cards organize as you scroll down.
          </p>
        </div>
      </div>

      {/* Cards Canvas Container */}
      <div className="relative w-full z-10 flex items-center justify-center h-[760px] lg:h-[450px]">
        <div className="relative w-full max-w-6xl h-full flex items-center justify-center">
          {services.map((service) => {
            const targets = getTargets(service.id);
            const currentRotate = targets.scatter.rotate + (targets.organize.rotate - targets.scatter.rotate) * factor;
            const currentX = targets.scatter.x + (targets.organize.x - targets.scatter.x) * factor;
            const currentY = targets.scatter.y + (targets.organize.y - targets.scatter.y) * factor;

            return (
              <motion.div
                key={service.id}
                style={{
                  x: currentX,
                  y: currentY,
                  rotate: currentRotate,
                  zIndex: 10 + service.id
                }}
                className={`absolute cursor-pointer rounded-[28px] transition-shadow duration-300 ${service.bgGlow}`}
                whileHover={{ scale: 1.04, zIndex: 50 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              >
                {/* Colored Layer Behind */}
                <div className={`absolute inset-0 rounded-[28px] ${service.bgBacking} translate-y-3.5 translate-x-1.5 flex items-end justify-center pb-2.5 text-[10px] font-extrabold uppercase tracking-widest text-gray-900 shadow-md`}>
                  {service.activeProjects}
                </div>

                {/* Front Card Panel */}
                <div className={`relative bg-gray-800 border border-gray-700 rounded-[28px] p-6 flex flex-col justify-between h-[240px] w-[280px] sm:w-[320px] z-10 transition-all duration-300`}>
                  {/* Header logo row */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-gray-500 uppercase">
                      {service.company}
                    </span>
                    <div className={`p-2.5 rounded-xl bg-gray-900 border border-gray-700 shadow-inner ${service.colorClass}`}>
                      {service.icon}
                    </div>
                  </div>

                  {/* Title Info */}
                  <div className="my-3 text-left">
                    <h4 className="text-xl font-extrabold text-white leading-tight">
                      {service.title}
                    </h4>
                    <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Bottom Tag Pills */}
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {service.tags.map((tag) => (
                      <span key={tag} className="text-[9px] font-mono font-bold px-2.5 py-0.5 bg-gray-900/80 border border-gray-700 text-gray-300 rounded-full shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;