import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-[95%] mx-auto bg-gradient-to-br from-blue-300 via-blue-400 to-indigo-400 text-white text-center rounded-[3rem] py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden shadow-2xl">
        
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-indigo-900 rounded-full mix-blend-multiply filter blur-[100px] opacity-20"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-blue-400/30 bg-blue-500/10 backdrop-blur-sm">
                <span className="text-blue-200 font-semibold tracking-wide text-sm uppercase">Limited Availability</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight leading-tight">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">Scale</span> Your Business?
            </h2>
            
            <p className="text-xl text-blue-100/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Stop losing customers to outdated design. Get a high-converting digital presence that works as hard as you do.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Link
                to="/contact"
                className="group bg-white text-blue-900 hover:bg-blue-50 px-8 py-5 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transform hover:-translate-y-1 flex items-center justify-center"
            >
                <Calendar className="mr-2 h-5 w-5 group-hover:text-blue-700 transition-colors" />
                Book Free Consultation
            </Link>
            
            <a
                href="tel:+91 9207108723"
                className="group bg-white/10 border border-white/20 hover:bg-white/20 backdrop-blur-md text-white px-8 py-5 rounded-full font-bold text-lg transition-all flex items-center justify-center hover:-translate-y-1"
            >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
            </a>
            
            <a
                href="https://wa.me/919207108723"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-5 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-green-500/30 transform hover:-translate-y-1 flex items-center justify-center"
            >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
            </a>
            </div>
            
            <p className="mt-8 text-sm text-blue-200/60">
                No commitment required. 15-minute free strategy call.
            </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
