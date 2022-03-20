import React from "react";
import "./home.css";
import cards from "../../assets/exportCards.svg";
import diabetes from "../../assets/diabetes-link.jpg";
import elbow from "../../assets/elbow-link.jpg";
import shoulder from "../../assets/shoulder-link.jpg";
import ExploreCategoryLink from "../../components/explore-category-link/explore-category-link.component";
import { Routes, Route } from "react-router-dom";
import { targets } from "../../excercises/excercises";
import { Button } from "@mui/material";
import ExploreCategory from "../../components/explore-category/explore-category.component";
import { useSetTitle } from "../../hooks/setTitle";

function HomePage({ handleModalOpen }) {
  useSetTitle("Home");
  return (
    <div className="home-content">
      <div className="welcome">
        <h2>
          Hi, <span>Mishi</span>{" "}
        </h2>
        <h5>Welcome to PROCTIFY!</h5>
      </div>
      <div className="categories">
        <strong>
          {" "}
          <span>Categories</span>{" "}
        </strong>
        <p>
          Proctify keeps a track of your daily progress. Head towards the end to
          get familiar with the interface. Our app currently focuses on the
          below domains. Explore the categories and get started.
        </p>
        <br />
        <div className="explore-cards">
          <img src={diabetes} alt="diabetes" />
          <img src={elbow} alt="elbow" />
          <img src={shoulder} alt="shoulder" />
        </div>
      </div>
    </div>
    //  <div className = "homeContent">
    //   <div className = "welcomeContent">
    //     <h2>Hi, <span>Mishi</span> </h2>
    //     <h5>Welcome to PROCTIFY!</h5>
    //   </div>
    //   <div className = "categories">
    // <strong> <span>Categories</span> </strong>
    // <p>Proctify keeps a track of your daily progress. Head towards the end to get familiar with the interface. Our app currently focuses on the below domains.
    // Explore the categories and get started.
    // </p>
    // <br />
    // <img src={cards} alt="cards" />
    //  <img src={diabetes} alt="diabetes" />
    // <img src={elbow} alt="elbow" />
    // <img src={shoulder} alt="shoulder" />
    //   </div>
    //    <div className = "aboutUs">
    //     <strong> <span>About Us</span> </strong>
    //   </div>
    //   <div className="explorCards" style={{ marginTop: "-56px" }}>
    //     {Object.keys(targets).map((target, idx) => (
    //       <ExploreCategoryLink key={idx} {...targets[target]} />
    //     ))}
    //     <Button onClick={handleModalOpen}>Add Prescription</Button>
    //   </div>
    // </div>
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
