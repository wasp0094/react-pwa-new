import DailyRangeChart from "../daily-range-chart/daily-range-chart.component";
import createDataset from "../../utilities/createDataset";

function Dashboard({ tasks }) {
  console.log(tasks);
  return (
    <div className="dashboard">
      {tasks.map((task, idx) => (
        <DailyRangeChart key={idx} data={createDataset(task)} />
      ))}
    </div>
  );
}

export default Dashboard;
