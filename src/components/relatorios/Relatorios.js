import "../relatorios/style.css";

import settings1 from "../../assets/new_settings_1.png";
import settings2 from "../../assets/new_settings_2.png";
import settings3 from "../../assets/new_settings_3.png";
import settings4 from "../../assets/new_settings_4.png";

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useContext } from "react";
import { GlobalContext } from "../../global/GlobalContext";
  
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip,Legend);
  
  export const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Todos os Chamados',
      },
    },
  };
  
  const labels = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Chamados',
        data: [20,100,60,80,40,140,30],
        backgroundColor: '#1a5afa',
      }
    ],
  };
  

const Relatórios = () => {

    return(
        <div id="sessao-relatorios">
            <div>
                <h3 className="titulo-relatorios"><span className="subtitulo-relatorios">Relatórios</span></h3>
                <div className="testechart">
                    <Bar options={options} data={data} height={400} />
                </div>
                <section className="relatorios-chamados">
                    <h2 className="titulo-relatorios-chamados">Chamados</h2>
                    <section className="cards-relatorios">
                        <section className="primeiro-container-relatorios">
                            <div className="box-relatorios">
                                <img className="settings-img" src={settings1} alt="Chamados abertos" />
                                <h4 className="titulo-rlt-chamados">Chamados Abertos</h4>
                                <span className="contador-chamados">1</span>
                            </div>
                            <div className="box-relatorios">
                                <img className="settings-img" src={settings2} alt="Chamados encerrados" />
                                <h4 className="titulo-rlt-chamados">Chamados Encerrados</h4>
                                <span className="contador-chamados">3</span>
                            </div>
                        </section>
                        <section className="segundo-container-relatorios">
                            <div className="box-relatorios">
                                <img className="settings-img" src={settings3} alt="Chamados vencidos" />
                                <h4 className="titulo-rlt-chamados">Chamados vencidos</h4>
                                <span className="contador-chamados">2</span>
                            </div>
                            <div className="box-relatorios">
                                <img className="settings-img" src={settings4} alt="Chamados em andamento" />
                                <h4 className="titulo-rlt-chamados">Chamados em andamentos</h4>
                                <span className="contador-chamados">5</span>
                            </div>
                        </section>
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
        </div>
    )
}
export default Relatórios