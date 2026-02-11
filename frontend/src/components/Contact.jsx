import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import Particles from './Particles';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ success: false, message: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ success: false, message: '' });

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setLoading(false);
          setStatus({ success: true, message: 'Message sent successfully! We will get back to you soon.' });
          form.current.reset();
          setTimeout(() => setStatus({ success: false, message: '' }), 5000);
        },
        (error) => {
          setLoading(false);
          setStatus({ success: false, message: 'Failed to send message. Please try again later.' });
          console.error('FAILED...', error.text);
        },
      );
  };
  return (
    <section className="relative bg-white text-gray-900 py-20 lg:py-32 overflow-hidden" id="contact">
      {/* Particles Background - Matches Hero */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={['#3b82f6', '#8b5cf6', '#0f172a']}
          particleCount={150}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gray-900">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you. Send us a message and we'll get back to you shortly.
          </p>
        </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form - Matches Hero Glass Card */}
          <motion.div 
            className="relative transform transition-transform duration-500 hover:scale-[1.01]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-purple-200 opacity-70 blur-3xl rounded-full"></div>
            
            <div className="relative bg-white/60 backdrop-blur-xl border border-white/40 rounded-[2rem] p-8 shadow-lg">
                <form ref={form} onSubmit={sendEmail}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                    <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input 
                        type="text" 
                        name="user_name"
                        id="user_name" 
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all shadow-sm"
                        placeholder="John Doe"
                    />
                    </div>
                    <div>
                    <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input 
                        type="email" 
                        name="user_email"
                        id="user_email" 
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all shadow-sm"
                        placeholder="john@example.com"
                    />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                    <label htmlFor="user_phone" className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input 
                        type="tel" 
                        name="user_phone"
                        id="user_phone" 
                        className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all shadow-sm"
                        placeholder="+1 (555) 000-0000"
                    />
                    </div>
                    <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <input 
                        type="text" 
                        name="subject"
                        id="subject" 
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all shadow-sm"
                        placeholder="Project Inquiry"
                    />
                    </div>
                </div>

                <div className="mb-8">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea 
                    name="message"
                    id="message" 
                    rows="5"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all shadow-sm resize-none"
                    placeholder="Tell us about your project..."
                    ></textarea>
                </div>
                
                {status.message && (
                    <div className={`mb-4 p-4 rounded-xl ${status.success ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                        {status.message}
                    </div>
                )}

                <button 
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gray-900 hover:bg-black text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {loading ? 'Sending...' : 'Send Message'} <Send className={`ml-2 h-5 w-5 ${loading ? 'animate-pulse' : ''}`} />
                </button>
                </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="flex flex-col justify-center space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white/60 backdrop-blur-md border border-white/40 p-8 rounded-[2rem] shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-xl mr-5 border border-blue-200">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Our Location</h4>
                    <p className="text-gray-600">28/1 10th A Cross 16th Main B.T.M Second Stage Bangalore</p>
                  </div>
                </div>
                
                <a href="tel:+15551234567" className="flex items-start group">
                  <div className="bg-blue-100 p-3 rounded-xl mr-5 border border-blue-200 group-hover:bg-blue-600 transition-colors duration-300">
                    <Phone className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Phone Number</h4>
                    <p className="text-gray-600">+91 8304968724</p>
                  </div>
                </a>

                <a href="mailto:hello@webagency.com" className="flex items-start group">
                  <div className="bg-blue-100 p-3 rounded-xl mr-5 border border-blue-200 group-hover:bg-blue-600 transition-colors duration-300">
                    <Mail className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Email Address</h4>
                    <p className="text-gray-600">hello@webagency.com</p>
                  </div>
                </a>

                <a href="https://wa.me/918304968724" target="_blank" rel="noopener noreferrer" className="flex items-start group">
                  <div className="bg-green-100 p-3 rounded-xl mr-5 border border-green-200 group-hover:bg-green-600 transition-colors duration-300">
                    <MessageCircle className="h-6 w-6 text-green-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 group-hover:text-green-600 transition-colors">WhatsApp</h4>
                    <p className="text-gray-600">Chat with us</p>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="bg-white/60 backdrop-blur-md border border-white/40 p-8 rounded-[2rem] shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Business Hours</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex justify-between border-b border-gray-200 pb-2">
                  <span>Monday - Friday</span>
                  <span className="font-medium text-gray-900">9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-gray-200 pb-2">
                  <span>Saturday</span>
                  <span className="font-medium text-gray-900">10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between pt-1">
                  <span>Sunday</span>
                  <span className="text-red-500 font-medium">Closed</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
