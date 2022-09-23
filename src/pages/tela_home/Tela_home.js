import React, { useContext } from 'react';
import { GlobalContext } from '../../global/GlobalContext';
import { useNavigate } from 'react-router-dom';
import useRenderizaTela from '../../hooks/useRenderizaTela';

import "../tela_home/style.css";

const TelaHome = () => {
  
  const {tela, setTela} = useContext(GlobalContext)
  const hookUse = useRenderizaTela(tela)
  
  const navigate = useNavigate();

  return (
    <div id="main-content">
      <nav className="menu-nav">
        <ul className="list">
          <li className="item" onClick={() => setTela("menu")}>
            <a href="#" className="ancor menu-home">
              <span className="title-menu-home">Menu</span>
            </a>
          </li>
          <li className="item" onClick={() => setTela("atendimentos")}>
            <a href="#" className="ancor" >
              <ion-icon name="call"></ion-icon>
              <span className="title">Atendimento</span>
            </a>
          </li>
          <li className="item" onClick={() => setTela("chamados")}>
            <a href="#" className="ancor">
              <ion-icon name="list-box"></ion-icon>
              <span className="title">Chamados</span>
            </a>
          </li>
          <li className="item" onClick={() => setTela("clientes")}>
            <a href="#" className="ancor">
              <ion-icon name="contacts"></ion-icon>
              <span className="title" >Clientes</span>
            </a>
          </li>
          <li className="item" onClick={() => setTela("softwares")}>
            <a href="#" className="ancor">
              <ion-icon name="tv"></ion-icon>
              <span className="title">Softwares</span>
            </a>
          </li>
          <li className="item" onClick={() => setTela("usuarios")}>
            <a href="#" className="ancor">
              <ion-icon name="contact"></ion-icon>
              <span className="title" >Usúarios</span>
            </a>
          </li>
          <li className="item" onClick={() => setTela("relatorios")}>
            <a href="#" className="ancor">
              <ion-icon name="bookmarks"></ion-icon>
              <span className="title">Relatórios</span>
            </a>
          </li>
        </ul>
        <ul>
          <li className="bottom" onClick={() => {navigate("/")}}>
            <a href="" className="over">
              <ion-icon name="power"></ion-icon>
              <span className="title">sair</span>
            </a>
          </li>
        </ul>
      </nav>
      {hookUse}
    </div>
  );
};
export default TelaHome;
