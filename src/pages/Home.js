import React from "react";
import BottomNav from "../components/mobile/BottomNav";
import banner from "../assets/PROCTIFY_ME.png";
import banner2 from "../assets/banner.jpg";
function Home() {
  return (
    <div>
      <img src={banner2} alt="banner" style={{ width: "100vw" }} />
      <BottomNav />
    </div>
  );
}

export default Home;
