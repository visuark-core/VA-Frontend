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
            <div className="scroller-inner flex items-center gap-16 w-max">
              {/* Note: Replace these src URLs with your actual logos */}
              {/* First Set */}
              <img className="h-10 sm:h-12 object-contain" src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google Logo" />
              <img className="h-10 sm:h-12 object-contain" src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft Logo" />
              <img className="h-12 sm:h-14 object-contain" src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Accenture_logo.svg" alt="Accenture Logo" />
              <img className="h-12 sm:h-14 object-contain" src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM Logo" />
              <img className="h-10 sm:h-12 object-contain" src="https://upload.wikimedia.org/wikipedia/commons/5/50/Jio_logo.svg" alt="Jio Logo" />
              <img className="h-12 sm:h-14 object-contain" src="https://upload.wikimedia.org/wikipedia/commons/e/e5/TVS_Motor_Company_logo.svg" alt="TVS Logo" />
              <img className="h-10 sm:h-12 object-contain" src="https://upload.wikimedia.org/wikipedia/commons/1/19/Hero_MotoCorp_logo.svg" alt="Hero MotoCorp Logo" />
              
              {/* Duplicate Set for seamless loop */}
              <img className="h-10 sm:h-12 object-contain" src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google Logo" />
              <img className="h-10 sm:h-12 object-contain" src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft Logo" />
              <img className="h-12 sm:h-14 object-contain" src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Accenture_logo.svg" alt="Accenture Logo" />
              <img className="h-12 sm:h-14 object-contain" src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM Logo" />
              <img className="h-10 sm:h-12 object-contain" src="https://upload.wikimedia.org/wikipedia/commons/5/50/Jio_logo.svg" alt="Jio Logo" />
              <img className="h-12 sm:h-14 object-contain" src="https://upload.wikimedia.org/wikipedia/commons/e/e5/TVS_Motor_Company_logo.svg" alt="TVS Logo" />
              <img className="h-10 sm:h-12 object-contain" src="https://upload.wikimedia.org/wikipedia/commons/1/19/Hero_MotoCorp_logo.svg" alt="Hero MotoCorp Logo" />
            </div>
          </div>
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
              <img className="w-24 h-24 rounded-full mb-4 border-2 border-cyan-400" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client Photo" />
              <h3 className="font-semibold text-lg text-cyan-400">Johnathan Doe</h3>
              <p className="text-gray-400">Chief Executive Officer</p>
              <p className="text-gray-500 text-sm">Tech Innovators Inc.</p>
            </div>

            {/* --- TESTIMONIAL 2 --- */}
            <div className="card-hover backdrop-blur-fallback rounded-xl p-8 border border-gray-700/50 animate-fadeInUp flex flex-col justify-center items-center text-center" style={{ animationDelay: '0.2s' }}>
              <img className="w-24 h-24 rounded-full mb-4 border-2 border-cyan-400" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Client Photo" />
              <h3 className="font-semibold text-lg text-cyan-400">Sarah Jenkins</h3>
              <p className="text-gray-400">Product Manager</p>
              <p className="text-gray-500 text-sm">Creative Solutions</p>
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
              <img className="w-24 h-24 rounded-full mb-4 border-2 border-cyan-400" src="https://randomuser.me/api/portraits/men/56.jpg" alt="Client Photo" />
              <h3 className="font-semibold text-lg text-cyan-400">Michael Chen</h3>
              <p className="text-gray-400">Marketing Director</p>
              <p className="text-gray-500 text-sm">Global Ventures</p>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;