import "./style.css";
import newmenuBack from "../../assets/new_back_menu.jpg";
import { useContext } from "react";
import { GlobalContext } from "../../global/GlobalContext";

const Menu = () => {

    const {tela, setTela} = useContext(GlobalContext);

    return(
        <div id="sessao-menu">
            <section className="subsessao-menu">
                <img className="background-menu" src={newmenuBack} alt="Menu de tarefas" />
                <h2 className="titulo-menu">Bem-vinda ao Gerenciador de Chamados</h2>
                <p className="subtitle-menu">Crie um novo chamado, adicione usuários, abra atendimentos e veja seus relatórios, tudo em um só lugar.</p>
            
                <section className="container-menu">
                    <div className="box-menu">
                        <button className="btn-menu" onClick={() => {setTela("chamados")}}><ion-icon className="icon-menu" name="add"></ion-icon></button>
                        <span className="titulo-btn-menu">Novo Chamado</span>
                    </div>
                    <div className="box-menu">
                        <button className="btn-menu" onClick={() => {setTela("atendimentos")}}><ion-icon name="people"></ion-icon></button>
                        <span className="titulo-btn-menu">Criar Atendimento</span>
                    </div>
                    <div className="box-menu">
                        <button className="btn-menu" onClick={() => {setTela("usuarios")}}><ion-icon name="person-add"></ion-icon></button>
                        <span className="titulo-btn-menu">Cadastrar Usuário</span>
                    </div>
                </section>
            </section>
        </div>
    )
}
export default Menu