import React from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckSquare, AlertCircle } from 'lucide-react';
import SEO from '../components/SEO';

const TermsOfService = () => {
  return (
    <div className="pt-24 pb-16 bg-white min-h-screen mt-16">
      <SEO 
        title="Terms of Service" 
        description="Read our terms and conditions for using our website and services." 
        keywords="terms of service, legal agreement, user terms, conditions"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-lg text-gray-600">Last updated: February 11, 2026</p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FileText className="w-6 h-6 mr-2 text-blue-600" />
                1. Agreement to Terms
              </h2>
              <p>
                By accessing our website and using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <CheckSquare className="w-6 h-6 mr-2 text-blue-600" />
                2. Use License
              </h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on WebBloom's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Modify or copy the materials;</li>
                <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                <li>Attempt to decompile or reverse engineer any software contained on WebBloom's website;</li>
                <li>Remove any copyright or other proprietary notations from the materials; or</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <AlertCircle className="w-6 h-6 mr-2 text-blue-600" />
                3. Disclaimer
              </h2>
              <p>
                The materials on WebBloom's website are provided on an 'as is' basis. WebBloom makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Limitations</h2>
              <p>
                In no event shall WebBloom or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on WebBloom's website, even if WebBloom or a WebBloom authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Accuracy of Materials</h2>
              <p>
                The materials appearing on WebBloom's website could include technical, typographical, or photographic errors. WebBloom does not warrant that any of the materials on its website are accurate, complete or current. WebBloom may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
