import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Code, Heart } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 text-gray-900 pt-20 pb-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-gray-900 mb-6 group">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20">
                <Code className="h-6 w-6 text-white" />
              </div>
              <span className="tracking-tight">web service</span>
            </Link>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Helping businesses grow with custom digital solutions. From web development to digital marketing, we create experiences that convert.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all duration-300 shadow-sm hover:shadow">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-blue-400 hover:border-blue-200 hover:bg-blue-50 transition-all duration-300 shadow-sm hover:shadow">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-pink-600 hover:border-pink-200 hover:bg-pink-50 transition-all duration-300 shadow-sm hover:shadow">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-blue-700 hover:border-blue-200 hover:bg-blue-50 transition-all duration-300 shadow-sm hover:shadow">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-900">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-900">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/services" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Web Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    E-Commerce
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    SEO & Marketing
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Maintenance
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    UI/UX Design
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                   Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-900">Contact Us</h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-lg mr-3 shrink-0">
                    <MapPin className="h-5 w-5 text-blue-600" />
                </div>
                <span className="text-gray-600 leading-tight">28/1 10th A Cross 16th Main B.T.M Second Stage Bangalore</span>
              </li>
              <li className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-lg mr-3 shrink-0">
                    <Phone className="h-5 w-5 text-blue-600" />
                </div>
                <span className="text-gray-600">+91 8304968724</span>
              </li>
              <li className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-lg mr-3 shrink-0">
                    <Mail className="h-5 w-5 text-blue-600" />
                </div>
                <span className="text-gray-600">hello@antigravity.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          {/* <p className="text-gray-500 text-sm flex items-center">
            &copy; {currentYear} web service. Made with <Heart className="h-3 w-3 text-red-500 mx-1 fill-current" /> by your team.
          </p> */}
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
