import DailyTaskItem from "../daily-task-item/daily-task-item.component";
import excercises from "../../excercises/excercises";
import { useEffect, useState } from "react";
import { useUserAuth } from "../../context/UserAuthContext";
import { getDoc } from "firebase/firestore";

function DailyTask() {
  const { user } = useUserAuth();
  let tasks_arr = [];
  const [tasks, setTasks] = useState([]);
  const [load, setLoad] = useState(true);
  const getType = (type, id) => {
    if (type === 0 && excercises[id].types?.full) return ["full"];
    if (type === 0 && !excercises[id].types?.full) return ["left", "right"];
    if (type === 1) return ["left"];
    return ["right"];
  };
  const getRoutines = async () => {
    user.routine?.forEach(async (routinRef, idx) => {
      const routine_item_snap = await getDoc(routinRef);
      if (!routine_item_snap.exists()) return;
      const routine_item = await routine_item_snap.data();
      const exercise_item = await (await getDoc(routine_item.exercise)).data();
      const new_tasks_arr = [
        {
          ...exercise_item,
          exercise_type: getType(routine_item.type, exercise_item.id),
        },
        ...tasks_arr,
      ];
      tasks_arr = new_tasks_arr;
      setTasks(new_tasks_arr);
    });
  };

  useEffect(() => {
    const temp = async () => {
      await getRoutines();
    };
    temp();
  }, []);

  useEffect(() => {
    if (tasks.length === user.routine.length) setLoad(false);
  }, [tasks]);

  useEffect(() => {
    console.log(tasks);
  }, [load]);

  if (user.routine.length === 0) return <p> Nothing to Show </p>;

  return (
    <div className="daily-task">
      {!load
        ? tasks.map((task, idx) => (
            <div key={`tasks_${idx}`}>
              {task.exercise_type.map((type, idx) => (
                <DailyTaskItem key={idx} task={task.id} type={type} />
              ))}
            </div>
          ))
        : "Loading"}
    </div>
  );
}

export default DailyTask;
