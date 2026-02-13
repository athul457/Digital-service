import { ArrowDown, Globe, Smartphone, TrendingDown, Clock, AlertTriangle } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

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
      title: "Not Receiving Enough Inquiries?",
      description: "Clear structure and messaging make a difference.",
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
    <section className="py-12 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-[95%] mx-auto bg-blue-50/50 dark:bg-blue-900/10 rounded-[3rem] py-12 md:py-24 relative overflow-hidden transition-colors duration-300">
      {/* Background Elements - Subtle "Warning" Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
          <motion.div 
            animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ 
                duration: 8, 
                repeat: Infinity,
                ease: "easeInOut" 
            }}
            className="absolute w-[] top-1/4 left-1/4 w-96 h-96 bg-blue-200/20 dark:bg-blue-500/10 rounded-full blur-[120px]"
          />
          <motion.div 
            animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ 
                duration: 10, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1 
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-200/20 dark:bg-green-500/10 rounded-full blur-[120px]" 
          />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
            className="text-center mb-10 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center justify-center p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full mb-6 ring-4 ring-blue-50 dark:ring-blue-900/20"
          >
            <AlertTriangle className="w-6 h-6 mr-2" />
            <span className="font-bold uppercase tracking-wide text-sm">Growth Check</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Is your business <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">ready to grow?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Don't let these common issues hold back your success.
          </p>
        </motion.div>

        <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
          {problems.map((item, index) => (
            <ProblemCard key={index} item={item} variants={itemVariants} />
          ))}
        </motion.div>
        
        <motion.div 
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-flex flex-col items-center animate-bounce mb-6">
            <ArrowDown className="h-8 w-8 text-green-600 dark:text-green-400" />
          </div>
          <h3 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            We <span className="text-green-600 dark:text-green-500">fix all of it.</span>
          </h3>
          <div className="mt-8 h-1 w-32 bg-gradient-to-r from-blue-500 to-green-600 mx-auto rounded-full"></div>
        </motion.div>
      </div>
      </div>
    </section>
  );
};

const ProblemCard = ({ item, variants }) => {
  const Icon = item.icon;
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [20, -20]);
  const rotateY = useTransform(x, [-50, 50], [-20, 20]);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const rotateXSpring = useSpring(rotateX, springConfig);
  const rotateYSpring = useSpring(rotateY, springConfig);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div 
        variants={variants}
        className="relative p-6 md:p-8 bg-white dark:bg-gray-800 rounded-[2rem] md:rounded-[2.5rem] border border-blue-50 dark:border-gray-700 shadow-xl shadow-blue-100/20 dark:shadow-none hover:shadow-2xl hover:shadow-blue-200/40 dark:hover:shadow-blue-900/10 transition-all duration-300 group overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
    >
        {/* Hover Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 dark:from-blue-900/20 to-green-50/50 dark:to-green-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10 flex flex-col items-center text-center">
            <div className="mb-4 md:mb-6 relative [perspective:1000px]">
                <div className="absolute inset-0 bg-blue-200 dark:bg-blue-800 blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                <motion.div 
                  style={{ rotateX: rotateXSpring, rotateY: rotateYSpring }}
                  className="relative p-4 md:p-5 bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-700 dark:to-gray-700 rounded-2xl border border-blue-100 dark:border-gray-600 group-hover:border-blue-200 dark:group-hover:border-blue-500/50"
                >
                    <Icon className="h-8 w-8 md:h-10 md:w-10 text-blue-500 dark:text-blue-400 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300" />
                </motion.div>
            </div>
            
            <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {item.title}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-xs md:text-sm font-medium">
                {item.description}
            </p>
        </div>
    </motion.div>
  );
};

export default Problem;
