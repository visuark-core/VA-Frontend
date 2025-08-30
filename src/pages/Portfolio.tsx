import React from 'react';

const Portfolio = () => {
  return (
    <div className="bg-gray-950"> {/* Base color from your website screenshot */}
      {/* Main Container */}
      <div className="container mx-auto px-4 py-16 sm:py-24">

        {/* ============== CLIENTS SECTION ============== */}
        <section id="clients" className="mb-20 sm:mb-32">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Trusted by <span className="gradient-text">Industry Leaders</span>
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
              We are proud to have collaborated with some of the world's most ambitious brands.
            </p>
          </div>

            <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
              <div
                className="scroller-inner flex items-center gap-16 w-max animate-scroll-x"
                style={{ animation: 'scrollX 30s linear infinite' }}
              >
              {/* Note: Replace these src URLs with your actual logos */}
              {/* First Set */}
              <img className="h-10 sm:h-12 object-contain" src="/img/CRC GLOBAL.png" alt="crc Global Logo" />
              <img className="h-10 sm:h-12 object-contain" src="https://satlaa.com/_next/image?url=https%3A%2F%2Fapi.satlaa.com%2Fimages%2Fuploads%2Fcustom%2Flogo.png&w=384&q=75" alt="Satlaa Logo" />
              <img className="h-10 sm:h-12 object-contain" src="/img/MonsterDetailing.png" alt="Monster Detailing Logo" />
              <img className="h-10 sm:h-12 object-contain" src="https://nirdesham.com/_next/image?url=%2Fimages%2Flogo.png&w=640&q=100" alt="Nirdesham Media Logo" />
              <img className="h-10 sm:h-12 object-contain" src="/img/Graphic Line.png" alt="Monster Detailing Logo" />
              <img className="h-12 sm:h-14 object-contain" src="/img/Vagwiinlogo.png" alt="Vagwiin Logo" />
              <img className="h-10 sm:h-12 object-contain" src="/img/AND Offset.png" alt="And Offset Logo" />
              <img className="h-12 sm:h-14 object-contain" src="/img/TechfrigateLogo.png" alt="Techfrigate Logo" />
              
              {/* Duplicate Set for seamless loop */}
              <img className="h-10 sm:h-12 object-contain" src="/img/CRC GLOBAL.png" alt="crc Global Logo" />
              <img className="h-10 sm:h-12 object-contain" src="https://satlaa.com/_next/image?url=https%3A%2F%2Fapi.satlaa.com%2Fimages%2Fuploads%2Fcustom%2Flogo.png&w=384&q=75" alt="Satlaa Logo" />
              <img className="h-10 sm:h-12 object-contain" src="/img/MonsterDetailing.png" alt="Monster Detailing Logo" />
              <img className="h-10 sm:h-12 object-contain" src="https://nirdesham.com/_next/image?url=%2Fimages%2Flogo.png&w=640&q=100" alt="Nirdesham Media Logo" />
              <img className="h-12 sm:h-14 object-contain" src="/img/Vagwiinlogo.png" alt="Vagwiin Logo" />
              <img className="h-10 sm:h-12 object-contain" src="/img/AND Offset.png" alt="And Offset Logo" />
              <img className="h-12 sm:h-14 object-contain" src="/img/TechfrigateLogo.png" alt="TechFrigate Logo" />
            </div>
          </div>
            {/* Endless scroll animation keyframes */}
            <style>
              {`
                @keyframes scrollX {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
              `}
            </style>
        </section>

        {/* ============== TESTIMONIALS SECTION ============== */}
        <section id="testimonials">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
              Real stories from satisfied partners who achieved their dreams with us.
            </p>
          </div>

          {/* Testimonial Grid Container */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

            {/* --- TESTIMONIAL 1 --- */}
            <div className="lg:col-span-2 card-hover backdrop-blur-fallback rounded-xl p-8 border border-gray-700/50 animate-fadeInUp flex items-center">
              <p className="text-gray-300 italic text-xl">
                "Working with Visuark was a game-changer. Their team's dedication to our vision and their expertise in web development resulted in a product that exceeded all our expectations. Truly a team that anchors dreams to reality."
              </p>
            </div>
            <div className="card-hover backdrop-blur-fallback rounded-xl p-8 border border-gray-700/50 animate-fadeInUp flex flex-col justify-center items-center text-center" style={{ animationDelay: '0.1s' }}>
              <img className="w-24 h-24 rounded-full mb-4 border-2 border-cyan-400" src="/img/Sunil.png" alt="Client Photo" />
              <h3 className="font-semibold text-lg text-cyan-400">Sunil Soni</h3>
              <p className="text-gray-400">Chief Executive Officer</p>
              <p className="text-gray-500 text-sm">Satlaa Pvt. Ltd.</p>
            </div>

            {/* --- TESTIMONIAL 2 --- */}
            <div className="card-hover backdrop-blur-fallback rounded-xl p-8 border border-gray-700/50 animate-fadeInUp flex flex-col justify-center items-center text-center" style={{ animationDelay: '0.2s' }}>
              <img className="w-24 h-24 rounded-full mb-4 border-2 border-cyan-400" src="/img/Dipanshu.png" alt="Client Photo" />
              <h3 className="font-semibold text-lg text-cyan-400">Dipanshu Verma</h3>
              <p className="text-gray-400">Product Manager</p>
              <p className="text-gray-500 text-sm">Tech Frigate</p>
            </div>
            <div className="lg:col-span-2 card-hover backdrop-blur-fallback rounded-xl p-8 border border-gray-700/50 animate-fadeInUp flex items-center" style={{ animationDelay: '0.3s' }}>
              <p className="text-gray-300 italic text-xl">
                "The UI/UX design process was incredibly collaborative and insightful. Visuark transformed our complex requirements into an intuitive and beautiful interface that our users love. We saw a 40% increase in user engagement."
              </p>
            </div>
            
            {/* --- TESTIMONIAL 3 --- */}
            <div className="lg:col-span-2 card-hover backdrop-blur-fallback rounded-xl p-8 border border-gray-700/50 animate-fadeInUp flex items-center" style={{ animationDelay: '0.4s' }}>
              <p className="text-gray-300 italic text-xl">
                "From graphic design to the final video edit, the attention to detail was impeccable. Visuark is not just a digital agency; they are true partners in success. I highly recommend them to anyone looking for top-tier digital services."
              </p>
            </div>
            <div className="card-hover backdrop-blur-fallback rounded-xl p-8 border border-gray-700/50 animate-fadeInUp flex flex-col justify-center items-center text-center" style={{ animationDelay: '0.5s' }}>
              <img className="w-24 h-24 rounded-full mb-4 border-2 border-cyan-400" src="/img/Vikash.jpg" alt="Client Photo" />
              <h3 className="font-semibold text-lg text-cyan-400">Vikash Vaishnav</h3>
              <p className="text-gray-400">Chief Executive Officer</p>
              <p className="text-gray-500 text-sm">Vagwiin IT Solutions</p>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;