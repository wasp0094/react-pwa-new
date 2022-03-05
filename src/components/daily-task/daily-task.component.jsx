import DailyTaskItem from "../daily-task-item/daily-task-item.component";
import excercises from "../../excercises/excercises";

function DailyTask() {
  const tasks = Object.keys(excercises);
  return (
    <div className="daily-task">
      {tasks.map((task, idx) =>
        idx === 0 ? (
          <div key={idx}>
            <DailyTaskItem task={task} type="left" />
            <DailyTaskItem task={task} type="right" />
          </div>
        ) : null
      )}
    </div>
  );
}

export default DailyTask;
