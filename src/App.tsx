// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Careers from './pages/Careers';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';
import LoadingSpinner from './components/LoadingSpinner';
import Referral from './pages/Referral';
// Temporary: use WebDevelopmentFixed while repairing original WebDevelopment.tsx
import WebDevelopment from './pages/WebDevelopmentFixed';
import GraphicDesign from './pages/GraphicDesign';
import VideoEditing from './pages/VideoEditing';
import UIUXDesign from './pages/UIUXDesign';

function App() {
  const [loading, setLoading] = React.useState(true);
  const location = window.location.pathname;
  React.useEffect(() => {
    setLoading(true);
    // Wait for next paint, then hide loader
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, [location]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-gray-900">
          <ScrollToTop />
          <Header />
          <main>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/web-development" element={<WebDevelopment />} />
                <Route path="/services/graphic-design" element={<GraphicDesign />} />
                <Route path="/services/video-editing" element={<VideoEditing />} />
                <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/referral" element={<Referral />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;