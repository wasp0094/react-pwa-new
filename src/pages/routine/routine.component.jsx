import React from "react";
import DailyTask from "../../components/daily-task/daily-task.component";
import Dashboard from "../../components/dashboard/dashboard.component";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "./routine.styles.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Excercise from "../../components/start-excercise/excercise.component";
import { useExcerciseData } from "../../context/ExcerciseDataContext";
import { useSetTitle } from "../../hooks/setTitle";

import excercises from "../../excercises/excercises";
import { useEffect, useState } from "react";
import { useUserAuth } from "../../context/UserAuthContext";
import { getDoc } from "firebase/firestore";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function RoutinePage() {
  const [value, setValue] = React.useState(0);
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
          ...routine_item,
          exercise_type: getType(routine_item.type, exercise_item.id),
        },
        ...tasks_arr,
      ];
      tasks_arr = new_tasks_arr;
      setTasks(new_tasks_arr);
    });
  };

  useEffect(() => {
    getRoutines();
  }, []);

  useEffect(() => {
    if (tasks.length === user.routine?.length) setLoad(false);
  }, [tasks]);

  if (!user?.routine)
    return <p>Your Routine and Dashboard will show up here. </p>;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      {!load ? (
        <>
          <Box
            className="routine-tabs-container"
            sx={{ borderBottom: 1, borderColor: "divider" }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              className="routine-tabs"
            >
              <Tab label="Daily Tasks" {...a11yProps(0)} />
              <Tab label="Dashboard" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <DailyTask tasks={tasks} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Dashboard tasks={tasks} />
          </TabPanel>
        </>
      ) : (
        "Loading"
      )}
    </Box>
  );
}

function Routine() {
  const { excerciseVars } = useExcerciseData();
  useSetTitle("Routine");
  return (
    <>
      <Routes>
        <Route path="/" element={<RoutinePage />} />
        <Route
          path="/excercise"
          element={
            excerciseVars.type ? <Excercise /> : <Navigate to="/routine" />
          }
        />
      </Routes>
    </>
  );
}

export default Routine;

//will contain 2 embedded components: daily tasks + dashboard
