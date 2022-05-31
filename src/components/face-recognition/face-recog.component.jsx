import * as faceapi from "face-api.js";
import React, { useRef, useEffect, useState } from "react";
import { useUserAuth } from "../../context/UserAuthContext";
import "./face-recog.styles.css";

const FaceRecogComponent = (props) => {
  const { handleExcerciseStart } = props;
  const [modelIsLoaded, setModelIsLoaded] = React.useState(false);
  let videoRef = useRef(null);
  let canvasRef = useRef(null);
  let photoRef = useRef(null);
  const videoHeight = 300;
  const videoWidth = 400;
  const { user } = useUserAuth();
  const [errorMessage, setErrorMessage] = useState("");
  const [sucessMessage, setSucessMessage] = useState("");

  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = process.env.PUBLIC_URL + "/models";

      Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
        faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
        faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
        faceapi.nets.tinyYolov2.loadFromUri(MODEL_URL),
      ])
        .then(setModelIsLoaded(true))
        .catch((err) => console.log(err));
    };
    loadModels();
  }, []);

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  function getFaceDetectorOptions() {
    let inputSize = 512;
    let scoreThreshold = 0.5;
    return new faceapi.TinyFaceDetectorOptions({ inputSize, scoreThreshold });
  }

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
      })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleVideoOnPlay = () => {
    setInterval(async () => {
      if (canvasRef && canvasRef.current) {
        canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(
          videoRef.current
        );
        const displaySize = {
          width: videoWidth,
          height: videoHeight,
        };
        faceapi.matchDimensions(canvasRef.current, displaySize);
        const detections = await faceapi
          .detectAllFaces(
            videoRef.current,
            new faceapi.TinyFaceDetectorOptions()
          )
          .withFaceLandmarks();
        const resizedDetections = faceapi.resizeResults(
          detections,
          displaySize
        );
        canvasRef &&
          canvasRef.current &&
          canvasRef.current
            .getContext("2d")
            .clearRect(0, 0, videoWidth, videoHeight);
        canvasRef &&
          canvasRef.current &&
          faceapi.draw.drawDetections(canvasRef.current, resizedDetections);
        canvasRef &&
          canvasRef.current &&
          faceapi.draw.drawFaceLandmarks(canvasRef.current, resizedDetections);
      }
    }, 100);
  };

  const takePicture = () => {
    const width = 400;
    const height = 300;
    let video = videoRef.current;
    let photo = photoRef.current;
    photo.width = width;
    photo.height = height;
    let ctx = photo.getContext("2d");
    ctx.drawImage(video, 0, 0, width, height);
  };

  const handleClick = async () => {
    const img1 = document.getElementsByClassName("reff-img")[0];
    const fullFaceDescriptions = await faceapi
      .detectAllFaces(img1, getFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceDescriptors();

    if (!fullFaceDescriptions.length) {
      setErrorMessage("No face detected on profile picture");
      setTimeout(function () {
        handleExcerciseStart(-1);
      }, 3000);
      return;
    }
    const faceMatcher = new faceapi.FaceMatcher(fullFaceDescriptions);

    takePicture();
    const img2 = photoRef.current;
    const results = await faceapi
      .detectAllFaces(img2, getFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceDescriptors();
    if (!results.length) {
      setErrorMessage("No face detected on camera");
      setTimeout(function () {
        handleExcerciseStart(-1);
      }, 3000);
      return;
    }

    const resizedResults = faceapi.resizeResults(results, img2);

    resizedResults.forEach(({ descriptor }) => {
      const label = faceMatcher.findBestMatch(descriptor).toString();
      console.log(label);
      if (label.substring(0, 6) === "person") {
        setSucessMessage("Face Accepted !!");
        setTimeout(function () {
          handleExcerciseStart(1);
        }, 5000);
      } else {
        setErrorMessage("Wrong Face detected on camera");
        setTimeout(function () {
          handleExcerciseStart(-1);
        }, 3000);
        return;
      }
    });
  };

  return (
    <div>
      {modelIsLoaded ? (
        <div className="face-recog-div">
          <video
            ref={videoRef}
            height={videoHeight}
            width={videoWidth}
            className="face-recog-video"
            onPlay={handleVideoOnPlay}
          ></video>
          <canvas
            ref={canvasRef}
            height={videoHeight}
            width={videoWidth}
            style={{ position: "absolute" }}
          />
          <button className="start-button" onClick={handleClick}>
            Check face
          </button>
        </div>
      ) : (
        <div>Loading...</div>
      )}
      <p className="error-message">{errorMessage}</p>
      <p className="success-message">{sucessMessage}</p>
      <canvas className="img-canvas" ref={photoRef}></canvas>
      <img
        crossOrigin="anonymous"
        src={`${user.imgUrl}`}
        height={videoHeight}
        width={videoWidth}
        alt=""
        className="reff-img"
      />
    </div>
  );
};

export default FaceRecogComponent;
