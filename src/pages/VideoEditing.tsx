import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { Video, Check, Star } from 'lucide-react';
import { sendWhatsAppMessage } from '../utils/integrations';

const features = [
  'Commercial Videos',
  'Social Media Content',
  'Motion Graphics',
  'Color Grading',
  'Audio Enhancement',
  'Animation',
  '3D Graphics',
  'Live Streaming Setup'
];
const tools = [
  'Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Final Cut Pro', 'Cinema 4D', 'Audition', 'Photoshop', 'OBS Studio'
];

const VideoEditing = () => (
  <PageTransition>
    <div className="pt-24 pb-16 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center relative"
        >
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-72 h-72 bg-green-400/10 rounded-full blur-3xl z-0 animate-pulse" />
          <h1 className="text-6xl md:text-8xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 drop-shadow-lg flex items-center gap-4 justify-center relative z-10">
            <Video className="h-16 w-16 text-green-400 animate-pulse" />
            Video Editing
          </h1>
          <p className="text-2xl md:text-3xl text-gray-200 mb-10 font-light relative z-10">
            Professional video production and editing services. Transform raw footage into compelling visual stories.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-gradient-to-r from-green-400 to-cyan-500 text-white px-10 py-5 rounded-full font-bold text-2xl shadow-xl hover:from-green-300 hover:to-cyan-400 transform transition-all duration-300 animate-bounce relative z-10"
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </section>

      {/* Features & Tools */}
      <section className="container mx-auto px-4 grid md:grid-cols-2 gap-16 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-gray-800/60 rounded-2xl p-10 border-l-8 border-green-400 shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-2">
            <Star className="h-7 w-7 text-yellow-400 animate-bounce" /> What We Offer
          </h2>
          <ul className="space-y-4">
            {features.map((feature) => (
              <li key={feature} className="flex items-center text-lg text-gray-200">
                <Check className="h-6 w-6 text-cyan-400 mr-3 flex-shrink-0 animate-pulse" />
                {feature}
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-800/60 rounded-2xl p-10 border-l-8 border-cyan-400 shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-6 text-white">Editing Tools We Use</h2>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <motion.span
                key={tool}
                className="px-5 py-2 bg-gray-700 text-green-300 rounded-lg text-lg font-semibold shadow"
                whileHover={{ scale: 1.12, backgroundColor: '#22d3ee', color: '#fff' }}
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Pricing */}
      <section className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Pricing</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-gray-800/60 rounded-2xl p-8 border border-gray-700 text-center">
            <h3 className="text-xl font-bold text-white mb-2">Simple</h3>
            <p className="text-4xl font-extrabold text-green-300 mb-4">₹4,999/mo</p>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li>4 Basic reel editing</li>
              <li>1 promo video</li>
              <li>1 round of revisions</li>
            </ul>
            <button 
              onClick={() => sendWhatsAppMessage('Simple', 'Video Editing', '₹7,500')}
              className="bg-green-400 hover:bg-green-300 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Choose Simple
            </button>
          </div>
          <div className="bg-gray-800/60 rounded-2xl p-8 border border-gray-700 text-center">
            <h3 className="text-xl font-bold text-white mb-2">Pro</h3>
            <p className="text-4xl font-extrabold text-green-300 mb-4">₹9,999/mo</p>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li>8 Full edit & color grading reels</li>
              <li>2 promo videos</li>
              <li>3 rounds of revisions</li>
            </ul>
            <button 
              onClick={() => sendWhatsAppMessage('Pro', 'Video Editing', '₹20,000')}
              className="bg-green-400 hover:bg-green-300 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Choose Pro
            </button>
          </div>
          <div className="bg-gray-800/60 rounded-2xl p-8 border border-gray-700 text-center">
            <h3 className="text-xl font-bold text-white mb-2">Advance</h3>
            <p className="text-4xl font-extrabold text-green-300 mb-4">₹19,999/mo</p>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li>15 Animation & VFX Reels</li>
              <li>4 promo videos</li>
              <li>Priority support</li>
            </ul>
            <button 
              onClick={() => sendWhatsAppMessage('Advance', 'Video Editing', '₹45,000')}
              className="bg-green-400 hover:bg-green-300 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Choose Advance
            </button>
          </div>
        </div>
      </section>

      {/* Animated Call to Action */}
      <section className="container mx-auto px-4 text-center">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.97 }}
          className="bg-gradient-to-r from-green-400 to-cyan-500 text-white px-12 py-5 rounded-full font-bold text-2xl shadow-xl hover:from-green-300 hover:to-cyan-400 transform transition-all duration-300 animate-bounce"
        >
          Start Your Video Project
        </motion.button>
      </section>
    </div>
  </PageTransition>
);

export default VideoEditing;
