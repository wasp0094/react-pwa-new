import React, { useState } from "react";
import Camera from "../camera/camera.component";
import "./excercise.styles.css";
import Instructions from "../instructions/instructions.component";
import ExcerciseDataContextProvider from "../../context/ExcerciseDataContext";
import Results from "../results/results.component";

function Excercise() {
  const [started, setStarted] = useState(0);
  return (
    <ExcerciseDataContextProvider>
      <div className="start-excercise">
        {started === 0 && <Instructions handleExcerciseStart={setStarted} />}
        {started === 1 && (
          <Camera
            excercise={"left_arm_abduction"}
            handleEndExcercise={setStarted}
          />
        )}
        {started === 2 && <Results />}
      </div>
    </ExcerciseDataContextProvider>
  );
}

export default Excercise;
