import React from "react";
import banner from "../../assets/PROCTIFY_ME.png";

function Home({ handleModalOpen }) {
  return (
    <div>
      <img src={banner} alt="banner" style={{ width: "100vw" }} />
      <button onClick={handleModalOpen}>Open modal</button>
    </div>
  );
}

export default Home;
