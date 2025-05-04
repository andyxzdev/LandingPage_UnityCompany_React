import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import "./styles/globalStyles.css"; // Arquivo CSS global

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// O código acima é o ponto de entrada da aplicação React. Ele importa as dependências necessárias, incluindo o React, ReactDOM e o componente App. Em seguida, ele renderiza o componente App dentro do elemento HTML com o ID "root". Além disso, ele importa um arquivo CSS global para aplicar estilos à aplicação.
