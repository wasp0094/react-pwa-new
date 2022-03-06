import { Routes, Route } from "react-router-dom";

import "./explore.styles.css";

import ExploreCategoryLink from "../../components/explore-category-link/explore-category-link.component";
import ExploreCategory from "../../components/explore-category/explore-category.component";

import { targets } from "../../excercises/excercises";

function ExplorePage() {
  return (
    <>
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
    </>
  );
}

function Explore() {
  return (
    <div className="explore">
      <h4 className="explore-header">Explore</h4>
      <Routes>
        <Route path="/" element={<ExplorePage />} />
        <Route path={"/:explore_category"} element={<ExploreCategory />} />
      </Routes>
    </div>
  );
}

export default Explore;
