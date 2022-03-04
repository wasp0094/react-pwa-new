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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
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
        <DailyTask />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Dashboard />
      </TabPanel>
    </Box>
  );
}

function Routine() {
  const { excerciseVars } = useExcerciseData();
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
