import "../relatorios/style.css";

import settings1 from "../../assets/settings_1.png";
import settings2 from "../../assets/settings_2.png";
import settings3 from "../../assets/settings_3.png";
import settings4 from "../../assets/settings_4.png";

const Relatórios = () => {
    return(
        <div id="sessao-relatorios">
            <h3 className="titulo-relatorios"><span className="subtitulo-relatorios">Relatórios</span></h3>
            <section className="relatorios-chamados">
                <section className="primeiro-container-relatorios">
                    <div className="box-relatorios">
                        <div>
                            <img className="settings-img" src={settings1} alt="Chamados abertos" />
                        </div>    
                        <div>
                            <h4 className="titulo-rlt-chamados">Chamados Abertos</h4>
                        </div>
                        <div>
                            <span className="contador-chamados">1</span>
                        </div>
                    </div>
                    <div className="box-relatorios">
                        <div>
                            <img className="settings-img" src={settings2} alt="Chamados encerrados" />
                        </div>
                        <div>   
                            <h4 className="titulo-rlt-chamados">Chamados Encerrados</h4>
                        </div>
                        <div>
                            <span className="contador-chamados">3</span>
                        </div>
                    </div>
                </section>
                <section className="segundo-container-relatorios">
                    <div className="box-relatorios">
                        <div>
                            <img className="settings-img" src={settings3} alt="Chamados vencidos" />
                        </div>
                        <div>
                            <h4 className="titulo-rlt-chamados">Chamados vencidos</h4>
                        </div>
                        <div>
                            <span className="contador-chamados">2</span>
                        </div>
                    </div>
                    <div className="box-relatorios">
                        <div>
                            <img className="settings-img" src={settings4} alt="Chamados em andamento" />
                        </div>
                        <div>
                            <h4 className="titulo-rlt-chamados">Chamados em andamentos</h4>
                        </div>
                        <div>
                            <span className="contador-chamados">5</span>
                        </div>
                    </div>
                </section>
            </section>
            {/* CSU refere-se a Clientes, Softwares e Usuarios */}
            <section className="relatorios-csu">
                <section className="content-csu">
                    <h5 className="relatorios-title-csu">Totais de Softwares </h5>
                    <div className="csu-encontrados">
                        <span className="quantidade-csu">67</span>
                    </div>
                </section>
                <section className="content-csu">
                    <h5 className="relatorios-title-csu">Totais de Clientes</h5>
                    <div className="csu-encontrados">
                        <span className="quantidade-csu">257</span>
                    </div>
                </section>
                <section className="content-csu">
                    <h5 className="relatorios-title-csu">Totais de Usuários</h5>
                    <div className="csu-encontrados">
                        <span className="quantidade-csu">412</span>
                    </div>
                </section>
            </section>
        </div>
    )
}
export default Relatórios