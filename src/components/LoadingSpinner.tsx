import React from 'react';
import { motion } from 'framer-motion';
import { Anchor } from 'lucide-react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="relative"
      >
        <Anchor className="h-16 w-16 text-cyan-400" />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute inset-0 border-2 border-cyan-400 rounded-full opacity-30"
        />
      </motion.div>
    </div>
  );
};

export default LoadingSpinner;