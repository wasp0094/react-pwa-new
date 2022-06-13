let repsCompleted = 0;
let setsCompleted = 0;
let up = false,
  down = false;
let maxAngle = 10;
let dayRange = 0;
let maxAngleSum = 0;
let calibrationAngle = 0, finalCalibrationAngle = 0;
let t0, t1;
let tc0, tc1, calibratedTime = 0, finalCalibrationTime = 0; // tc --> time_calibration stamp
let flag = 0;

function speak_js(message) {
  var msg = new SpeechSynthesisUtterance(message);
  window.speechSynthesis.speak(msg);
}

export default function leftElbowFlexion(
  points,
  excerciseVars,
  setExcerciseVars
) {
  const { requiredReps } = excerciseVars;
  const obj16 = points[16];
  const obj14 = points[14];

  const vector1 = [obj14.x - obj14.x - 0.2, obj14.y - obj14.y];
  const vector2 = [obj14.x - obj16.x, obj14.y - obj16.y];
  const dot = vector1[0] * vector2[0] + vector1[1] * vector2[1];
  const mod_a = Math.sqrt(vector1[0] * vector1[0] + vector1[1] * vector1[1]);
  const mod_b = Math.sqrt(vector2[0] * vector2[0] + vector2[1] * vector2[1]);
  let angle = (((Math.acos(dot / (mod_a * mod_b)) * 180) / 3.14) - 90).toFixed(2);

  angle = angle > 90 ? 90 : angle;
  maxAngle = Math.max(maxAngle, angle);

  if (flag === 0) {
    speak_js(
      "StretchYourArmsToTheMaximumPossibleAsThisSetHelpsUsToCalibrate"
    );
    flag = 1;
  }

  if(setsCompleted === 0) {
    finalCalibrationAngle = 20;
  } else {
    finalCalibrationAngle = (calibrationAngle / requiredReps).toFixed(2);
  }

  if (angle <= 10) {

    down = true;
    if (up === false && setsCompleted === 0)
      tc0 = Number(new Date().getSeconds() + new Date().getMinutes() * 60);
    if (up === false)
      t0 = Number(new Date().getSeconds() + new Date().getMinutes() * 60);

  } else if ( Number(angle) >= Number(finalCalibrationAngle) ) {
    up = true;
    // console.log( calibratedTime );
  }
  // console.log( angle + "  "+ finalCalibrationAngle);

  if (up === true && down === true) {
    
    repsCompleted += (angle < 0) ? 0 : 1;
    up = false;
    down = false;

    if (repsCompleted % 2 === 0) {
      if (setsCompleted === 0) {
        tc1 = Number(new Date().getSeconds() + new Date().getMinutes() * 60);
        calibratedTime = Number(calibratedTime + tc1 - tc0);
      }
      t1 = Number(new Date().getSeconds() + new Date().getMinutes() * 60);
      // console.log(t0 + " " + t1);

      if(setsCompleted === 0) {
        finalCalibrationTime = 30;
      } else {
        finalCalibrationTime = (calibratedTime / requiredReps) + 3;
      }

      const reps = (repsCompleted / 2).toString();
      
      if(Number(repsCompleted / 2) === 1) {
        const sets = setsCompleted.toString();
        speak_js(sets + "sets" +  reps +"reps");
      } else {
        speak_js( reps + "reps" );
      }

      if((setsCompleted !== 0) && ((t1 - t0) > finalCalibrationTime)) {
        speak_js("TooSlow");
      }
      
      window.t0 = t1;

      maxAngleSum += (maxAngle + 90);
      dayRange = (maxAngleSum / (repsCompleted / 2 + (setsCompleted * requiredReps))).toFixed(2);
      // console.log(dayRange);
      // calibrationAngle += setsCompleted === 0 ? maxAngle : 0;
      if(dayRange && setsCompleted === 0) {
        calibrationAngle = Number(calibrationAngle) + Number(dayRange - 90);
      } else {
        calibrationAngle += 0;
      }

      maxAngle = 10;
      setExcerciseVars({
        ...excerciseVars,
        repsCompleted: Math.ceil(repsCompleted / 2),
        setsCompleted,
        dayRange,
      });
    }
  }

  if (repsCompleted / 2 === requiredReps) {
    setsCompleted += 1;
    repsCompleted = 0;
    setExcerciseVars({
      ...excerciseVars,
      dayRange,
      repsCompleted,
      setsCompleted,
    });
  }

}
