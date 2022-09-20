import "./style.css";

import menuBackground from "../../assets/back_menu.jpg";

import Chamados from "../chamados/Chamados";
import Atendimento from "../atendimento/Atendimento";

import { useState } from "react";
import Usuarios from "../usuarios/Usuarios";

const Menu = () => {
    const [tela, SetTela] = useState("menu");

    const apagarSubSessao = () => {
        const retiraMenu = document.querySelector(".subsessao-menu");
        retiraMenu.style.cssText = "display:none;"   
    }
    const renderizaNovoChamado = () => {
        SetTela("chamados")
        apagarSubSessao()
    }
    const renderizaNovoAtendimento = () => {
        SetTela("atendimentos")
        apagarSubSessao()
    }
    const renderizaNovoUsuario = () => {
        SetTela("usuarios")
        apagarSubSessao()
    }
    const renderizaTelaSelecionada = () => {
        switch(tela){
            case "chamados":
                return <Chamados/>
            break
            case "atendimentos":
                return <Atendimento/>  
            break
            case "usuarios":
                return <Usuarios/>     
            break  
        }
    }
    return(
        <div id="sessao-menu">
            <section className="subsessao-menu">
                <img className="background-menu" src={menuBackground} alt="Menu de tarefas" />
                <h2 className="titulo-menu">Bem-vinda ao Gerenciador de Chamados</h2>
                <p className="subtitle-menu">Crie um novo chamado, adicione usuários, abra atendimentos e veja seus relatórios, tudo em um só lugar.</p>
            
                <section className="container-menu">
                    <div className="box-menu">
                        <button className="btn-menu" onClick={() => renderizaNovoChamado()}><ion-icon className="icon-menu" name="add"></ion-icon></button>
                        <span className="titulo-btn-menu">Novo Chamado</span>
                    </div>
                    <div className="box-menu">
                        <button className="btn-menu" onClick={() => renderizaNovoAtendimento()}><ion-icon name="people"></ion-icon></button>
                        <span className="titulo-btn-menu">Criar Atendimento</span>
                    </div>
                    <div className="box-menu">
                        <button className="btn-menu" onClick={() => renderizaNovoUsuario()}><ion-icon name="person-add"></ion-icon></button>
                        <span className="titulo-btn-menu">Cadastrar Usuário</span>
                    </div>
                </section>
            </section>
            {renderizaTelaSelecionada()}
        </div>
    )
}
export default Menu