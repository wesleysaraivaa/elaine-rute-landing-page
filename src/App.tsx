import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServiceSection from "./components/ServiceSection";

function App() {
  return (
    <div className="font-serif bg-white text-navy">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServiceSection />
      </main>
    </div>
  );
}

export default App;
