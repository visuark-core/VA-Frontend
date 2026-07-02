import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-cyan-400" />,
      title: 'Email',
      details: 'contact@visuark.com',
      link: 'mailto:contact@visuark.com'
    },
    {
      icon: <Phone className="h-6 w-6 text-orange-400" />,
      title: 'Phone',
      details: '+91 78785-39633',
      link: 'tel:+917878539633'
    },
    {
      icon: <MapPin className="h-6 w-6 text-green-400" />,
      title: 'Location',
      details: 'iStart Nest Jodhpur, Vikramaditya Nagar, Surya Colony, Jodhpur, Rajasthan 342011',
      link: 'https://maps.app.goo.gl/YV9XzU5P3Y5X3X3X3'
    }
  ];

  const socialLinks = [
    { 
      icon: <Instagram className="h-5 w-5" />, 
      link: 'https://www.instagram.com/visuark.io/', 
      color: 'text-pink-400 border-pink-500/30 hover:bg-pink-500/10 hover:border-pink-500/60 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)]' 
    },
    { 
      icon: <Linkedin className="h-5 w-5" />, 
      link: 'https://www.linkedin.com/company/visuark-media', 
      color: 'text-blue-400 border-blue-500/30 hover:bg-blue-500/10 hover:border-blue-500/60 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]' 
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Block */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-cyan-400 text-xs font-mono font-bold uppercase tracking-widest bg-cyan-400/10 px-3 py-1 rounded-full">
              Let's Connect
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4 mb-6 leading-tight">
              Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Touch</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Ready to bring your digital vision to life? Let's discuss your project and build something spectacular together.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          {/* Left Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-gray-900/40 backdrop-blur-md border border-gray-800 rounded-[32px] p-8 sm:p-10 shadow-2xl relative overflow-hidden"
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-2.5 rounded-xl bg-gray-950 border border-gray-800">
                <MessageSquare className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Send us a message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative group">
                  <label htmlFor="name" className="block text-xs font-mono font-bold text-gray-400 uppercase mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 bg-gray-950/40 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/30 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                <div className="relative group">
                  <label htmlFor="email" className="block text-xs font-mono font-bold text-gray-400 uppercase mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 bg-gray-950/40 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/30 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="relative group">
                <label htmlFor="message" className="block text-xs font-mono font-bold text-gray-400 uppercase mb-2">
                  Tell us about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3.5 bg-gray-950/40 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/30 transition-all duration-300 resize-none"
                  placeholder="Share details like project goals, timeline, or key features..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-extrabold px-6 py-4 rounded-xl hover:from-cyan-400 hover:to-blue-400 shadow-lg shadow-cyan-500/15 hover:shadow-cyan-400/25 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Right Column - Info Cards & Map */}
          <div className="lg:col-span-5 space-y-8 w-full">
            {/* Info Cards Row */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.02 }}
                  className={`flex items-start space-x-4 p-4 rounded-2xl border border-gray-800 bg-gray-900/40 backdrop-blur-md transition-all duration-300 cursor-pointer hover:border-gray-700/80 hover:bg-gray-900/60`}
                >
                  <div className="relative bg-gray-950 border border-gray-800 p-3 rounded-xl shadow-inner transition-colors">
                    {info.icon}
                  </div>
                  <div className="text-left">
                    <h4 className="font-mono text-xs font-bold text-gray-500 uppercase tracking-wider">{info.title}</h4>
                    <p className="text-white font-medium text-sm sm:text-base mt-1 leading-relaxed">
                      {info.details}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links & Map block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/40 backdrop-blur-md border border-gray-800 rounded-[32px] p-6 shadow-2xl space-y-6"
            >
              {/* Social row */}
              <div className="flex items-center justify-between border-b border-gray-800/85 pb-4">
                <span className="text-sm font-bold text-white">Follow Our Journey</span>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2.5 bg-gray-950 border rounded-xl transition-all duration-300 flex items-center justify-center ${social.color}`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Styled Map */}
              <div className="rounded-2xl overflow-hidden border border-gray-800 h-52 relative group">
                <div className="absolute inset-0 bg-cyan-500/5 mix-blend-color pointer-events-none" />
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228975.034891228!2d72.86573214273422!3d26.27026532078311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x894c3263980d756f%3A0xc28f8cbeca99e60!2sVISUARK!5e0!3m2!1sen!2sin!4v1782976620551!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Visuark Location"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;