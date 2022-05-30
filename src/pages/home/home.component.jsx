import React from "react";
import "./home.css";
import ExploreCategoryLink from "../../components/explore-category-link/explore-category-link.component";
import { Routes, Route } from "react-router-dom";
import { targets } from "../../excercises/excercises";
import { Button } from "@mui/material";
import ExploreCategory from "../../components/explore-category/explore-category.component";
import { useSetTitle } from "../../hooks/setTitle";
import { useUserAuth } from "../../context/UserAuthContext";

function HomePage({ handleModalOpen }) {
  useSetTitle("Home");
  const { user } = useUserAuth();
  const { displayName } = user;
  return (
    <div className="home-content">
      <div className="welcome">
        <h2>
          Hi, <span>{displayName}</span>
        </h2>
        <h5>Welcome to PROCTIFY!</h5>
      </div>
      <div className="categories">
        <strong>
          <span>Categories</span>
        </strong>
        <p>
          Proctify keeps a track of your daily progress. Head towards the end to
          get familiar with the interface. Our app currently focuses on the
          below domains. Explore the categories and get started.
        </p>
        <div className="category-cards">
          {Object.keys(targets).map((target, idx) => (
            <ExploreCategoryLink key={idx} {...targets[target]} />
          ))}
        </div>
        <Button onClick={handleModalOpen}>Add Prescription</Button>
        {/* <Button component={Link} to="/chat">
          CALL A DOCTOR
        </Button> */}
      </div>
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
