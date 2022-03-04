import DailyTaskItem from "../daily-task-item/daily-task-item.component";
import excercises from "../../excercises/excercises";

function DailyTask() {
  const tasks = Object.keys(excercises);
  return (
    <div className="daily-task">
      {tasks.map((task, idx) => (
        <DailyTaskItem key={idx} task={task} />
      ))}
    </div>
  );
}

export default DailyTask;
