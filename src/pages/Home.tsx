import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonials';
import Stats from '../components/Stats';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <PageTransition>
      <Hero />
      <Stats />
      <About />
      <Services />
      <Testimonials />
      <CTA />
      <Contact />
    </PageTransition>
  );
};

export default Home;