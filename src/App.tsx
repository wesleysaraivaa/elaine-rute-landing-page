import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";

function App() {
  return (
    <div className="font-serif bg-white text-navy">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
      </main>
    </div>
  );
}

export default App;
