import { ChevronDown } from "lucide-react";
import perfil from "../assets/images/perfil.webp";

const HeroSection = () => {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      className="relative min-h-screen flex items-center pt-16 bg-primary"
      id="home"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="text-center text-white md:w-1/2 md:text-left">
          <h1 className="text-4xl font-bold mb-4 md:text-5xl lg:text-6xl">
            Dra. Elaine Rute Araújo
          </h1>
          <h2 className="text-xl mb-6 text-gold font-light md:text-2xl">
            Direito Civil • Direito Empresarial • Consultoria Jurídica
          </h2>
          <p className="text-lg mb-8 max-w-lg mx-auto md:mx-0">
            Soluções jurídicas personalizadas com excelência, ética e
            compromisso para proteger seus direitos e interesses.
          </p>

          <div className="flex flex-col gap-4 justify-center sm:flex-row md:justify-start">
            <a
              href="#contact"
              className="btn-primary bg-gold text-navy hover:bg-white hover:text-navy"
            >
              Agendar Consulta
            </a>
            <a
              href="#services"
              className="btn-secondary text-white border-white hover:text-gold hover:border-gold"
            >
              Áreas de Atuação
            </a>
          </div>
        </div>

        <div className="flex justify-center mt-12 md:w-1/2 md:mt-0 md:justify-end">
          <div className="relative">
            <div className="w-64 h-64 mt-12 md:mt-0 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gold shadow-2xl">
              <img
                src={perfil}
                alt="Dra. Elaine Rute Araújo"
                className="w-full object-cover"
              />
            </div>
            <div className="absolute -right-6 -bottom-6 py-2 px-4 rounded-lg shadow-lg bg-gold text-navy">
              <p className="font-bold"> OAB/CE 50.397 </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer">
        <ChevronDown size={32} onClick={scrollToNextSection} />
      </div>
    </section>
  );
};

export default HeroSection;
