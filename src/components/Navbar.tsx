const Navbar = () => {
  return (
    <header className="bg-primary">
      <nav className="hiden md:flex justify-between itens-center container mx-auto p-4 bg-primary">
        <a href="/">
          <img
            src="./src/assets/images/logo.png"
            alt="Logo Dra. Elaine Rute Araújo"
            className="w-auto h-10"
          />
        </a>

        <ul className="flex space-x-8">
          <li>
            <a
              href="/"
              className="text-white hover:text-gold transition-colors py-2"
            >
              Início
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-white hover:text-gold transition-colors py-2"
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-white hover:text-gold transition-colors py-2"
            >
              Áreas de Atuação
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-white hover:text-gold transition-colors py-2"
            >
              Depoimentos
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-white hover:text-gold transition-colors py-2"
            >
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
