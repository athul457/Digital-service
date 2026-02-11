import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import SEO from '../components/SEO';

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <SEO 
        title="Home" 
        description="WebBloom - We build best websites and digital experiences for businesses." 
        keywords="web design, digital agency, web development, SEO, marketing"
      />
      <Hero />
      <Problem />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      <Testimonials />
      <CTA />
    </main>
  );
};

export default Home;
