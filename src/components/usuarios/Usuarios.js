import { useFormik } from "formik";
import { useContext, useState } from "react"
import { GlobalContext } from "../../global/GlobalContext";

import swal from "sweetalert2";

import "../usuarios/style.css";

const Usuarios = () => {
    const [form, setForm] = useState(false);
    const [btnTexto, SetBtnTexto] = useState("Novo Usuário");

    const {usuarios, setUsuarios} = useContext(GlobalContext);

    const mostrarFormParaAddUsuario = () => {
        
        const formUser = document.querySelector(".form-usuario");
        const buscarUsuario = document.querySelector(".buscar-usuario");

        if(form === false){
            setForm(true)
            SetBtnTexto("Voltar")

            buscarUsuario.style.cssText = "display:none;"
            formUser.style.cssText = "display:block;"
        } else if(form === true){
            setForm(false)
            SetBtnTexto("Novo Usuário")

            buscarUsuario.style.cssText = "display:block;"
            formUser.style.cssText = "display:none;"
        }
    }
    const formik = useFormik({
        initialValues: {
            nome:"",
            telResidencial: "",
            email: "",
            cpf: "",
            telCelular: "",
            estado: "",
            dataNascimento: "",
            tipoUsuario: "",
            cargo: "",
            endereco: "",
            login: "",
            senha:"",
            cidade: "",
            rg: ""
        },
        onSubmit: (values) => {
            swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Usuario Cadastrado!',
                showConfirmButton: false,
                timer: 1500
            })
            const dadosUsuarios = {
                nomeUse: values.nome,
                telResidencialUse: values.telResidencial,
                emailUse: values.email,
                cpfUse: values.cpf,
                telCelularUse: values.telCelular,
                estadoUse: values.estado,
                dataNascimentoUse: values.dataNascimento,
                tipoUsuarioUse: values.tipoUsuario,
                cargoUse: values.cargo,
                enderecoUse: values.endereco,
                loginUse: values.login,
                senhaUse: values.senha,
                cidadeUse: values.cidade,
                rgUse: values.rg
            }
            setUsuarios(() => [...usuarios, dadosUsuarios])
            console.log("valores",values)
        }
    })
    return(
        <div className="sessao-usuario">
            <h3 className="titulo-usuarios"><span className="subtitulo-usuarios">Usuários</span></h3>
            <button className="btn-novo-usuario" onClick={() => {mostrarFormParaAddUsuario()}}>{btnTexto}</button>

            <form className="form-usuario" onSubmit={formik.handleSubmit}>
                <div className="container-usuario">
                    <section className="primeiro-container-usario">
                        <div className="cadastrar-usuario">
                            <label className="ipt-titulo">Nome</label>
                            <input 
                                type="text" 
                                className="ipt-usuarios"
                                name="nome"
                                value={formik.values.nome}
                                onChange={formik.handleChange} 
                                placeholder="Informe o nome"
                            />
                        </div>
                        <div className="cadastrar-usuario">
                            <label className="ipt-titulo">CPF</label>
                            <input 
                                type="number" 
                                className="ipt-usuarios"
                                name="cpf"
                                value={formik.values.cpf}
                                onChange={formik.handleChange} 
                                placeholder="Informe o CPF"
                            />
                        </div>
                        <div className="cadastrar-usuario">
                            <label className="ipt-titulo">Data de Nascimento</label>
                            <input 
                                type="date" 
                                className="ipt-usuarios"
                                name="dataNascimento"
                                value={formik.values.dataNascimento}
                                onChange={formik.handleChange} 
                                placeholder="dd/mm/aaaa"
                            />
                        </div>
                        <div className="cadastrar-usuario">
                            <label className="ipt-titulo">Endereço</label>
                            <input 
                                type="text" 
                                className="ipt-usuarios"
                                name="endereco"
                                value={formik.values.endereco}
                                onChange={formik.handleChange} 
                                placeholder="Informe o endereço"
                            />
                        </div>
                        <div className="cadastrar-usuario">
                            <label className="ipt-titulo">Cidade</label>
                            <input 
                                type="text" 
                                className="ipt-usuarios"
                                name="cidade"
                                value={formik.values.cidade}
                                onChange={formik.handleChange} 
                                placeholder="Informe a Cidade"
                            />
                        </div>
                    </section>
                    <section className="segundo-container-usario">
                        <div className="cadastrar-usuario">
                            <label className="ipt-titulo">Telefone Residencial</label>
                            <input 
                                type="number" 
                                className="ipt-usuarios"
                                name="telResidencial"
                                value={formik.values.telResidencial}
                                onChange={formik.handleChange} 
                                placeholder="Informe o Telefone residencial"
                            />
                        </div>
                        <div className="cadastrar-usuario">
                            <label className="ipt-titulo">Telefone Celular</label>
                            <input 
                                type="number" 
                                className="ipt-usuarios"
                                name="telCelular"
                                value={formik.values.telCelular}
                                onChange={formik.handleChange} 
                                placeholder="Informe o Telefone Celular"
                            />
                        </div>
                        <div className="cadastrar-usuario">
                            <label className="ipt-titulo">Tipo usuario</label>
                            <input 
                                type="text" 
                                className="ipt-usuarios"
                                name="tipoUsuario"
                                value={formik.values.tipoUsuario}
                                onChange={formik.handleChange} 
                                placeholder="Informe o tipo de usuário"
                            />
                        </div>
                        <div className="cadastrar-usuario">
                            <label className="ipt-titulo">Login</label>
                            <input 
                                type="text" 
                                className="ipt-usuarios"
                                name="login"
                                value={formik.values.login}
                                onChange={formik.handleChange} 
                                placeholder="Informe o login"
                            />
                        </div>
                        <div className="cadastrar-usuario">
                            <label className="ipt-titulo">RG</label>
                            <input 
                                type="text" 
                                className="ipt-usuarios"
                                name="rg"
                                value={formik.values.rg}
                                onChange={formik.handleChange} 
                                placeholder="Informe o RG"
                            />
                        </div>
                    </section>
                    <section className="terceiro-container-usario">
                            <div className="cadastrar-usuario">
                                <label className="ipt-titulo">E-mail</label>
                                <input 
                                    type="email" 
                                    className="ipt-usuarios"
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange} 
                                    placeholder="Informe o e-mail"
                                />
                            </div>
                            <div className="cadastrar-usuario">
                                <label className="ipt-titulo" >Estado</label>
                                <select 
                                    className="ipt-select"
                                    name="estado"
                                    value={formik.values.estado}
                                    onChange={formik.handleChange}
                                >
                                    <option value="AC">Acre</option>
                                    <option value="AL">Alagoas</option>
                                    <option value="AP">Amapá</option>
                                    <option value="AM">Amazonas</option>
                                    <option value="BA">Bahia</option>
                                    <option value="CE">Ceará</option>
                                    <option value="DF">Distrito Federal</option>
                                    <option value="ES">Espírito Santo</option>
                                    <option value="GO">Goiás</option>
                                    <option value="MA">Maranhão</option>
                                    <option value="MT">Mato Grosso</option>
                                    <option value="MS">Mato Grosso do Sul</option>
                                    <option value="MG">Minas Gerais</option>
                                    <option value="PA">Pará</option>
                                    <option value="PB">Paraíba</option>
                                    <option value="PR">Paraná</option>
                                    <option value="PE">Pernambuco</option>
                                    <option value="PI">Piauí</option>
                                    <option value="RJ">Rio de Janeiro</option>
                                    <option value="RN">Rio Grande do Norte</option>
                                    <option value="RS">Rio Grande do Sul</option>
                                    <option value="RO">Rondônia</option>
                                    <option value="RR">Roraima</option>
                                    <option value="SC">Santa Catarina</option>
                                    <option value="SP">São Paulo</option>
                                    <option value="SE">Sergipe</option>
                                    <option value="TO">Tocantins</option>
                                    <option value="EX">Estrangeiro</option>
                                </select>
                            </div>
                            <div className="cadastrar-usuario">
                                <label className="ipt-titulo">Cargo</label>
                                <input 
                                    type="text" 
                                    className="ipt-usuarios"
                                    name="cargo"
                                    value={formik.values.cargo}
                                    onChange={formik.handleChange} 
                                    placeholder="Informe o cargo"
                                />
                            </div>
                            <div className="cadastrar-usuario">
                                <label className="ipt-titulo">Senha</label>
                                <input 
                                    type="password" 
                                    className="ipt-usuarios"
                                    name="senha"
                                    value={formik.values.senha}
                                    onChange={formik.handleChange} 
                                    placeholder="Informe a senha"
                                />
                            </div>
                            <button className="btn-cadastrar-usuario">Cadastrar</button>
                    </section>
                </div>
            </form>
            <section className="buscar-usuario">
                <section className="achar-usuario">
                    <p className="nome-usuario">Nome</p>
                    <input className="entrada-nome" type="text" placeholder="Informe o nome do usuário"></input>
                    <button className="btn-pesquisar">Pesquisar</button>
                </section>
                <section>
                    <table className="tbl-usuarios">
                        <thead>
                            <tr className="dados-usuarios">
                                <th>Nome</th>
                                <th>CPF</th>
                                <th>RG</th>
                                <th>Cargo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.map((item, index) => {
                                return(
                                    <tr key={index} className="usuarios-cadastrados">
                                        <td>{item.nomeUse}</td>
                                        <td>{item.cpfUse}</td>
                                        <td>{item.rgUse}</td>
                                        <td>{item.cargoUse}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </section>
            </section>
        </div>
    )
}  
export default Usuarios