import React, { useState } from "react";
import Camera from "../camera/camera.component";
import "./excercise.styles.css";
import Instructions from "../instructions/instructions.component";
import { useExcerciseData } from "../../context/ExcerciseDataContext";
import Results from "../results/results.component";
import { useSetTitle } from "../../hooks/setTitle";
import excercises from "../../excercises/excercises";
import FaceRecogComponent from "../face-recognition/face-recog.component";

function Excercise() {
  const [started, setStarted] = useState(-1);
  const { excerciseVars } = useExcerciseData();
  const title =
    excercises[excerciseVars.task]["types"][excerciseVars.type].name;
  const instructions = excercises[excerciseVars.task].instructions;
  useSetTitle(title);
  return (
    <div className="start-excercise">
      {started === -1 && (
        <Instructions
          handleExcerciseStart={setStarted}
          instructions={instructions}
        />
      )}
      {started === 0 && (
        <FaceRecogComponent handleExcerciseStart={setStarted} />
      )}
      {started === 1 && (
        <Camera
          excercise={excerciseVars.task}
          type={excerciseVars.type}
          handleEndExcercise={setStarted}
        />
      )}
      {started === 2 && <Results />}
    </div>
  );
}

export default Excercise;
