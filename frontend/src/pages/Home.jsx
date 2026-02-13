import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import SEO from '../components/SEO';
import Blog from '../components/Blog';

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <SEO 
        title="Home" 
        description="BoolianLabs - We build best websites and digital experiences for businesses." 
        keywords="web design, digital agency, web development, SEO, marketing"
      />
      <Hero />
      <Problem />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      
      {/* Pricing CTA Section */}
      <section className="py-12 bg-white dark:bg-gray-900 transition-colors duration-300 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Do you want to build like this? <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">See the price</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a premium website that converts. Transparent pricing packages for every stage of your business.
          </p>
          <a 
            href="/pricing" 
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1"
          >
            See Project Pricing
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </section>
      {/* <Blog /> */}
      <Testimonials />
      <CTA />
    </main>
  );
};

export default Home;
