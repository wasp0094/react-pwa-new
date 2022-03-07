import DailyTaskItem from "../daily-task-item/daily-task-item.component";
import excercises from "../../excercises/excercises";

function DailyTask() {
  const tasks = Object.keys(excercises);
  return (
    <div className="daily-task">
      {tasks.map((task, idx) => (
        <div key={idx}>
          {Object.keys(excercises[task].types).map((type, idx) => (
            <DailyTaskItem key={idx} task={task} type={type} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default DailyTask;
