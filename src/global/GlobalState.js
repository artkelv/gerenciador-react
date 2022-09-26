import { useState } from "react";

import { GlobalContext } from "./GlobalContext";

const GlobalState = (props) => {
    const [tela, setTela] = useState("menu");
    const [usuariosCadastrados, setUsuariosCadastrados] = useState([]);
    const [atendimentos, setAtendimentos] = useState([]);


  return (
    <GlobalContext.Provider
      value={{tela, setTela, usuariosCadastrados, setUsuariosCadastrados, atendimentos, setAtendimentos}}>
      {props.children}
    </GlobalContext.Provider>
  );
};
export default GlobalState;