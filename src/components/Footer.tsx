import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

import logoNome from "../assets/images/logo-nome.webp";

interface NavLink {
  id: string;
  href: string;
  title: string;
}

const navLinks: NavLink[] = [
  { id: "1", href: "/", title: "Início" },
  { id: "2", href: "/sobre", title: "Sobre" },
  { id: "3", href: "/areas-atuacao", title: "Áreas de Atuação" },
  { id: "4", href: "/artigos", title: "Artigos" },
  { id: "5", href: "/contato", title: "Contato" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Dra. Elaine Rute Araújo</h3>
            <p className="mb-4">
              Soluções jurídicas personalizadas com excelência, ética e
              compromisso para proteger seus direitos e interesses.
            </p>
            <p className="text-gold font-bold">OAB/CE 50.397</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4"> Links Rápidos </h3>
            {navLinks.map(
              (link: { id: string; href: string; title: string }) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="block mb-2 text-white hover:text-gold"
                >
                  {link.title}
                </a>
              )
            )}
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Redes Sociais </h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className=" bg-white/10 hover:bg-gold text-white rounded-full p-2 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className=" bg-white/10 hover:bg-gold text-white rounded-full p-2 transition-colors"
                aria-label="Facebook"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className=" bg-white/10 hover:bg-gold text-white rounded-full p-2 transition-colors"
                aria-label="Facebook"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className=" bg-white/10 hover:bg-gold text-white rounded-full p-2 transition-colors"
                aria-label="Facebook"
              >
                <Twitter size={24} />
              </a>
            </div>
            <div className="hidden md:flex">
              <img
                src={logoNome}
                alt="Logo Dra. Elaine Rute Araújo"
                className="w-32 sm:w-40 md:w-48 lg:w-56 h-auto object-contain"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm">
          <p>
            © {currentYear} Dra. Elaine Rute Araújo. Todos os direitos
            reservados.
          </p>
          <p className="mt-2">
            <a
              href="#"
              target="_blank"
              className="hover:text-gold transition-colors"
            >
              Política de Privacidade
            </a>
            {" | "}
            <a
              href="#"
              target="_blank"
              className="hover:text-gold transition-colors"
            >
              Termos de Uso
            </a>
          </p>
          <p className="mt-2">
            Designed by
            <a
              href="#"
              target="_blank"
              className="hover:text-gold transition-colors pl-1"
            >
              Wesley Saraiva
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
