import { Quote, Star } from 'lucide-react';
import Particles from './Particles';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: "David M.",
      role: "E-commerce Business Owner",
      content: "They built a stunning online store for us. Our sales increased by 40% in the first month using their custom payment integration.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Jennifer L.",
      role: "Marketing Director",
      content: "The new mobile-friendly design is incredible. We've seen a huge jump in mobile traffic and our bounce rate dropped significantly.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Robert T.",
      role: "Real Estate Agent",
      content: "Professional, fast, and affordable. My property listings look great on all devices and potential buyers love specific search features.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <Particles
            particleColors={['#3b82f6', '#8b5cf6', '#e2e8f0']}
            particleCount={100}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={true}
            disableRotation={false}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Clients Say</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Trusted by fast-growing companies worldwide.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="bg-white/60 backdrop-blur-xl p-8 rounded-[2rem] border border-white/40 shadow-xl relative group hover:-translate-y-2 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="absolute -top-6 -left-4">
                 <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-3 rounded-2xl shadow-lg rotate-3 group-hover:rotate-6 transition-transform">
                    <Quote className="h-6 w-6 text-white" />
                 </div>
              </div>
              
              <div className="mt-6 mb-8 relative z-10">
                <div className="flex space-x-1 mb-4">
                    {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                </div>
                <p className="text-gray-600 italic leading-relaxed text-lg">"{testimonial.content}"</p>
              </div>
              
              <div className="flex items-center pt-6 border-t border-gray-100">
                <div className="relative">
                    <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full object-cover mr-4 ring-2 ring-white shadow-md"
                    />
                    <div className="absolute inset-0 rounded-full ring-2 ring-blue-500/30 animate-pulse"></div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-blue-600 font-medium">{testimonial.role}</p>
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
