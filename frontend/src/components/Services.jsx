import { services } from "../data/servicesData";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useState, useRef } from "react";

// Internal Spotlight Card Component
function SpotlightCard({ children, className = "" }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`group relative border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden rounded-3xl ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(37, 99, 235, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
}

const Services = () => {
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
    <section className="py-16 md:py-20 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300" id="services">
      {/* Background Ambience - Matching Hero */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-200/20 dark:bg-green-900/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-green-100 dark:border-green-900 bg-green-50/50 dark:bg-green-900/20 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-green-600 dark:text-green-400 mr-2" />
            <span className="text-xs font-semibold text-green-600 dark:text-green-400 uppercase tracking-wider font-roboto-condensed">World-Class Expertise</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-outfit tracking-tight">
            Digital Solutions That <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">Elevate Your Brand</span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 font-sans leading-relaxed">
            We blend creativity with technology to build digital experiences that are not just functional, but unforgettable.
          </p>
        </div>

        {/* ================= MOBILE CAROUSEL (Visible < md) ================= */}
        <div className="md:hidden relative mb-12">
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-6 px-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="min-w-full snap-center px-6">
                  <SpotlightCard className="h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                    <div className="p-6 h-full flex flex-col relative z-20">
                      
                      <div className="mb-4">
                        {/* Icon removed for mobile as requested */}
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 font-outfit">
                          {service.title}
                        </h3>
                      </div>

                      <div className="relative overflow-hidden transition-all duration-300 border-l-2 border-gray-100 dark:border-gray-800 pl-4">
                        {service.subServices ? (
                          <div className="space-y-3">
                             <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-sans mb-3">
                               {service.description}
                             </p>
                             <div className="space-y-2 pt-2 border-t border-gray-100 dark:border-gray-800">
                                <p className="text-[10px] font-bold text-green-600 dark:text-green-400 uppercase tracking-wider">Features</p>
                                {service.subServices.map((sub, i) => (
                                  <div key={i} className="flex items-start">
                                    <span className="w-1 h-1 rounded-full bg-green-500 mt-1.5 mr-2 flex-shrink-0"></span>
                                    <p className="text-xs text-gray-600 dark:text-gray-400">{sub.title}</p>
                                  </div>
                                ))}
                             </div>
                          </div>
                        ) : (
                          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-sans">
                            {service.description}
                          </p>
                        )}
                      </div>

                    </div>
                  </SpotlightCard>
                </div>
              );
            })}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  mobileActiveIndex === index 
                    ? "w-8 bg-green-500" 
                    : "w-2 bg-gray-300 dark:bg-gray-700 hover:bg-green-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Creative Grid (Desktop Only) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <SpotlightCard key={service.title} className="h-full">
                <div className="p-8 h-full flex flex-col relative z-20">
                  
                  {/* Icon & Title */}
                  <div className="mb-6">
                    <div className="w-14 h-14 bg-gray-50 dark:bg-gray-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-gray-100 dark:border-gray-700 group-hover:border-green-500/30">
                      <Icon className="w-7 h-7 text-gray-600 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors" strokeWidth={1.5} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 font-outfit group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  {/* Content Container with Expand on Hover */}
                  <div className="relative overflow-hidden transition-all duration-500 ease-in-out border-l-2 border-gray-100 dark:border-gray-800 pl-4 group-hover:border-green-500 group-hover:pl-4">
                    
                    {service.subServices ? (
                      <div className="space-y-4">
                        <p className="text-sm text-gray-500 dark:text-gray-400 font-roboto-condensed uppercase tracking-wider mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 absolute group-hover:relative -top-4 group-hover:top-0">
                          Included Services
                        </p>
                        
                         {/* Default Description (Shows when not hovered) */}
                         <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-sans group-hover:hidden transition-all duration-300">
                           {service.description}
                         </p>

                        {/* Sub-services (Shows on hover) */}
                        <div className="hidden group-hover:block space-y-3 animate-fadeIn">
                          {service.subServices.map((sub, i) => (
                            <div key={i} className="group/item">
                              <h4 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2 opacity-0 group-hover/item:opacity-100 transition-opacity"></span>
                                {sub.title}
                              </h4>
                              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 ml-3.5 leading-relaxed">
                                {sub.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-sans">
                        {service.description}
                      </p>
                    )}
                  </div>

                </div>
              </SpotlightCard>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;


