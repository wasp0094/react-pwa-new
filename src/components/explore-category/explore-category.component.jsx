import React from "react";
import { useParams } from "react-router-dom";
import "./explore-category.styles.css";
import excercises from "../../excercises/excercises";
import ExploreItem from "../explore-item/explore-item.component";

function ExploreCategory() {
  const { explore_category } = useParams();
  const related_excercises = Object.keys(excercises).filter((excercise) =>
    excercises[excercise].tags.includes(explore_category)
  );
  return (
    <div className="explore-category">
      <div className="explore-cards">
        {related_excercises.map((excercise, idx) => (
          <ExploreItem key={idx} {...excercises[excercise]} />
        ))}
      </div>
    </div>
  );
}

export default ExploreCategory;
