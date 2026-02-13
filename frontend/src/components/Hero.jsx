import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Search, Smartphone, TrendingUp, Users, Award, Globe } from 'lucide-react';
import Particles from './Particles';

import { motion } from 'framer-motion';

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
  // Split text into letters
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
      animate="visible"
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

const Hero = () => {
  return (
    <section className="relative bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-32 pb-16 lg:py-32 overflow-hidden transition-colors duration-300">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-200/40 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[60px] md:blur-[80px] opacity-70 animate-blob" />
          <div className="absolute top-0 right-1/4 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-green-200/40 dark:bg-green-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[60px] md:blur-[80px] opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-32 left-1/3 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-teal-200/40 dark:bg-teal-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[60px] md:blur-[80px] opacity-70 animate-blob animation-delay-4000" />
          
          {/* Small Floating Shapes */}
          <FloatingShape className="w-16 h-16 md:w-24 md:h-24 bg-blue-300 dark:bg-blue-700 top-20 left-[10%]" delay={0} />
          <FloatingShape className="w-20 h-20 md:w-32 md:h-32 bg-green-300 dark:bg-green-700 bottom-20 right-[10%]" delay={1} />
          <FloatingShape className="w-10 h-10 md:w-16 md:h-16 bg-cyan-300 dark:bg-cyan-700 top-1/2 left-[5%]" delay={2} />
          
          <Particles
              className="absolute inset-0 z-0"
              particleColors={['#2563eb', '#16a34a', '#0d9488']} // Blue, Green, Teal
              particleCount={120}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={150}
              moveParticlesOnHover={true}
              alphaParticles={true}
              disableRotation={false}
          />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Column: Content */}
          <motion.div 
            className="flex-1 text-left pl-[2px] lg:pl-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-green-100 dark:border-green-900 bg-green-50/50 dark:bg-green-900/30 backdrop-blur-sm mb-6 text-xs md:text-sm font-medium text-green-600 dark:text-green-400">
                <span className="flex h-2 w-2 rounded-full bg-green-600 dark:bg-green-400 mr-2 animate-pulse"></span>
                WebBloom
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tight text-gray-900 dark:text-white">
              Transform your <br className="hidden lg:block"/>
              <TypingText text="digital presence" className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-500 to-green-500 animate-gradient-x" />
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
              We design and develop premium websites that capture attention and convert visitors into loyal customers.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-start gap-4 mb-12">
              <Link
                to="/contact"
                className="group relative px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-full font-bold text-base md:text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all overflow-hidden hover:brightness-110 flex items-center justify-center sm:justify-start"
              >
                  <span className="relative z-10 flex items-center justify-center">
                    Get Started <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
              </Link>
              <Link
                to="/portfolio"
                className="px-6 py-3 md:px-8 md:py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-full font-bold text-base md:text-lg hover:border-green-500 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 transition-all shadow-sm hover:shadow-md flex items-center justify-center sm:justify-start"
              >
                View Work
              </Link>
            </div>

            {/* Trust Metrics */}
            <motion.div 
                className="flex items-center justify-start space-x-4 md:space-x-8 border-t border-gray-100 dark:border-gray-800 pt-6 md:pt-8 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
               <motion.div whileHover={{ scale: 1.05 }} className="cursor-default text-center">
                   <p className="text-xl md:text-3xl font-bold text-gray-900 dark:!text-white">50+</p>
                   <p className="text-[10px] md:text-sm text-gray-500 dark:!text-gray-300 font-medium whitespace-nowrap">Projects Done</p>
               </motion.div>
               <div className="h-8 md:h-10 w-px bg-gray-200 dark:bg-gray-700"></div>
               <motion.div whileHover={{ scale: 1.05 }} className="cursor-default text-center">
                   <p className="text-xl md:text-3xl font-bold text-gray-900 dark:!text-white">100%</p>
                   <p className="text-[10px] md:text-sm text-gray-500 dark:!text-gray-300 font-medium whitespace-nowrap">Satisfaction</p>
               </motion.div>
                <div className="h-8 md:h-10 w-px bg-gray-200 dark:bg-gray-700"></div>
               <motion.a 
                   href="https://wa.me/918304968724"
                   target="_blank"
                   rel="noopener noreferrer"
                   whileHover={{ scale: 1.05 }} 
                   className="cursor-pointer block text-center group"
               >
                   <div className="flex items-center justify-center gap-1 md:gap-2">
                       <p className="text-xl md:text-3xl font-bold text-green-600 dark:!text-white group-hover:text-green-600 dark:group-hover:!text-green-400 transition-colors">24/7</p>
                       <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-8 md:h-8 text-green-500 dark:text-green-400">
                           <path d="M12.0004 2c-5.5228 0-10 4.47715-10 10 0 1.7913.48316 3.4727 1.32896 4.9358l-1.32896 4.8624 4.97637-1.3259c1.4251.7981 3.0673 1.2577 4.8236 1.2577 5.5229 0 10-4.4772 10-10 0-5.52285-4.4771-10-10-10zm0 1.66667c4.6019 0 8.3333 3.73145 8.3333 8.33333 0 4.6019-3.7314 8.3333-8.3333 8.3333-1.4589 0-2.8256-.3767-4.0175-1.034l-.2869-.1581-2.97235.792.80996-2.9067-.16807-.2918c-.73273-1.2721-1.15181-2.7303-1.15181-4.2847 0-4.60188 3.73143-8.33333 8.33337-8.33333zm4.5826 11.23333c-.1933.5433-.9908 1.05-1.6041 1.0967-.4067.0308-.8717.0608-2.6175-.6575-1.9617-.8067-3.2375-2.8134-3.3375-2.9467-.1.135-.8025 1.0667-.8025 2.0308 0 .8575.4375 1.6708 1.0825 2.0075.0975.05.2125.0808.3333.0808.3842 0 .5842-.2625.7534-.51 0 0 .1516-.24.2691-.4541.1175-.2134.25-.4442.1159-.6934-.1342-.2491-.5642-.6475-.7834-.8458-.2191-.1983-.4375-.2391-.6558-.0408-.2183.1975-.4658.4683-.6658.7458-.2.2775-.4075.525-.2383.8725.17.3475.76.6242 1.3417.8283 2.6641.9325 3.3225.86 3.9116.8042.8725-.0825 1.3117-.79 1.5434-1.2309.2316-.4408.2458-.8575.1741-.9891-.0717-.1309-.2658-.205-0.5592-.3509z" />
                       </svg>
                   </div>
                   <p className="text-[10px] md:text-sm text-gray-500 dark:!text-gray-300 font-medium group-hover:text-green-600 dark:group-hover:!text-green-400 transition-colors whitespace-nowrap">Chat Support</p>
               </motion.a>
            </motion.div>
          </motion.div>


          {/* Right Column: Glassmorphism Stats */}
          <motion.div 
            className="flex-1 w-full max-w-lg lg:max-w-none perspective-1000"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative transform rotate-y-12 transition-transform duration-500 hover:rotate-y-0">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-green-200 opacity-70 blur-3xl rounded-full"></div>
              
              <div className="relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-white/40 dark:border-gray-700/40 rounded-[1.5rem] md:rounded-[2rem] p-4 md:p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-4 md:mb-8">
                    <div>
                        <h3 className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white">Growth-Focused Solutions</h3>
                        <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">All-in-One Solution</p>
                    </div>
                    <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 md:px-3 py-1 rounded-full text-[10px] md:text-sm font-semibold flex items-center">
                        <Award className="h-3 w-3 md:h-4 md:w-4 mr-1" /> Top Quality
                    </div>
                </div>

                <motion.div 
                  className="space-y-3 md:space-y-6"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.15,
                        delayChildren: 0.4
                      }
                    }
                  }}
                >
                    <motion.div 
                      variants={{
                        hidden: { opacity: 0, x: 20 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                      }}
                      whileHover={{ scale: 1.02 }}
                      className="bg-white/50 dark:bg-gray-700/50 p-2 md:p-4 rounded-xl flex items-center border border-white/60 dark:border-gray-600/30 shadow-sm transition-colors cursor-pointer hover:bg-white/80 dark:hover:bg-gray-700/80"
                    >
                        <div className="bg-blue-100 dark:bg-blue-900/50 p-2 md:p-3 rounded-lg mr-3 md:mr-4">
                            <Globe className="h-4 w-4 md:h-6 md:w-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                            <p className="text-[10px] md:text-sm text-gray-500 dark:text-gray-400">Custom Development</p>
                            <p className="text-sm md:text-xl font-bold text-gray-900 dark:text-white">Tailored to You</p>
                        </div>
                    </motion.div>

                    <motion.div 
                      variants={{
                        hidden: { opacity: 0, x: 20 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                      }}
                      whileHover={{ scale: 1.02 }}
                      className="bg-white/50 dark:bg-gray-700/50 p-2 md:p-4 rounded-xl flex items-center border border-white/60 dark:border-gray-600/30 shadow-sm transition-colors cursor-pointer hover:bg-white/80 dark:hover:bg-gray-700/80"
                    >
                         <div className="bg-teal-100 dark:bg-teal-900/50 p-2 md:p-3 rounded-lg mr-3 md:mr-4">
                            <Smartphone className="h-4 w-4 md:h-6 md:w-6 text-teal-600 dark:text-teal-400" />
                        </div>
                        <div>
                            <p className="text-[10px] md:text-sm text-gray-500 dark:text-gray-400">Mobile Responsive</p>
                            <p className="text-sm md:text-xl font-bold text-gray-900 dark:text-white">Perfect on Any Device</p>
                        </div>
                    </motion.div>

                    <motion.div 
                      variants={{
                        hidden: { opacity: 0, x: 20 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                      }}
                      whileHover={{ scale: 1.02 }}
                      className="bg-white/50 dark:bg-gray-700/50 p-2 md:p-4 rounded-xl flex items-center border border-white/60 dark:border-gray-600/30 shadow-sm transition-colors cursor-pointer hover:bg-white/80 dark:hover:bg-gray-700/80"
                    >
                        <div className="bg-green-100 dark:bg-green-900/50 p-2 md:p-3 rounded-lg mr-3 md:mr-4">
                            <Search className="h-4 w-4 md:h-6 md:w-6 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                            <p className="text-[10px] md:text-sm text-gray-500 dark:text-gray-400">SEO Optimization</p>
                            <p className="text-sm md:text-xl font-bold text-gray-900 dark:text-white">Rank Higher</p>
                        </div>
                    </motion.div>
                </motion.div>
              </div>

               {/* Floating elements */}
               <motion.a 
                href="https://wa.me/918304968724"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -top-3 -right-2 md:-top-6 md:-right-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white p-2 md:p-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 z-50 cursor-pointer flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               >
                 <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-8 md:h-8">
                     <path d="M12.0004 2c-5.5228 0-10 4.47715-10 10 0 1.7913.48316 3.4727 1.32896 4.9358l-1.32896 4.8624 4.97637-1.3259c1.4251.7981 3.0673 1.2577 4.8236 1.2577 5.5229 0 10-4.4772 10-10 0-5.52285-4.4771-10-10-10zm0 1.66667c4.6019 0 8.3333 3.73145 8.3333 8.33333 0 4.6019-3.7314 8.3333-8.3333 8.3333-1.4589 0-2.8256-.3767-4.0175-1.034l-.2869-.1581-2.97235.792.80996-2.9067-.16807-.2918c-.73273-1.2721-1.15181-2.7303-1.15181-4.2847 0-4.60188 3.73143-8.33333 8.33337-8.33333zm4.5826 11.23333c-.1933.5433-.9908 1.05-1.6041 1.0967-.4067.0308-.8717.0608-2.6175-.6575-1.9617-.8067-3.2375-2.8134-3.3375-2.9467-.1.135-.8025 1.0667-.8025 2.0308 0 .8575.4375 1.6708 1.0825 2.0075.0975.05.2125.0808.3333.0808.3842 0 .5842-.2625.7534-.51 0 0 .1516-.24.2691-.4541.1175-.2134.25-.4442.1159-.6934-.1342-.2491-.5642-.6475-.7834-.8458-.2191-.1983-.4375-.2391-.6558-.0408-.2183.1975-.4658.4683-.6658.7458-.2.2775-.4075.525-.2383.8725.17.3475.76.6242 1.3417.8283 2.6641.9325 3.3225.86 3.9116.8042.8725-.0825 1.3117-.79 1.5434-1.2309.2316-.4408.2458-.8575.1741-.9891-.0717-.1309-.2658-.205-0.5592-.3509z" />
                 </svg>
               </motion.a>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
