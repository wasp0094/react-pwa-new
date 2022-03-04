import React, { useState } from "react";
import Camera from "../camera/camera.component";
import "./excercise.styles.css";
import Instructions from "../instructions/instructions.component";
import { useExcerciseData } from "../../context/ExcerciseDataContext";
import Results from "../results/results.component";

function Excercise() {
  const [started, setStarted] = useState(0);
  const { excerciseVars } = useExcerciseData();
  return (
    <div className="start-excercise">
      {started === 0 && <Instructions handleExcerciseStart={setStarted} />}
      {started === 1 && (
        <Camera
          excercise={excerciseVars.type}
          handleEndExcercise={setStarted}
        />
      )}
      {started === 2 && <Results />}
    </div>
  );
}

export default Excercise;
