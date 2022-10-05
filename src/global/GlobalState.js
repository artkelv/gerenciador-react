import { useState } from "react";

import { GlobalContext } from "./GlobalContext";

const GlobalState = (props) => {
    const [tela, setTela] = useState("menu");
   
    const [usuariosCadastrados, setUsuariosCadastrados] = useState([{
      nomeUser: "admim",
      emailUser: "admim@",
      senhaUser: "admim"
  }]);
    const [atendimentos, setAtendimentos] = useState([]);
    const [chamados, setChamados] = useState([]);
    const [clientes, setClientes] = useState([]);
    const [softwares, setSoftwares] = useState([]);
    const [usuarios, setUsuarios] = useState([]);
    const [token, setToken] = useState(undefined)
 
  return (
    <GlobalContext.Provider
      value={{
        tela, 
        setTela, 
        usuariosCadastrados, setUsuariosCadastrados, 
        atendimentos, setAtendimentos,
        chamados, setChamados,
        clientes, setClientes,
        softwares, setSoftwares,
        usuarios, setUsuarios,
        token, setToken
        }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
export default GlobalState;