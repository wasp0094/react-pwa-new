import React, { useEffect } from "react";
import { useExcerciseData } from "../../context/ExcerciseDataContext";
import { INITIAL_DATA } from "../../context/ExcerciseDataContext";

function Results() {
  const { excerciseVars, setExcerciseVars } = useExcerciseData();
  useEffect(() => {
    return function cleanup() {
      setExcerciseVars(INITIAL_DATA);
    };
  });
  return (
    <div className="results">
      Results <br />
      {excerciseVars.setsCompleted} :: {excerciseVars.dayRange}
    </div>
  );
}

export default Results;
