import "../relatorios/style.css";

import settings1 from "../../assets/new_settings_1.png";
import settings2 from "../../assets/new_settings_2.png";
import settings3 from "../../assets/new_settings_3.png";
import settings4 from "../../assets/new_settings_4.png";

import { useContext } from "react";
import { GlobalContext } from "../../global/GlobalContext";

import Pie from "../chartjs/Pie";
import VerticalBar from "../chartjs/VerticalBar";
import Gradient from "../chartjs/Gradient";
import LineJs from "../chartjs/Line";
  
const Relatórios = () => {

    const {chamados, softwares, clientes, usuarios} = useContext(GlobalContext);

    const quantidadeStatusChamado = (status) => {
        const quantidade = chamados.filter((item) => item.statusCM === `${status}`)

        if(!quantidade){
            return 0
        }
        return quantidade.length
    }
    
    return(
        <div id="sessao-relatorios">
            <div>
                <h3 className="titulo-relatorios"><span className="subtitulo-relatorios">Relatórios</span></h3>
                <div className="testechart">
                    <VerticalBar/>
                </div>
                <section className="relatorios-chamados">
                    <h2 className="titulo-relatorios-chamados">Chamados</h2>
                    <section className="cards-relatorios">
                        <section className="primeiro-container-relatorios">
                            <div className="box-relatorios">
                                <img className="settings-img" src={settings1} alt="Chamados abertos" />
                                <h4 className="titulo-rlt-chamados">Chamados Abertos</h4>
                                <span className="contador-chamados">{quantidadeStatusChamado("Em Aberto")}</span>
                            </div>
                            <div className="box-relatorios">
                                <img className="settings-img" src={settings2} alt="Chamados encerrados" />
                                <h4 className="titulo-rlt-chamados">Chamados Encerrados</h4>
                                <span className="contador-chamados">{quantidadeStatusChamado("Encerrado")}</span>
                            </div>
                        </section>
                        <section className="segundo-container-relatorios">
                            <div className="box-relatorios">
                                <img className="settings-img" src={settings3} alt="Chamados vencidos" />
                                <h4 className="titulo-rlt-chamados">Chamados vencidos</h4>
                                <span className="contador-chamados">{quantidadeStatusChamado("Vencido")}</span>
                            </div>
                            <div className="box-relatorios">
                                <img className="settings-img" src={settings4} alt="Chamados em espera" />
                                <h4 className="titulo-rlt-chamados">Chamados em espera</h4>
                                <span className="contador-chamados">{quantidadeStatusChamado("Em espera")}</span>
                            </div>
                        </section>
                    </section>
                </section>
                <section className="pie-line">
                    <section className="chart-pie">
                        <h4 className="titulo-chart-pie"><ion-icon name="arrow-forward"></ion-icon>Quantidade de Itens </h4>
                        <Pie/>
                    </section>
                    <section className="chart-line-gradient">
                        <h4 className="titulo-chart-line"><ion-icon name="arrow-forward"></ion-icon>Comparando Itens </h4>
                        <LineJs/>
                    </section>
                </section>
                <section className="chart-gradient">
                    <h4 className="titulo-chart-grandient">Comparando itens Mensalmente</h4>
                    <Gradient/>
                </section>
            </div>
        </div>
    )
}
export default Relatórios