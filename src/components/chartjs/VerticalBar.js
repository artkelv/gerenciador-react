import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from 'chart.js';
import { Bar } from 'react-chartjs-2';

const VerticalBar = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Todos os Chamados",
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
        label: "Chamados",
        data: [20, 100, 60, 80, 40, 140, 30],
        backgroundColor: "#1a5afa",
      },
    ],
  };
  return (<div>
    <Bar options={options} data={data} height={400} />
  </div>);
};
export default VerticalBar;
