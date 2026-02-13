import { Clock, DollarSign, Layout, TrendingUp, Headphones, ArrowRight } from 'lucide-react';
import Particles from './Particles';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

const WhyChooseUs = () => {
    const [activeMobileIndex, setActiveMobileIndex] = useState(0);
    const scrollRef = useRef(null);

    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const index = Math.round(scrollLeft / clientWidth);
            setActiveMobileIndex(index);
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
  const reasons = [
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "We value your time. Our streamlined process ensures we deliver high-quality projects on schedule, every time.",
      color: "blue",
      colSpan: "lg:col-span-3"
    },
    {
      icon: DollarSign,
      title: "Affordable Pricing",
      description: "Get premium results without the premium price tag. We offer competitive rates tailored to your budget.",
      color: "green",
      colSpan: "lg:col-span-3"
    },
    {
      icon: Layout,
      title: "Modern Design",
      description: "Aesthetically pleasing interfaces that users love.",
      color: "purple",
      colSpan: "lg:col-span-2"
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "Built to grow as your business expands.",
      color: "indigo",
      colSpan: "lg:col-span-2"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "We are always here to help you succeed.",
      color: "pink",
      colSpan: "lg:col-span-2"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white",
      green: "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 group-hover:bg-green-600 group-hover:text-white",
      purple: "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 group-hover:bg-purple-600 group-hover:text-white",
      indigo: "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white",
      pink: "bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400 group-hover:bg-pink-600 group-hover:text-white",
    };
    return colors[color] || colors.blue;
  };

  return (
    <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden transition-colors duration-300" id="why-choose-us">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-[120px] opacity-30 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-100 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-[120px] opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 font-semibold text-sm tracking-wide uppercase"
            >
                Why Choose Us
            </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight"
          >
            We Build for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Growth</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Our expertise goes beyond code. We partner with you to create digital solutions that drive real business results.
          </motion.p>
        </div>

        {/* Mobile Carousel (Visible < md) */}
        <div className="md:hidden relative mb-12">
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reasons.map((reason, index) => (
              <div key={index} className="min-w-full snap-center px-1">
                 <motion.div
                  className={`relative h-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl p-6 rounded-2xl border border-white/20 dark:border-gray-700/50 shadow-lg flex flex-col justify-between`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative z-10">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {reason.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                          {reason.description}
                      </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-4">
            {reasons.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeMobileIndex === index 
                    ? "w-8 bg-blue-600" 
                    : "w-2 bg-gray-300 dark:bg-gray-700 hover:bg-blue-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid (Visible >= md) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8 auto-rows-[minmax(180px,auto)]">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                className={`relative group ${reason.colSpan} bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl p-8 rounded-[2rem] border border-white/20 dark:border-gray-700/50 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col justify-between`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {/* Decorative background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                    <div className={`mb-6 inline-flex p-4 rounded-2xl transition-colors duration-500 ${getColorClasses(reason.color)}`}>
                        <Icon className="w-8 h-8" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {reason.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                        {reason.description}
                    </p>
                </div>
                
                {/* Subtle arrow that appears on hover */}
                {/* <div className="mt-8 relative z-10 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-blue-600 dark:text-blue-400 font-semibold flex items-center">
                    Learn more <ArrowRight className="w-4 h-4 ml-2" />
                </div> */}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
