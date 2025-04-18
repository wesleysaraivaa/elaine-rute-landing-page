import { Phone } from "lucide-react";
import chibi from "../assets/images/chibi2.png";

const WhatsAppButton = () => {
  const phoneNumber = "5588997543040";
  const message = "Olá! Gostaria de agendar uma consulta.";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 group">
      <button
        onClick={handleClick}
        className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
      >
        <img
          src={chibi}
          alt="Elaine Rute Advogada"
          className="w-12 h-12 object-contain"
        />
        <div className="flex flex-col items-start">
          <span className="text-sm font-medium">Fale Comigo</span>
          <span className="text-xs">WhatsApp</span>
        </div>
        <Phone className="w-5 h-5" />
      </button>
    </div>
  );
};

export default WhatsAppButton;
