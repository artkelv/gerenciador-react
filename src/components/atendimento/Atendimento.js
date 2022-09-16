import { useState } from "react";
import "../atendimento/style.css";

const Atendimento = () => {
    const [form, SetForm] = useState(false);
    const [btnVoltar, SetBtnVoltar] = useState("Novo Atendimento");

    const formNovoAtendimento = () => {
        const formAtendimento = document.querySelector(".cadastrar-atendimento");
        const pesquisarAtendimento = document.querySelector(".sessao-pesquisar-atendimento");

        if(form === false){
            formAtendimento.style.cssText = "display: block;"
            pesquisarAtendimento.style.cssText = "display: none;"

            SetForm(true)
            SetBtnVoltar("Voltar")
        }else if(form === true){
            formAtendimento.style.cssText = "display: none;"
            pesquisarAtendimento.style.cssText = "display: block;"

            SetForm(false)
            SetBtnVoltar("Novo Atendimento")
        }
    }
    return(
        <div id="sessao-atendimento">
                <h3 className="titulo-atendimento"><span className="subtitulo-atendimento">Atendimentos</span></h3>
                <button className="btn-novo-atendimento" onClick={() => {formNovoAtendimento()}}>{btnVoltar}</button>

                <section className="cadastrar-atendimento">
                    <div className="primeiro-container-atendimento">
                        <div className="atendimento-cliente">
                            <label className="lbl-atendimento" htmlFor="">Cliente</label>
                            <input className="ipt-cliente" type="text" placeholder="Informe o cliente"/>
                        </div>
                        <div className="atendimento-data">
                            <label className="lbl-atendimento" htmlFor="">Data Atendimento</label>
                            <input className="ipt-data" type="date"/>
                        </div>
                    </div>
                    <div className="segundo-container-atendimento">
                        <div className="atendimento-assunto">
                            <label className="lbl-atendimento" htmlFor="">Assunto</label>
                            <input className="ipt-assunto" type="text" placeholder="Informe o assunto"/>
                        </div>
                        <div className="atendimento-tipo">
                            <label className="lbl-atendimento">Tipo de atendimento</label>
                            <select className="ipt-atendimento" name="" id="">
                                <option value="">Informe o tipo de atendimento</option>
                                <option value="">PJ</option>
                                <option value="">CLT</option>
                            </select>
                        </div>
                    </div>
                    <div className="terceiro-container-atendimento">
                        <div className="atendimento-registro">
                            <label className="lbl-atendimento">Registro de atendimento</label>
                            <textarea className="ipt-registro" cols="30" rows="10" placeholder="Mensagem"></textarea>
                        </div>
                        <button className="btn-cadastrar-atendimento">Cadastrar atendimento</button>
                    </div>
                </section>
                <section className="sessao-pesquisar-atendimento">
                    <label className="lbl-atendimento">ID do Atendimento</label>
                    <div>
                        <input className="ipt-pesquisar-atendimento" type="text" placeholder="Informe o ID do atendimento"/>
                        <button className="btn-pesquisar-atendimento">Pesquisar</button>
                    </div>
                </section>
                <section>
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
                    </table>
                </section>
        </div>
    )
}
export default Atendimento;