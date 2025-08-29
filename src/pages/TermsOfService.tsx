import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const TermsOfService = () => {
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
                Terms of <span className="text-cyan-400">Service</span>
              </h1>
              <p className="text-xl text-gray-300 text-center mb-12">
                Last updated: January 1, 2024
              </p>

              <div className="prose prose-lg prose-invert max-w-none">
                <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700 mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">Agreement to Terms</h2>
                  <p className="text-gray-300 leading-relaxed">
                    By accessing and using Visuark's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700 mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">Services</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Visuark provides digital agency services including but not limited to:
                  </p>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Web development and design</li>
                    <li>• Graphic design and branding</li>
                    <li>• Video editing and production</li>
                    <li>• UI/UX design services</li>
                    <li>• Digital marketing consultation</li>
                  </ul>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700 mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">User Responsibilities</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    When using our services, you agree to:
                  </p>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Provide accurate and complete information</li>
                    <li>• Use our services only for lawful purposes</li>
                    <li>• Respect intellectual property rights</li>
                    <li>• Not interfere with or disrupt our services</li>
                    <li>• Comply with all applicable laws and regulations</li>
                  </ul>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700 mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">Payment Terms</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Payment terms for our services are as follows:
                  </p>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Payment is due according to the terms specified in your project agreement</li>
                    <li>• Late payments may incur additional fees</li>
                    <li>• All prices are subject to applicable taxes</li>
                    <li>• Refunds are handled on a case-by-case basis</li>
                  </ul>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700 mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
                  <p className="text-gray-300 leading-relaxed">
                    All content, features, and functionality on our website are owned by Visuark and are protected by copyright, trademark, and other intellectual property laws. Work products created for clients will be transferred according to the terms specified in individual project agreements.
                  </p>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700 mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
                  <p className="text-gray-300 leading-relaxed">
                    In no event shall Visuark be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services.
                  </p>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700 mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                  </p>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700 mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
                  </p>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
                  <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="text-gray-300">
                    <p>Email: legal@visuark.com</p>
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

export default TermsOfService;