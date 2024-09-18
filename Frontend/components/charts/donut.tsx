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
import { useTheme } from "next-themes";
import { Doughnut } from "react-chartjs-2";
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

function Donut(props: any) {
  const ref = useRef();

  const { theme, setTheme } = useTheme();
  theme == "light"
    ? (ChartJS.defaults.color = "#000000")
    : (ChartJS.defaults.color = "#FFFF");

  return (
    <div className="p-2">
      <Doughnut
        ref={ref}
        data={{
          labels: props.labels,
          datasets: [
            {
              data: props.data,
              backgroundColor: ["#FCAB10", "#F8333C"],
              borderColor: theme == "light" ? "#FFFF" : "#000000",
              hoverOffset: 1,
              hoverBorderColor: theme == "light" ? "#000000 " : "#FFFF",
            },
          ],
        }}
        options={{
          maintainAspectRatio: true,
          responsive: true,
        }}
      />
    </div>
  );
}

export default Donut;
