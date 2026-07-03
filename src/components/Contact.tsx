import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, MessageSquare } from 'lucide-react';

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
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      details: 'contact@visuark.com',
      link: 'mailto:contact@visuark.com'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      details: '+91 78785-39633',
      link: 'tel:+917878539633'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Location',
      details: 'iStart Nest Jodhpur, Vikramaditya Nagar, Surya Colony, Jodhpur, Rajasthan 342011',
      link: 'https://maps.app.goo.gl/YV9XzU5P3Y5X3X3X3'
    }
  ];

  const socialLinks = [
    {
      icon: <Instagram className="h-5 w-5" />,
      link: 'https://www.instagram.com/visuark.io/'
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      link: 'https://www.linkedin.com/company/visuark-media'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Block */}
        <div className="text-center mb-16">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-gray-400">
              Let's Connect
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4 mb-6 leading-tight">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Ready to bring your digital vision to life? Let's discuss your project and build something spectacular together.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          {/* Left Column - Contact Form */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center space-x-3 mb-8">
              <MessageSquare className="h-6 w-6 text-gray-400" />
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
                    className="w-full px-0 py-2.5 bg-transparent border-b border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-colors"
                    placeholder="Raj Kapoor"
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
                    className="w-full px-0 py-2.5 bg-transparent border-b border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-colors"
                    placeholder="raj@example.com"
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
                  className="w-full px-0 py-2.5 bg-transparent border-b border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-colors resize-none"
                  placeholder="Share details like project goals, timeline, or key features..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gray-100 text-black font-extrabold px-6 py-4 rounded-xl hover:bg-gray-200 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Right Column - Info & Map */}
          <div className="lg:col-span-5 space-y-8 w-full">
            {/* Info Items List */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-start space-x-4 transition-all duration-300 cursor-pointer group"
                >
                  <div className="text-gray-400 group-hover:text-gray-200 transition-colors mt-1">
                    {info.icon}
                  </div>
                  <div className="text-left">
                    <h4 className="font-mono text-xs font-bold text-gray-500 uppercase tracking-wider">{info.title}</h4>
                    <p className="text-white font-medium text-sm sm:text-base mt-1 leading-relaxed">
                      {info.details}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links & Map block */}
            <div className="space-y-6 pt-6">
              {/* Social row */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-white">Follow Our Journey</span>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-200 transition-colors"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden h-52">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228975.034891228!2d72.86573214273422!3d26.27026532078311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x894c3263980d756f%3A0xc28f8cbeca99e60!2sVISUARK!5e0!3m2!1sen!2sin!4v1782976620551!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(1)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Visuark Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;