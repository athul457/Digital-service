import { pricing } from '../data/pricingData';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="pricing">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricing.map((plan, index) => (
            <div 
              key={index}
              className={`backdrop-blur-xl rounded-[2.5rem] p-1 transition-all duration-300 hover:-translate-y-2 ${
                plan.recommended 
                  ? 'bg-gradient-to-b from-blue-500 to-purple-600 shadow-2xl shadow-blue-500/20 scale-105 z-10' 
                  : 'bg-gray-100 hover:bg-gray-200 border border-gray-100'
              }`}
            >
              <div className={`h-full rounded-[2.3rem] overflow-hidden flex flex-col relative ${plan.recommended ? 'bg-white' : 'bg-white/80'}`}>
                 {plan.recommended && (
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                 )}
                
                <div className="p-10 flex-grow">
                  {plan.recommended && (
                    <span className="inline-block px-4 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.title}</h3>
                  <div className="flex items-baseline mb-8">
                    <span className="text-5xl font-extrabold text-gray-900 tracking-tight">{plan.price}</span>
                    {plan.price !== 'Custom' && <span className="text-gray-500 ml-2 font-medium">/project</span>}
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className={`p-1 rounded-full mr-3 ${plan.recommended ? 'bg-blue-600' : 'bg-gray-200'}`}>
                            <Check className={`h-3 w-3 ${plan.recommended ? 'text-white' : 'text-gray-600'}`} />
                        </div>
                        <span className="text-gray-600 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-10 pt-0 mt-auto">
                  <Link
                    to="/contact"
                    className={`block w-full text-center px-8 py-4 rounded-xl font-bold transition-all duration-300 ${
                      plan.recommended
                        ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-blue-600/30'
                        : 'bg-gray-50 text-gray-900 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    Choose {plan.title}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
