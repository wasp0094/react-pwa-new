import React from "react";
import banner from "../../assets/banner.jpg";
import ExploreCategoryLink from "../../components/explore-category-link/explore-category-link.component";
import { Routes, Route } from "react-router-dom";
import { targets } from "../../excercises/excercises";
import { Button } from "@mui/material";
import ExploreCategory from "../../components/explore-category/explore-category.component";
import { useSetTitle } from "../../hooks/setTitle";

function HomePage({ handleModalOpen }) {
  useSetTitle("Home");
  return (
    <div>
      <img src={banner} alt="banner" style={{ width: "100vw" }} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {Object.keys(targets).map((target, idx) => (
          <ExploreCategoryLink key={idx} {...targets[target]} />
        ))}
      </div>
      <Button onClick={handleModalOpen}>Open modal</Button>
    </div>
  );
}

function Home(props) {
  return (
    <Routes>
      <Route path="/" element={<HomePage {...props} />} />
      <Route path={"/:explore_category"} element={<ExploreCategory />} />
    </Routes>
  );
}

export default Home;
