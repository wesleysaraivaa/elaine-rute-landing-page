import { Link } from "react-router-dom";

import capaArtigo1 from "../assets/images/capaArtigo1.jpg";

interface Artigo {
  id: number;
  title: string;
  description: string;
  date: string;
  readTime: string;
  image: string;
}

const artigos: Artigo[] = [
  {
    id: 1,
    title: "Artigo 1",
    description:
      "Descrição do Artigo 1 Descrição do Artigo 1 Descrição do Artigo 1 Descrição do Artigo 1 Descrição do Artigo 1 Descrição do Artigo 1 ",
    date: "15 de Março, 2025",
    readTime: "5",
    image: capaArtigo1,
  },
  {
    id: 2,
    title: "Artigo 2",
    description:
      "Descrição do Artigo 2 Descrição do Artigo 2  Descrição do Artigo 2 Descrição do Artigo 2 Descrição do Artigo 2 Descrição do Artigo 2 Descrição do Artigo 2 Descrição do Artigo 2 Descrição do Artigo 2 Descrição do Artigo 2",
    date: "10 de Março, 2025",
    readTime: "9",
    image: capaArtigo1,
  },
  {
    id: 3,
    title: "Artigo 3",
    description: "Descrição do Artigo 3 Descrição do Artigo 3",
    date: "5 de Março, 2025",
    readTime: "6",
    image: capaArtigo1,
  },
];

const ArticlesSection = () => {
  return (
    <section id="artigos" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Artigos</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit aut
            expedita quia optio, odit iure iste delectu Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Velit aut expedita quia optio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artigos.map((artigo) => (
            <div
              key={artigo.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
            >
              <img
                src={artigo.image}
                alt={artigo.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span> {artigo.date} </span>
                  <span className="mx-2">•</span>
                  <span>{artigo.readTime} min de leitura</span>
                </div>
                <h3 className="text-xl font-semibold text-navy mb-2">
                  {artigo.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                  {artigo.description}
                </p>
                <Link
                  to={`/artigos/${artigo.id}`}
                  className="text-gold hover:text-navy font-medium transition-colors duration-300"
                >
                  Ler mais →
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/artigos"
            className="inline-block bg-navy text-white px-4 py-2 rounded-md hover:bg-navy-dark transition-colors duration-300 text-sm w-fit"
          >
            Ver todos os artigos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
