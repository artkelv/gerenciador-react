import { useState } from "react"
import "../softwares/style.css"

const Softwares = () => {
    const [form, SetForm] = useState(false);
    const [nomeBtn, SetNomeBtn] = useState("Novo Software")

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
    return(
        <div id="sessao-softwares">
            <section>
                <h3 className="titulo-software"><span className="subtitulo-software">Softwares</span></h3>
                <button className="btn-novo-software" onClick={() => {mostrarFormSoftware()}}>{nomeBtn}</button>
                <section className="cadastrar-software">
                    <div className="primeiro-container-software">
                        <div className="box-name-software">
                            <label className="lbl-software">Nome</label>
                            <input className="ipt-software" type="text" placeholder="Informe o nome do Software"/>
                        </div>
                        <div className="box-obs-software">
                            <label className="lbl-software">Observações</label>
                            <textarea className="txt-software" cols="80" rows="10" placeholder="Informe suas observações aqui"></textarea>
                        </div>
                    </div>
                    <div>
                        <div className="box-versao-software">
                            <label className="lbl-software">Versão</label>
                            <input className="ipt-versao" type="text" placeholder="Informe a Versão do software"/>
                        </div>
                        <button className="btn-cadastrar-software">Cadastrar</button>
                    </div>
                </section>
                <section className="sessao-buscar-software">
                    <section className="achar-software">
                        <p className="nome-software">Nome</p>
                        <input className="entrada-nome-software" type="text" placeholder="Informe o nome do software"></input>
                        <button className="btn-pesquisar-software">Pesquisar</button>
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
                        </table>
                    </section>
                </section>
            </section>
        </div>
    )
}
export default Softwares