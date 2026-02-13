import Portfolio from '../components/Portfolio';
import CTA from '../components/CTA';
import Particles from '../components/Particles';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const PortfolioPage = () => {
  return (
    <div className="pt-16 mt-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <SEO 
        title="Our Portfolio" 
        description="See our recent projects. We help brands stand out with exceptional digital experiences." 
        keywords="portfolio, web design projects, case studies, success stories"
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
             <span className="bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-300 px-4 py-1.5 rounded-full font-bold uppercase tracking-wider text-sm border border-green-100 dark:border-green-800 mb-6 inline-block">
                Our Work
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-gray-900 dark:text-white">
                Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Projects</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Explore a selection of our recent work. We help brands stand out and grow through exceptional digital experiences.
            </p>
        </motion.div>
      </section>

      <div className="-mt-12 relative z-20">
         <Portfolio />
      </div>
      <CTA />
    </div>
  );
};

export default PortfolioPage;
