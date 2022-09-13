
import Atendimento from "../components/atendimento/Atendimento";
import Chamados from "../components/chamados/Chamados";
import Clientes from "../components/clientes/Clientes";
import Relatórios from "../components/relatorios/Relatorios";
import Softwares from "../components/softwares/Softwares";
import Usuarios from "../components/usuarios/Usuarios"
import TelaHome from "../pages/tela_home/Tela_home";

import React from 'react'


export const renderizaAtendimento = (setTela) => {
    setTela("atendimento")
} 
export const renderizaChamados = (setTela) => {
    setTela("chamados")
} 
export const renderizaClientes = (setTela) => {
    setTela("clientes")
} 
export const renderizaSoftwares = (setTela) => {
    setTela("softwares")
}
export const renderizaUsuarios = (setTela) => {
    setTela("usuarios")
} 
export const renderizaRelatorios = (setTela) => {
    setTela("relatorios")
} 


export const renderizaTela = (tela) => {
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
        default: 
            return <TelaHome/>     
    }
}