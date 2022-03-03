import React from "react";
import { useExcerciseData } from "../../context/ExcerciseDataContext";

function Results() {
  const { excerciseVars } = useExcerciseData();
  return <div className="results">{excerciseVars.repsCompleted}</div>;
}

export default Results;
