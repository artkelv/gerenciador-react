import { GlobalContext } from "../../global/GlobalContext";
import { useContext, useState, useEffect } from "react";
import { useFormik } from "formik";
import {v4 as uuidv4} from 'uuid';

import "../atendimento/style.css";

import swal from "sweetalert2";

const Atendimento = () => {
    const [form, SetForm] = useState(false);
    const [btnVoltar, SetBtnVoltar] = useState("Novo Atendimento");
    const [pesquisarAt, setPesquisarAt] = useState("");
    const [dadosRetornadoPesquisa, setDadosRetornadoPesquisa] = useState(false);

    let id = uuidv4();
 
    const {atendimentos, setAtendimentos} = useContext(GlobalContext);

    /* CÓDIGO PARA PESQUISAR ATENDIMENTOS */
    const encontraAtendimentos = (dados) => {
        return dados.idAT === pesquisarAt
    }
    const comparaAtendimento = atendimentos.find(encontraAtendimentos)
    
    const clickAtendimento = () => {
        if(comparaAtendimento){
            setDadosRetornadoPesquisa(true)
        }else{
            setDadosRetornadoPesquisa(false)
        }
    }

    useEffect(() => {
        if(!comparaAtendimento){
            setDadosRetornadoPesquisa(false)
        }
    }, [comparaAtendimento])
    
    /* CÓDIGO PARA MOSTRAR O FORM DE ATENDIMENTOS */

    const formNovoAtendimento = () => {
        const formAtendimento = document.querySelector(".cadastrar-atendimento");
        const pesquisarAtendimento = document.querySelector(".sessao-pesquisar-atendimento");
        const sessaoTbl = document.querySelector(".sessao-tbl-atendimento");
        const dadosRetornados = document.querySelector(".dados-retornado-pesquisa");

        if(form === false){
            formAtendimento.style.cssText = "display: block; margin-left: 13vw; margin-top:-15px;"
            pesquisarAtendimento.style.cssText = "display: none;"
            sessaoTbl.style.cssText = "display:none;"
            dadosRetornados.style.cssText = "display:none;"

            SetForm(true)
            SetBtnVoltar("Voltar")
        }else if(form === true){
            formAtendimento.style.cssText = "display: none;"
            pesquisarAtendimento.style.cssText = "display: block;"
            sessaoTbl.style.cssText = "display:block;"
            dadosRetornados.style.cssText = "display: block;"

            SetForm(false)
            SetBtnVoltar("Novo Atendimento")
        }
    }
    const formik = useFormik({
        initialValues: {
            cliente: "",
            dataAtendimento: "",
            assunto: "",
            tipoDeAtendimento: "",
            mensagem: ""
        },
        onSubmit: (values, {resetForm}) => {
            swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Atendimento cadastrado!',
                showConfirmButton: false,
                timer: 1500
              })

            const dadosAtendimento = {
                idAT:id,
                clienteAT: values.cliente,
                dataAtendimentoAT: values.dataAtendimento,
                assuntoAT: values.assunto,
                tipoDeAtendimentoAT: values.tipoDeAtendimento,
                mensagemAT: values.mensagem
            }
            setAtendimentos(() => [...atendimentos, dadosAtendimento])
            resetForm({values:""})
        }
    })

    return(
        <div id="sessao-atendimento">
                <h3 className="titulo-atendimento"><span className="subtitulo-atendimento">Atendimentos</span></h3>
                <button className="btn-novo-atendimento" onClick={() => {formNovoAtendimento()}}>{btnVoltar}</button>

                <form className="cadastrar-atendimento" onSubmit={formik.handleSubmit}>
                    <div className="primeiro-container-atendimento">
                        <div className="atendimento-cliente">
                            <label className="lbl-atendimento">Cliente</label>
                            <input 
                                className="ipt-cliente" 
                                type="text"
                                name="cliente"
                                value={formik.values.cliente}
                                onChange={formik.handleChange} 
                                placeholder="Informe o cliente"
                            />
                        </div>
                        <div className="atendimento-data">
                            <label className="lbl-atendimento">Data Atendimento</label>
                            <input 
                                className="ipt-data" 
                                type="date"
                                name="dataAtendimento"
                                value={formik.values.dataAtendimento}
                                onChange={formik.handleChange} 
                            />
                        </div>
                    </div>
                    <div className="segundo-container-atendimento">
                        <div className="atendimento-assunto">
                            <label className="lbl-atendimento" htmlFor="">Assunto</label>
                            <input 
                                className="ipt-assunto" 
                                type="text"
                                name="assunto"
                                value={formik.values.assunto}
                                onChange={formik.handleChange}  
                                placeholder="Informe o assunto"
                            />
                        </div>
                        <div className="atendimento-tipo">
                            <label className="lbl-atendimento">Tipo de atendimento</label>
                            <select 
                                className="ipt-atendimento"
                                name="tipoDeAtendimento"
                                value={formik.values.tipoDeAtendimento}
                                onChange={formik.handleChange}>
                                <option value="EMPTY">Informe o tipo de atendimento</option>
                                <option value="PJ">PJ</option>
                                <option value="CLT">CLT</option>
                            </select>
                        </div>
                    </div>
                    <div className="terceiro-container-atendimento">
                        <div className="atendimento-registro">
                            <label className="lbl-atendimento">Registro de atendimento</label>
                            <textarea 
                                className="ipt-registro" 
                                cols="30" 
                                rows="10" 
                                placeholder="Mensagem"
                                name="mensagem"
                                value={formik.values.mensagem}
                                onChange={formik.handleChange}
                            ></textarea>
                        </div>
                        <button className="btn-cadastrar-atendimento" type="submit">Cadastrar atendimento</button>
                    </div>
                </form>
                <section className="sessao-pesquisar-atendimento">
                    <label className="lbl-atendimento">ID do Atendimento</label>
                    <div>
                        <input 
                            className="ipt-pesquisar-atendimento"
                            type="text" 
                            placeholder="Informe o ID do atendimento"
                            value={pesquisarAt}
                            onChange={(event) => setPesquisarAt(event.target.value)}
                        />
                        <button className="btn-pesquisar-atendimento" onClick={() => clickAtendimento()}>Pesquisar</button>
                    </div>
                </section>
                <div className="dados-retornado-pesquisa">
                {dadosRetornadoPesquisa?
                    <div>
                        <h4 className="titulo-pesquisa-atendimento">Resultados da sua busca:</h4>
                        <table className="tbl-pesquisa-atendimento">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Cliente</th>
                                    <th>Assunto</th>
                                    <th>Tipo de Atendimento</th>
                                    <th>Data do Atendimento</th>
                                    <th>Registro de atendimento</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="dados-pesquisa-at">
                                    <td>{comparaAtendimento?.idAT}</td>
                                    <td>{comparaAtendimento?.clienteAT}</td>
                                    <td>{comparaAtendimento?.assuntoAT}</td>
                                    <td>{comparaAtendimento?.tipoDeAtendimentoAT}</td>
                                    <td>{comparaAtendimento?.dataAtendimentoAT}</td>
                                    <td>{comparaAtendimento?.mensagemAT}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                 : <p className="zero-resultados-atendimento">Sem resultados no momento.</p>}
                </div>

                <section className="sessao-tbl-atendimento">
                    <table className="tbl-atendimento">
                        <thead>
                            <tr className="dados-atendimento">
                                <th>ID</th>
                                <th>Cliente</th>
                                <th>Assunto</th>
                                <th>Tipo de Atendimento</th>
                                <th>Data do atendimento</th>
                                <th>Registro do atendimento</th>
                            </tr>
                        </thead>
                        <tbody>
                            {atendimentos.map((item, index) => {
                                return(
                                    <tr key={index} className="atendimentos-cadastrados">
                                        <td>{item.idAT}</td>
                                        <td>{item.clienteAT}</td>
                                        <td>{item.assuntoAT}</td>
                                        <td>{item.tipoDeAtendimentoAT}</td>
                                        <td>{item.dataAtendimentoAT}</td>
                                        <td>{item.mensagemAT}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </section>
        </div>
    )
}
export default Atendimento;