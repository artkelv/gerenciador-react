import React from 'react'
import Atendimento from "../../components/atendimento/Atendimento"
import Chamados from "../../components/chamados/Chamados";
import Clientes from "../../components/clientes/Clientes";
import Relatórios from "../../components/relatorios/Relatorios";
import Softwares from "../../components/softwares/Softwares";
import Usuarios from "../../components/usuarios/Usuarios"

import { useState } from "react";

import "../tela_home/style.css";


const TelaHome = () => {

  const [tela, setTela] = useState("tela-home");


const renderizaAtendimento = () => {
    setTela("atendimento")
} 
const renderizaChamados = () => {
    setTela("chamados")
} 
const renderizaClientes = () => {
    setTela("clientes")
} 
const renderizaSoftwares = () => {
    setTela("softwares")
}
const renderizaUsuarios = () => {
    setTela("usuarios")
} 
const renderizaRelatorios = () => {
    setTela("relatorios")
} 


const renderizaTela = () => {
    switch(tela){
        case "atendimento":
            return <Atendimento/>
        break  
        case "chamados":
            return <Chamados/>  
        break
        case "clientes":
            return <Clientes/>  
        break
        case "softwares":
            return <Softwares/>
        break
        case "usuarios": 
            return <Usuarios/>
        break 
        case "relatorios": 
            return <Relatórios/>
        break
    }
}
  
  return (
    <div id="main-content">
      <nav className="menu-nav">
        <ul className="list">
          <li className="item">
            <a href="#" className="ancor">
              <ion-icon name="home"></ion-icon>
              <span className="title">Inicio</span>
            </a>
          </li>
          <li className="item" onClick={() => renderizaAtendimento()}>
            <a href="#" className="ancor">
              <ion-icon name="call"></ion-icon>
              <span className="title">Atendimento</span>
            </a>
          </li>
          <li className="item" onClick={() => renderizaChamados()}>
            <a href="#" className="ancor">
              <ion-icon name="list-box"></ion-icon>
              <span className="title">Chamados</span>
            </a>
          </li>
          <li className="item" onClick={() => renderizaClientes()}>
            <a href="#" className="ancor">
              <ion-icon name="contacts"></ion-icon>
              <span className="title" >Clientes</span>
            </a>
          </li>
          <li className="item" onClick={() => renderizaSoftwares()}>
            <a href="#" className="ancor">
              <ion-icon name="tv"></ion-icon>
              <span className="title">Softwares</span>
            </a>
          </li>
          <li className="item" onClick={() => renderizaUsuarios()}>
            <a href="#" className="ancor">
              <ion-icon name="contact"></ion-icon>
              <span className="title" >Usúarios</span>
            </a>
          </li>
          <li className="item" onClick={() => renderizaRelatorios()}>
            <a href="#" className="ancor">
              <ion-icon name="bookmarks"></ion-icon>
              <span className="title">Relatórios</span>
            </a>
          </li>
        </ul>
        <ul>
          <li className="bottom" >
            <a href="" className="over">
              <ion-icon name="power"></ion-icon>
              <span className="title">sair</span>
            </a>
          </li>
        </ul>
      </nav>
      {renderizaTela()}
    </div>
  );
};
export default TelaHome;
