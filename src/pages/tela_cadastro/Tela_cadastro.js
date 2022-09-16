import "../tela_cadastro/style.css";
import { useNavigate } from "react-router-dom";

import backgroundSignUp from "../../assets/background_signup.jpg";

const TelaCadastro = () => {
    const navigate = useNavigate();

    return(
        <div id="sessao-tela-cadastro">
            <section className="background-cadastro">
                <img className="foto-cadastro" src={backgroundSignUp} alt="foto background cadastro"/>
            </section>
            <section className="criar-conta">
                <h1 className="titulo-cadastro">Crie sua conta aqui !</h1>
                <form className="form-cadastro" action="">
                    <input className="inputs-cadastro" type="text" placeholder="Nome"/>
                    <input className="inputs-cadastro" type="email" placeholder="E-mail"/>
                    <input className="inputs-cadastro" type="password" placeholder="Senha"/>
                    <button className="btn-tela-cadastro" onClick={() => {navigate("/home")}}>Cadastrar</button>
                </form>
                <p className="obg-cadastro">Obrigado por usar nosso serviço!</p>
                <button className="btn-fazer-login" onClick={() => {navigate("/")}}>Fazer login</button>
            </section>
        </div>
    )
}
export default TelaCadastro