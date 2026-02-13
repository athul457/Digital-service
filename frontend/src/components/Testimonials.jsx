import { useState, useRef, useEffect } from 'react';
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

  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
        const scrollPosition = scrollRef.current.scrollLeft;
        const width = scrollRef.current.offsetWidth;
        // Calculate index based on scroll position (assuming cards are roughly full width on mobile)
        const newIndex = Math.round(scrollPosition / width);
        setActiveIndex(newIndex);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollToTestimonial = (index) => {
    if (scrollRef.current) {
        const width = scrollRef.current.offsetWidth;
        scrollRef.current.scrollTo({
            left: index * width,
            behavior: 'smooth'
        });
        setActiveIndex(index);
    }
  };

  return (
    <section className="py-12 md:py-24 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <Particles
            particleColors={['#2563eb', '#7c3aed', '#94a3b8']}
            particleCount={100}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={200}
            moveParticlesOnHover={true}
            alphaParticles={true}
            disableRotation={false}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-20">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">Clients Say</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Trusted by fast-growing companies worldwide.
          </motion.p>
        </div>

        <div 
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 pb-8 pt-8 px-4 md:px-0 -mx-4 md:mx-0"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="flex-none w-full md:w-auto snap-center bg-white dark:bg-gray-800 p-5 md:p-8 rounded-2xl md:rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300 relative group h-full flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:-left-4 z-20">
                 <div className="bg-gradient-to-br from-blue-600 to-green-600 p-3 rounded-2xl shadow-lg rotate-3 group-hover:rotate-6 transition-transform">
                    <Quote className="h-5 w-5 md:h-6 md:w-6 text-white" />
                 </div>
              </div>
              
              <div className="mt-8 mb-6 relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
                <div className="flex space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-3 h-3 md:w-4 md:h-4 ${i < testimonial.stars ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-600'}`} />
                ))}
              </div>

              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed italic flex-grow">"{testimonial.content}"</p>
              </div>
              
              <div className="flex flex-col md:flex-row items-center md:items-center mt-auto pt-6 border-t border-gray-100 dark:border-gray-700 w-full">
                <div className="flex flex-col md:flex-row items-center text-center md:text-left w-full">
                    <div className="relative mb-3 md:mb-0">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-white dark:border-gray-700 shadow-md">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white p-1 rounded-full shadow-lg md:hidden">
                        <Quote className="w-2 h-2 fill-current" />
                      </div>
                    </div>
                    <div className="ml-0 md:ml-4">
                      <h3 className="text-base md:text-lg font-bold text-gray-900 dark:text-white">{testimonial.name}</h3>
                      <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                    </div>
                    {/* Desktop Quote Icon position */}
                    <div className="hidden md:block ml-auto bg-blue-50 dark:bg-blue-900/30 p-2 rounded-full text-blue-500">
                         <Quote className="w-4 h-4 fill-current" />
                    </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 md:hidden space-x-2">
            {testimonials.map((_, index) => (
                <button
                    key={index}
                    onClick={() => scrollToTestimonial(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                        activeIndex === index 
                        ? 'w-8 bg-blue-600 dark:bg-blue-400' 
                        : 'w-2 bg-gray-300 dark:bg-gray-700 hover:bg-blue-400 dark:hover:bg-blue-600'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                />
            ))}
        </div>

        {/* Swipe Hint for Mobile */}
        <div className="mt-4 text-center md:hidden animate-pulse">
            <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2">
                <span>&larr;</span> Swipe for next review <span>&rarr;</span>
            </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
