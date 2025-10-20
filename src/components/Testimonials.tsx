import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sunil Soni',
      role: 'Chief Executive Officer',
      company: 'Satlaa Pvt. Ltd.',
      image: '/img/Sunil.png',
      content: 'Hi Neeraj, I really liked the design and pitch deck you made. The way you matched it with my brand identity was great. I loved your work and will surely give you more projects with Visuark.',
      rating: 5
    },
    {
      name: 'Dipanshu Verma',
      role: 'Product Manager',
      company: 'Tech Frigate',
      image: '/img/Dipanshu.png',
      content: 'The UI/UX design process was incredibly collaborative and insightful. Visuark transformed our complex requirements into an intuitive and beautiful interface that our users love. We saw a 40% increase in user engagement.',
      rating: 5
    },
    {
      name: 'Vikash Vaishnav',
      role: 'Chief Executive Officer',
      company: 'Vagwiin IT Solutions',
      image: '/img/Vikash.jpg',
      content: 'From graphic design to the final video edit, the attention to detail was impeccable. Visuark is not just a digital agency; they are true partners in success. I highly recommend them to anyone looking for top-tier digital services.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our <span className="text-cyan-400">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 rounded-lg p-8 border border-gray-700 hover:border-cyan-400 transition-all duration-300 relative"
            >
              <Quote className="h-8 w-8 text-cyan-400 mb-4" />
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;