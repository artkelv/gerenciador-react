import backgroundSignUp from "../../assets/background_signup.jpg";
import "../tela_cadastro/style.css";

const TelaCadastro = () => {
    return(
        <div id="sessao-tela-cadastro">
            <section className="background-cadastro">
                <img className="foto-cadastro" src={backgroundSignUp} alt="foto background cadastro"/>
            </section>
            <section className="criar-conta">
                <h1>Crie sua conta aqui !</h1>
                <form action="">
                    <input type="text" placeholder="Nome"/>
                    <input type="email" placeholder="E-mail"/>
                    <input type="password" placeholder="Senha"/>
                    <button className="btn-tela-cadastro">Cadastrar</button>
                </form>
            </section>
        </div>
    )
}
export default TelaCadastro