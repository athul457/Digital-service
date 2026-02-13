import Contact from '../components/Contact';
import Particles from '../components/Particles';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const ContactPage = () => {
  return (
    <div className="pt-16 mt-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <SEO 
        title="Contact Us" 
        description="Get in touch with BoolianLabs. Let's start a conversation about your project." 
        keywords="contact us, hire web designer, project inquiry, consultation"
      />
       <section className="relative text-gray-900 dark:text-white py-12 md:py-16 text-center overflow-hidden transition-colors duration-300">
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-100 dark:bg-blue-900/20 rounded-full blur-[100px] opacity-50 -z-10"></div>

        <motion.div 
            className="max-w-7xl mx-auto px-4 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <span className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-4 py-1.5 rounded-full font-bold uppercase tracking-wider text-sm border border-blue-100 dark:border-blue-800 mb-6 inline-block">
                Get in Touch
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-gray-900 dark:text-white">
                Let's Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Conversation</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Have a project in mind or just want to say hi? We'd love to hear from you.
            </p>
        </motion.div>
      </section>

      <div className="-mt-10 relative z-20">
         <Contact />
      </div>
    </div>
  );
};

export default ContactPage;
