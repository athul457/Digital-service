import React from 'react';
import { motion } from 'framer-motion';
import { Cookie, Settings, Info } from 'lucide-react';
import SEO from '../components/SEO';

const CookiePolicy = () => {
  return (
    <div className="pt-24 pb-16 bg-white dark:bg-gray-900 min-h-screen mt-16 transition-colors duration-300">
      <SEO 
        title="Cookie Policy" 
        description="Information about how we use cookies to improve your experience on our website." 
        keywords="cookie policy, tracking cookies, user experience, cookie consent"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Cookie Policy</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">Last updated: February 11, 2026</p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Cookie className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                1. What Are Cookies
              </h2>
              <p>
                Cookies are small text files that are used to store small pieces of information. They are stored on your device when the website is loaded on your browser. These cookies help us make the website function properly, make it more secure, provide better user experience, and understand how the website performs and to analyze what works and where it needs improvement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Info className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                2. How We Use Cookies
              </h2>
              <p>
                As most of the online services, our website uses first-party and third-party cookies for several purposes. First-party cookies are mostly necessary for the website to function the right way, and they do not collect any of your personally identifiable data.
              </p>
              <p className="mt-4">
                The third-party cookies used on our website are mainly for understanding how the website performs, how you interact with our website, keeping our services secure, providing advertisements that are relevant to you, and all in all providing you with a better and improved user experience and help speed up your future interactions with our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Types of Cookies We Use</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 transition-colors">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Essential Cookies</h3>
                  <p>These are strictly necessary for the website to function properly. They ensure basic functionalities and security features of the website, anonymously.</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 transition-colors">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Functional Cookies</h3>
                  <p>These help to perform certain functionalities like sharing the content of the website on social media platforms, collect feedbacks, and other third-party features.</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 transition-colors">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Analytics Cookies</h3>
                  <p>These provide information on how the visitor interacts with the website. It helps to understand metrics such as number of visitors, bounce rate, traffic source, etc.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Settings className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                4. Managing Cookies
              </h2>
              <p>
                You can fundamentally control and manage cookies through your browser settings. Please note that removing or blocking cookies can impact your user experience and parts of our website may no longer be fully accessible.
              </p>
              <p className="mt-4">
                Most browsers allow you to view, manage, delete and block cookies for a website. Be aware that if you delete all cookies then any preferences you have set will be lost, including the ability to opt-out from cookies as this function itself requires placement of an opt out cookie on your device.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CookiePolicy;
