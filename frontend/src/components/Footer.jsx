import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Code, Heart } from 'lucide-react';


const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200 pt-20 pb-10 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">


          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-gray-900 dark:text-white mb-6 group">
              <img src="/favicon.svg" alt="WebBloom Logo" className="h-20 w-20 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent font-dancing ml-2">WebBloom</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Helping businesses grow with custom digital solutions. From web development to digital marketing, we create experiences that convert.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300 shadow-sm hover:shadow">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 hover:border-blue-200 dark:hover:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300 shadow-sm hover:shadow">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 hover:border-green-200 dark:hover:border-green-800 hover:bg-green-50 dark:hover:bg-green-900/30 transition-all duration-300 shadow-sm hover:shadow">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-500 hover:border-blue-200 dark:hover:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300 shadow-sm hover:shadow">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-900 dark:text-white">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/services" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Web Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    E-Commerce
                </Link>
              </li>
              {/* <li>
                <Link to="/services" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    SEO & Marketing
                </Link>
              </li> */}
              <li>
                <Link to="/services" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Maintenance
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    UI/UX Design
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                   Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-900 dark:text-white">Contact Us</h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg mr-3 shrink-0">
                    <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="text-gray-600 dark:text-gray-400 leading-tight">28/1 10th A Cross 16th Main B.T.M Second Stage Bangalore</span>
              </li>
              <li className="flex items-center">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg mr-3 shrink-0">
                    <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="text-gray-600 dark:text-gray-400">+91 8304968724</span>
              </li>
              <li className="flex items-center">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg mr-3 shrink-0">
                    <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="text-gray-600 dark:text-gray-400">hello@webbloom.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          {/* <p className="text-gray-500 text-sm flex items-center">
            &copy; {currentYear} web service. Made with <Heart className="h-3 w-3 text-red-500 mx-1 fill-current" /> by your team.
          </p> */}
          <div className="flex space-x-8 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">Terms of Service</Link>
            <Link to="/cookie-policy" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
