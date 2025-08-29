// src/pages/Referral.tsx

import React from 'react';
import { FaGift, FaMoneyBillWave, FaUsers, FaCheckCircle, FaUserCircle, FaBriefcase, FaClipboardList, FaArrowRight } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

const ReferralPage = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Helmet>
        <title>Referral Program | Visuark</title>
        <meta name="description" content="Join the Visuark referral program. Refer a client and earn rewards for successful projects." />
      </Helmet>
      
      <div className="bg-gray-950 text-gray-200 font-sans">
        
        {/* ============== 1. HERO SECTION ============== */}
        <section className="relative bg-gray-900 text-white text-center py-20 sm:py-32 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070&auto=format&fit=crop')" }} 
          ></div>
          <div 
            className="absolute inset-0 bg-gradient-to-b from-gray-950/80 to-gray-950/100"
          ></div>
          <div className="relative container mx-auto px-4">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-cyan-500 to-orange-500 p-4 rounded-full">
                <FaGift className="text-white text-4xl" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Refer a Client & Earn Rewards</h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Help your network discover Visuark's innovative solutions and earn rewards for successful referrals.
            </p>
          </div>
        </section>

        {/* ============== 2. BENEFITS SECTION ============== */}
        <section className="py-16 sm:py-24 bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Referral Benefits</h2>
              <p className="mt-4 text-lg text-gray-400">Earn rewards while helping businesses grow with our innovative solutions.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Benefit Card 1 */}
              <div className="card-hover bg-gray-900 p-8 rounded-xl border border-gray-800 text-center">
                <FaMoneyBillWave className="mx-auto text-cyan-400 text-4xl mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Earn Rewards</h3>
                <p className="text-gray-400">Receive attractive commissions for successful referrals that convert to paying clients.</p>
              </div>
              {/* Benefit Card 2 */}
              <div className="card-hover bg-gray-900 p-8 rounded-xl border border-gray-800 text-center">
                <FaUsers className="mx-auto text-cyan-400 text-4xl mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Help Your Network</h3>
                <p className="text-gray-400">Connect your contacts with high-quality technology solutions that can transform their business.</p>
              </div>
              {/* Benefit Card 3 */}
              <div className="card-hover bg-gray-900 p-8 rounded-xl border border-gray-800 text-center">
                <FaCheckCircle className="mx-auto text-cyan-400 text-4xl mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Easy Process</h3>
                <p className="text-gray-400">Simple referral process with tracking and transparent reward structure.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* ============== 3. HOW IT WORKS SECTION ============== */}
        <section className="py-16 sm:py-24 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">How It Works</h2>
              <p className="mt-4 text-lg text-gray-400">Simple steps to start earning through referrals.</p>
            </div>
            <div className="relative">
              {/* The connecting line */}
              <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-700"></div>
              
              <div className="relative grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Steps... */}
                <div className="text-center">
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold text-white bg-gradient-to-br from-green-500 to-cyan-600 border-4 border-gray-900">1</div>
                  <h3 className="text-lg font-bold text-white">Submit Referral</h3>
                  <p className="text-gray-400 text-sm">Fill out the referral form with client details and project requirements.</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold text-white bg-gradient-to-br from-blue-500 to-indigo-600 border-4 border-gray-900">2</div>
                  <h3 className="text-lg font-bold text-white">We Contact Client</h3>
                  <p className="text-gray-400 text-sm">Our team reaches out to the referred client to discuss their needs.</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold text-white bg-gradient-to-br from-purple-500 to-pink-600 border-4 border-gray-900">3</div>
                  <h3 className="text-lg font-bold text-white">Project Starts</h3>
                  <p className="text-gray-400 text-sm">If the client decides to work with us, the project begins.</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold text-white bg-gradient-to-br from-orange-500 to-red-600 border-4 border-gray-900">4</div>
                  <h3 className="text-lg font-bold text-white">You Get Rewarded</h3>
                  <p className="text-gray-400 text-sm">Receive your referral reward once the project milestone is reached.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============== 4. REFERRAL FORM SECTION ============== */}
        <section className="py-16 sm:py-24 bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Submit a Referral</h2>
              <p className="mt-4 text-lg text-gray-400">Fill out the form below to refer a potential client to Visuark. We'll take care of the rest!</p>
            </div>
            
            <form className="max-w-4xl mx-auto bg-gray-900 p-8 sm:p-12 rounded-2xl border border-gray-800 space-y-12">
              {/* Form content... */}
              <fieldset>
                <legend className="flex items-center gap-3 text-2xl font-bold text-white mb-6">
                  <FaUserCircle className="text-cyan-400" />
                  Your Information
                </legend>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="your-name" className="block text-sm font-medium text-gray-300 mb-2">Your Name *</label>
                    <input type="text" id="your-name" name="your-name" className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none" placeholder="John Doe" required />
                  </div>
                  <div>
                    <label htmlFor="your-phone" className="block text-sm font-medium text-gray-300 mb-2">Your Phone Number *</label>
                    <input type="tel" id="your-phone" name="your-phone" className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none" placeholder="1234567890" required />
                  </div>
                </div>
              </fieldset>
              <fieldset>
                <legend className="flex items-center gap-3 text-2xl font-bold text-white mb-6">
                  <FaBriefcase className="text-cyan-400" />
                  Client Information
                </legend>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="client-name" className="block text-sm font-medium text-gray-300 mb-2">Client Name *</label>
                    <input type="text" id="client-name" name="client-name" className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none" placeholder="Jane Smith" required />
                  </div>
                  <div>
                    <label htmlFor="client-phone" className="block text-sm font-medium text-gray-300 mb-2">Client Phone Number *</label>
                    <input type="tel" id="client-phone" name="client-phone" className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none" placeholder="0987654321" required />
                  </div>
                </div>
              </fieldset>
              <fieldset>
                <legend className="flex items-center gap-3 text-2xl font-bold text-white mb-6">
                  <FaClipboardList className="text-cyan-400" />
                  Project Information
                </legend>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="project-type" className="block text-sm font-medium text-gray-300 mb-2">Project Type *</label>
                    <select id="project-type" name="project-type" className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none" required>
                      <option value="">Select project type</option>
                      <option value="web-development">Web Development</option>
                      <option value="graphic-design">Graphic Design</option>
                      <option value="video-editing">Video Editing</option>
                      <option value="ui-ux-design">UI/UX Design</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="project-description" className="block text-sm font-medium text-gray-300 mb-2">Project Description *</label>
                    <textarea id="project-description" name="project-description" rows={5} className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none" placeholder="Please provide a brief description of the client's requirements..." required></textarea>
                  </div>
                </div>
              </fieldset>
              <div className="text-center">
                <button type="submit" className="inline-flex items-center gap-2 text-white font-bold py-3 px-8 bg-gradient-to-r from-cyan-500 to-orange-500 rounded-lg hover:from-cyan-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105">
                  Submit Referral
                  <FaArrowRight />
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default ReferralPage;