import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const PrivacyPolicy = () => {
  return (
    <PageTransition>
      <div className="pt-20">
        <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-center">
                Privacy <span className="text-cyan-400">Policy</span>
              </h1>
              <p className="text-xl text-gray-300 text-center mb-12">
                Last updated: January 1, 2024
              </p>

              <div className="prose prose-lg prose-invert max-w-none">
                <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700 mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
                  <p className="text-gray-300 leading-relaxed">
                    At Visuark ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                  </p>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700 mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-3">Personal Information</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We may collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="text-gray-300 space-y-2 mb-6">
                    <li>• Contact us through our website forms</li>
                    <li>• Subscribe to our newsletter</li>
                    <li>• Request a quote or consultation</li>
                    <li>• Apply for employment</li>
                    <li>• Engage with our services</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-cyan-400 mb-3">Automatically Collected Information</h3>
                  <p className="text-gray-300 leading-relaxed">
                    When you visit our website, we may automatically collect certain information about your device and usage patterns, including IP address, browser type, operating system, referring URLs, and pages visited.
                  </p>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700 mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We use the information we collect for various purposes, including:
                  </p>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Providing and maintaining our services</li>
                    <li>• Responding to your inquiries and requests</li>
                    <li>• Sending you updates and marketing communications (with your consent)</li>
                    <li>• Improving our website and services</li>
                    <li>• Analyzing usage patterns and trends</li>
                    <li>• Complying with legal obligations</li>
                  </ul>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700 mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">Information Sharing and Disclosure</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                  </p>
                  <ul className="text-gray-300 space-y-2">
                    <li>• With service providers who assist us in operating our website and conducting our business</li>
                    <li>• When required by law or to protect our rights and safety</li>
                    <li>• In connection with a business transfer or merger</li>
                    <li>• With your explicit consent</li>
                  </ul>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700 mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
                  </p>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700 mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Depending on your location, you may have the following rights regarding your personal information:
                  </p>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Right to access your personal information</li>
                    <li>• Right to correct inaccurate information</li>
                    <li>• Right to delete your personal information</li>
                    <li>• Right to restrict processing</li>
                    <li>• Right to data portability</li>
                    <li>• Right to object to processing</li>
                  </ul>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700 mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">Cookies and Tracking Technologies</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand user preferences. You can control cookie settings through your browser preferences.
                  </p>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700 mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">Changes to This Privacy Policy</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                  </p>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
                  <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                  </p>
                  <div className="text-gray-300">
                    <p>Email: privacy@visuark.com</p>
                    <p>Phone: +1 (555) 123-4567</p>
                    <p>Address: San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default PrivacyPolicy;