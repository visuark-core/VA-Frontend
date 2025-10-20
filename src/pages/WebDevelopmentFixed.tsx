import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { Code, Check, Star } from 'lucide-react';

const features = [
  'Responsive Design',
  'React & Next.js Development',
  'E-commerce Solutions',
  'CMS Integration',
  'Performance Optimization',
  'SEO Implementation',
  'API Development',
  'Database Design',
];

const technologies = [
  'React',
  'Next.js',
  'Vue.js',
  'Angular',
  'Node.js',
  'Express.js',
  'Django',
  'TypeScript',
  'JavaScript',
  'HTML5',
  'CSS3',
  'Python',
  'MongoDB',
  'PostgreSQL',
  'MySQL',
  'WordPress',
  'Shopify',
  'Docker',
  'Vercel',
  'Netlify',
  'AWS',
  'Tailwind CSS',
  'Bootstrap',
  'Material UI',
  'Vite',
  'Webpack',
  'Git',
  'GitHub',
];

const WebDevelopmentFixed = () => {
  return (
    <PageTransition>
      <div className="pt-24 pb-16 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center relative flex flex-col items-center justify-center min-h-[400px]"
          >
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/30 via-blue-400/20 to-purple-400/20 rounded-full blur-3xl z-0 animate-pulse" />
            <div className="relative z-10 flex flex-col items-center">
              <span className="inline-flex items-center justify-center bg-gradient-to-tr from-cyan-400 to-blue-500 rounded-full p-4 shadow-lg mb-6 animate-float">
                <Code className="h-14 w-14 text-white drop-shadow-lg" />
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 drop-shadow-lg">
                Web Development
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-10 font-light">
                Modern, scalable, and beautiful web solutions for your business.
              </p>
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.97 }}
                className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-10 py-5 rounded-full font-bold text-2xl shadow-xl hover:from-cyan-300 hover:to-blue-400 transform transition-all duration-300 animate-bounce"
              >
                Start Your Project
              </motion.button>
            </div>
          </motion.div>
        </section>

        {/* Features & Tech */}
        <section className="container mx-auto px-4 grid md:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-gray-800/60 rounded-2xl p-10 border-l-8 border-cyan-400 shadow-xl"
          >
            <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-2">
              <Star className="h-7 w-7 text-yellow-400 animate-bounce" /> What's Included
            </h2>
            <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-center text-lg text-gray-200">
                  <Check className="h-6 w-6 text-green-400 mr-3 flex-shrink-0 animate-pulse" />
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
            className="bg-gray-800/60 rounded-2xl p-10 border-l-8 border-blue-400 shadow-xl"
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Technologies We Use</h2>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <motion.span
                  key={tech}
                  className="px-5 py-2 bg-gray-700 text-cyan-300 rounded-lg text-lg font-semibold shadow"
                  whileHover={{ scale: 1.12, backgroundColor: '#22d3ee', color: '#fff' }}
                >
                  {tech}
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
              <p className="text-4xl font-extrabold text-cyan-300 mb-4">$2,500</p>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li>Basic website (up to 5 pages)</li>
                <li>Responsive design</li>
                <li>Basic SEO</li>
              </ul>
              <button className="bg-cyan-400 hover:bg-cyan-300 text-gray-900 px-6 py-3 rounded-lg font-semibold">Choose Simple</button>
            </div>
            <div className="bg-gray-800/60 rounded-2xl p-8 border border-gray-700 text-center">
              <h3 className="text-xl font-bold text-white mb-2">Pro</h3>
              <p className="text-4xl font-extrabold text-cyan-300 mb-4">$7,500</p>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li>Custom web app</li>
                <li>E-commerce or CMS</li>
                <li>Performance optimization</li>
              </ul>
              <button className="bg-cyan-400 hover:bg-cyan-300 text-gray-900 px-6 py-3 rounded-lg font-semibold">Choose Pro</button>
            </div>
            <div className="bg-gray-800/60 rounded-2xl p-8 border border-gray-700 text-center">
              <h3 className="text-xl font-bold text-white mb-2">Advance</h3>
              <p className="text-4xl font-extrabold text-cyan-300 mb-4">$15,000</p>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li>Enterprise-grade platform</li>
                <li>Custom integrations & APIs</li>
                <li>Ongoing support</li>
              </ul>
              <button className="bg-cyan-400 hover:bg-cyan-300 text-gray-900 px-6 py-3 rounded-lg font-semibold">Choose Advance</button>
            </div>
          </div>
        </section>

        {/* Animated Call to Action */}
        <section className="container mx-auto px-4 text-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.97 }}
            className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-12 py-5 rounded-full font-bold text-2xl shadow-xl hover:from-cyan-300 hover:to-blue-400 transform transition-all duration-300 animate-bounce"
          >
            Start Your Project Today
          </motion.button>
        </section>
      </div>
    </PageTransition>
  );
};

export default WebDevelopmentFixed;
