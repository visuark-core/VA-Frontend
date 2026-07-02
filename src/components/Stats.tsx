import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Coffee, Clock } from 'lucide-react';

interface CounterProps {
  value: string;
  trigger: boolean;
}

const Counter = ({ value, trigger }: CounterProps) => {
  const numericValue = parseInt(value.replace(/\D/g, ''), 10);
  const suffix = value.replace(/[0-9]/g, '');
  const [count, setCount] = useState(0);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const end = numericValue;

    const step = () => {
      // Smooth ease-out increment
      const increment = Math.ceil((end - start) * 0.12);
      start += increment;
      if (start >= end) {
        setCount(end);
        if (animationRef.current) cancelAnimationFrame(animationRef.current);
      } else {
        setCount(start);
        animationRef.current = requestAnimationFrame(step);
      }
    };

    animationRef.current = requestAnimationFrame(step);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [trigger, numericValue]);

  return (
    <span>
      {trigger ? count : 0}
      {suffix}
    </span>
  );
};

const Stats = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  const stats = [
    {
      icon: <Users className="h-7 w-7 text-cyan-500" />,
      number: '50+',
      label: 'Happy Clients',
      description: 'Satisfied customers worldwide',
      colorClass: 'hover:shadow-[0_20px_40px_rgba(6,182,212,0.15)] hover:border-cyan-400/60',
      iconBg: 'bg-cyan-500/10 group-hover:bg-cyan-500/20',
      labelColor: 'text-cyan-500',
      glowColor: 'bg-cyan-400/5'
    },
    {
      icon: <Award className="h-7 w-7 text-orange-500" />,
      number: '150+',
      label: 'Projects Completed',
      description: 'Successful deliveries',
      colorClass: 'hover:shadow-[0_20px_40px_rgba(249,115,22,0.15)] hover:border-orange-400/60',
      iconBg: 'bg-orange-500/10 group-hover:bg-orange-500/20',
      labelColor: 'text-orange-500',
      glowColor: 'bg-orange-400/5'
    },
    {
      icon: <Coffee className="h-7 w-7 text-green-500" />,
      number: '100+',
      label: 'Cups of Coffee',
      description: 'Fuel for creativity',
      colorClass: 'hover:shadow-[0_20px_40px_rgba(34,197,94,0.15)] hover:border-green-400/60',
      iconBg: 'bg-green-500/10 group-hover:bg-green-500/20',
      labelColor: 'text-green-500',
      glowColor: 'bg-green-400/5'
    },
    {
      icon: <Clock className="h-7 w-7 text-purple-500" />,
      number: '2+',
      label: 'Years Experience',
      description: 'In digital excellence',
      colorClass: 'hover:shadow-[0_20px_40px_rgba(168,85,247,0.15)] hover:border-purple-400/60',
      iconBg: 'bg-purple-500/10 group-hover:bg-purple-500/20',
      labelColor: 'text-purple-500',
      glowColor: 'bg-purple-400/5'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 border-y border-gray-700/30 relative overflow-hidden">
      {/* Subtle Background Highlights */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              onViewportEnter={() => setHasAnimated(true)}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8 }}
              className={`text-center bg-gray-800/80 backdrop-blur-md rounded-2xl p-8 border border-gray-700/70 transition-all duration-500 group cursor-pointer relative overflow-hidden ${stat.colorClass}`}
            >
              {/* Inner subtle glow blob */}
              <div className={`absolute -top-12 -left-12 w-24 h-24 rounded-full blur-2xl pointer-events-none transition-opacity duration-500 opacity-50 group-hover:opacity-100 ${stat.glowColor}`} />

              {/* Icon Container with custom bg */}
              <div className="flex justify-center mb-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-inner ${stat.iconBg}`}>
                  {stat.icon}
                </div>
              </div>

              {/* Stat Number */}
              <h3 className="text-4xl xs:text-5xl font-extrabold text-white mb-2 tracking-tight">
                <Counter value={stat.number} trigger={hasAnimated} />
              </h3>

              {/* Stat Label */}
              <h4 className={`text-lg font-bold uppercase tracking-wider mb-2 ${stat.labelColor}`}>
                {stat.label}
              </h4>

              {/* Stat Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;