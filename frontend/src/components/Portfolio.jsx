import { useRef, useState, useEffect } from 'react';
import { portfolio } from '../data/portfolioData';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const scrollContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll functionality
  useEffect(() => {
    let intervalId;

    if (!isPaused) {
      intervalId = setInterval(() => {
        const nextIndex = (activeIndex + 1) % portfolio.length;
        scrollToSlide(nextIndex);
      }, 5000); // Scroll every 5 seconds
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [activeIndex, isPaused]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
        const handleScroll = () => {
            const firstChild = container.firstElementChild;
            if (!firstChild) return;
            
            // Calculate item width including gap (32px = 2rem)
            const itemWidth = firstChild.clientWidth;
            const gap = 32;
            const scrollPos = container.scrollLeft;
            
            const index = Math.round(scrollPos / (itemWidth + gap));
            // Only update active index if it's different to avoid loop issues
            if (index !== activeIndex) {
               setActiveIndex(index);
            }
        };

        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [activeIndex]);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const firstChild = container.firstElementChild;
      const scrollAmount = firstChild ? firstChild.clientWidth + 32 : 400;
      
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollToSlide = (index) => {
    const container = scrollContainerRef.current;
    if (container) {
        const firstChild = container.firstElementChild;
        const scrollAmount = firstChild ? firstChild.clientWidth + 32 : 0;
        
        container.scrollTo({
            left: index * scrollAmount,
            behavior: 'smooth'
        });
        setActiveIndex(index);
    }
  };

  return (
    <section className="py-12 bg-gray-50" id="portfolio">
      <div className="max-w-[95%] mx-auto bg-white rounded-[3rem] py-24 relative overflow-hidden shadow-sm">
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl pointer-events-none opacity-50"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl pointer-events-none opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-end mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">Selected Work</h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Digital experiences that drive growth.
            </p>
          </motion.div>
          
          <motion.div 
            className="hidden md:flex space-x-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <button 
              onClick={() => scroll('left')}
              className="p-4 rounded-full border border-gray-200 hover:bg-white hover:shadow-lg transition-all duration-300 group bg-white/50 backdrop-blur-sm text-gray-600 hover:text-blue-600"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-4 rounded-full border border-gray-200 hover:bg-white hover:shadow-lg transition-all duration-300 group bg-white/50 backdrop-blur-sm text-gray-600 hover:text-blue-600"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </button>
          </motion.div>
        </div>

        <motion.div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-8 pb-8 scroll-smooth scrollbar-hide snap-x snap-mandatory"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {portfolio.map((project) => (
            <div 
              key={project.id} 
              className="w-[380px] flex-shrink-0 snap-center group"
            >
              <div className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 h-full flex flex-col hover:-translate-y-2">
                <div className="relative overflow-hidden h-48 p-3 bg-gray-50">
                   <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative shadow-inner">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gray-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                        {project.liveLink && (
                        <a 
                            href={project.liveLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold text-sm flex items-center hover:bg-gray-100 transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 shadow-xl"
                        >
                            Visit Site <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                        )}
                    </div>
                   </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                        <span className="px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider">
                            {project.category}
                        </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">
                        {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Dotted Scroll Bar / Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-3">
            {portfolio.map((_, index) => (
                <button
                    key={index}
                    onClick={() => scrollToSlide(index)}
                    className={`h-3 rounded-full transition-all duration-300 ${
                        index === activeIndex 
                        ? 'w-8 bg-blue-600' 
                        : 'w-3 bg-gray-300 hover:bg-blue-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                />
            ))}
        </div>

        <div className="text-center mt-8 md:hidden">
            <p className="text-sm text-gray-400 animate-pulse">Swipe to explore →</p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Portfolio;
