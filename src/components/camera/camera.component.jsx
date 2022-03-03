import { Pose } from "@mediapipe/pose";
import React, { useRef, useEffect, useState } from "react";
import * as cam from "@mediapipe/camera_utils";
import "./camera.style.css";
import Webcam from "react-webcam";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import excercises from "../../excercises/excercises";
import drawCanvas from "../../utilities/draw-canvas";
import { useExcerciseData } from "../../context/ExcerciseDataContext";
import Loading from "../loading/loading.component";

let camera = null;
function Camera(props) {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const { excercise, handleEndExcercise } = props;
  var PosE = null;
  let { excerciseVars, setExcerciseVars } = useExcerciseData();
  const excerciseParams = { requiredSets: 1, requiredReps: 1 };

  function startCamera() {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null
    ) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      camera = new cam.Camera(webcamRef.current.video, {
        onFrame: async () => {
          await PosE.send({ image: webcamRef.current.video });
        },
      });
      camera.start();
      return camera.stop;
    }
  }
  const [loadingCam, setLoadingCam] = useState(true);
  function onResults(results) {
    if (loadingCam) setLoadingCam(false);
    if (!results.poseLandmarks) return;
    excercises[excercise].calculate(
      results.poseLandmarks[12],
      results.poseLandmarks[14],
      excerciseParams,
      setExcerciseVars
    );
    drawCanvas(webcamRef, canvasRef, results);
  }

  useEffect(() => {
    if (excerciseVars.setsCompleted === excerciseParams.requiredSets) {
      handleEndExcercise(2);
    }
  }, [excerciseVars]);

  function PoseSetup() {
    //eslint-disable-next-line
    PosE = new Pose({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`;
      },
    });

    PosE.setOptions({
      modelComplexity: 1,
      smoothLandmarks: true,
      enableSegmentation: true,
      smoothSegmentation: true,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
      selfieMode: true,
    });

    PosE.onResults(onResults);
    return startCamera();
  }

  useEffect(PoseSetup, []);

  return (
    <Container>
      <Webcam hidden ref={webcamRef} className="camera-webcam" />
      <canvas
        ref={canvasRef}
        className={`output_canvas camera-canvas ${!loadingCam && "block"}`}
      ></canvas>
      {Loading(ResultContainer)({ isLoading: loadingCam, excerciseVars })}
    </Container>
  );
}

function ResultContainer({ excerciseVars }) {
  return (
    <div className="result-container">
      <p>Day range :: {excerciseVars.dayRange}</p>
      <p>Reps :: {excerciseVars.repsCompleted}</p>
      <p>Sets :: {excerciseVars.setsCompleted}</p>
    </div>
  );
}

export default Camera;
