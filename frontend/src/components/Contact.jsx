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

    const formData = new FormData(form.current);
    const formValues = Object.fromEntries(formData.entries());

    if (!formValues.callback_time) {
        setLoading(false);
        setStatus({ success: false, message: 'Please select a preferred callback time.' });
        return;
    }

    // Generate Google Calendar Link
    const dateObj = new Date(formValues.callback_time);
    const startTime = dateObj.toISOString().replace(/-|:|\.\d\d\d/g, "");
    const endTime = new Date(dateObj.getTime() + 30 * 60000).toISOString().replace(/-|:|\.\d\d\d/g, "");
    
    const subject = "BoolianLabs Callback Request";
    const details = encodeURIComponent(`Name: ${formValues.user_name}\nPhone: ${formValues.user_phone}\nEmail: ${formValues.user_email}\n\nMessage: ${formValues.message}`);
    const location = encodeURIComponent("Phone Call");
    
    const calendarLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(subject)}&dates=${startTime}/${endTime}&details=${details}&location=${location}`;

    // Prepare data for EmailJS
    const templateParams = {
        ...formValues,
        // callback_time is already in formValues
        calendar_link: calendarLink,
        subject: formValues.subject 
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
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
    <section className="relative bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-20 lg:py-32 overflow-hidden transition-colors duration-300" id="contact">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form - Matches Hero Glass Card */}
          <motion.div 
            className="relative transform transition-transform duration-500 hover:scale-[1.01]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-purple-200 dark:from-blue-900/40 dark:to-purple-900/40 opacity-70 blur-3xl rounded-full"></div>
            
            <div className="relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-white/40 dark:border-gray-700/40 rounded-[2rem] p-8 shadow-lg">
                <form ref={form} onSubmit={sendEmail}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                    <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                    <input 
                        type="text" 
                        name="user_name"
                        id="user_name" 
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all shadow-sm"
                        placeholder="John Doe"
                    />
                    </div>
                    <div>
                    <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                    <input 
                        type="email" 
                        name="user_email"
                        id="user_email" 
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all shadow-sm"
                        placeholder="john@example.com"
                    />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                    <label htmlFor="user_phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone</label>
                    <input 
                        type="tel" 
                        name="user_phone"
                        id="user_phone" 
                        className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all shadow-sm"
                        placeholder="+1 (555) 000-0000"
                    />
                    </div>
                    <div>
                    <label htmlFor="callback_time" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Preferred Callback Time</label>
                    <input 
                        type="datetime-local" 
                        name="callback_time"
                        id="callback_time" 
                        className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all shadow-sm [color-scheme:light] dark:[color-scheme:dark]"
                    />
                    </div>
                </div>

                <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                    <input 
                        type="text" 
                        name="subject"
                        id="subject" 
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all shadow-sm"
                        placeholder="Project Inquiry"
                    />
                </div>

                <div className="mb-8">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                    <textarea 
                    name="message"
                    id="message" 
                    rows="5"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all shadow-sm resize-none"
                    placeholder="Tell us about your project..."
                    ></textarea>
                </div>
                
                {status.message && (
                    <div className={`mb-4 p-4 rounded-xl ${status.success ? 'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800' : 'bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800'}`}>
                        {status.message}
                    </div>
                )}

                <button 
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white font-bold py-4 px-6 rounded-full transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:brightness-110 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed group"
                >
                    {loading ? 'Sending...' : 'Send Message'} <Send className={`ml-2 h-5 w-5 ${loading ? 'animate-pulse' : 'group-hover:translate-x-1 transition-transform'}`} />
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
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border border-white/40 dark:border-gray-700/40 p-8 rounded-[2rem] shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-xl mr-5 border border-blue-200 dark:border-blue-800">
                    <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Our Location</h4>
                    <p className="text-gray-600 dark:text-gray-300">28/1 10th A Cross 16th Main B.T.M Second Stage Bangalore</p>
                  </div>
                </div>
                
                <a href="tel:+15551234567" className="flex items-start group">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-xl mr-5 border border-blue-200 dark:border-blue-800 group-hover:bg-blue-600 transition-colors duration-300">
                    <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Phone Number</h4>
                    <p className="text-gray-600 dark:text-gray-300">+91 8304968724</p>
                  </div>
                </a>

                <a href="mailto:hello@boolianlabs.com" className="flex items-start group">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-xl mr-5 border border-blue-200 dark:border-blue-800 group-hover:bg-blue-600 transition-colors duration-300">
                    <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Email Address</h4>
                    <p className="text-gray-600 dark:text-gray-300">hello@boolianlabs.com</p>
                  </div>
                </a>

                <a href="https://wa.me/918304968724" target="_blank" rel="noopener noreferrer" className="flex items-start group">
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-xl mr-5 border border-green-200 dark:border-green-800 group-hover:bg-green-600 transition-colors duration-300">
                    <MessageCircle className="h-6 w-6 text-green-600 dark:text-green-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">WhatsApp</h4>
                    <p className="text-gray-600 dark:text-gray-300">Chat with us</p>
                  </div>
                </a>
              </div>
            </div>
            
            {/* <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border border-white/40 dark:border-gray-700/40 p-8 rounded-[2rem] shadow-xl"> */}
              {/* <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Business Hours</h3> */}
              {/* <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
                  <span>Monday - Friday</span>
                  <span className="font-medium text-gray-900 dark:text-white">9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
                  <span>Saturday</span>
                  <span className="font-medium text-gray-900 dark:text-white">10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between pt-1">
                  <span>Sunday</span>
                  <span className="text-red-500 font-medium">Closed</span>
                </li>
              </ul> */}
            {/* </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
