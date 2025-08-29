import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Anchor } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const NotFound = () => {
  return (
    <PageTransition>
      <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Animated 404 */}
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="mb-8"
            >
              <h1 className="text-9xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-orange-400">
                404
              </h1>
            </motion.div>

            {/* Floating Anchor */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="mb-8"
            >
              <Anchor className="h-24 w-24 text-cyan-400 mx-auto opacity-50" />
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Page Not Found
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Looks like you've sailed into uncharted waters. The page you're looking for 
              doesn't exist or has been moved to a new location.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:from-cyan-300 hover:to-blue-400 transform hover:scale-105 transition-all duration-300"
              >
                <Home className="h-5 w-5" />
                <span>Go Home</span>
              </Link>

              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center space-x-2 border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-full font-semibold hover:border-cyan-400 hover:text-cyan-400 transform hover:scale-105 transition-all duration-300"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Go Back</span>
              </button>
            </div>

            {/* Helpful Links */}
            <div className="mt-16">
              <h3 className="text-xl font-semibold text-white mb-6">
                Or try one of these popular pages:
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { name: 'About Us', path: '/about' },
                  { name: 'Services', path: '/services' },
                  { name: 'Portfolio', path: '/portfolio' },
                  { name: 'Contact', path: '/contact' },
                  { name: 'Blog', path: '/blog' }
                ].map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;