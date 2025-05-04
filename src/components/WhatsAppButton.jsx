import React from "react";
import whatsappIcon from "../assets/icons/whatsapp-icon.png";
import "../styles/WhatsAppButton.css";

const WhatsAppButton = () => {
  const phoneNumber = "5524993215864";
  const message = "Olá, gostaria de saber mais sobre o produto!";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="whatsapp-container">
      <a
        href={whatsappUrl}
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contato via WhatsApp"
      >
        <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-icon" />
      </a>
      <span className="whatsapp-tooltip">Fale conosco</span>
    </div>
  );
};

export default WhatsAppButton;
