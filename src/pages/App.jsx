import React from "react";
import logoBranca from "../assets/logo/logoBranca.png";
import ArrowIcon from "../assets/icons/arrow-right-circle 1.png";
import "../pages/App.css";

function App() {
  return (
    <><header className="header">
      <div className="logo">
        <img src={logoBranca} alt="logo da unity" />
      </div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Serviços</a></li>
          <li><a href="#">Portfólio</a></li>
          <li><a href="#">Sobre nós</a></li>
        </ul>
        <button className="ButtHeader">Entre em contato</button>
      </nav>
    </header>
    
    <section className="Home">
      <div className="infos">
        <h1>Transforme ideias<br></br>em realidade digital</h1>
        <p>Soluções completas em desenvolvimento e marketing<br></br>para impulsionar seu negócio</p>
        <button className="buttHome">Quero um orçamento <img className="iconButt" src={ArrowIcon} alt="icon button" /></button>
      </div>
      </section></>
  );
}

export default App;
