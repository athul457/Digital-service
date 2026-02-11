import { services } from '../data/servicesData';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={index}
                className="group relative bg-white p-8 rounded-[2rem] shadow-lg border border-gray-100 hover:border-transparent transition-all duration-500 overflow-hidden hover:-translate-y-2"
                variants={itemVariants}
              >
                {/* Gradient Hover Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

                <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                        <Icon className="h-8 w-8 text-blue-600 group-hover:text-purple-600 transition-colors duration-500" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                        {service.title}
                    </h3>
                    
                    <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                        <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5 group-hover:bg-green-200 transition-colors">
                            <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                        </div>
                        <span className="text-gray-600 group-hover:text-gray-900 transition-colors text-sm leading-relaxed font-medium">
                            {feature}
                        </span>
                        </div>
                    ))}
                    </div>

                    {/* <div className="mt-8 pt-6 border-t border-gray-100 group-hover:border-blue-100 transition-colors">
                        <button className="text-blue-600 font-bold text-sm uppercase tracking-wide flex items-center group-hover:text-purple-600 transition-colors">
                            Learn More <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                    </div> */}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
