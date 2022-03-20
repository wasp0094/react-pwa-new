import DailyTaskItem from "../daily-task-item/daily-task-item.component";

function DailyTask({ tasks }) {
  return (
    <div className="daily-task">
      {tasks.map((task, idx) => (
        <div key={`tasks_${idx}`}>
          {task.exercise_type.map((type, idx) => (
            <DailyTaskItem
              key={idx}
              task={task.id}
              type={type}
              task_item={task}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default DailyTask;
