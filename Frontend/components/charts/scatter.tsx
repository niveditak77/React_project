"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
  Colors,
} from "chart.js";
import "util";
import { useTheme } from "next-themes";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { useRef } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Colors
);

function Sctr(props: any) {
  const ref = useRef();

  const { theme, setTheme } = useTheme();
  theme == "light"
    ? (ChartJS.defaults.color = "#000000")
    : (ChartJS.defaults.color = "#FFFF");

  return (
    <div className="p-2">
      <Line
        ref={ref}
        data={{
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sept",
            "Oct",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              label: "Total",
              data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              fill: false,
              borderColor: "#F17105",
              tension: 0.1,
            },
            {
              label: "Collected",
              data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              fill: false,
              borderColor: "#D11149",
              tension: 0.1,
            },
            {
              label: "Remaining",
              data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              fill: false,
              borderColor: "#6610F2",
              tension: 0.1,
            },
          ],
        }}
        options={{
          maintainAspectRatio: true,
          responsive: true,
          plugins: {
            legend: {
              display: true,
            },
          },
          elements: {
            line: {
              tension: 0,
              borderWidth: 2,
              fill: "start",
              backgroundColor: "transparent",
            },
            point: {
              radius: 3,
              hitRadius: 3,
            },
          },
          scales: {
            y: {
              grid: { color: theme !== "light" ? "white" : "gray" },
            },
            x: {
              grid: { color: theme !== "light" ? "white" : "gray" },
            },
          },
        }}
      />
    </div>
  );
}

export default Sctr;
