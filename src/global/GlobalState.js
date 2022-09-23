import { useState } from "react";

import { GlobalContext } from "./GlobalContext";

const GlobalState = (props) => {
    const [tela, setTela] = useState("menu");
    const [usuariosCadastrados, setUsuariosCadastrados] = useState([]);

  return (
    <GlobalContext.Provider
      value={{tela, setTela, usuariosCadastrados, setUsuariosCadastrados}}>
      {props.children}
    </GlobalContext.Provider>
  );
};
export default GlobalState;