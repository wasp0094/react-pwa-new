import { Box } from "@mui/system";
import React from "react";
import BottomNav from "../components/mobile/BottomNav";
import banner from "../assets/PROCTIFY_ME.png";

function Home() {
  return (
    <div>
      <img src={banner} alt="banner" style={{ width: "100vw" }} />
      <hr />
      <Box style={{ marginTop: "3vh" }}>
        <h3>Scan Prescription</h3>
        <p>Lorem30</p>
      </Box>
      <hr />
      <Box style={{ marginTop: "5vh" }}>
        <div className="card" style={{ backgroundColor: "#FFD0CF" }}></div>
        <div className="card" style={{ backgroundColor: "#FFD0CF" }}></div>
        <div className="card" style={{ backgroundColor: "#FFD0CF" }}></div>
        <div className="card" style={{ backgroundColor: "#FFD0CF" }}></div>
      </Box>

      <BottomNav />
    </div>
  );
}

export default Home;
