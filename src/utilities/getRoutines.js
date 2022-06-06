import { getDoc } from "firebase/firestore";
import excercises from "../excercises/excercises";
const getType = (type, id) => {
  if (type === 0 && excercises[id].types?.full) return ["full"];
  if (type === 0 && !excercises[id].types?.full) return ["left", "right"];
  if (type === 1) return ["left"];
  return ["right"];
};
const getRoutines = async (routine, setTasks) => {
  let tasks_arr = [];
  if (routine.length === 0) {
    setTasks([]);
    return;
  }
  routine.forEach(async (routinRef, idx) => {
    const routine_item_snap = await getDoc(routinRef);
    if (!routine_item_snap.exists()) return;
    const routine_item = await routine_item_snap.data();
    const exercise_item = await (await getDoc(routine_item.exercise)).data();
    const new_tasks_arr = [
      {
        ...exercise_item,
        ...routine_item,
        routine_item_id: routine_item_snap.id,
        exercise_type: getType(routine_item.type, exercise_item.id),
      },
      ...tasks_arr,
    ];
    tasks_arr = new_tasks_arr;
    setTasks(new_tasks_arr);
  });
};

export default getRoutines;
