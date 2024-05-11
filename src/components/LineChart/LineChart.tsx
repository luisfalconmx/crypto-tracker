import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
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
  Legend
);

export const LineChart = () => {
  const labels = ["January", "February", "March", "April"];

  const data = {
    labels,
    datasets: [
      {
        data: labels.map(() => Math.random() * 100),
        borderColor: "#5367FE",
        backgroundColor: "#5367FE",
      },
    ],
  };

  return (
    <Line
      data={data}
      options={{
        datasets: {
          line: {
            tension: 0.4,
          },
        },
        responsive: true,
        scales: {
          x: {
            display: false,
          },
          y: {
            display: false,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: false,
          },
          subtitle: {
            display: false,
          },
        },
      }}
    />
  );
};
