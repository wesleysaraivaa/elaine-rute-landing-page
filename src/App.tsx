import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div className="font-serif bg-white text-navy">
      <Navbar />
      <main>
        <HeroSection />
      </main>
    </div>
  );
}

export default App;
