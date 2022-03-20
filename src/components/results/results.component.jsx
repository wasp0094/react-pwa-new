import React, { useEffect } from "react";
import { useExcerciseData } from "../../context/ExcerciseDataContext";
import { INITIAL_DATA } from "../../context/ExcerciseDataContext";

function Results() {
  const { excerciseVars, setExcerciseVars } = useExcerciseData();
  useEffect(() => {
    console.log(excerciseVars);
    return function cleanup() {
      setExcerciseVars(INITIAL_DATA);
    };
  });
  return (
    <div className="results">
      Results <br />
      <p>Day range :: {excerciseVars.dayRange}</p>
      <p>Reps :: {excerciseVars.repsCompleted}</p>
      <p>Sets :: {excerciseVars.setsCompleted}</p>
    </div>
  );
}

export default Results;
