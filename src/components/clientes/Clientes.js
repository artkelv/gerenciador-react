import { useState } from "react";
import "../../components/clientes/style.css"

const Clientes = () => {

    const [form, setForm] = useState(false);
    const [btnVoltar, setBtnVoltar] = useState("Novo Cliente")

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
    return(
        <div className="sessao-cliente">
            <h3 className="titulo-cliente"><span className="subtitulo-cliente">Clientes</span></h3>
            <button className="btn-novo-cliente" onClick={() => {MostrarFormAddNovaEmpresa()}}>{btnVoltar}</button>

            <section className="cadastrar-empresa">
                <div className="primeiro-container-cliente">
                    <label className="rsocial-nome">Razão Social</label>
                    <input className="rsocial-ipt" placeholder="Digite o nome de sua empresa" type="text" />
                </div>
                <div className="segundo-container-cliente">
                    <div className="box-cliente">
                        <label className="title-ipt">Nome fantasia</label>
                        <input className="cliente-ipt" type="text" placeholder="Nome fantasia da empresa"/>
                    </div>
                    <div className="box-cliente">
                        <label className="title-ipt" >Cidade</label>
                        <input className="cliente-ipt" type="text" placeholder="Informe a cidade"/>
                    </div>
                    <div className="box-cliente">
                        <label className="title-ipt" >Telefone Celular</label>
                        <input className="cliente-ipt" type="number" placeholder="Informe o telefone celular"/>
                    </div>
                </div>
                <div className="terceiro-container-cliente">
                    <div className="box-cliente">
                        <label className="title-ipt" >E-mail</label>
                        <input className="cliente-ipt" type="email" placeholder="Informe o e-mail"/>
                    </div>
                    <div className="box-cliente">
                        <label className="title-ipt" >Estado</label>
                                <select className="select-clientes">
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
                        <input className="cliente-ipt" type="text" placeholder="Nome do proprietario"/>
                    </div>
                </div>
                <div className="quarto-container-cliente">
                    <div className="box-cliente">
                        <label className="title-ipt" >CNPJ</label>
                        <input className="cliente-ipt" type="number" placeholder="Informe o CNPJ da empresa"/>
                    </div>
                    <div className="box-cliente">
                        <label className="title-ipt" >Endereço</label>
                        <input className="cliente-ipt" type="text" placeholder="Informe o endereço"/>
                    </div>
                    <div className="box-cliente">
                        <label className="title-ipt" >Telefone comercial</label>
                        <input className="cliente-ipt" type="number"placeholder="Informe o telefone comercial" />
                    </div>
                </div>
                <button className="efetua-cadastro">Cadastrar empresa</button>
            </section>
            <section className="buscar-cliente">
                <section className="achar-cliente">
                    <p className="nome-rsocial">Razão social</p>
                    <input className="entrada-nome-cliente" type="text" placeholder="Informe a razão social da empresa"></input>
                    <button className="btn-pesquisar-cliente">Pesquisar</button>
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
                    </table>
                </section>
            </section>
        </div>
    )
}
export default Clientes;