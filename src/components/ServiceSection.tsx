import type React from "react";
import { Scale, Briefcase, FileText, Users, Home, Shield } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => (
  <div className="card group hover:border-l-4 hover:border-l-gold">
    <div className="text-gold mb-4 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2"> {title} </h3>
    <p className="text-gray-600"> {description} </p>
  </div>
);

const ServiceSection = () => {
  const servicesData = [
    {
      icon: <Scale size={40} />,
      title: "Direito Civil",
      description:
        "Assessoria em contratos, responsabilidade civil, direito das obrigações e resolução de litígios.",
    },
    {
      icon: <Briefcase size={40} />,
      title: "Direito Empresarial",
      description:
        "Constituição de empresas, contratos empresariais, fusões e aquisições, compliance e governança.",
    },
    {
      icon: <FileText size={40} />,
      title: "Consultoria Jurídica",
      description:
        "Análise preventiva, pareceres jurídicos e estratégias para mitigação de riscos legais.",
    },
    {
      icon: <Users size={40} />,
      title: "Direito de Família",
      description:
        "Divórcios, inventários, partilha de bens, pensão alimentícia e guarda de filhos.",
    },
    {
      icon: <Home size={40} />,
      title: "Direito Imobiliário",
      description:
        "Contratos de compra e venda, locação, usucapião e regularização de imóveis.",
    },
    {
      icon: <Shield size={40} />,
      title: "Direito do Consumidor",
      description:
        "Defesa em relações de consumo, indenizações e reparação de danos.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title"> Áreas de Atuação </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ofereço serviços jurídicos especializados em diversas áreas do
            direito, sempre com foco na excelência e na busca pelos melhores
            resultados para meus clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg mb-6">
            Não encontrou a área que procura? Entre em contato para uma consulta
            personalizada.
          </p>
          <a href="#contact" className="btn-primary">
            Solicitar Informações
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
