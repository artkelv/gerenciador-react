import "../tela_login/style.css";

const TelaLogin = () => {
    return(
        <div className="container-login">
            <section className="content-welcome">
                <h1 id="title-login">Seja bem-vindo(a)</h1>
                <p>Faça seu login ao lado</p>
            </section>
        
            <main className="content-login">
                <h3 className="make-login">Faça seu login aqui!</h3>
                <form className="form-login">
                    <div className="box-user">
                        <label className="label-email">Usuário</label>
                        <input className="input-login" type="text"/>
                    </div>
            
                    <div className="box-pass">
                        <label className="label-pass">Senha</label>
                        <input className="input-pass" type="password" />
                    </div>
            
                    <button className="btn-login">Entrar</button>
                </form>
                <p className="all-rights">© Copyright 2022. All Rights Reserved.</p>
            </main>
        </div>
    )
}
export default TelaLogin