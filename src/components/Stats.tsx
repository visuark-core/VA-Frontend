import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Coffee, Clock } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: <Users className="h-8 w-8 text-cyan-400" />,
      number: '500+',
      label: 'Happy Clients',
      description: 'Satisfied customers worldwide'
    },
    {
      icon: <Award className="h-8 w-8 text-orange-400" />,
      number: '750+',
      label: 'Projects Completed',
      description: 'Successful deliveries'
    },
    {
      icon: <Coffee className="h-8 w-8 text-green-400" />,
      number: '10,000+',
      label: 'Cups of Coffee',
      description: 'Fuel for creativity'
    },
    {
      icon: <Clock className="h-8 w-8 text-purple-400" />,
      number: '6+',
      label: 'Years Experience',
      description: 'In digital excellence'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-gray-800 to-gray-900">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-gray-800/50 rounded-lg p-8 border border-gray-700 hover:border-cyan-400 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <h3 className="text-4xl font-bold text-white mb-2">{stat.number}</h3>
              <h4 className="text-xl font-semibold text-cyan-400 mb-2">{stat.label}</h4>
              <p className="text-gray-400">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;