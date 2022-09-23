import Menu from "../components/menu/Menu";
import Atendimento from "../components/atendimento/Atendimento";
import Chamados from "../components/chamados/Chamados";
import Clientes from "../components/clientes/Clientes";
import Relatorios from "../components/relatorios/Relatorios";
import Softwares from "../components/softwares/Softwares";
import Usuarios from "../components/usuarios/Usuarios";

export default function useRenderizaTela(nomeDaTela) {

    if(nomeDaTela === "atendimentos"){
      return <Atendimento/>
    } else if(nomeDaTela === "chamados"){
      return <Chamados/>
    } else if(nomeDaTela === "clientes"){
      return <Clientes/>
    }else if(nomeDaTela === "softwares"){
      return <Softwares/>
    }else if(nomeDaTela === "usuarios"){
      return <Usuarios/>
    }else if(nomeDaTela === "relatorios"){
      return <Relatorios/>
    }else if(nomeDaTela === "menu"){
      return <Menu/>
    }
}
