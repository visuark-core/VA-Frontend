import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Anchor, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // --- THIS IS THE ONLY SECTION THAT HAS BEEN MODIFIED ---
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Referral', path: '/referral' }, // <-- ADDED THIS LINE
    { name: 'Contact', path: '/contact' }
  ];
  // ----------------------------------------------------

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent lg:bg-transparent bg-gray-900/95 backdrop-blur-md shadow-lg'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: 45, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Anchor className="h-8 w-8 text-cyan-400" />
            </motion.div>
            <span className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
              Visuark
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium ${
                  location.pathname === item.path ? 'text-cyan-400' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="hidden lg:block bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:from-cyan-300 hover:to-blue-400 transform hover:scale-105 transition-all duration-300"
          >
            Get Started
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white hover:text-cyan-400 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 pb-4 border-t border-gray-700"
            >
              <div className="flex flex-col space-y-4 pt-4 px-4 rounded-xl shadow-xl backdrop-blur-md bg-gray-900/70">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium ${
                      location.pathname === item.path ? 'text-cyan-400' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-2 rounded-full font-semibold text-center mt-4"
                >
                  Get Started
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;