import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const Gradient = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Line Chart",
      },
    },
  };

  const labels = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
  ];

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Atendimentos",
        data: [120, 310, 200, 650, 300, 400, 500],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        fill: true,
        label: "Chamados",
        data: [620, 510, 300, 250, 199, 500, 600],
        borderColor: "rgb(128, 83, 128)",
        backgroundColor: "rgba(128, 83, 128, 0.5)",
      },
      {
        fill: true,
        label: "Clientes",
        data: [320, 210, 700, 550, 509, 200, 450],
        borderColor: "rgb(128, 181, 127)",
        backgroundColor: "rgba(128, 181, 127, 0.5)",
      },
      {
        fill: true,
        label: "Softwares",
        data: [120, 610, 400, 250, 709, 300, 650],
        borderColor: "rgb(255, 146, 53)",
        backgroundColor: "rgb(255, 146, 53, 0.5)",
      },
      {
        fill: true,
        label: "Usuários",
        data: [420, 410, 500, 250, 209, 400, 150],
        borderColor: "rgb(255, 51, 110)",
        backgroundColor: "rgb(255, 51, 110, 0.5)",
      },
    ],
  };
  return (<div>
    <Line options={options} data={data} />
  </div>);
};
export default Gradient;
