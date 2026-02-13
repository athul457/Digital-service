import Pricing from '../components/Pricing';
import WhyChooseUs from '../components/WhyChooseUs';
import CTA from '../components/CTA';
import Particles from '../components/Particles';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const PricingPage = () => {
  return (
    <div className="pt-16 mt-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <SEO 
        title="Pricing" 
        description="Transparent pricing packages for every business size. No hidden fees." 
        keywords="web design pricing, development packages, affordable websites"
      />
      <section className="relative text-gray-900 dark:text-white py-24 text-center overflow-hidden transition-colors duration-300">
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
        
        <motion.div 
            className="max-w-7xl mx-auto px-4 relative z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
        >
             <span className="bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300 px-4 py-1.5 rounded-full font-bold uppercase tracking-wider text-sm border border-orange-100 dark:border-orange-800 mb-6 inline-block">
                Transparent Pricing
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-gray-900 dark:text-white">
                Plans for Every <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Business</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Simple, transparent pricing with no hidden fees. Choose the package that fits your needs.
            </p>
        </motion.div>
      </section>

      <div className="-mt-12 relative z-20">
         <Pricing />
      </div>
      <WhyChooseUs />
      <CTA />
    </div>
  );
};

export default PricingPage;
