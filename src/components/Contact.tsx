import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
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
      details: '+91 78785539633',
      link: 'tel:+9178785539633'
    },
    {
      icon: <MapPin className="h-6 w-6 text-green-400" />,
      title: 'Location',
      details: 'iStart Nest Incubation Center, Vikramaditya Nagar, Surya Colony, Jodhpur, Rajasthan 342011',
      link: 'https://maps.app.goo.gl/YV9XzU5P3Y5X3X3X3' // Placeholder link if needed, but the iframe is main
    }
  ];

  const socialLinks = [
    // { icon: <Facebook className="h-6 w-6" />, link: '#', color: 'hover:text-blue-400' },
    // { icon: <Twitter className="h-6 w-6" />, link: '#', color: 'hover:text-cyan-400' },
    { icon: <Instagram className="h-6 w-6" />, link: 'https://www.instagram.com/visuark.io/', color: 'hover:text-pink-400' },
    { icon: <Linkedin className="h-6 w-6" />, link: 'https://www.linkedin.com/company/visuark/', color: 'hover:text-blue-500' }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to bring your digital vision to life? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-300 hover:to-blue-400 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center space-x-4 p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-gray-600 rounded-lg group-hover:bg-gray-500 transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{info.title}</h4>
                      <p className="text-gray-300">{info.details}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>

              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className={`p-3 bg-gray-700 rounded-lg text-gray-300 ${social.color} hover:bg-gray-600 transition-all duration-300 transform hover:scale-110`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Our Location</h3>
              <div className="h-64 w-full rounded-lg overflow-hidden border border-gray-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.47271810486!2d72.8797444!3d26.2464117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418933b49e1e7f%3A0xc392176214b62059!2siStart%20Nest%20Jodhpur!5e0!3m2!1sen!2sin!4v1717926173491!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="iStart Nest Jodhpur Location"
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