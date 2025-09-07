import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { Palette, Check, Star } from 'lucide-react';

const features = [
  'Brand Identity Design',
  'Logo Creation',
  'Print Design',
  'Digital Graphics',
  'Packaging Design',
  'Marketing Materials',
  'Social Media Graphics',
  'Brand Guidelines'
];
const tools = [
  'Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'Figma', 'Sketch', 'Procreate', 'Canva', 'CorelDRAW'
];
const works = [
  {
    image: '/img/Graphic Line.png',
    title: 'Graphic Line',
    description: 'Branding and visual identity for a creative agency.'
  },
  {
    image: '/img/ChitrasparshLogo.png',
    title: 'Chitrasparsh',
    description: 'Logo and print design for an art and culture initiative.'
  },
  {
    image: '/img/MonsterDetailing.png',
    title: 'Monster Detailing',
    description: 'Marketing materials and digital graphics for a car detailing brand.'
  },
  {
    image: '/img/AND Offset.png',
    title: 'AND Offset',
    description: 'Packaging and print design for a leading offset printing company.'
  },
  {
    image: '/img/CRC GLOBAL.png',
    title: 'CRC Global',
    description: 'Corporate branding and visual guidelines for a global consulting firm.'
  },
];

const GraphicDesign = () => (
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
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-72 h-72 bg-orange-400/10 rounded-full blur-3xl z-0 animate-pulse" />
          <h1 className="text-6xl md:text-8xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-400 to-pink-400 drop-shadow-lg flex items-center gap-4 justify-center relative z-10">
            <Palette className="h-16 w-16 text-orange-400 animate-pulse" />
            Graphic Design
          </h1>
          <p className="text-2xl md:text-3xl text-gray-200 mb-10 font-light relative z-10">
            Creative visual solutions that communicate your brand story effectively.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-10 py-5 rounded-full font-bold text-2xl shadow-xl hover:from-orange-300 hover:to-pink-400 transform transition-all duration-300 animate-bounce relative z-10"
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
          className="bg-gray-800/60 rounded-2xl p-10 border-l-8 border-orange-400 shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-2">
            <Star className="h-7 w-7 text-yellow-400 animate-bounce" /> What We Offer
          </h2>
          <ul className="space-y-4">
            {features.map((feature) => (
              <li key={feature} className="flex items-center text-lg text-gray-200">
                <Check className="h-6 w-6 text-pink-400 mr-3 flex-shrink-0 animate-pulse" />
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
          className="bg-gray-800/60 rounded-2xl p-10 border-l-8 border-pink-400 shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-6 text-white">Design Tools We Use</h2>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <motion.span
                key={tool}
                className="px-5 py-2 bg-gray-700 text-orange-300 rounded-lg text-lg font-semibold shadow"
                whileHover={{ scale: 1.12, backgroundColor: '#fb7185', color: '#fff' }}
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Design Gallery</h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {works.map((work, i) => (
            <motion.div
              key={work.title}
              className="bg-gray-800/80 rounded-xl shadow-lg p-4 flex flex-col items-center border-2 border-orange-400 hover:scale-105 hover:z-10 transition-transform duration-300"
              variants={{
                hidden: { opacity: 0, scale: 0.85 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } }
              }}
              whileHover={{ scale: 1.05, y: -12, boxShadow: '0 8px 32px 0 rgba(251,113,133,0.25)' }}
            >
              <img
                src={work.image}
                alt={work.title}
                className="rounded-lg w-full h-40 object-contain mb-4 bg-gray-900 border border-pink-900"
                loading="lazy"
              />
              <h3 className="text-xl font-bold text-orange-400 mb-2 text-center">{work.title}</h3>
              <p className="text-gray-300 text-center text-sm">{work.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Animated Call to Action */}
      <section className="container mx-auto px-4 text-center">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.97 }}
          className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-12 py-5 rounded-full font-bold text-2xl shadow-xl hover:from-orange-300 hover:to-pink-400 transform transition-all duration-300 animate-bounce"
        >
          Start Your Design Project
        </motion.button>
      </section>
    </div>
  </PageTransition>
);

export default GraphicDesign;
