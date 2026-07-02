import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowLeft, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

const Admin = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl w-full bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-800 text-center shadow-2xl"
        >
          <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-cyan-400">
            <Shield className="w-8 h-8" />
          </div>
          
          <h1 className="text-3xl font-extrabold text-white mb-4">
            Blog Admin Notice
          </h1>
          
          <p className="text-gray-400 mb-8 leading-relaxed">
            The database backend has been decommissioned. Blog posts are now managed directly as frontend static data for improved reliability, performance, and SEO capabilities.
          </p>

          <div className="bg-gray-950/80 rounded-2xl p-6 border border-gray-800 text-left space-y-4 mb-8">
            <div className="flex items-start space-x-3">
              <Code className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
              <div>
                <h4 className="text-white font-bold text-sm">Where are blogs stored?</h4>
                <p className="text-xs text-gray-500 mt-1">
                  You can edit, add, or delete blog articles inside the data schema located at <code className="text-cyan-400 bg-cyan-950/30 px-1 py-0.5 rounded font-mono">src/data/blogs.ts</code>.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/blog"
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-xl transition-all shadow-lg flex items-center space-x-2"
            >
              <span>View Live Blogs</span>
            </Link>
            
            <Link
              to="/"
              className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-300 font-bold rounded-xl transition-all border border-gray-700 flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back Home</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Admin;
