import DailyRangeChart from "../daily-range-chart/daily-range-chart.component";
import createDataset from "../../utilities/createDataset";

function Dashboard({ tasks }) {
  return (
    <div className="dashboard">
      {tasks.map((task, idx) => (
        <div key={idx}>
          <p>{task.types[task.exercise_type[0]].name}</p>
          <DailyRangeChart data={createDataset(task)} />
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
