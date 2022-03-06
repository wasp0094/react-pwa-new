import React from "react";
import banner from "../../assets/PROCTIFY_ME.png";
import { useSetTitle } from "../../hooks/setTitle";
// import banner2 from "../../assets/banner.jpg";
function Home() {
  useSetTitle("Home");
  return (
    <div>
      <img src={banner} alt="banner" style={{ width: "100vw" }} />
    </div>
  );
}

export default Home;
