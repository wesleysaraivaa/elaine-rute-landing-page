const Artigos = () => {
  return (
    <section id="artigos" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Artigos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Título do Artigo 1</h3>
            <p className="text-gray-600">Autor: Nome do Autor</p>
            <p className="text-gray-600">Data: 1 de Janeiro de 2023</p>
            <p className="text-gray-600">
              Resumo: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed vitae justo nec justo. Sed vitae justo nec justo.
            </p>
            <a href="#" className="text-blue-500 hover:underline">
              Leia o artigo completo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Artigos;
