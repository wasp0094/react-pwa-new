import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";

Chart.register(CategoryScale);


function DailyRangeChart({ data }) {
  return (
    <div className="daily-range-chart">
      <Line
        data={data}
        height={"223"}
        width={"80vw"}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
}

export default DailyRangeChart;
