import { Box } from "@mui/system";
import React from "react";
import { Skeleton } from "@mui/material";
import BottomNav from "../components/mobile/BottomNav";
import banner from "../assets/PROCTIFY_ME.png";
import banner2 from "../assets/banner.jpg";
import Camera from "../components/camera";

function Home() {
  return (
    <div>
      <img src={banner2} alt="banner" style={{ width: "100vw" }} />
      <Camera />
      <BottomNav />
    </div>
  );
}

export default Home;
