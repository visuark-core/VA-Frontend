
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
  'Database Design'
];
const technologies = [
  // Most popular frontend
  'React', 'Next.js', 'Vue.js', 'Angular',
  // Most popular backend
  'Node.js', 'Express.js', 'Django',
  // Languages
  'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Python',
  // Databases
  'MongoDB', 'PostgreSQL', 'MySQL',
  // CMS & E-commerce
  'WordPress', 'Shopify',
  // DevOps & Hosting
  'Docker', 'Vercel', 'Netlify', 'AWS',
  // UI Libraries
  'Tailwind CSS', 'Bootstrap', 'Material UI',
  // Build Tools
  'Vite', 'Webpack',
  // Version Control
  'Git', 'GitHub',
];

const works = [
  {
    image: '/img/CRC GLOBAL.png',
    title: 'CRC Global',
    description: 'Corporate website for a global consulting firm, featuring a modern UI and robust CMS integration.'
  },
  {
    image: '/img/MonsterDetailing.png',
    title: 'Monster Detailing',
    description: 'Brand site for a premium car detailing service, with booking system and gallery.'
  },
  {
    image: '/img/Graphic Line.png',
    title: 'Graphic Line',
    description: 'Portfolio and service showcase for a creative design agency.'
  },
  {
    image: '/img/TechfrigateLogo.png',
    title: 'Techfrigate',
    description: 'Landing page and dashboard for a SaaS startup, built with React and Node.js.'
  },
  {
    image: '/img/Vagwiinlogo.png',
    title: 'Vagwiin IT Solutions',
    description: 'Corporate site for an IT solutions provider, with case studies and blog.'
  },
  {
    image: '/img/AND Offset.png',
    title: 'AND Offset',
    description: 'Print and digital presence for a leading offset printing company.'
  },
];

const WebDevelopment = () => (
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
          {/* Animated glowing accent */}
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

      {/* Gallery Animation */}
      <section className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Work Gallery</h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {works.map((work, i) => (
            <motion.div
              key={work.title}
              className="bg-gray-800/80 rounded-xl shadow-lg p-4 flex flex-col items-center border-2 border-cyan-700 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -12, boxShadow: '0 8px 32px 0 rgba(34,211,238,0.25)' }}
            >
              <img
                src={work.image}
                alt={work.title}
                className="rounded-lg w-full h-40 object-contain mb-4 bg-gray-900 border border-cyan-900"
                loading="lazy"
              />
              <h3 className="text-xl font-bold text-cyan-400 mb-2 text-center">{work.title}</h3>
              <p className="text-gray-300 text-center text-sm">{work.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Pricing & Timeline */}
      <section className="container mx-auto px-4 grid md:grid-cols-2 gap-16 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-cyan-700 to-blue-700 rounded-2xl p-10 shadow-xl flex flex-col items-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Pricing</h3>
          <span className="text-4xl font-extrabold text-cyan-200 mb-2">Starting from $2,500</span>
          <p className="text-gray-200">Flexible packages for startups, businesses, and enterprises.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-700 to-cyan-700 rounded-2xl p-10 shadow-xl flex flex-col items-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Timeline</h3>
          <span className="text-4xl font-extrabold text-cyan-200 mb-2">2-8 weeks</span>
          <p className="text-gray-200">From concept to launch, tailored to your needs.</p>
        </motion.div>
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

export default WebDevelopment;
