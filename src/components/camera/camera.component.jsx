import { Pose } from "@mediapipe/pose";
import React, { useRef, useEffect, useState } from "react";
import * as cam from "@mediapipe/camera_utils";
import Webcam from "react-webcam";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import excercises, { calculate } from "../../excercises/excercises";
import drawCanvas from "../../utilities/draw-canvas";
import { useExcerciseData } from "../../context/ExcerciseDataContext";
import Loading from "../loading/loading.component";
import "./camera.style.css";

function Camera({ excercise, handleEndExcercise, type }) {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  var PosE = null;
  let { excerciseVars, setExcerciseVars } = useExcerciseData();
  const [loadingCam, setLoadingCam] = useState(true);
  const excercise_id = excercises[excercise]["types"][type].id;

  function startCamera() {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video !== null
    ) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      const camera = new cam.Camera(webcamRef.current.video, {
        onFrame: async () => {
          await PosE.send({ image: webcamRef.current.video });
        },
      });
      camera.start();
    }
  }
  function onResults(results) {
    if (loadingCam) setLoadingCam(false);
    if (!results.poseLandmarks) return;
    calculate(excercise_id)(
      results.poseLandmarks,
      excerciseVars,
      setExcerciseVars
    );
    drawCanvas(webcamRef, canvasRef, results);
  }

  useEffect(() => {
    if (excerciseVars.setsCompleted === excerciseVars.requiredSets) {
      handleEndExcercise(2);
    }
    //eslint-disable-next-line
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
    startCamera();
  }

  useEffect(PoseSetup, []);

  return (
    <Container className="camera">
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
      {/* <p>Day range :: {excerciseVars.dayRange}</p> */}
      <p>Reps :: {excerciseVars.repsCompleted}</p>
      <p>Sets :: {excerciseVars.setsCompleted}</p>
    </div>
  );
}

export default Camera;
