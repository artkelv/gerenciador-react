import "../relatorios/style.css";

const Relatórios = () => {
    return(
        <div id="sessao-relatorios">
            <h2>Chamados</h2>
            <section className="relatorios-chamados">
                <section className="primeiro-container-relatorios">
                    <div>
                        <div>
                            <img src="" alt="" />
                        </div>    
                        <div>
                            <h4>Chamados Abertos</h4>
                            <span>1</span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <div>   
                            <h4>Chamados Encerrados</h4>
                            <span>3</span>
                        </div>
                    </div>
                </section>
                <section className="segundo-container-relatorios">
                    <div>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <div>
                            <h4>Chamados vencidos</h4>
                            <span>2</span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <div>
                            <h4>Chamados em andamentos</h4>
                            <span>5</span>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    )
}
export default Relatórios