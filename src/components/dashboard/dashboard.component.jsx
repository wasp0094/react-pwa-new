import React from "react";

import BarChart from "../dashboard-panels/shoulderAbduction";

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <BarChart />
      <BarChart />
      <BarChart />
      <BarChart />
    </div>
  );
}

export default Dashboard;
