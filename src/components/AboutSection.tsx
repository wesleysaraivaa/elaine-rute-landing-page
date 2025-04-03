import { Award, BookOpen, Clock } from "lucide-react";

const AboutSection = () => {
  return (
    <section className=" py-20 bg-white" id="about">
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-12 items-center">
        <div className="relative md:w-2/5">
          <img
            src="/src/assets/images/martelo.webp?height=600&width=400"
            alt="Foto do Martelo Justiça"
            className="relative rounded-lg shadow-xl w-full h-auto"
          />
          <div className="absolute -right-6 -bottom-6 p-4 rounded-lg shadow-lg bg-gold">
            <p className="text-navy font-bold">
              Excelência, ética e compromisso
            </p>
          </div>
        </div>

        <div className="md:w-3/5">
          <h2 className="section-title">Sobre Mim</h2>

          <p className="text-lg mb-6">
            Sou Elaine Rute, advogada com mais de 4 anos de experiência
            dedicados à excelência jurídica. Graduada pela Universidade
            Universidade Estadual Vale do Acaraú (UVA), com especialização em
            Direito Penal.
          </p>

          <p className="text-lg mb-8">
            Minha trajetória profissional inclui passagens por renomados
            escritórios e a assessoria jurídica para empresas de diversos
            portes. Hoje, dedico-me a oferecer um atendimento personalizado,
            compreendendo as necessidades específicas de cada cliente para
            entregar soluções jurídicas eficazes.
          </p>

          <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center p-4 rounded-lg border border-gray-200 hover:border-gold transition-all ">
              <Award className="mb-3 text-gold" size={32} />
              <h3 className="font-bold text-lg mb-2"> Premiações </h3>
              <p>
                Reconhecida entre os melhores advogados da serra da Ibiapaba.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4 rounded-lg border border-gray-200 hover:border-gold transition-all ">
              <BookOpen className="mb-3 text-gold" size={32} />
              <h3 className="font-bold text-lg mb-2"> Formação </h3>
              <p>Graduação em uma das melhores instituições do Ceará.</p>
            </div>

            <div className="flex flex-col items-center text-center p-4 rounded-lg border border-gray-200 hover:border-gold transition-all ">
              <Clock className="mb-3 text-gold" size={32} />
              <h3 className="font-bold text-lg mb-2"> Experiência </h3>
              <p>
                Mais de 4 anos de atuação em casos complexos com alta taxa de
                sucesso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
