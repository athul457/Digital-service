import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Particles from '../components/Particles';
import { motion } from 'framer-motion';
import { Award, Users, Globe, TrendingUp } from 'lucide-react';
import SEO from '../components/SEO';

const AboutPage = () => {
  const stats = [
    { icon: Users, value: "200+", label: "Happy Clients" },
    { icon: Globe, value: "15+", label: "Countries Served" },
    { icon: Award, value: "50+", label: "Awards Won" },
    { icon: TrendingUp, value: "98%", label: "Success Rate" },
  ];

  return (
    <div className="pt-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <SEO 
        title="About Us - Digital Agency" 
        description="Learn about our mission, vision, and the team driving your digital success."
      />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
         <div className="absolute inset-0 z-0 pointer-events-none">
             <Particles
                particleColors={['#3b82f6', '#10b981']}
                particleCount={80}
                particleSpread={15}
                speed={0.2}
             />
         </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight"
            >
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">Our Agency</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              We are a team of passionate creators, developers, and strategists dedicated to transforming brands through digital innovation.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-16 bg-blue-600 dark:bg-blue-700 text-white transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4"
                >
                  <Icon className="w-10 h-10 mx-auto mb-4 opacity-80" />
                  <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
                  <p className="text-blue-100 font-medium">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section> */}

       {/* Story Section */}
       <section className="py-24 bg-white dark:bg-gray-900 overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Our Story</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        Founded in 2020, we started with a simple mission: to help small businesses navigate the digital world. What began as a two-person team has grown into a full-service digital agency with clients across the globe.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        We believe in the power of good design and robust engineering. Our approach is collaborative and data-driven, ensuring that every project we undertake delivers measurable results.
                    </p>
                </motion.div>
                <motion.div
                     initial={{ opacity: 0, x: 50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     className="relative"
                >
                     <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-green-500 rounded-3xl transform rotate-3 opacity-20"></div>
                     <img 
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Team working together" 
                        className="relative rounded-3xl shadow-2xl z-10"
                     />
                </motion.div>
            </div>
        </div>
       </section>

      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default AboutPage;
