import { useState } from "react";

import { GlobalContext } from "./GlobalContext";

const GlobalState = (props) => {
    const [tela, setTela] = useState("menu");

    const [usuariosCadastrados, setUsuariosCadastrados] = useState([]);
    const [atendimentos, setAtendimentos] = useState([]);
    const [chamados, setChamados] = useState([]);
    const [clientes, setClientes] = useState([]);
    const [softwares, setSoftwares] = useState([]);
    const [usuarios, setUsuarios] = useState([]);
 
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
        usuarios, setUsuarios
        }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
export default GlobalState;