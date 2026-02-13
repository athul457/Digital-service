import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-[95%] mx-auto bg-white dark:bg-gradient-to-br dark:from-blue-950 dark:via-gray-900 dark:to-black text-gray-900 dark:text-white text-center rounded-[2rem] md:rounded-[3rem] py-12 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800">
        
        {/* Abstract Background Shapes - Adapted for both modes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-50 dark:opacity-20 animate-blob"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-green-100 dark:bg-indigo-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-50 dark:opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-blue-50 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-[100px] opacity-30 dark:opacity-10"></div>
        </div>

        <div className="max-w-4xl mx-auto px-2 md:px-8 relative z-10">
            {/* <div className="inline-block mb-6 px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-blue-100 dark:border-blue-400/30 bg-blue-50 dark:bg-blue-500/10 backdrop-blur-sm">
                <span className="text-blue-600 dark:text-blue-100 font-semibold tracking-wide text-xs md:text-sm uppercase">Limited Availability</span>
            </div> */}
            
            <h2 className="text-3xl md:text-6xl font-extrabold mb-6 md:mb-8 tracking-tight leading-tight text-gray-900 dark:text-white">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 dark:from-blue-400 dark:to-green-400">Scale</span> Your Business?
            </h2>
            
            <p className="text-base md:text-xl text-gray-600 dark:text-blue-100/90 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
            Stop losing customers to outdated design. Get a high-converting digital presence that works as hard as you do.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-5">
            <Link
                to="/contact"
                className="group bg-gradient-to-r from-blue-600 to-green-500 dark:bg-none dark:bg-white text-white dark:text-blue-900 hover:brightness-110 dark:hover:bg-blue-50 px-6 py-3 md:px-8 md:py-5 rounded-full font-bold text-base md:text-lg transition-all shadow-lg hover:shadow-xl dark:shadow-[0_0_20px_rgba(255,255,255,0.3)] transform hover:-translate-y-1 flex items-center justify-center"
            >
                <Calendar className="mr-2 h-4 w-4 md:h-5 md:w-5 text-white dark:text-blue-900 transition-colors" />
                Book Free Consultation
            </Link>
            
            <a
                href="tel:+91 9207108723"
                className="group bg-white dark:bg-white/10 border border-gray-200 dark:border-white/20 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/20 backdrop-blur-md px-6 py-3 md:px-8 md:py-5 rounded-full font-bold text-base md:text-lg transition-all flex items-center justify-center hover:-translate-y-1 shadow-sm dark:shadow-none"
            >
                <Phone className="mr-2 h-4 w-4 md:h-5 md:w-5 text-gray-900 dark:text-white" />
                Call Now
            </a>
            
            <a
                href="https://wa.me/919207108723"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 md:px-8 md:py-5 rounded-full font-bold text-base md:text-lg transition-all shadow-lg hover:shadow-green-500/30 transform hover:-translate-y-1 flex items-center justify-center"
            >
                <MessageCircle className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                WhatsApp
            </a>
            </div>
            
            {/* <p className="mt-6 md:mt-8 text-xs md:text-sm text-gray-500 dark:text-blue-200/60">
                No commitment required. 15-minute free strategy call.
            </p> */}
        </div>
      </div>
    </section>
  );
};

export default CTA;
