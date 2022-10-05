import "../tela_cadastro/style.css";

import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useContext } from "react";
import { GlobalContext } from "../../global/GlobalContext";

import backgroundSignUp from "../../assets/new_back_signup.jpg";

import Swal from 'sweetalert2';

import {v4 as uuidv4} from 'uuid';


const TelaCadastro = () => {
    const navigate = useNavigate();
    const myId = uuidv4()

    const {usuariosCadastrados, setUsuariosCadastrados, setToken} = useContext(GlobalContext);

    const mensagemDeAviso = () => {
        setToken(myId)
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Cadastrado com sucesso!',
            showConfirmButton: false,
            timer: 1500
        })
        setTimeout(() => {
            navigate("/home")
        }, 2000)
    }
    const formik = useFormik({
        initialValues: {
            nome: "",
            email: "",
            senha: ""
        },
        onSubmit: (values) => {
            const dados = {
                nomeUser: values.nome,
                emailUser: values.email,
                senhaUser: values.senha
            }
            setUsuariosCadastrados(() => [...usuariosCadastrados, dados])
            mensagemDeAviso()
        }
    })

    return(
        <div id="sessao-tela-cadastro">
            <section className="background-cadastro">
                <img className="foto-cadastro" src={backgroundSignUp} alt="foto background cadastro"/>
            </section>
            <section className="criar-conta">
                <h1 className="titulo-cadastro">Crie sua conta aqui !</h1>
                <form className="form-cadastro" onSubmit={formik.handleSubmit}>
                    <input 
                        className="inputs-cadastro" 
                        type="text"
                        name="nome"
                        onChange={formik.handleChange}
                        value={formik.values.nomeUser} 
                        placeholder="Nome"
                        required
                    />
                    <input 
                        className="inputs-cadastro" 
                        type="email"
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email} 
                        placeholder="E-mail"
                        required
                    />
                    <input 
                        className="inputs-cadastro" 
                        type="password"
                        name="senha"
                        onChange={formik.handleChange}
                        value={formik.values.senha} 
                        placeholder="Senha"
                        required
                    />
                    <button className="btn-tela-cadastro" type="submit">Cadastrar</button>
                </form>
                <p className="obg-cadastro">Obrigado por usar nosso serviço!</p>
                <button className="btn-fazer-login" type="submit">Fazer login</button>
            </section>
        </div>
    )
}
export default TelaCadastro