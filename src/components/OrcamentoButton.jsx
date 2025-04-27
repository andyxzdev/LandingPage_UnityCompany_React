import React from "react";
import ArrowIcon from "../assets/icons/arrow-right-circle 1.png";
import "../styles/OrcamentoButton.css";

const OrcamentoButton = ({
  Text = "Quero um orçamento",
  onClick,
  customStyle = {},
}) => {
  return (
    <button className="orcamento-button" onClick={onClick} style={customStyle}>
      {Text}
      <img className="icon-butt" src={ArrowIcon} alt="icone de seta" />
    </button>
  );
};

export default OrcamentoButton;
