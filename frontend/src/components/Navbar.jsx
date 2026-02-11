import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    return location.pathname === path 
      ? 'text-blue-600 font-bold bg-blue-50' 
      : 'text-gray-600 transition-all';
  };

  return (
    <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
            scrolled 
            ? 'bg-white/80 backdrop-blur-xl border-gray-200 shadow-lg' 
            : 'bg-transparent border-transparent py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center group">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-xl mr-3 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20">
                <Code className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight group-hover:text-blue-600 transition-colors">
                Web Service
              </span>
            </Link>
          </div>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-1">
            <div className={`backdrop-blur-md rounded-full px-2 py-1.5 border flex items-center space-x-1 ${scrolled ? 'bg-white/50 border-gray-200' : 'bg-white/30 border-white/40 shadow-sm'}`}>
                {navLinks.map((link) => (
                <Link
                    key={link.name}
                    to={link.path}
                    className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 group font-playwrite ${isActive(link.path)}`}
                >
                    <span className="relative">
                        {link.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                </Link>
                ))}
            </div>
          </div>

          {/* CTA & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Link
              to="/contact"
              className="hidden md:flex items-center bg-gray-900 text-white hover:bg-black px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get Started <ChevronRight className="ml-1 h-3 w-3" />
            </Link>

            {/* Mobile Toggle */}
            <div className="md:hidden flex items-center">
                <button
                onClick={toggleMenu}
                className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors focus:outline-none"
                aria-label="Toggle menu"
                >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-2xl transition-all duration-500 ease-in-out origin-top ${
            isOpen ? 'opacity-100 scale-y-100 max-h-screen' : 'opacity-0 scale-y-0 max-h-0 overflow-hidden'
        }`}
      >
          <div className="px-4 py-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  location.pathname === link.path
                    ? 'bg-blue-50 text-blue-600 border border-blue-100'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center justify-between">
                    {link.name}
                    {location.pathname === link.path && <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>}
                </div>
              </Link>
            ))}
            <div className="pt-6 mt-4 border-t border-gray-100">
              <Link
                to="/contact"
                className="flex items-center justify-center w-full bg-gray-900 hover:bg-black text-white px-4 py-4 rounded-xl font-bold shadow-lg transition-all"
                onClick={() => setIsOpen(false)}
              >
                Get Started Now <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
