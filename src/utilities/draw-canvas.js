import * as pose from "@mediapipe/pose";

const connect = window.drawConnectors;
// const landMarks = window.drawLandmarks;
export default function drawCanvas(webcamRef, canvasRef, results) {
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
  for (let i = 0; i <= 10; i++) {
    results.poseLandmarks[i].x = 0;
    results.poseLandmarks[i].y = 0;
    results.poseLandmarks[i].z = 0;
  }
  canvasCtx.globalCompositeOperation = "source-over";
  connect(canvasCtx, results.poseLandmarks, pose.POSE_CONNECTIONS, {
    color: "#fff",
    lineWidth: 4,
  });
  // console.log(results.poseLandmarks);
  // landMarks(canvasCtx, results.poseLandmarks, {
  //   color: "#fff",
  //   lineWidth: 2,
  // });
  canvasCtx.restore();
}
