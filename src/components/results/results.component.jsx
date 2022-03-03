import React from "react";
import { useExcerciseData } from "../../context/ExcerciseDataContext";

function Results() {
  const { excerciseVars } = useExcerciseData();
  return (
    <div className="results">
      Results <br />
      {excerciseVars.setsCompleted} :: {excerciseVars.dayRange}
    </div>
  );
}

export default Results;
