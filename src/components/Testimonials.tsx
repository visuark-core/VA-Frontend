import React from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Star, Quote, Heart, Award, CheckCircle } from 'lucide-react';

const Testimonials = () => {
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

  const testimonials = [
    {
      id: 0,
      name: 'Sunil Soni',
      role: 'Chief Executive Officer',
      company: 'Satlaa Pvt. Ltd.',
      image: '/img/Sunil.png',
      content: 'Hi Neeraj, I really liked the design and pitch deck you made. The way you matched it with my brand identity was great. I loved your work and will surely give you more projects with Visuark.',
      rating: 5,
      bgGlow: 'hover:shadow-[0_0_40px_rgba(57,158,210,0.25)]',
      colorClass: 'text-cyan-400'
    },
    {
      id: 1,
      name: 'Dipanshu Verma',
      role: 'Product Manager',
      company: 'Tech Frigate',
      image: '/img/Dipanshu.png',
      content: 'The UI/UX design process was incredibly collaborative and insightful. Visuark transformed our complex requirements into an intuitive and beautiful interface that our users love. We saw a 40% increase in user engagement.',
      rating: 5,
      bgGlow: 'hover:shadow-[0_0_40px_rgba(57,158,210,0.25)]',
      colorClass: 'text-cyan-400'
    },
    {
      id: 2,
      name: 'Shrutika Sharma',
      role: 'Founder',
      company: 'Sumanglam Tea',
      image: '/img/Shrutika Sharma.jpg',
      content: 'The visuark team for my startup, Tea Brand created a fantastic video the work was truly professional, and the team was incredibly helpful And they completed my work in a short time. Thank you team From Sumanglam tea.',
      rating: 5,
      bgGlow: 'hover:shadow-[0_0_40px_rgba(57,158,210,0.25)]',
      colorClass: 'text-cyan-400'
    }
  ];

  const metrics = [
    {
      icon: <Heart className="h-5 w-5 text-cyan-400" />,
      value: '99%',
      label: 'Client Satisfaction Rate'
    },
    {
      icon: <Award className="h-5 w-5 text-cyan-400" />,
      value: '150+',
      label: 'Projects Delivered Globally'
    },
    {
      icon: <CheckCircle className="h-5 w-5 text-cyan-400" />,
      value: '5.0★',
      label: 'Average Client Rating'
    }
  ];

  // Coordinates mapping for 3 cards in pyramid shape (desktop) or vertical stack (mobile)
  const getTargets = (id: number) => {
    if (isMobile) {
      // Mobile targets: scattered overlapping stack -> organized vertical stack
      const scatterCoords = [
        { rotate: 8, x: 12, y: -15 },
        { rotate: -10, x: -16, y: 5 },
        { rotate: 7, x: 14, y: 10 }
      ];
      const organizeCoords = [
        { rotate: 0, x: 0, y: -310 },
        { rotate: 0, x: 0, y: 0 },
        { rotate: 0, x: 0, y: 310 }
      ];
      return { scatter: scatterCoords[id], organize: organizeCoords[id] };
    } else {
      // Desktop targets: scattered overlapping stack -> organized pyramid shape
      const scatterCoords = [
        { rotate: 10, x: 20, y: -12 },
        { rotate: -14, x: -25, y: 8 },
        { rotate: 8, x: 15, y: 18 }
      ];
      const organizeCoords = [
        { rotate: 0, x: 0, y: -160 },
        { rotate: 0, x: -190, y: 150 },
        { rotate: 0, x: 190, y: 150 }
      ];
      return { scatter: scatterCoords[id], organize: organizeCoords[id] };
    }
  };

  return (
    <section
      id="testimonials"
      ref={containerRef}
      className="py-24 bg-gray-950 relative overflow-hidden"
    >
      {/* Background glowing decorations */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center max-w-6xl mx-auto">

          {/* Left Column - Heading & Trust Metrics */}
          <div className="w-full lg:w-5/12 text-left">
            <span className="text-cyan-400 text-xs font-mono font-bold uppercase tracking-widest bg-cyan-400/10 px-3 py-1 rounded-full">
              Client Stories
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4 mb-6 leading-tight">
              What Our <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Clients Say
              </span>
            </h2>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed">
              We build long-term partnerships based on trust, quality, and exceptional results. Here is what some of our premium clients have to say about working with Visuark.
            </p>

            {/* Metrics cards grid */}
            <div className="space-y-4">
              {metrics.map((metric, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-4 p-4 rounded-2xl bg-gray-800 border border-gray-700 shadow-sm transition-all duration-300 hover:border-cyan-400"
                >
                  <div className="p-3 rounded-xl bg-gray-900 border border-gray-700">
                    {metric.icon}
                  </div>
                  <div>
                    <div className="text-xl font-black text-white">{metric.value}</div>
                    <div className="text-xs text-gray-400 font-medium">{metric.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Cards Deck Canvas */}
          <div className="w-full lg:w-7/12 flex items-center justify-center h-[960px] lg:h-[620px] relative">
            <div className="relative w-full h-full flex items-center justify-center">
              {testimonials.map((testimonial) => {
                const targets = getTargets(testimonial.id);
                const currentRotate = targets.scatter.rotate + (targets.organize.rotate - targets.scatter.rotate) * factor;
                const currentX = targets.scatter.x + (targets.organize.x - targets.scatter.x) * factor;
                const currentY = targets.scatter.y + (targets.organize.y - targets.scatter.y) * factor;

                return (
                  <motion.div
                    key={testimonial.id}
                    style={{
                      x: currentX,
                      y: currentY,
                      rotate: currentRotate,
                      zIndex: 10 + testimonial.id
                    }}
                    className={`absolute cursor-pointer rounded-[28px] transition-shadow duration-300 ${testimonial.bgGlow}`}
                    whileHover={{ scale: 1.04, zIndex: 50 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  >
                    {/* Front Card Panel */}
                    <div className={`relative bg-gray-800 border border-gray-700 rounded-[28px] p-6 flex flex-col justify-between h-[290px] w-[290px] sm:w-[330px] z-10 transition-all duration-300`}>
                      {/* Top Quote */}
                      <div className="flex justify-between items-start">
                        <Quote className={`h-8 w-8 ${testimonial.colorClass} opacity-80`} />
                        <div className="flex items-center">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-3.5 w-3.5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>

                      {/* Content Testimonial */}
                      <p className="text-gray-300 text-xs sm:text-sm my-3 leading-relaxed text-left">
                        "{testimonial.content}"
                      </p>

                      {/* Client Info Row */}
                      <div className="flex items-center mt-auto border-t border-gray-700/60 pt-3">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-10 h-10 rounded-full mr-3 border border-gray-600 object-cover"
                        />
                        <div className="text-left">
                          <h4 className="text-white font-bold text-xs sm:text-sm">{testimonial.name}</h4>
                          <p className="text-gray-400 text-[10px] sm:text-xs">{testimonial.role} at {testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;