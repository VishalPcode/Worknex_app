import Header from './components/Header';
import Footer from './components/Footer';
import HomeSection from '../src/sections/HomeSection';
import AboutSection from '../src/sections/AboutSection';
import ServicesSection from '../src/sections/ServicesSection';
import ContactSection from '../src/sections/ContactSection';
import AccordionSection from './sections/AccordionSection';
import Carousel from './components/Carousel';

function App() {
  return (
    <>
      <Header />
      <Carousel/>
      <HomeSection />
      <AboutSection />
      <ServicesSection />
      <AccordionSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
