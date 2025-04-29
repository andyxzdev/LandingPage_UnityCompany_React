import React from "react";
import logoBranca from "../assets/logo/logoBranca.png";
import TelaIcon from "../assets/icons/exp.png";
import Icon1 from "../assets/icons/icon1.png";
import Icon2 from "../assets/icons/icon2.png";
import Icon3 from "../assets/icons/icon3.png";
import Icon4 from "../assets/icons/icon4.png";
import ImagemProjeto from "../assets/imagens/imagens-projetos/MontViva 1.png";
import "../pages/App.css";
import OrcamentoButton from "../components/OrcamentoButton";
import "../styles/OrcamentoButton.css";

function App() {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={logoBranca} alt="logo da unity" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Serviços</a>
            </li>
            <li>
              <a href="#">Portfólio</a>
            </li>
            <li>
              <a href="#">Sobre nós</a>
            </li>
          </ul>
          <button className="ButtHeader">Entre em contato</button>
        </nav>
      </header>

      <section className="Home">
        <div className="infos">
          <h1>
            Transforme ideias<br></br>em realidade digital
          </h1>
          <p>
            Soluções completas em desenvolvimento e marketing<br></br>para
            impulsionar seu negócio
          </p>
          <OrcamentoButton />
        </div>
      </section>

      <section className="oqueOferecemosSection">
        <div className="infosOferecemos">
          <div className="linha"></div>
          <h1 className="tituloSection">O que oferecemos</h1>
          <p className="subtituloSection">
            Desenvolvimento e estratégias sob medida para o seu sucesso
          </p>

          <div className="serviçosDIV">
            <div className="serviços">
              <div className="circulopreto">
                <img className="Icon" src={TelaIcon} alt="icon de exemplo" />
              </div>
              <h1 className="tituloserviço">Aplicativos mobile</h1>
              <p className="subtituloserviço">
                Criamos apps intuitivos e poderosos para iOS e Android
              </p>
            </div>

            <div className="serviços">
              <div className="circulopreto">
                <img className="Icon" src={TelaIcon} alt="icon de exemplo" />
              </div>
              <h1 className="tituloserviço">Criação de Sites</h1>
              <p className="subtituloserviço">
                Sites rápidos, responsivos e com melhor experiência para o
                usuário
              </p>
            </div>

            <div className="serviços">
              <div className="circulopreto">
                <img className="Icon" src={TelaIcon} alt="icon de exemplo" />
              </div>
              <h1 className="tituloserviço">Landing Pages</h1>
              <p className="subtituloserviço">
                Páginas de alta conversão para capturar leads e vendas
              </p>
            </div>

            <div className="serviços">
              <div className="circulopreto">
                <img className="Icon" src={TelaIcon} alt="icon de exemplo" />
              </div>
              <h1 className="tituloserviço">Identidade Visual </h1>
              <p className="subtituloserviço">
                Logos, cores e estilo que refletem a essência da sua marca
              </p>
            </div>

            <div className="serviços">
              <div className="circulopreto">
                <img className="Icon" src={TelaIcon} alt="icon de exemplo" />
              </div>
              <h1 className="tituloserviço">Rebranding</h1>
              <p className="subtituloserviço">
                Repaginamos sua presença digital para atrair mais clientes
              </p>
            </div>

            <div className="serviços">
              <div className="circulopreto">
                <img className="Icon" src={TelaIcon} alt="icon de exemplo" />
              </div>
              <h1 className="tituloserviço">Gestão de Mídias Sociais</h1>
              <p className="subtituloserviço">
                Estratégias e métricas para crescer seu impacto online
              </p>
            </div>
          </div>
          <OrcamentoButton customStyle={{ marginTop: "60px" }} />
        </div>
      </section>

      <section className="diferencialSection">
        <div className="diferencialInfos">
          <div className="linha"></div>
          <h1 className="tituloSection">Nosso diferencial</h1>
          <p className="subtituloSection">
            Tecnologia e criatividade trabalhando juntas por você.
          </p>
        </div>

        <div className="quadradosDiferenciaisDIV">
          <div className="quadradoDiferencial">
            <img className="IconDiferencial" src={Icon1} alt="" />
            <h1 className="tituloQuadradoDiferencial">
              Soluções personalizadas
            </h1>
            <div className="linhaBranca"></div>
            <p className="textoQuadradoDiferencial">
              Cada projeto é único e feito sob medida
            </p>
          </div>

          <div className="quadradoDiferencial">
            <img className="IconDiferencial" src={Icon2} alt="" />
            <h1 className="tituloQuadradoDiferencial">Transparência</h1>
            <div className="linhaBranca"></div>
            <p className="textoQuadradoDiferencial">
              Relatórios claros e acompanhamento contínuo
            </p>
          </div>

          <div className="quadradoDiferencial">
            <img className="IconDiferencial" src={Icon3} alt="" />
            <h1 className="tituloQuadradoDiferencial">Equipe versátil</h1>
            <div className="linhaBranca"></div>
            <p className="textoQuadradoDiferencial">
              Desenvolvedores, designers e estrategistas em um só time
            </p>
          </div>

          <div className="quadradoDiferencial">
            <img className="IconDiferencial" src={Icon4} alt="" />
            <h1 className="tituloQuadradoDiferencial">Suporte Contínuo</h1>
            <div className="linhaBranca"></div>
            <p className="textoQuadradoDiferencial">
              Cada projeto é único e feito sob medida
            </p>
          </div>
        </div>
      </section>

      <section className="ideiasSection">
        <div className="ideiasInfos">
          <h1>Ideias ganham vida aqui</h1>
          <p>
            Na <span>Unity Company</span>,não apenas desenvolvemos soluções, mas
            construímos experiências que conectam marcas e pessoas. Do primeiro
            rascunho ao produto final, cada linha de código, pixel e estratégia
            é pensada para elevar seu negócio a um novo patamar.
          </p>
          <OrcamentoButton customStyle={{ marginTop: "70px" }} />
        </div>
      </section>

      <section className="projetosSection">
        <div className="tituloSection">
          <div className="linhaBranca"></div>
          <h1>Alguns dos nossos projetos</h1>
          <p>Confira o que já construímos para nossos clientes</p>
        </div>

        <div className="projetosDIV">
          <div className="tituloProjetoDiv">
            <h1>Desenvolvimento web</h1>
            <div className="linhaBranca2"></div>
            <div className="projetos">
              <div className="projeto1">
                <img
                  className="imgProjeto"
                  src={ImagemProjeto}
                  alt="imagem do projeto"
                />
                <p className="textCategoria">App mobile</p>
                <h1>Nome do projeto</h1>
                <p className="textTecnologias">React Native | Expo | Figma</p>
              </div>

              <div className="projeto1">
                <img
                  className="imgProjeto"
                  src={ImagemProjeto}
                  alt="imagem do projeto"
                />
                <p className="textCategoria">App mobile</p>
                <h1>Nome do projeto</h1>
                <p className="textTecnologias">React Native | Expo | Figma</p>
              </div>

              <div className="projeto1">
                <img
                  className="imgProjeto"
                  src={ImagemProjeto}
                  alt="imagem do projeto"
                />
                <p className="textCategoria">App mobile</p>
                <h1>Nome do projeto</h1>
                <p className="textTecnologias">React Native | Expo | Figma</p>
              </div>

              <div className="projeto1">
                <img
                  className="imgProjeto"
                  src={ImagemProjeto}
                  alt="imagem do projeto"
                />
                <p className="textCategoria">App mobile</p>
                <h1>Nome do projeto</h1>
                <p className="textTecnologias">React Native | Expo | Figma</p>
              </div>
            </div>
          </div>

          <div className="tituloProjetoDiv2">
            <h1>Desenvolvimento web</h1>
            <div className="linhaBranca2"></div>
            <div className="projetos">
              <div className="projeto1">
                <img
                  className="imgProjeto"
                  src={ImagemProjeto}
                  alt="imagem do projeto"
                />
                <p className="textCategoria">App mobile</p>
                <h1>Nome do projeto</h1>
                <p className="textTecnologias">React Native | Expo | Figma</p>
              </div>

              <div className="projeto1">
                <img
                  className="imgProjeto"
                  src={ImagemProjeto}
                  alt="imagem do projeto"
                />
                <p className="textCategoria">App mobile</p>
                <h1>Nome do projeto</h1>
                <p className="textTecnologias">React Native | Expo | Figma</p>
              </div>

              <div className="projeto1">
                <img
                  className="imgProjeto"
                  src={ImagemProjeto}
                  alt="imagem do projeto"
                />
                <p className="textCategoria">App mobile</p>
                <h1>Nome do projeto</h1>
                <p className="textTecnologias">React Native | Expo | Figma</p>
              </div>

              <div className="projeto1">
                <img
                  className="imgProjeto"
                  src={ImagemProjeto}
                  alt="imagem do projeto"
                />
                <p className="textCategoria">App mobile</p>
                <h1>Nome do projeto</h1>
                <p className="textTecnologias">React Native | Expo | Figma</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
