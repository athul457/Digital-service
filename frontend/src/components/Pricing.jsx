import { useState, useRef } from 'react';
import { pricing } from '../data/pricingData';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Particles from './Particles';

const FloatingShape = ({ className, delay }) => (
  <motion.div
    className={`absolute rounded-full opacity-20 mix-blend-multiply filter blur-xl ${className}`}
    animate={{
      y: [0, -20, 0],
      x: [0, 10, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut",
    }}
  />
);

const TypingText = ({ text, className }) => {
  const letters = Array.from(text);
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      style={{ overflow: "hidden", display: "inline-block" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index} style={{ display: "inline-block" }}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

const Pricing = () => {
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / clientWidth);
      setMobileActiveIndex(index);
    }
  };

  const scrollToSlide = (index) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: index * scrollRef.current.clientWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-12 md:py-20 lg:py-32 overflow-hidden transition-colors duration-300" id="pricing">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-200/40 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[80px] opacity-70 animate-blob" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-200/40 dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[80px] opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-200/40 dark:bg-indigo-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[80px] opacity-70 animate-blob animation-delay-4000" />
          
          {/* Small Floating Shapes */}
          <FloatingShape className="w-24 h-24 bg-blue-300 dark:bg-blue-700 top-20 left-[10%]" delay={0} />
          <FloatingShape className="w-32 h-32 bg-purple-300 dark:bg-purple-700 bottom-20 right-[10%]" delay={1} />
          <FloatingShape className="w-16 h-16 bg-indigo-300 dark:bg-indigo-700 top-1/2 left-[5%]" delay={2} />
          
          <Particles
              className="absolute inset-0 z-0"
              particleColors={['#3b82f6', '#8b5cf6', '#6366f1']} // Blue, Violet, Indigo
              particleCount={100}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={150}
              moveParticlesOnHover={true}
              alphaParticles={true}
              disableRotation={false}
          />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
             <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-100 dark:border-blue-900 bg-blue-50/50 dark:bg-blue-900/30 backdrop-blur-sm mb-6 text-sm font-medium text-blue-600 dark:text-blue-400">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400 mr-2 animate-pulse"></span>
                Pricing Plans
            </div>
            <h2 className="text-2xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-gray-900 dark:text-white">
              <TypingText text="Simple, Transparent Pricing" className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 animate-gradient-x" />
            </h2>
            <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium">
              Choose the perfect plan for your business needs. No hidden fees.
            </p>
          </motion.div>
        </div>

        {/* ================= MOBILE CAROUSEL (< md) ================= */}
        <div className="md:hidden relative mb-12">
             <div 
                ref={scrollRef}
                onScroll={handleScroll}
                className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
             >
                {pricing.map((plan, index) => (
                    <div key={index} className="min-w-full snap-center px-6">
                         <div 
                            className="relative h-full rounded-[2rem] p-1 transition-all duration-300 group hover:-translate-y-2 bg-white/40 dark:bg-gray-800/40 border border-white/60 dark:border-gray-700/60 hover:border-transparent hover:bg-gradient-to-b hover:from-blue-500 hover:to-purple-600 hover:shadow-xl"
                        >
                            <div className="h-full rounded-[1.8rem] overflow-hidden flex flex-col relative transition-colors duration-300 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm group-hover:bg-white dark:group-hover:bg-gray-900">
                                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
                                
                                <div className="p-5 flex-grow">
                                    {plan.recommended && (
                                        <span className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-wider mb-3">
                                        Most Popular
                                        </span>
                                    )}
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{plan.title}</h3>
                                    <div className="flex items-baseline mb-4 flex-wrap">
                                        <span className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600">
                                            {plan.price}
                                        </span>
                                        {plan.originalPrice && (
                                            <span className="text-gray-400 dark:text-gray-500 text-lg line-through ml-3 decoration-red-500/50 decoration-2">
                                                {plan.originalPrice}
                                            </span>
                                        )}
                                        {plan.price !== 'Custom' && <span className="text-gray-500 dark:text-gray-400 ml-2 font-medium text-xs">/project</span>}
                                    </div>
                                    <ul className="space-y-2 mb-4">
                                        {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <div className="p-0.5 rounded-full mr-2 flex-shrink-0 transition-colors bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                                <Check className="h-2.5 w-2.5" />
                                            </div>
                                            <span className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed">{feature}</span>
                                        </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="p-5 pt-0 mt-auto">
                                    <Link
                                        to="/contact"
                                        className="block w-full text-center px-4 py-2.5 rounded-xl font-bold transition-all duration-300 flex items-center justify-center group/btn text-xs bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 group-hover:border-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white"
                                    >
                                        Choose {plan.title}
                                        <ArrowRight className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                         </div>
                    </div>
                ))}
             </div>

             {/* Dots */}
             <div className="flex justify-center space-x-2 mt-6">
                {pricing.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      mobileActiveIndex === index 
                        ? "w-8 bg-blue-500" 
                        : "w-2 bg-gray-300 dark:bg-gray-700"
                    }`}
                  />
                ))}
            </div>
        </div>

        {/* ================= DESKTOP GRID (>= md) ================= */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {pricing.map((plan, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group backdrop-blur-xl rounded-[2.5rem] p-1 transition-all duration-300 hover:-translate-y-2 bg-white/40 dark:bg-gray-800/40 border border-white/60 dark:border-gray-700/60 hover:border-transparent hover:bg-gradient-to-b hover:from-blue-500 hover:to-purple-600 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105 hover:z-10"
            >
              <div className="h-full rounded-[2.3rem] overflow-hidden flex flex-col relative transition-colors duration-300 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm group-hover:bg-white dark:group-hover:bg-gray-900">
                 <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
                
                <div className="p-10 flex-grow">
                  {plan.recommended && (
                    <span className="inline-block px-4 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{plan.title}</h3>
                  <div className="flex items-baseline mb-8 flex-wrap">
                    <span className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600">
                        {plan.price}
                    </span>
                    {plan.originalPrice && (
                        <span className="text-gray-400 dark:text-gray-500 text-2xl line-through ml-4 decoration-red-500/50 decoration-2">
                            {plan.originalPrice}
                        </span>
                    )}
                    {plan.price !== 'Custom' && <span className="text-gray-500 dark:text-gray-400 ml-2 font-medium">/project</span>}
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="p-1 rounded-full mr-3 flex-shrink-0 transition-colors bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                            <Check className="h-3 w-3" />
                        </div>
                        <span className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-10 pt-0 mt-auto">
                  <Link
                    to="/contact"
                    className="block w-full text-center px-8 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center group/btn bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 group-hover:border-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white"
                  >
                    Choose {plan.title}
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
