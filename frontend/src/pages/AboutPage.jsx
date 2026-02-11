import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Particles from '../components/Particles';
import { motion } from 'framer-motion';
import { Award, Users, Globe, TrendingUp } from 'lucide-react';
import SEO from '../components/SEO';

const AboutPage = () => {
  const stats = [
    { icon: Users, value: "200+", label: "Happy Clients" },
    { icon: Globe, value: "15+", label: "Countries Served" },
    { icon: Award, value: "50+", label: "Awards Won" },
    { icon: TrendingUp, value: "98%", label: "Success Rate" }
  ];

  return (
    <div className="pt-16">
      <SEO 
        title="About Us"
        description="We are a team of passionate digital experts dedicated to your success."
        keywords="about us, digital agency team, web developers, designers"
      />
      <section className="relative bg-white text-gray-900 py-20 lg:py-32 overflow-hidden">
        {/* Particles Background */}
        <div className="absolute inset-0 z-0">
            <Particles
            particleColors={['#3b82f6', '#8b5cf6', '#0f172a']} // Blue, Purple, Slate
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
            <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight text-gray-900">
                    About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Us</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    We are a team of passionate digital experts dedicated to your success.
                </p>
            </motion.div>

            {/* Content Section with Glassmorphism */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Image Side */}
                <motion.div 
                    className="relative group"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-purple-200 opacity-60 blur-3xl rounded-[2rem] group-hover:opacity-80 transition-opacity duration-500"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80" 
                        alt="Our Office" 
                        className="relative rounded-[2rem] shadow-2xl z-10 border border-white/40 transform transition-transform duration-500 group-hover:scale-[1.01]"
                    />
                </motion.div>

                {/* Text Content */}
                <motion.div 
                    className="relative"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="absolute -inset-4 bg-white/40 blur-3xl rounded-full opacity-0 lg:opacity-100"></div>
                    <div className="relative bg-white/60 backdrop-blur-xl border border-white/40 p-8 md:p-10 rounded-[2rem] shadow-xl">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                        <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                            <p>
                                <span className="font-bold text-blue-600">WebBloom</span> started with a simple mission: to help businesses find their footing in a crowded digital world. We’ve always believed that a great online presence shouldn't be a luxury—it’s a necessity for any brand looking to truly grow.
                            </p>
                            <p>
                                While our own official website is a recent launch, our team’s expertise is anything but new. We’ve spent years behind the scenes building high-performing web applications that are currently live and driving results for our partners across various industries.
                            </p>
                            <p>
                                Our approach is built on transparency and real partnership. We don’t just deliver a project and disappear; we work closely with you to understand your specific challenges, ensuring every line of code and every design choice adds long-term value to your business.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Stats Section */}
            {/* <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <div key={index} className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/60 shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300">
                             <div className="inline-flex p-3 rounded-full bg-blue-50 text-blue-600 mb-4">
                                <Icon className="h-6 w-6" />
                             </div>
                             <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                             <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">{stat.label}</div>
                        </div>
                    );
                })}
            </motion.div> */}
        </div>
      </section>
      
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default AboutPage;
