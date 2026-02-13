import { blogs } from '../data/blogData';
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = () => {
        if (scrollRef.current) {
            const scrollPosition = scrollRef.current.scrollLeft;
            const width = scrollRef.current.offsetWidth;
            const newIndex = Math.round(scrollPosition / width);
            setActiveIndex(newIndex);
        }
    };

    useEffect(() => {
        const container = scrollRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
            return () => container.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const scrollToBlog = (index) => {
        if (scrollRef.current) {
            const width = scrollRef.current.offsetWidth;
            scrollRef.current.scrollTo({
                left: index * width,
                behavior: 'smooth'
            });
            setActiveIndex(index);
        }
    };

    return (
        <section className="py-12 md:py-24 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300" id="blog">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-8 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 mb-6 rounded-full bg-purple-50 dark:bg-purple-900/30 border border-purple-100 dark:border-purple-800 text-purple-600 dark:text-purple-400 font-semibold text-sm tracking-wide uppercase"
                    >
                        Our Blog
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 tracking-tight"
                    >
                        Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Insights</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
                    >
                        Stay updated with the latest trends in technology, design, and digital marketing.
                    </motion.p>
                </div>

                <div 
                    ref={scrollRef}
                    className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 pb-4 md:pb-0 px-4 md:px-0 -mx-4 md:mx-0"
                >
                    {blogs.map((blog, index) => (
                        <motion.div
                            key={blog.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="flex-none w-full md:w-auto snap-center group bg-white dark:bg-gray-800 rounded-2xl md:rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
                        >
                            <div className="relative h-48 md:h-64 overflow-hidden">
                                <img 
                                    src={blog.image} 
                                    alt={blog.title} 
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-900 dark:text-white shadow-sm flex items-center">
                                    <Tag className="w-3 h-3 mr-1 text-purple-600 dark:text-purple-400" />
                                    {blog.category}
                                </div>
                            </div>

                            <div className="p-5 md:p-8 flex flex-col flex-grow">
                                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4 space-x-4">
                                     <div className="flex items-center">
                                        <Calendar className="w-4 h-4 mr-1 text-gray-400" />
                                        {blog.date}
                                     </div>
                                     <div className="flex items-center">
                                        <User className="w-4 h-4 mr-1 text-gray-400" />
                                        {blog.author}
                                     </div>
                                </div>

                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors leading-tight">
                                    {blog.title}
                                </h3>

                                <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3 flex-grow">
                                    {blog.description}
                                </p>

                                <Link to="#" className="inline-flex items-center text-purple-600 dark:text-purple-400 font-bold hover:text-purple-800 dark:hover:text-purple-300 transition-colors group/link mt-auto">
                                    Read Article <ArrowRight className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}

                </div>

                {/* Pagination Dots for Mobile */}
                <div className="mt-8 flex justify-center gap-2 md:hidden">
                    {blogs.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollToBlog(index)}
                            className={`h-2 w-2 rounded-full transition-all duration-300 ${
                                index === activeIndex
                                    ? 'bg-purple-600 w-6'
                                    : 'bg-gray-300 dark:bg-gray-600'
                            }`}
                            aria-label={`Go to blog ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Swipe Hint for Mobile */}
                <div className="mt-4 text-center md:hidden animate-pulse">
                    <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2">
                        <span>&larr;</span> Swipe for more <span>&rarr;</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Blog;
