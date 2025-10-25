import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users } from 'lucide-react';

const StudentCommunity: React.FC = () => {
  return (
    <section
      aria-labelledby="student-community"
      className="py-12 sm:py-20 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-gray-800/60 to-gray-900/60 border border-gray-700 shadow-lg p-6 sm:p-10 lg:p-14"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left: text */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center lg:justify-start p-3 bg-cyan-500/6 rounded-xl mb-4">
                <Users className="h-12 w-12 text-cyan-400" />
              </div>

              <h3 id="student-community" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Join the Student Community
              </h3>

              <p className="mt-4 text-gray-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
                We're building a vibrant student community where learners collaborate on real
                projects, attend workshops, and receive mentorship from industry practitioners.
                Grow your skills and portfolio alongside peers all levels welcome.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:gap-4 justify-center lg:justify-start">
                <Link
                  to="/referral"
                  className="inline-flex items-center justify-center bg-cyan-400 text-gray-900 px-6 py-3 rounded-full font-semibold shadow hover:scale-105 transform transition-all duration-200"
                  aria-label="Join the student community"
                >
                  Be a Part of Us
                </Link>

                <Link
                  to="/contact"
                  className="mt-3 sm:mt-0 inline-flex items-center justify-center border-2 border-gray-700 text-gray-200 px-5 py-3 rounded-full hover:bg-gray-700 transition-colors"
                  aria-label="Contact for community details"
                >
                  Contact for Details
                </Link>
              </div>

              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto lg:mx-0 text-sm text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400 mt-2" />
                  Hands-on projects & team collaborations
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-orange-400 mt-2" />
                  Mentorship & portfolio reviews
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-green-400 mt-2" />
                  Workshops & skill-focused sessions
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-yellow-400 mt-2" />
                  Networking & real collaboration
                </li>
              </ul>
            </div>

            {/* Right: mock illustration / cards */}
            <div className="relative flex items-center justify-center">
              <div className="w-full max-w-md mx-auto">
                <div className="rounded-2xl p-4 bg-gradient-to-b from-white/5 to-white/2 border border-gray-700 shadow-2xl">
                  <img
                    src="img/livesoon.png"
                    alt="Students collaborating"
                    className="rounded-xl w-full h-56 object-cover"
                  />
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-semibold">Project: Reveal Soon</h4>
                      <p className="text-gray-400 text-sm">Techstack reveal soon • 4 members</p>
                    </div>
                    <div className="text-sm text-gray-300">Live Soon</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative shapes */}
          <svg className="pointer-events-none absolute -right-24 -top-16 opacity-20" width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="110" cy="110" r="110" fill="url(#g)" />
            <defs>
              <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#06b6d4" />
                <stop offset="1" stopColor="#f97316" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default StudentCommunity;
