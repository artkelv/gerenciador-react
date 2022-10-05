import { useContext, useEffect, useState } from "react"
import { useFormik } from "formik";
import swal from "sweetalert2";

import "../softwares/style.css"
import { GlobalContext } from "../../global/GlobalContext";

const Softwares = () => {
    const [form, SetForm] = useState(false);
    const [nomeBtn, SetNomeBtn] = useState("Novo Software");
    const [pesquisaSf, setPesquisaSf] = useState();
    const [retornaDados, setRetornarDados] = useState(false)

    const {softwares, setSoftwares} = useContext(GlobalContext);

    /* CODIGO USADO PARA PESQUISAR SOFTWARE */

    const funcComparaPesquisa = (dados) => {
        return dados.nomeSF === pesquisaSf
    }
    
    const comparaSoftware = softwares.find(funcComparaPesquisa);
    
    const alteraEstadoCliente = () =>{
        if(comparaSoftware){
            setRetornarDados(true)
        }else{
            setRetornarDados(false)
        }
    }

    useEffect(() => {
        if(!comparaSoftware){
            setRetornarDados(false)
        }
    }, [comparaSoftware])

    const mostrarFormSoftware = () => {
        const formSoftware = document.querySelector(".cadastrar-software");
        const sessaoPesquisarSoft = document.querySelector(".sessao-buscar-software")

        if(form === false){
            formSoftware.style.cssText = "display: block;"
            sessaoPesquisarSoft.style.cssText = "display:none;"

            SetForm(true)
            SetNomeBtn("Voltar")
        }else if(form === true){
            formSoftware.style.cssText = "display: none;"
            sessaoPesquisarSoft.style.cssText = "display:block;"

            SetForm(false)
            SetNomeBtn("Novo Software")
        }
    }
    const formik = useFormik({
        initialValues: {
            nome:"",
            versao: "",
            observacao: ""
        },
        onSubmit: (values, {resetForm}) => {
            swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Software Registrado!',
                showConfirmButton: false,
                timer: 1500
            });
            const dadosSoftwares = {
                nomeSF: values.nome,
                versaoSF: values.versao,
                observacaoSF: values.observacao
            }
            setSoftwares(() => [...softwares, dadosSoftwares])
            resetForm({values:""})
        }
    })
    return(
        <div id="sessao-softwares">
            <section className="subsessao-softwares">
                <h3 className="titulo-software"><span className="subtitulo-software">Softwares</span></h3>
                <button className="btn-novo-software" onClick={() => {mostrarFormSoftware()}}>{nomeBtn}</button>
                <form className="cadastrar-software" onSubmit={formik.handleSubmit}>
                    <div className="primeiro-container-software">
                        <div className="box-name-software">
                            <label className="lbl-software">Nome</label>
                            <input 
                                className="ipt-software" 
                                type="text"
                                name="nome"
                                value={formik.values.nome}
                                onChange={formik.handleChange} 
                                placeholder="Informe o nome do Software"
                            />
                        </div>
                        <div className="box-obs-software">
                            <label className="lbl-software">Observações</label>
                            <textarea 
                                className="txt-software" 
                                cols="80" 
                                rows="10"
                                name="observacao"
                                value={formik.values.observacao}
                                onChange={formik.handleChange} 
                                placeholder="Informe as observações aqui"
                            ></textarea>
                        </div>
                    </div>
                    <div>
                        <div className="box-versao-software">
                            <label className="lbl-software">Versão</label>
                            <input
                                className="ipt-versao"
                                type="text"
                                name="versao"
                                value={formik.values.versao}
                                onChange={formik.handleChange} 
                                placeholder="Informe a Versão do software"
                            />
                        </div>
                        <button type="submit" className="btn-cadastrar-software">Cadastrar</button>
                    </div>
                </form>
                <section className="sessao-buscar-software">
                    <section className="achar-software">
                        <p className="nome-software">Nome</p>
                        <input 
                            className="entrada-nome-software" 
                            type="text" 
                            placeholder="Informe o nome do software"
                            onChange={(e) => setPesquisaSf(e.target.value)}
                        ></input>
                        <button className="btn-pesquisar-software" onClick={() => alteraEstadoCliente()}>Pesquisar</button>
                    </section>
                    <section>
                        {retornaDados? 
                            <div>
                                <h4 className="titulo-result-software">Resultado da sua pesquisa:</h4>
                                <table className="tbl-result-softwares">
                                    <thead>
                                        <tr>
                                            <th>Nome</th>
                                            <th>Versão</th>
                                            <th>Observações</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{comparaSoftware?.nomeSF}</td>
                                            <td>{comparaSoftware?.versaoSF}</td>
                                            <td>{comparaSoftware?.observacaoSF}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>    
                        : <p className="sem-resultados-softwares">Sem resultados no momento.</p>}
                    </section>
                    <section>
                        <table className="tbl-software">
                            <thead>
                                <tr className="dados-software">
                                    <th>Nome</th>
                                    <th>Versão</th>
                                    <th>Observações</th>
                                </tr>
                            </thead>
                            <tbody>
                            {softwares.map((item, index) => {
                                return(
                                    <tr key={index} className="softwares-cadastrados">
                                        <td>{item.nomeSF}</td>
                                        <td>{item.versaoSF}</td>
                                        <td>{item.observacaoSF}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                        </table>
                    </section>
                </section>
            </section>
        </div>
    )
}
export default Softwares