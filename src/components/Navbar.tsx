import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
        ${isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a
          href="#home"
          className={`${isScrolled ? "text-navy" : "text-white"}`}
        >
          <img
            src={
              isScrolled
                ? "/src/assets/images/logo-dark.png"
                : "/src/assets/images/logo.png"
            }
            alt="Logo Dra. Elaine Rute Araújo"
            className={`h-10 md:h-12 w-auto object-contain transition-all duration-300 ${
              isScrolled ? "brightness-100" : "brightness-200"
            }`}
          />
        </a>

        <nav className="hidden md:flex space-x-8">
          <a
            href="#home"
            className={`${
              isScrolled ? "text-navy" : "text-white"
            } hover:text-gold transition-colors`}
          >
            Início
          </a>
          <a
            href="#about"
            className={`${
              isScrolled ? "text-navy" : "text-white"
            } hover:text-gold transition-colors`}
          >
            Sobre
          </a>
          <a
            href="#services"
            className={`${
              isScrolled ? "text-navy" : "text-white"
            } hover:text-gold transition-colors`}
          >
            Áreas de Atuação
          </a>
          <a
            href="#contact"
            className={`${
              isScrolled ? "text-navy" : "text-white"
            } hover:text-gold transition-colors`}
          >
            Contato
          </a>
        </nav>

        <button
          className={`md:hidden ${isScrolled ? "text-navy" : "text-white"}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#home"
              className="text-navy hover:text-gold transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </a>
            <a
              href="#about"
              className="text-navy hover:text-gold transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </a>
            <a
              href="#services"
              className="text-navy hover:text-gold transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Áreas de Atuação
            </a>
            <a
              href="#testimonials"
              className="text-navy hover:text-gold transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Depoimentos
            </a>
            <a
              href="#contact"
              className="text-navy hover:text-gold transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
