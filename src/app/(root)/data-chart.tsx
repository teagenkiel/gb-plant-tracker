"use client";
import { DeviceData } from "@/types/types";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { format as formatDate } from "date-fns";
import { Line } from "react-chartjs-2";

export type DataChartPanelProps = { data: DeviceData[] };

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const DataChartPanel: React.FC<DataChartPanelProps> = (props) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Moisture Mami",
      },
    },
  };

  const labels = props.data.map((data) =>
    formatDate(data.createdAt, "m/d HH:mm")
  );

  const data = {
    labels,
    datasets: [
      {
        label: "Moisture Level",
        data: props.data.map((data) => (data.moistureValue * 100.0) / 2000.0),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Temperature",
        data: props.data.map((data) => data.temperatureValue),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <div className="bg-white">
      <Line options={options} data={data}></Line>
    </div>
  );
};
