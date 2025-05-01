import React from "react";
import logoBranca from "../assets/logo/logoBranca.png";
import Icon1 from "../assets/icons/icon1.png";
import Icon2 from "../assets/icons/icon2.png";
import Icon3 from "../assets/icons/icon3.png";
import Icon4 from "../assets/icons/icon4.png";
import ImagemProjeto from "../assets/imagens/imagens-projetos/MontViva 1.png";
import "../pages/App.css";
import OrcamentoButton from "../components/OrcamentoButton";
import "../styles/OrcamentoButton.css";
import ImagemMaisQue from "../assets/imagens/card1.png";
import ClienteImg1 from "../assets/imagens/clientes/imagem1.png";
import ClienteImg2 from "../assets/imagens/clientes/imagem2.png";
import ClienteImg3 from "../assets/imagens/clientes/imagem3.png";
import IconeOqueOferec1 from "../assets/icons/oqueOferecemos/phone 1.png";
import IconeOqueOferec2 from "../assets/icons/oqueOferecemos/window-stack 1.png";
import IconeOqueOferec3 from "../assets/icons/oqueOferecemos/window-fullscreen 1.png";
import IconeOqueOferec4 from "../assets/icons/oqueOferecemos/vector-pen 1.png";
import IconeOqueOferec5 from "../assets/icons/oqueOferecemos/reb.png";
import IconeOqueOferec6 from "../assets/icons/oqueOferecemos/social.png";
import Linha from "../components/Linha";

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
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#servicos">Serviços</a>
            </li>
            <li>
              <a href="#portfolio">Portfólio</a>
            </li>
            <li>
              <a href="#sobre">Sobre nós</a>
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
          <Linha
            customStyle={{
              width: "20%",
            }}
          />
          <h1 className="tituloSection">O que oferecemos</h1>
          <p className="subtituloSection">
            Desenvolvimento e estratégias sob medida para o seu sucesso
          </p>

          <div className="serviçosDIV">
            <div className="serviços">
              <div className="circulopreto">
                <img
                  className="Icon"
                  style={{ width: "60px", height: "auto" }}
                  src={IconeOqueOferec1}
                  alt="icon de exemplo"
                />
              </div>
              <h1 className="tituloserviço">Aplicativos mobile</h1>
              <p className="subtituloserviço">
                Criamos apps intuitivos e poderosos para iOS e Android
              </p>
            </div>

            <div className="serviços">
              <div className="circulopreto">
                <img
                  className="Icon"
                  style={{ width: "60px", height: "auto" }}
                  src={IconeOqueOferec2}
                  alt="icon de exemplo"
                />
              </div>
              <h1 className="tituloserviço">Criação de Sites</h1>
              <p className="subtituloserviço">
                Sites rápidos, responsivos e com melhor experiência para o
                usuário
              </p>
            </div>

            <div className="serviços">
              <div className="circulopreto">
                <img
                  className="Icon"
                  style={{ width: "60px", height: "auto" }}
                  src={IconeOqueOferec3}
                  alt="icon de exemplo"
                />
              </div>
              <h1 className="tituloserviço">Landing Pages</h1>
              <p className="subtituloserviço">
                Páginas de alta conversão para capturar leads e vendas
              </p>
            </div>

            <div className="serviços">
              <div className="circulopreto">
                <img
                  className="Icon"
                  style={{ width: "60px", height: "auto" }}
                  src={IconeOqueOferec4}
                  alt="icon de exemplo"
                />
              </div>
              <h1 className="tituloserviço">Identidade Visual </h1>
              <p className="subtituloserviço">
                Logos, cores e estilo que refletem a essência da sua marca
              </p>
            </div>

            <div className="serviços">
              <div className="circulopreto">
                <img
                  className="Icon"
                  style={{ width: "60px", height: "auto" }}
                  src={IconeOqueOferec5}
                  alt="icon de exemplo"
                />
              </div>
              <h1 className="tituloserviço">Rebranding</h1>
              <p className="subtituloserviço">
                Repaginamos sua presença digital para atrair mais clientes
              </p>
            </div>

            <div className="serviços">
              <div className="circulopreto">
                <img
                  className="Icon"
                  style={{ width: "60px", height: "auto" }}
                  src={IconeOqueOferec6}
                  alt="icon de exemplo"
                />
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
          <Linha
            customStyle={{
              width: "20%",
            }}
          />
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
            <Linha
              customStyle={{
                backgroundColor: "#fff",
                width: "70%",
                height: "4px",
                marginTop: "15px",
              }}
            />
            <p className="textoQuadradoDiferencial">
              Cada projeto é único e feito sob medida
            </p>
          </div>

          <div className="quadradoDiferencial">
            <img className="IconDiferencial" src={Icon2} alt="" />
            <h1 className="tituloQuadradoDiferencial">Transparência</h1>
            <Linha
              customStyle={{
                backgroundColor: "#fff",
                width: "70%",
                height: "4px",
                marginTop: "15px",
              }}
            />
            <p className="textoQuadradoDiferencial">
              Relatórios claros e acompanhamento contínuo
            </p>
          </div>

          <div className="quadradoDiferencial">
            <img className="IconDiferencial" src={Icon3} alt="" />
            <h1 className="tituloQuadradoDiferencial">Equipe versátil</h1>
            <Linha
              customStyle={{
                backgroundColor: "#fff",
                width: "70%",
                height: "4px",
                marginTop: "15px",
              }}
            />
            <p className="textoQuadradoDiferencial">
              Desenvolvedores, designers e estrategistas em um só time
            </p>
          </div>

          <div className="quadradoDiferencial">
            <img className="IconDiferencial" src={Icon4} alt="" />
            <h1 className="tituloQuadradoDiferencial">Suporte Contínuo</h1>
            <Linha
              customStyle={{
                backgroundColor: "#fff",
                width: "70%",
                height: "4px",
                marginTop: "15px",
              }}
            />
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
          <Linha
            customStyle={{
              backgroundColor: "#fff",
              marginLeft: "600px",
              width: "20%",
            }}
          />
          <h1>Alguns dos nossos projetos</h1>
          <p>Confira o que já construímos para nossos clientes</p>
        </div>

        <div className="projetosDIV">
          <div className="tituloProjetoDiv">
            <h1>Desenvolvimento web</h1>
            <Linha
              customStyle={{
                marginTop: "20px",
                width: "35%",
                backgroundColor: "#fff",
              }}
            />
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
            <Linha
              customStyle={{
                marginTop: "20px",
                width: "35%",
                backgroundColor: "#fff",
              }}
            />
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

      <section className="maisqueSection">
        <div className="maisqueInfos">
          <div className="maisqueTitulo">
            <Linha customStyle={{ marginBottom: "30px" }} />
            <h1 className="maisqueTituloText">
              Mais que uma empresa,<br></br>uma parceira!
            </h1>
          </div>
          <p>
            <span>Unimos</span> tecnologia e criatividade para entregar
            resultados reais
            <br></br>
            <br></br>A <span>Unity company</span> nasceu da paixão por criar
            soluções digitais que fazem a diferença.<br></br>Nossa equipe é
            formada por especialistas em desenvolvimento, design e marketing,
            prontos para transformar sua visão em realidade.
          </p>
          <OrcamentoButton customStyle={{ marginTop: "70px" }} />
        </div>
        <div className="maisqueImagem">
          <img src={ImagemMaisQue} alt="Imagem Mais que" />
        </div>
      </section>

      <section className="clienteSection">
        <div className="clienteTitulo">
          <Linha customStyle={{ width: "20%" }} />
          <h1>O que nossos clientes dizem</h1>
          <p>Confiança e resultados comprovados</p>
        </div>

        <div className="divQuadrados">
          <div className="quadrado">
            <div className="fotoCliente">
              <img src={ClienteImg1} alt="" />
            </div>
            <h1 className="nomeCliente">Ana</h1>
            <p>“A Unity revolucionou nossa presença online. Recomendo”</p>
          </div>

          <div className="quadrado">
            <div className="fotoCliente">
              <img src={ClienteImg2} alt="" />
            </div>
            <h1 className="nomeCliente">Carlos</h1>
            <p>“O app que desenvolveram superou nossas expectativas”</p>
          </div>

          <div className="quadrado">
            <div className="fotoCliente">
              <img src={ClienteImg3} alt="" />
            </div>
            <h1 className="nomeCliente">Ricardo</h1>
            <p>“Melhor investimento que fizemos em marketing digital”</p>
          </div>
        </div>
      </section>

      <section className="prontoSection">
        <div className="prontoInfos">
          <Linha />
          <h1>
            Pronto para elevar seu<br></br> negócio?
          </h1>
          <p>Entre em contato e vamos criar algo incrível juntos!</p>
          <OrcamentoButton customStyle={{ marginTop: "50px" }} />
        </div>
      </section>

      <footer>
        <div className="infos">
          <div className="infosEsq">
            <img src={logoBranca} alt="logo-footer" />
          </div>

          <div className="infosDir">
            <div className="info1">
              <h1>Links rápidos</h1>
              <Linha
                customStyle={{
                  backgroundColor: "#fff",
                  height: "2px",
                  marginBottom: "10px",
                }}
              />
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#home">Serviços</a>
                </li>
                <li>
                  <a href="#home">Portfólio</a>
                </li>
                <li>
                  <a href="#home">Sobre nós</a>
                </li>
                <li>
                  <a href="#home">Contato</a>
                </li>
              </ul>
            </div>

            <div className="info1">
              <h1>Serviços</h1>
              <Linha
                customStyle={{
                  backgroundColor: "#fff",
                  height: "2px",
                  marginBottom: "10px",
                }}
              />
              <p>Aplicativos mobile</p>
              <p>Desenvolvimento web</p>
              <p>Gestão de dados</p>
              <p>Identidade visual</p>
            </div>

            <div className="info3">
              <h1>Contato</h1>
              <Linha
                customStyle={{
                  backgroundColor: "#fff",
                  height: "2px",
                  marginBottom: "10px",
                }}
              />
              <p>
                <span>Email:</span> contato@unitycompany.com
              </p>
              <p>
                <span>Telefone:</span> (xx) xxxxx-xxxx
              </p>
            </div>
          </div>
        </div>
        <Linha
          customStyle={{
            backgroundColor: "#fff",
            width: "15%",
            marginBottom: "20px",
            height: "2px",
          }}
        />
        <p className="textFinal">
          © 2025 Unity Company | Todos os direitos reservados.
        </p>
      </footer>
    </>
  );
}

export default App;
