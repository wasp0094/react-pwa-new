import React from "react";
import banner from "../../assets/PROCTIFY_ME.png";
import ExploreCategoryLink from "../../components/explore-category-link/explore-category-link.component";

import { targets } from "../../excercises/excercises";

function Home({ handleModalOpen }) {
  return (
    <div>
      <img src={banner} alt="banner" style={{ width: "100vw" }} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {Object.keys(targets).map((target, idx) => (
          <ExploreCategoryLink key={idx} {...targets[target]} />
        ))}
      </div>
      <button onClick={handleModalOpen}>Open modal</button>
    </div>
  );
}

export default Home;
