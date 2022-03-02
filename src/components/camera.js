import { Pose } from "@mediapipe/pose";
import * as pose from "@mediapipe/pose";
import React, { useRef, useEffect, useState } from "react";
import * as cam from "@mediapipe/camera_utils";
import Webcam from "react-webcam";
import { Container, Button } from "react-bootstrap";
import instruction from "../assets/banner1.jpg";
import leftArmAbduction from "../excercises/leftArmAbduction";

function Camera() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const connect = window.drawConnectors;
  const landMarks = window.drawLandmarks;
  var camera = null;
  var PosE = null;
  let [excerciseVars, setExcerciseVars] = useState(null);

  const [instructImg, setInsImg] = useState({
    position: "absolute",
    marginLeft: "auto",
    marginRight: "auto",
    top: 0,
    left: 0,
    textAlign: "center",
    zindex: 9,
    width: "80vw",
    height: "90vh",
    display: "block",
  });

  const [btnStyle, setBtnStyle] = useState({
    position: "absolute",
    bottom: "20vh",
    right: "20vw",
    display: "block",
  });

  function fadeInstruction() {
    let newInsImg = { ...instructImg, display: "none" };
    let newBtnStyle = { ...btnStyle, display: "none" };
    setInsImg(newInsImg);
    setBtnStyle(newBtnStyle);
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null
    ) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      camera = new cam.Camera(webcamRef.current.video, {
        onFrame: async () => {
          await PosE.send({ image: webcamRef.current.video });
        },
        width: 640,
        height: 480,
      });
      camera.start();
    }
  }
  const excerciseParams = { requiredSets: 1, requiredReps: 5 };
  function onResults(results) {
    if (!results.poseLandmarks) return;
    setExcerciseVars(
      leftArmAbduction(
        results.poseLandmarks[12],
        results.poseLandmarks[14],
        camera,
        excerciseParams
      )
    );
    // let rangeAchieved = angleAgainstWall(results.poseLandmarks[12], results.poseLandmarks[14]);
    // console.log("Report Card for the day = " + rangeAchieved);
    const videoWidth = webcamRef.current.video.videoWidth;
    const videoHeight = webcamRef.current.video.videoHeight;

    // Set canvas width
    canvasRef.current.width = videoWidth;
    canvasRef.current.height = videoHeight;
    const canvasElement = canvasRef.current;
    const canvasCtx = canvasElement.getContext("2d");
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    canvasCtx.drawImage(
      results.segmentationMask,
      0,
      0,
      canvasElement.width,
      canvasElement.height
    );

    // Only overwrite existing pixels.
    canvasCtx.globalCompositeOperation = "source-in";
    canvasCtx.fillStyle = "#00000000";
    canvasCtx.fillRect(0, 0, canvasElement.width, canvasElement.height);

    // Only overwrite missing pixels.
    canvasCtx.globalCompositeOperation = "destination-atop";
    canvasCtx.drawImage(
      results.image,
      0,
      0,
      canvasElement.width,
      canvasElement.height
    );
    canvasCtx.globalCompositeOperation = "source-over";
    connect(canvasCtx, results.poseLandmarks, pose.POSE_CONNECTIONS, {
      color: "#00FF00",
      lineWidth: 4,
    });
    landMarks(canvasCtx, results.poseLandmarks, {
      color: "#FF0000",
      lineWidth: 2,
    });
    canvasCtx.restore();
  }

  useEffect(() => {
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
  });

  return (
    <Container style={{ position: "relative" }}>
      <header className="App-header position-relative">
        <Webcam
          hidden
          ref={webcamRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: "80vw",
            height: "90vh",
          }}
        />{" "}
        <canvas
          ref={canvasRef}
          className="output_canvas"
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: "80vw",
            height: "90vh",
          }}
        ></canvas>
      </header>
      <img
        src={instruction}
        alt="instruction"
        className="img-fluid"
        style={instructImg}
      />
      <Button
        variant="primary"
        onClick={fadeInstruction}
        style={btnStyle}
        className="btn"
      >
        Start
      </Button>
      <p>{excerciseVars ? excerciseVars.dayRange : null}</p>
    </Container>
  );
}

export default Camera;
