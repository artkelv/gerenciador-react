import { useState } from "react";

import "../tela_home/style.css";

import { renderizaTela, renderizaAtendimento } from "../../services/troca_tela";


const TelaHome = () => {
  const [tela, setTela] = useState("tela-home");
  
  return (
    <div id="main-content">
      <nav className="menu-nav">
        <ul className="list">
          <li className="item">
            <a href="" className="ancor">
              <ion-icon name="home"></ion-icon>
              <span className="title" onClick={() => renderizaAtendimento(tela, setTela)}>Inicio</span>
            </a>
          </li>
          <li className="item">
            <a href="" className="ancor">
              <ion-icon name="call"></ion-icon>
              <span className="title" onClick="">Atendimento</span>
            </a>
          </li>
          <li className="item">
            <a href="" className="ancor">
              <ion-icon name="list-box"></ion-icon>
              <span className="title" onClick="">Chamados</span>
            </a>
          </li>
          <li className="item">
            <a href="" className="ancor">
              <ion-icon name="contacts"></ion-icon>
              <span className="title" onClick="">Clientes</span>
            </a>
          </li>
          <li className="item">
            <a href="" className="ancor">
              <ion-icon name="tv"></ion-icon>
              <span className="title" onClick="">Softwares</span>
            </a>
          </li>
          <li className="item">
            <a href="" className="ancor">
              <ion-icon name="contact"></ion-icon>
              <span className="title" onClick="">Usúarios</span>
            </a>
          </li>
          <li className="item">
            <a href="" className="ancor">
              <ion-icon name="bookmarks"></ion-icon>
              <span className="title" onClick="">Relatórios</span>
            </a>
          </li>
        </ul>
        <ul>
          <li className="bottom">
            <a href="" className="over">
              <ion-icon name="power"></ion-icon>
              <span className="title" onClick="">sair</span>
            </a>
          </li>
        </ul>
      </nav>
      {renderizaTela(tela)}
    </div>
  );
};
export default TelaHome;
