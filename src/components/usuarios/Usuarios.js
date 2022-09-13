import "../usuarios/style.css"

const Usuarios = () => {
    return(
        <div className="secao-usuario">
            <h3 className="titulo-usuarios"><span className="subtitulo-usuarios">Usuários</span></h3>
            <button className="btn-novo-usuario">New</button>

            <section className="achar-usuario">
                <p className="nome-usuario">Nome</p>
                <input className="entrada-nome" type="text" placeholder="Informe o nome do usuário"></input>
                <button className="btn-pesquisar">Pesquisar</button>
            </section>
            <section>
                <table className="tbl-usuarios">
                    <tr className="dados-usuarios">
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Cargo</th>
                        <th>Ações</th>
                    </tr>
                </table>
            </section>
        </div>
    )
}  
export default Usuarios