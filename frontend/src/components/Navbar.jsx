import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code, ChevronRight, Sun, Moon, Loader2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [isThemeChanging, setIsThemeChanging] = useState(false);

  const handleThemeToggle = () => {
    setIsThemeChanging(true);
    setTimeout(() => {
      toggleTheme();
      setIsThemeChanging(false);
    }, 500); // 500ms loading effect
  };

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
    // { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    return location.pathname === path 
      ? 'text-teal-600 font-bold bg-teal-50 dark:bg-teal-900/30 dark:text-teal-400' 
      : 'text-gray-600 dark:text-gray-300 transition-all hover:text-green-500 dark:hover:text-green-400';
  };

  return (
    <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
            scrolled || location.pathname !== '/' 
            ? 'bg-white dark:bg-gray-900/95 backdrop-blur-xl border-gray-200 dark:border-gray-800 shadow-sm' 
            : 'bg-white/5 dark:bg-black/5 backdrop-blur-md border-white/10 py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center group">
              <img src="/favicon.svg" alt="WebBloom Logo" className="h-16 w-auto group-hover:scale-105 transition-transform duration-300" />
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent font-dancing ml-2">WebBloom</span>
            </Link>
          </div>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-1">
            <div className={`backdrop-blur-md rounded-full px-2 py-1.5 border flex items-center space-x-1 ${scrolled || location.pathname !== '/' ? 'bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700' : 'bg-white/30 dark:bg-black/30 border-white/40 shadow-sm'}`}>
                {navLinks.map((link) => (
                <Link
                    key={link.name}
                    to={link.path}
                    className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 group font-roboto-condensed ${isActive(link.path)}`}
                >
                    <span className="relative">
                        {link.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                </Link>
                ))}
            </div>
          </div>

          {/* CTA & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
                onClick={handleThemeToggle}
                disabled={isThemeChanging}
                className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none relative overflow-hidden"
                aria-label="Toggle theme"
            >
                <div className="relative w-6 h-6 flex items-center justify-center">
                  <AnimatePresence mode="wait" initial={false}>
                    {isThemeChanging ? (
                        <motion.div
                            key="loader"
                            initial={{ scale: 0, opacity: 0, rotate: 0 }}
                            animate={{ scale: 1, opacity: 1, rotate: 360 }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="absolute"
                        >
                            <Loader2 className="h-5 w-5 animate-spin text-blue-500" />
                        </motion.div>
                    ) : theme === 'dark' ? (
                      <motion.div
                        key="sun"
                        initial={{ y: -20, opacity: 0, rotate: -90 }}
                        animate={{ y: 0, opacity: 1, rotate: 0 }}
                        exit={{ y: 20, opacity: 0, rotate: 90 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="absolute"
                      >
                        <Sun className="h-6 w-6" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="moon"
                        initial={{ y: -20, opacity: 0, rotate: -90 }}
                        animate={{ y: 0, opacity: 1, rotate: 0 }}
                        exit={{ y: 20, opacity: 0, rotate: 90 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="absolute"
                      >
                         <Moon className="h-6 w-6" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
            </button>

            <Link
              to="/contact"
               className="hidden md:flex items-center bg-gradient-to-r from-blue-600 to-green-500 text-white hover:brightness-110 px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get a Quote <ChevronRight className="ml-1 h-3 w-3" />
            </Link>

            {/* Mobile Toggle */}
            <div className="md:hidden flex items-center">
                <button
                onClick={toggleMenu}
                className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none"
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
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 shadow-2xl transition-all duration-500 ease-in-out origin-top ${
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
                    ? 'bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 border border-teal-100 dark:border-teal-800'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-900/30 hover:text-green-600 dark:hover:text-green-400'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center justify-between">
                    {link.name}
                    {location.pathname === link.path && <div className="w-1.5 h-1.5 rounded-full bg-teal-600 dark:bg-teal-400"></div>}
                </div>
              </Link>
            ))}
            <div className="pt-6 mt-4 border-t border-gray-100 dark:border-gray-800">
              <Link
                to="/contact"
                className="flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-green-500 hover:brightness-110 text-white px-4 py-4 rounded-xl font-bold shadow-lg transition-all"
                onClick={() => setIsOpen(false)}
              >
                Get a Quote<ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
