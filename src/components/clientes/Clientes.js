import { useFormik } from "formik";
import { useContext, useEffect, useState } from "react";

import swal from "sweetalert2";

import "../../components/clientes/style.css"
import { GlobalContext } from "../../global/GlobalContext";

const Clientes = () => {

    const [form, setForm] = useState(false);
    const [btnVoltar, setBtnVoltar] = useState("Novo Cliente");
    const [pesquisarCl, setPesquisarCl] = useState();
    const [dadosRetornados, setDadosRetornados] = useState(false);

    const {clientes, setClientes} = useContext(GlobalContext);

    /* CÓDIGO USADO PARA PESQUISAR UMA EMPRESA */

    const funcComparaClientes = (dados) => {
        return dados.rsocialCL === pesquisarCl
    }
    const comparaClientes = clientes.find(funcComparaClientes)

    const alteraEstadoDeDados = () => {
        if(comparaClientes){
            setDadosRetornados(true)
        }else{
            setDadosRetornados(false)
        }
    }
    useEffect(() => {
        if(!comparaClientes){
            setDadosRetornados(false)
        }
    }, [comparaClientes]);

    const MostrarFormAddNovaEmpresa = () => {
        const mostrarFormParaAddEmpresa = document.querySelector(".cadastrar-empresa");
        const retiraSessaoPesquisar = document.querySelector(".buscar-cliente");

        if(form === false){
            mostrarFormParaAddEmpresa.style.cssText = "display:block;"
            retiraSessaoPesquisar.style.cssText = "display:none;"

            setBtnVoltar("Voltar")
            setForm(true)
        }else if(form === true){
            mostrarFormParaAddEmpresa.style.cssText = "display:none;"
            retiraSessaoPesquisar.style.cssText = "display:block;"

            setBtnVoltar("Novo Cliente")
            setForm(false)
        }
    }
    const formik = useFormik({
        initialValues: {
            rsocial:"",
            nomeFantasia:"",
            cidade:"",
            telCelular:"",
            email:"",
            estado:"",
            proprietario:"",
            cnpj:"",
            endereco:"",
            telComercial:""
        },
        onSubmit:(values, {resetForm}) => {
            swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Cliente Cadastrado!',
                showConfirmButton: false,
                timer: 1500
            })
            const cadastroClientes = {
                rsocialCL: values.rsocial,
                nomeFantasiaCL: values.nomeFantasia,
                cidadeCL: values.cidade,
                telCelularCL: values.telCelular,
                emailCL: values.email,
                estadoCL: values.estado,
                proprietarioCL: values.proprietario,
                cnpjCL: values.cnpj,
                enderecoCL: values.endereco,
                telComercialCL: values.telComercial
            }
            setClientes(() => [...clientes, cadastroClientes])
            resetForm({values:""})
        }
    })
    return(
        <div className="sessao-cliente">
            <h3 className="titulo-cliente"><span className="subtitulo-cliente">Clientes</span></h3>
            <button className="btn-novo-cliente" onClick={() => {MostrarFormAddNovaEmpresa()}}>{btnVoltar}</button>

            <form className="cadastrar-empresa" onSubmit={formik.handleSubmit}>
                <div className="primeiro-container-cliente">
                    <label className="rsocial-nome">Razão Social</label>
                    <input 
                        className="rsocial-ipt" 
                        type="text"
                        name="rsocial"
                        value={formik.values.rsocial}
                        onChange={formik.handleChange} 
                        placeholder="Digite o nome de sua empresa" 
                    />
                </div>
                <div className="segundo-container-cliente">
                    <div className="box-cliente">
                        <label className="title-ipt">Nome fantasia</label>
                        <input 
                            className="cliente-ipt" 
                            type="text" 
                            name="nomeFantasia"
                            value={formik.values.nomeFantasia}
                            onChange={formik.handleChange}
                            placeholder="Nome fantasia da empresa"
                    />
                    </div>
                    <div className="box-cliente">
                        <label className="title-ipt" >Cidade</label>
                        <input 
                            className="cliente-ipt" 
                            type="text"
                            name="cidade"
                            value={formik.values.cidade}
                            onChange={formik.handleChange} 
                            placeholder="Informe a cidade"
                        />
                    </div>
                    <div className="box-cliente">
                        <label className="title-ipt" >Telefone Celular</label>
                        <input 
                            className="cliente-ipt" 
                            type="number" 
                            name="telCelular"
                            value={formik.values.telCelular}
                            onChange={formik.handleChange}
                            placeholder="Informe o telefone celular"
                        />
                    </div>
                </div>
                <div className="terceiro-container-cliente">
                    <div className="box-cliente">
                        <label className="title-ipt" >E-mail</label>
                        <input 
                            className="cliente-ipt" 
                            type="email"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange} 
                            placeholder="Informe o e-mail"
                        />
                    </div>
                    <div className="box-cliente">
                        <label className="title-ipt" >Estado</label>
                                <select 
                                    className="select-clientes"
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
                    <div className="box-cliente">
                        <label className="title-ipt" >Proprietario</label>
                        <input 
                            className="cliente-ipt" 
                            type="text" 
                            name="proprietario"
                            value={formik.values.proprietario}
                            onChange={formik.handleChange}
                            placeholder="Nome do proprietario"
                        />
                    </div>
                </div>
                <div className="quarto-container-cliente">
                    <div className="box-cliente">
                        <label className="title-ipt" >CNPJ</label>
                        <input 
                            className="cliente-ipt" 
                            type="number"
                            name="cnpj"
                            value={formik.values.cnpj}
                            onChange={formik.handleChange} 
                            placeholder="Informe o CNPJ da empresa"
                        />
                    </div>
                    <div className="box-cliente">
                        <label className="title-ipt" >Endereço</label>
                        <input 
                            className="cliente-ipt" 
                            type="text" 
                            name="endereco"
                            value={formik.values.endereco}
                            onChange={formik.handleChange}
                            placeholder="Informe o endereço"
                        />
                    </div>
                    <div className="box-cliente">
                        <label className="title-ipt" >Telefone comercial</label>
                        <input 
                            className="cliente-ipt" 
                            type="number"
                            name="telComercial"
                            value={formik.values.telComercial}
                            onChange={formik.handleChange}
                            placeholder="Informe o telefone comercial" 
                        />
                    </div>
                </div>
                <button className="efetua-cadastro">Cadastrar empresa</button>
            </form>
            <section className="buscar-cliente">
                <section className="achar-cliente">
                    <p className="nome-rsocial">Razão social</p>
                    <input 
                        className="entrada-nome-cliente" 
                        type="text" 
                        placeholder="Informe a razão social da empresa"
                        onChange={(e) => setPesquisarCl(e.target.value)}
                    ></input>
                    <button className="btn-pesquisar-cliente" onClick={() => alteraEstadoDeDados()}>Pesquisarr</button>
                </section>

                <section className="tbl-pesquisa-clientes">
                    {dadosRetornados?
                    <div>
                        <h4 className="titulo-pesquisa-cliente">Resultados da sua busca:</h4>
                        <table className="tbl-result-clientes">
                            <thead>
                                <tr>
                                    <th>Razão Social</th>
                                    <th>Nome Fantasia</th>
                                    <th>Proprietário</th>
                                    <th>Cidade</th>
                                    <th>E-mail</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{comparaClientes?.rsocialCL}</td>
                                    <td>{comparaClientes?.nomeFantasiaCL}</td>
                                    <td>{comparaClientes?.proprietarioCL}</td>
                                    <td>{comparaClientes?.cidadeCL}</td>
                                    <td>{comparaClientes?.emailCL}</td>
                                </tr>
                            </tbody>
                        </table>    
                    </div> 
                : <p className="zero-resultados-clientes">Sem resultados no momento.</p>}
                </section>

                <section>
                    <table className="tbl-cliente">
                        <thead>
                            <tr className="dados-cliente">
                                <th>Razão Social</th>
                                <th>Nome Fantasia</th>
                                <th>Proprietário</th>
                                <th>Cidade</th>
                                <th>E-mail</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clientes.map((item, index) => {
                                return(
                                    <tr key={index} className="clientes-cadastrados">
                                        <td>{item.rsocialCL}</td>
                                        <td>{item.nomeFantasiaCL}</td>
                                        <td>{item.proprietarioCL}</td>
                                        <td>{item.cidadeCL}</td>
                                        <td>{item.emailCL}</td>
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
export default Clientes;