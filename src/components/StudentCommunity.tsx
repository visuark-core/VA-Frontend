import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Terminal } from 'lucide-react';

const InteractiveCommunityWidget: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<'editor' | 'terminal' | 'members'>('editor');
  const [terminalLogs, setTerminalLogs] = React.useState<string[]>([
    'Initializing visuark-hub...',
    'Fetching team repository metadata...',
    'Connected to channel #main-project-room',
  ]);

  React.useEffect(() => {
    const logs = [
      'NK committed f3b9a2: "Fix overlapping node layout"',
      'SS pushed changes to branch origin/main',
      'System: Auto-deploy triggered for frontend-hub',
      'Live reload: page refreshed successfully',
      'VisuarkBot: 4 developers active right now',
      'JD initialized dev-server on port:3000',
    ];
    let index = 0;
    const interval = setInterval(() => {
      setTerminalLogs(prev => {
        const nextLogs = [...prev, logs[index]];
        if (nextLogs.length > 5) {
          nextLogs.shift();
        }
        return nextLogs;
      });
      index = (index + 1) % logs.length;
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto bg-gray-950/85 backdrop-blur-md border border-gray-800 rounded-3xl p-6 shadow-2xl relative overflow-hidden group">
      {/* Background soft glow blobs */}
      <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-cyan-500/10 blur-[80px] group-hover:bg-cyan-500/15 transition-colors duration-500 pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-orange-500/10 blur-[80px] group-hover:bg-orange-500/15 transition-colors duration-500 pointer-events-none" />

      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-gray-800/80 pb-4 mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="text-[10px] font-mono text-gray-500 ml-2">visuark-collaborator // v1.2</span>
        </div>
        <div className="flex bg-gray-900 border border-gray-800 p-0.5 rounded-lg">
          {(['editor', 'terminal', 'members'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-2.5 py-1 text-[9px] font-bold font-mono uppercase rounded-md transition-all duration-200 ${
                activeTab === tab 
                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' 
                  : 'text-gray-400 border border-transparent hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="h-48 flex flex-col justify-between font-mono text-[11px] leading-relaxed">
        {activeTab === 'editor' && (
          <div className="flex-1 flex flex-col justify-start text-left text-gray-400 bg-gray-900/40 p-3 rounded-xl border border-gray-900 overflow-hidden relative">
            <div className="text-cyan-400/80 mb-1">// Visuark Student Project</div>
            <div><span className="text-purple-400">import</span> React <span className="text-purple-400">from</span> <span className="text-green-400">'react'</span>;</div>
            <div><span className="text-purple-400">const</span> <span className="text-blue-400">CommunityProject</span> = () =&gt; &#123;</div>
            <div className="pl-4">
              <span className="text-purple-400">const</span> [status, setStatus] = React.useState(<span className="text-green-400">'Building'</span>);
            </div>
            <div className="pl-4">
              React.useEffect(() =&gt; &#123;
            </div>
            <div className="pl-8 text-orange-400/90">
              console.log(<span className="text-green-400">`Status is: $&#123;status&#125;`</span>);
            </div>
            <div className="pl-4">
              &#125;, []);
            </div>
            <div className="pl-4">
              <span className="text-purple-400">return</span> &lt;<span className="text-cyan-400">div</span>&gt;Interactive Sandbox&lt;/<span className="text-cyan-400">div</span>&gt;;
            </div>
            <div>&#125;;</div>
            <div className="absolute right-3 bottom-3 flex items-center space-x-1.5 bg-cyan-950 border border-cyan-800 text-cyan-400 px-2 py-0.5 rounded text-[8px] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              <span>LIVE EDITOR</span>
            </div>
          </div>
        )}

        {activeTab === 'terminal' && (
          <div className="flex-1 text-left bg-gray-950 p-3 rounded-xl border border-gray-900/80 overflow-y-auto space-y-1">
            {terminalLogs.map((log, index) => (
              <div key={index} className="text-gray-400 flex items-start space-x-2">
                <span className="text-cyan-500 font-bold shrink-0">&gt;</span>
                <span className={log.startsWith('System') || log.startsWith('Visuark') ? 'text-cyan-400' : log.includes('committed') ? 'text-orange-400' : 'text-gray-400'}>{log}</span>
              </div>
            ))}
            <div className="text-gray-500 animate-pulse">&gt; waiting for workspace actions...</div>
          </div>
        )}

        {activeTab === 'members' && (
          <div className="flex-1 flex flex-col justify-center space-y-3 bg-gray-900/40 p-3 rounded-xl border border-gray-900">
            <span className="text-[10px] text-gray-500 uppercase tracking-widest mb-1 text-center font-bold block">Active Contributors</span>
            <div className="flex items-center justify-center -space-x-2">
              {[
                { name: 'Neeraj K.', initials: 'NK', bg: 'from-cyan-500 to-blue-500' },
                { name: 'Sunil S.', initials: 'SS', bg: 'from-orange-500 to-amber-500' },
                { name: 'Jane D.', initials: 'JD', bg: 'from-emerald-500 to-teal-500' },
                { name: 'Alex M.', initials: 'AM', bg: 'from-purple-500 to-pink-500' }
              ].map((member, i) => (
                <div 
                  key={i} 
                  className={`w-9 h-9 rounded-full border-2 border-gray-950 bg-gradient-to-tr ${member.bg} flex items-center justify-center text-[10px] font-bold text-white shadow-lg relative group/avatar cursor-pointer`}
                >
                  {member.initials}
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border border-gray-950 rounded-full animate-pulse" />
                  
                  {/* Avatar Tooltip */}
                  <div className="absolute bottom-11 left-1/2 -translate-x-1/2 bg-gray-950 border border-gray-800 text-white text-[9px] font-bold px-2 py-0.5 rounded opacity-0 group-hover/avatar:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-xl pointer-events-none uppercase">
                    {member.name}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-[9px] text-center text-gray-400 font-bold uppercase tracking-widest mt-1 animate-pulse">
              Collaborating on 3 active projects
            </div>
          </div>
        )}
      </div>

      {/* Footer Info */}
      <div className="mt-4 pt-3 border-t border-gray-900 flex items-center justify-between text-[10px] text-gray-500 font-mono">
        <div>workspace // active-session-1</div>
        <div className="text-cyan-400 font-bold uppercase tracking-wide">reveal soon</div>
      </div>
    </div>
  );
};

const StudentCommunity: React.FC = () => {
  return (
    <section
      aria-labelledby="student-community"
      className="py-12 sm:py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"
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
                  to="/student-community"
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

            {/* Right: Interactive Dev Sandbox Widget */}
            <div className="relative flex items-center justify-center">
              <InteractiveCommunityWidget />
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
