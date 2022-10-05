import React from 'react';
import {
  Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend,} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Line Chart',
      },
    },
  };
  const labels = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Atendimentos',
        data: [620, 510, 300, 250, 199, 500, 600],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Chamados',
        data: [120, 310, 200, 650, 300, 400, 500],
        borderColor: 'rgb(153, 102, 255)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
      },
      {
        label: 'Clientes',
        data: [320, 110, 400, 250, 100, 650, 450],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.2)',
      },
      {
        label: 'Softwares',
        data: [120, 210, 200, 550, 300, 300, 340],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
      {
        label: 'Usuários',
        data: [420, 510, 600, 450, 200, 100, 600],
        borderColor: 'rgba(255, 159, 64)',
        backgroundColor: 'rgb(255, 159, 64, 0.5)',
      }
    ],
  };  

const LineJs = () => {
    return(
        <div>
           <Line options={options} data={data} />
        </div>
    )
}
export default LineJs;