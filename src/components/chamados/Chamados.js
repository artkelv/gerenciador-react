import "../chamados/style.css";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";


const Chamados = () => {
    const [form, SetForm] = useState(false);
    const [btnVoltar, SetBtnVoltar] = useState("Novo Chamado");

    const generateId = uuidv4();

    const mostrarFormChamados = () => {
        const formChamados = document.querySelector(".cadastrar-chamados");
        const pesquisarChamados = document.querySelector(".sessao-pesquisar-chamados");
        const tblChamados = document.querySelector(".tbl-chamados");

        if(form === false){
            formChamados.style.cssText = "display: block;"
            pesquisarChamados.style.cssText = "display: none;"
            tblChamados.style.cssText = "display: none;"

            SetForm(true)
            SetBtnVoltar("Voltar")
        }else if(form === true){
            formChamados.style.cssText = "display:none;"
            pesquisarChamados.style.cssText = "display: block;"
            tblChamados.style.cssText = "display: block;"
            
            SetForm(false)
            SetBtnVoltar("Novo Chamado")
        }
    }
    return(
        <div id="sessao-chamados">
            <h3 className="titulo-chamados"><span className="subtitulo-chamados">Chamados</span></h3>
            <button className="btn-novo-chamado" onClick={() => {mostrarFormChamados()}}>{btnVoltar}</button>
            <section className="sessao-pesquisar-chamados">
                <section className="sessao-pesquisar-chamados">
                    <label className="lbl-chamados">ID do chamado</label>
                    <div className="pesquisar-chamado">
                        <input className="buscar-chamados" type="text" placeholder="Informe o ID do chamado"/>
                        <button className="btn-pesquisar-chamado">Pesquisar</button>
                    </div>
                </section>
            </section>
            <section className="cadastrar-chamados">
                <div className="primeiro-container-chamados">
                    <div className="container-chamados">
                        <label className="lbl-chamados">Cliente</label>
                        <input className="ipt-chamados-cliente" type="text" placeholder="Informe o Cliente"/>
                    </div>
                    <div className="container-chamados">
                        <label className="lbl-chamados">Titulo do chamado</label>
                        <input className="ipt-chamados-info" type="text" placeholder="Informe um titulo"/>
                    </div>
                </div>
                <div className="segundo-container-chamados">
                    <div className="container-chamados">
                        <label className="lbl-chamados">Data do chamado</label>
                        <input className="ipt-chamados-info" type="date" />
                    </div>
                    <div className="container-id-chamados">
                        <label className="lbl-id-chamados">ID do chamado:</label>
                        <span className="id-gerado-chamados">{generateId}</span>
                    </div>
                </div>
                <div className="terceiro-container-chamados">
                    <div className="container-chamados">
                        <label className="lbl-chamados">Status</label>
                        <select className="slct-chamados">
                            <option value="">ativo</option>
                            <option value="">inativo</option>
                            <option value="">em espera</option>
                        </select>
                    </div>
                    <div className="container-chamados">
                        <label className="lbl-chamados">Tipo de Chamado</label>
                        <select className="slct-chamados">
                            <option value="">sem pressa</option>
                            <option value="">média rapidez</option>
                            <option value="">urgente</option>
                        </select>
                    </div>
                </div>
                <div className="quarto-container-chamados">
                    <div className="container-chamados">
                        <label className="lbl-chamados">Descriçao do chamado</label>
                        <textarea className="txtarea-chamados" cols="30" rows="10" placeholder="Sua mensagem"></textarea>
                    </div>
                    <button className="btn-cadastrar-chamado">Cadastrar chamado</button>
                </div>
            </section>
            <section className="sessao-tbl-chamados">
                    <table className="tbl-chamados">
                        <thead>
                            <tr className="dados-chamados">
                                <th>Cliente</th>
                                <th>Titulo</th>
                                <th>Data do Chamado</th>
                                <th>Status</th>
                                <th>Tipo de Chamado</th>
                            </tr>
                        </thead>
                    </table>
                </section>
        </div>
    )
}
export default Chamados;