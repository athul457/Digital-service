import { ArrowDown, Globe, Smartphone, TrendingDown, Clock, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

const Problem = () => {
  const problems = [
    {
      icon: Globe,
      title: "Invisible Online?",
      description: "No website means you don't exist to 90% of customers.",
    },
    {
      icon: Clock,
      title: "Outdated Design?",
      description: "A 2010-era site destroys trust before they even read a word.",
    },
    {
      icon: Smartphone,
      title: "Mobile Broken?",
      description: "If it doesn't work on a phone, you're losing half your traffic.",
    },
    {
      icon: TrendingDown,
      title: "Zero Leads?",
      description: "Traffic is useless if it doesn't turn into paying customers.",
    }
  ];

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
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-24 bg-red-50/50 relative overflow-hidden">
      {/* Background Elements - Subtle "Warning" Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-200/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-200/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center p-2 bg-red-100 text-red-600 rounded-full mb-6 ring-4 ring-red-50">
            <AlertTriangle className="w-6 h-6 mr-2" />
            <span className="font-bold uppercase tracking-wide text-sm">Vital check</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Is your business <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">leaking revenue?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            These interaction killers scares away potential clients instantly.
          </p>
        </motion.div>

        <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
          {problems.map((item, index) => {
            const Icon = item.icon;
            return (
                <motion.div 
                    key={index} 
                    variants={itemVariants}
                    className="flex flex-col items-center text-center p-8 bg-white rounded-[2rem] border border-red-100 shadow-xl shadow-red-100/50 hover:shadow-2xl hover:shadow-red-200/50 hover:-translate-y-2 transition-all duration-300 group"
                >
                <div className="p-5 bg-red-50 rounded-2xl mb-6 group-hover:bg-red-600 transition-colors duration-300">
                    <Icon className="h-10 w-10 text-red-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                    {item.description}
                </p>
                </motion.div>
            );
          })}
        </motion.div>

        <motion.div 
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-flex flex-col items-center animate-bounce mb-6">
            <ArrowDown className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
            We <span className="text-blue-600">fix all of it.</span>
          </h3>
          <div className="mt-8 h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;
