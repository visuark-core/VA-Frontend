import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const location = useLocation();
  const isBlogPage = location.pathname.startsWith('/blog');
  const socialLinks = [
    // { icon: <Facebook className="h-5 w-5" />, href: '#', label: 'Facebook' },
    // { icon: <Twitter className="h-5 w-5" />, href: '#', label: 'Twitter' },
    { icon: <Instagram className="h-5 w-5" />, href: 'https://www.instagram.com/visuark.io/', label: 'Instagram' },
    { icon: <Linkedin className="h-5 w-5" />, href: 'https://www.linkedin.com/company/visuark-media', label: 'LinkedIn' }
  ];

  return (
    <footer className={`transition-colors duration-300 ${isBlogPage ? 'bg-slate-100 border-t border-slate-200/80' : 'bg-gray-950 border-t border-gray-800'}`}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img 
                src="/img/logo.png" 
                alt="Visuark Logo" 
                className="h-10 sm:h-12 object-contain"
              />
            </Link>
            <p className={`mb-4 text-sm sm:text-base leading-relaxed ${isBlogPage ? 'text-slate-600' : 'text-gray-400'}`}>
              Anchoring your digital dreams to reality through innovative design and development.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors duration-200 ${isBlogPage ? 'text-slate-500 hover:text-cyan-600' : 'text-gray-400 hover:text-cyan-400'}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className={`font-bold mb-4 uppercase tracking-wider text-sm ${isBlogPage ? 'text-slate-900' : 'text-white'}`}>Services</h4>
            <ul className={`space-y-2 text-sm ${isBlogPage ? 'text-slate-600' : 'text-gray-400'}`}>
              <li><Link to="/services#web-development" className={isBlogPage ? 'hover:text-cyan-600 transition-colors' : 'hover:text-cyan-400 transition-colors'}>Web Development</Link></li>
              <li><Link to="/services#graphic-design" className={isBlogPage ? 'hover:text-cyan-600 transition-colors' : 'hover:text-cyan-400 transition-colors'}>Graphic Design</Link></li>
              <li><Link to="/services#video-editing" className={isBlogPage ? 'hover:text-cyan-600 transition-colors' : 'hover:text-cyan-400 transition-colors'}>Video Editing</Link></li>
              <li><Link to="/services#ui-ux-design" className={isBlogPage ? 'hover:text-cyan-600 transition-colors' : 'hover:text-cyan-400 transition-colors'}>UI/UX Design</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className={`font-bold mb-4 uppercase tracking-wider text-sm ${isBlogPage ? 'text-slate-900' : 'text-white'}`}>Company</h4>
            <ul className={`space-y-2 text-sm ${isBlogPage ? 'text-slate-600' : 'text-gray-400'}`}>
              <li><Link to="/about" className={isBlogPage ? 'hover:text-cyan-600 transition-colors' : 'hover:text-cyan-400 transition-colors'}>About Us</Link></li>
              <li><Link to="/portfolio" className={isBlogPage ? 'hover:text-cyan-600 transition-colors' : 'hover:text-cyan-400 transition-colors'}>Portfolio</Link></li>
              <li><Link to="/blog" className={isBlogPage ? 'hover:text-cyan-600 transition-colors' : 'hover:text-cyan-400 transition-colors'}>Blog</Link></li>
              <li><Link to="/careers" className={isBlogPage ? 'hover:text-cyan-600 transition-colors' : 'hover:text-cyan-400 transition-colors'}>Careers</Link></li>
              <li><Link to="/contact" className={isBlogPage ? 'hover:text-cyan-600 transition-colors' : 'hover:text-cyan-400 transition-colors'}>Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className={`font-bold mb-4 uppercase tracking-wider text-sm ${isBlogPage ? 'text-slate-900' : 'text-white'}`}>Contact</h4>
            <ul className={`space-y-2 text-sm ${isBlogPage ? 'text-slate-600' : 'text-gray-400'}`}>
              <li>contact@visuark.com</li>
              <li>+91 78785-39633</li>
              <li>+91 8619949455</li>
              <li>Rajasthan , IND</li>
            </ul>
          </div>
        </div>

        <div className={`mt-12 pt-8 flex flex-col md:flex-row justify-between items-center border-t ${isBlogPage ? 'border-slate-200' : 'border-gray-800'}`}>
          <p className={`flex items-center text-sm ${isBlogPage ? 'text-slate-500' : 'text-gray-400'}`}>
            © 2024 Visuark. Made with <Heart className="h-4 w-4 text-red-400 mx-1" /> by our team.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
            <Link to="/privacy" className={isBlogPage ? 'text-slate-500 hover:text-cyan-600 transition-colors' : 'text-gray-400 hover:text-cyan-400 transition-colors'}>Privacy Policy</Link>
            <Link to="/terms" className={isBlogPage ? 'text-slate-500 hover:text-cyan-600 transition-colors' : 'text-gray-400 hover:text-cyan-400 transition-colors'}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;