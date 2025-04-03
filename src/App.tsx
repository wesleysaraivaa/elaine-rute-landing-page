import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServiceSection from "./components/ServiceSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-serif bg-white text-navy">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServiceSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}

export default App;
