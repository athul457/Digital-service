import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Search, Smartphone, TrendingUp, Users, Award, Globe } from 'lucide-react';
import Particles from './Particles';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative bg-white text-gray-900 py-20 lg:py-32 overflow-hidden">
      {/* Particles Background - Darker colors for visibility on white */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={['#3b82f6', '#8b5cf6', '#0f172a']} // Blue-500, Violet-500, Slate-900
          particleCount={150}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={true} // Enable alpha for softer look on white
          disableRotation={false}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Column: Content */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight text-gray-900">
              We Build Websites That <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Bring You Customers</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Static & Dynamic websites for businesses, product sellers, and service professionals.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-12">
              <Link
                to="/contact"
                className="bg-gray-900 hover:bg-black text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center"
              >
                Get Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/portfolio"
                className="bg-white border-2 border-gray-200 hover:border-gray-900 text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105"
              >
                View Portfolio
              </Link>
            </div>

            {/* Trust Badges */}
            <motion.div 
                className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm font-medium text-gray-500 border-t border-gray-200 pt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-blue-600 mr-2" />
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center">
                <Search className="h-5 w-5 text-blue-600 mr-2" />
                <span>SEO Optimized</span>
              </div>
              <div className="flex items-center">
                <Smartphone className="h-5 w-5 text-blue-600 mr-2" />
                <span>Mobile Responsive</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Glassmorphism Stats - Light Mode */}
          <motion.div 
            className="flex-1 w-full max-w-lg lg:max-w-none perspective-1000"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative transform rotate-y-12 transition-transform duration-500 hover:rotate-y-0">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-purple-200 opacity-70 blur-3xl rounded-full"></div>
              
              <div className="relative bg-white/60 backdrop-blur-xl border border-white/40 rounded-[2rem] p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900">Premium Services</h3>
                        <p className="text-sm text-gray-500">All-in-One Solution</p>
                    </div>
                    <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Award className="h-4 w-4 mr-1" /> Top Quality
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="bg-white/50 p-4 rounded-xl flex items-center border border-white/60 shadow-sm hover:bg-white/80 transition-colors">
                        <div className="bg-blue-100 p-3 rounded-lg mr-4">
                            <Globe className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Custom Development</p>
                            <p className="text-xl font-bold text-gray-900">Tailored to You</p>
                        </div>
                    </div>

                    <div className="bg-white/50 p-4 rounded-xl flex items-center border border-white/60 shadow-sm hover:bg-white/80 transition-colors">
                         <div className="bg-purple-100 p-3 rounded-lg mr-4">
                            <Smartphone className="h-6 w-6 text-purple-600" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Mobile Responsive</p>
                            <p className="text-xl font-bold text-gray-900">Perfect on Any Device</p>
                        </div>
                    </div>

                    <div className="bg-white/50 p-4 rounded-xl flex items-center border border-white/60 shadow-sm hover:bg-white/80 transition-colors">
                        <div className="bg-orange-100 p-3 rounded-lg mr-4">
                            <Search className="h-6 w-6 text-orange-600" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">SEO Optimization</p>
                            <p className="text-xl font-bold text-gray-900">Rank Higher</p>
                        </div>
                    </div>
                </div>
              </div>

               {/* Floating elements */}
               <motion.div 
                className="absolute -top-6 -right-6 bg-blue-600 text-white p-4 rounded-2xl shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               >
                 <div className="text-center">
                    <p className="text-xs font-bold opacity-80">Support</p>
                    <p className="font-extrabold text-xl">24/7 💬</p>
                 </div>
               </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
