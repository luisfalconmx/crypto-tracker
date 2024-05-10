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
import Image from "next/image";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const CoinCard = () => {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

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
    <div className="bg-oil rounded-xl grid grid-cols-2 gap-x-4 p-4">
      <div className="flex flex-col space-y-3">
        <div className="flex space-x-3">
          <Image src="/icons/icon-eth.png" alt="" width={24} height={24} />
          <h2 className="font-bold text-xl">Bitcoin</h2>
        </div>
        <div className="flex items-center row-start-2 col-start-1">
          <span className="block mr-2">$1,000,000</span>
          <span className="block text-green-500 text-sm">+10%</span>
        </div>
      </div>
      <div>
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
      </div>
    </div>
  );
};
