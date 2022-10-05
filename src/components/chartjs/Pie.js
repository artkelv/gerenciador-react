import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useContext, useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { GlobalContext } from '../../global/GlobalContext';

import Swal from "sweetalert2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Pie = () => {
    
    const {atendimentos, chamados, clientes, softwares, usuarios} = useContext(GlobalContext);

    const [atendimentosPie, setAtendimentosPie] = useState();
    const [chamadosPie, setChamadosPie] = useState();
    const [clientesPie, setClientesPie] = useState();
    const [softwaresPie, setSoftwarePie] = useState();
    const [usuariosPie, setUsuariosPie] = useState();

    const renderizaDadosFake = () => {
        if(atendimentos.length === 0 && chamados.length === 0 && clientes.length === 0 && softwares.length === 0 && usuarios.length === 0){
            Swal.fire({
                title: 'Estamos renderizando dados fake!',
                text: 'Crie atendimentos, chamados, para que possamos renderizar dados reais.',
            })
            setAtendimentosPie(8)
            setChamadosPie(4)
            setClientesPie(6)
            setSoftwarePie(2)
            setUsuariosPie(10)
        }else{
            setAtendimentosPie(atendimentos.length)
            setChamadosPie(chamados.length)
            setClientesPie(clientes.length)
            setSoftwarePie(softwares.length)
            setUsuariosPie(usuarios.length)
        }
    }
    useEffect(() => {
        renderizaDadosFake()
    })

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            position: "left",
          },
        }
      };

    const data = {
        labels: ['Atendimentos', 'Chamados', 'Clientes', 'Softwares', 'Usuários'],
        datasets: [
          {
            label: '# of Votes',
            data: [atendimentosPie, chamadosPie, clientesPie, softwaresPie, usuariosPie],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1,
          },
        ],
      };

    return(
        <div>
            <Doughnut data={data} options={options} height={300}/>
        </div>
    )
}
export default Pie;