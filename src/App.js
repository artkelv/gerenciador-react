import RouterProjeto from "../src/routers/Router";
import GlobalState from "./global/GlobalState";

function App() {
  return (
    <GlobalState>
      <RouterProjeto/>
    </GlobalState>
  );
}

export default App;
