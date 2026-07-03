import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

const LeadershipTeam: React.FC = () => {
  const team: TeamMember[] = [
    {
      id: 1,
      name: 'Neeraj Kumhar',
      role: 'Founder & Visionary',
      image: '/img/leader_1.png',
    },
    {
      id: 2,
      name: 'Sunil Sharma',
      role: 'Chief Executive Officer',
      image: '/img/leader_2.png',
    },
  ];

  return (
    <section className="pt-10 pb-20 sm:pt-14 sm:pb-28 bg-gray-950 border-t border-gray-700">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 aspect-square lg:aspect-[4/1] gap-[1px] bg-gray-700 border border-gray-700 rounded-3xl overflow-hidden shadow-xl"
        >
          {/* Card 1: Cyan Heading Block */}
          <div className="bg-cyan-400 p-5 sm:p-6 lg:p-8 flex flex-col justify-center text-black h-full w-full overflow-hidden">
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold tracking-tight mb-2 sm:mb-3 leading-tight text-black">
              Leadership Team
            </h2>
            <p className="text-black/95 text-xs sm:text-sm lg:text-base font-semibold leading-relaxed">
              Meet the minds driving innovation, engineering excellence, and digital transformation at Visuark.
            </p>
          </div>

          {/* Card 2: Member 1 */}
          <div className="relative overflow-hidden group bg-gray-800 h-full w-full">
            <img
              src={team[0].image}
              alt={team[0].name}
              className="w-full h-full object-cover grayscale contrast-[1.05] transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
              <h4 className="text-black text-sm md:text-base font-bold leading-tight">{team[0].name}</h4>
              <p className="text-black/80 text-xs mt-1">{team[0].role}</p>
            </div>
          </div>

          {/* Card 3: Member 2 */}
          <div className="relative overflow-hidden group bg-gray-800 h-full w-full">
            <img
              src={team[1].image}
              alt={team[1].name}
              className="w-full h-full object-cover grayscale contrast-[1.05] transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
              <h4 className="text-black text-sm md:text-base font-bold leading-tight">{team[1].name}</h4>
              <p className="text-black/80 text-xs mt-1">{team[1].role}</p>
            </div>
          </div>

          {/* Card 4: Join Us Silhouette Block */}
          <Link
            to="/contact"
            className="relative overflow-hidden group bg-gray-800 h-full w-full flex flex-col items-center justify-center cursor-pointer transition-all duration-500"
          >
            <img
              src="/img/leader_join.png"
              alt="Join Us"
              className="w-full h-full object-cover grayscale contrast-[1.05] transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4 text-center">
              <p className="text-black text-xs md:text-sm font-semibold uppercase tracking-wider mb-1">
                Join Us
              </p>
              <p className="text-black/85 text-[10px] sm:text-xs leading-normal">
                You can also be part of us
              </p>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadershipTeam;
