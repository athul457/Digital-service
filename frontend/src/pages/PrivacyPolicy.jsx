import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye } from 'lucide-react';
import SEO from '../components/SEO';

const PrivacyPolicy = () => {
  return (
    <div className="pt-24 pb-16 bg-white dark:bg-gray-900 min-h-screen mt-16 transition-colors duration-300">
      <SEO 
        title="Privacy Policy" 
        description="Our privacy commitment to you. Read how we collect, use, and protect your data." 
        keywords="privacy policy, data protection, gdpr, privacy rights"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Privacy Policy</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">Last updated: February 11, 2026</p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Shield className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                1. Introduction
              </h2>
              <p>
                Welcome to WebBloom ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Eye className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                2. Data We Collect
              </h2>
              <p>
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong className="text-gray-900 dark:text-white">Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                <li><strong className="text-gray-900 dark:text-white">Contact Data:</strong> includes email address and telephone numbers.</li>
                <li><strong className="text-gray-900 dark:text-white">Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website.</li>
                <li><strong className="text-gray-900 dark:text-white">Usage Data:</strong> includes information about how you use our website, products and services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Lock className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                3. How We Use Your Data
              </h2>
              <p>
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                <li>Where we need to comply with a legal or regulatory obligation.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Your Legal Rights</h2>
              <p>
                Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or our privacy practices, please contact us at: <a href="mailto:hello@webbloom.com" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">hello@webbloom.com</a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
