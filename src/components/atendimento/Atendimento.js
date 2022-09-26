import { useState } from "react";
import { GlobalContext } from "../../global/GlobalContext";
import { useContext } from "react";
import { useFormik } from "formik";

import "../atendimento/style.css";

import swal from "sweetalert2";

const Atendimento = () => {
    const [form, SetForm] = useState(false);
    const [btnVoltar, SetBtnVoltar] = useState("Novo Atendimento");
 
    const {atendimentos, setAtendimentos} = useContext(GlobalContext)

    const formNovoAtendimento = () => {
        const formAtendimento = document.querySelector(".cadastrar-atendimento");
        const pesquisarAtendimento = document.querySelector(".sessao-pesquisar-atendimento");
        const sessaoTbl = document.querySelector(".sessao-tbl-atendimento");

        if(form === false){
            formAtendimento.style.cssText = "display: block;"
            pesquisarAtendimento.style.cssText = "display: none;"
            sessaoTbl.style.cssText = "display:none;"

            SetForm(true)
            SetBtnVoltar("Voltar")
        }else if(form === true){
            formAtendimento.style.cssText = "display: none;"
            pesquisarAtendimento.style.cssText = "display: block;"
            sessaoTbl.style.cssText = "display:block;"

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
                        <button className="btn-cadastrar-atendimento">Cadastrar atendimento</button>
                    </div>
                </form>
                <section className="sessao-pesquisar-atendimento">
                    <label className="lbl-atendimento">ID do Atendimento</label>
                    <div>
                        <input className="ipt-pesquisar-atendimento" type="text" placeholder="Informe o ID do atendimento"/>
                        <button className="btn-pesquisar-atendimento">Pesquisar</button>
                    </div>
                </section>
                <section className="sessao-tbl-atendimento">
                    <table className="tbl-atendimento">
                        <thead>
                            <tr className="dados-atendimento">
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