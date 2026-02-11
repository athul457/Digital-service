import { Clock, DollarSign, Layout, TrendingUp, Headphones } from 'lucide-react';
import Particles from './Particles';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "We value your time and deliver projects on schedule."
    },
    {
      icon: DollarSign,
      title: "Affordable Pricing",
      description: "Competitive rates without compromising quality."
    },
    {
      icon: Layout,
      title: "Clean Modern Design",
      description: "Aesthetics that impress and engage your visitors."
    },
    {
      icon: TrendingUp,
      title: "Business-Focused Strategy",
      description: "Solutions designed to grow your business and revenue."
    },
    {
      icon: Headphones,
      title: "Ongoing Support",
      description: "We're here for you even after the launch."
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-bold tracking-wider uppercase text-sm border border-blue-200">Why Us?</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 mt-4 tracking-tight text-gray-900 leading-tight">
                Why leading brands choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">US</span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              We combine creativity with technical expertise to deliver digital solutions that stand out. Here is why businesses trust us.
            </p>
            <div className="space-y-8">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <motion.div 
                    key={index}
                    className="flex items-start group p-4 rounded-2xl hover:bg-white/60 hover:shadow-lg hover:backdrop-blur-xl border border-transparent hover:border-white/40 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="bg-blue-100 border border-blue-200 p-4 rounded-xl mr-6 flex-shrink-0 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300 shadow-sm">
                      <Icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">{reason.title}</h3>
                      <p className="text-gray-600">{reason.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-purple-200 blur-[100px] opacity-60 rounded-full"></div>
             
             <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/40 z-10 group bg-white/30 backdrop-blur-sm p-2">
                <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                    alt="Team working together" 
                    className="w-full h-full object-cover rounded-[2rem] transform group-hover:scale-105 transition-transform duration-700"
                />
             </div>
             
             {/* Floating Badge */}
             <motion.div 
                className="absolute -bottom-10 -left-10 bg-white/80 backdrop-blur-xl border border-white/60 p-8 rounded-[2rem] shadow-2xl z-20 hidden md:block"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
             >
                <div className="flex items-center gap-4">
                    <div className="bg-green-100 p-4 rounded-full border border-green-200">
                        <TrendingUp className="h-8 w-8 text-green-600" />
                    </div>
                    <div>
                        <p className="text-3xl font-bold text-gray-900">200%</p>
                        <p className="text-gray-500 text-sm font-medium">Average ROI</p>
                    </div>
                </div>
             </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
