import { useState } from "react";

import { GlobalContext } from "./GlobalContext";

const GlobalState = (props) => {
    const [tela, setTela] = useState("menu")

  return (
    <GlobalContext.Provider
      value={{tela, setTela}}>
      {props.children}
    </GlobalContext.Provider>
  );
};
export default GlobalState;