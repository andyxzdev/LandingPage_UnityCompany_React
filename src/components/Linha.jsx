import React from "react";
import "../styles/Linha.css";

const Linha = ({ customStyle = {} }) => {
  return <div className="linha" style={customStyle}></div>;
};

export default Linha;
