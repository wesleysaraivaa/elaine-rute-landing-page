import { Mail, MessageCircleMore, Phone, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Entre em Contato</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Estou à disposição para esclarecer suas dúvidas e oferecer a
            orientação jurídica que você precisa. Preencha o formulário abaixo
            ou utilize um dos canais de contato direto.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <div className="bg-white p-6 rounded-lg shadow-md h-full">
              <h3 className="text-xl font-bold mb-6 pb-3 border-b border-gray-200">
                Informações de Contato
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone size={24} className="text-gold mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold"> Telefone </h4>
                    <p className="text-gray-600">(88) 99999-9999</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail size={24} className="text-gold mr-4 flex-shrink-0" />
                  <div>
                    <h4> Telefone </h4>
                    <p className="text-gray-600">contato@elaineadvogada.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail size={24} className="text-gold mr-4 flex-shrink-0" />
                  <div>
                    <h4> Endereço </h4>
                    <p className="text-gray-600">
                      Tiangua-CE
                      <br />
                      CEP: 62360-000
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-bold mb-4">Horário de Atendimento</h4>
                  <p className="text-gray-600">Segunda a Sexta: 9h às 18h</p>
                  <p className="text-gray-600">Sábados: Mediante agendamento</p>
                </div>

                <div className="mt-8">
                  <a
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2 btn-primary bg-green-600 hover:bg-green-700 flex items-center justify-center"
                  >
                    <MessageCircleMore className="text-lg" />
                    Falar pelo WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-2/3">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-200 ">
                Envie uma Mensagem
              </h3>

              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block mb-2 font-medium">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block mb-2 font-medium">
                      Assunto *
                    </label>
                    <select name="subject" id="subject" className="input-field">
                      <option value="">Selecione um assunto</option>
                      <option value="Direito Civil">Direito Civil</option>
                      <option value="Direito Empresarial">
                        Direito Empresarial
                      </option>
                      <option value="Consultoria Jurídica">
                        Consultoria Jurídica
                      </option>
                      <option value="Direito de Família">
                        Direito de Família
                      </option>
                      <option value="Direito Imobiliário">
                        Direito Imobiliário
                      </option>
                      <option value="Direito do Consumidor">
                        Direito do Consumidor
                      </option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 font-medium">
                    Mensagem *
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    className="input-field resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary flex items-center justify-center h-full md:w-auto"
                >
                  <Send className="mr-2" size={20} /> Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
