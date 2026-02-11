import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-blue-200 text-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Grow Your Business Online?</h2>
        <p className="text-xl text-blue-600 mb-10 max-w-2xl mx-auto">
          Don't let another customer slip away. Get a high-converting website today.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/contact"
            className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg transform hover:scale-105 flex items-center justify-center"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Book Free Consultation
          </Link>
          
          <a
            href="tel:+91 9207108723"
            className="bg-blue-700 border border-blue-400 hover:bg-blue-800 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call Now
          </a>
          
          <a
            href="https://wa.me/919207108723"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg transform hover:scale-105 flex items-center justify-center"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
