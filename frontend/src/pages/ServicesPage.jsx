import Services from '../components/Services';
import CTA from '../components/CTA';
import Testimonials from '../components/Testimonials';
import Particles from '../components/Particles';
import { motion } from 'framer-motion';

const ServicesPage = () => {
  return (
    <div className="pt-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 min-h-screen"> {/* Add padding for fixed navbar */}
      <Services />
      
      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <CTA />
    </div>
  );
};

export default ServicesPage;
