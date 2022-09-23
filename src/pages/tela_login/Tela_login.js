import "../tela_login/style.css";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { GlobalContext } from "../../global/GlobalContext";

const TelaLogin = () => {
    
    const navigate = useNavigate();

    return(
        <div className="container-login">
            <section className="content-welcome">
                <h1 id="title-login">Seja bem-vindo(a)</h1>
                <p>Faça seu login ao lado</p>
            </section>
        
            <main className="content-login">
                <h3 className="make-login">Faça seu login aqui!</h3>
                <form className="form-login" >
                    <div className="box-user">
                        <label className="label-email">Usuário</label>
                        <input 
                            className="input-login" 
                            name="email" 
                            type="text"
                            /* onChange={formik.handleChange} 
                            value={formik.values.email} */ 
                        />
                    </div>
                    <div className="box-pass">
                        <label className="label-pass">Senha</label>
                        <input 
                            className="input-pass" 
                            name="password" 
                            type="password"
                            /* onChange={formik.handleChange} 
                            value={formik.values.password */ 
                        />
                    </div>
                    <button className="btn-login" onClick={() => navigate("/home")}>Entrar</button>
                </form>
                <button className="btn-cadastre-se" onClick={() => {navigate("/cadastro")}}>Cadastre-se</button>
                <p className="all-rights">© Copyright 2022. All Rights Reserved.</p>
            </main>
        </div>
    )
}
export default TelaLogin