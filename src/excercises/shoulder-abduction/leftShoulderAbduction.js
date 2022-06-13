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

export default function leftShoulderAbduction(
  points,
  excerciseVars,
  setExcerciseVars
) {
  const { requiredReps } = excerciseVars;
  const obj12 = points[12];
  const obj16 = points[16];
  const vector1 = [obj12.x - obj16.x, obj12.y - obj16.y];
  const vector2 = [obj12.x - obj12.x, obj12.y - obj12.y - 0.3];

  const dot = vector1[0] * vector2[0] + vector1[1] * vector2[1];
  const mod_a = Math.sqrt(vector1[0] * vector1[0] + vector1[1] * vector1[1]);
  const mod_b = Math.sqrt(vector2[0] * vector2[0] + vector2[1] * vector2[1]);

  const angle = ((Math.acos(dot / (mod_a * mod_b)) * 180) / 3.14).toFixed(2);
  maxAngle = Math.max(maxAngle, angle);

  if (flag === 0) {
    speak_js(
      "StretchYourArmsToTheMaximumPossibleAsThisSetHelpsUsToCalibrate"
    );
    flag = 1;
  }

  if(setsCompleted === 0) {
    finalCalibrationAngle = 30;
  } else {
    finalCalibrationAngle = (calibrationAngle / requiredReps).toFixed(2);
  }

  if (angle <= 30) {

    down = true;
    if (up === false && setsCompleted === 0)
      tc0 = Number(new Date().getSeconds() + new Date().getMinutes() * 60);
    if (up === false)
      t0 = Number(new Date().getSeconds() + new Date().getMinutes() * 60);

  } else if ( Number(angle) >= Number(finalCalibrationAngle) ) {
    up = true;
  }

  if (up === true && down === true) {

    repsCompleted += 1;
    up = false;
    down = false;

    if (repsCompleted % 2 === 0) {

      if (setsCompleted === 0) {
        tc1 = Number(new Date().getSeconds() + new Date().getMinutes() * 60);
        calibratedTime = Number(calibratedTime + tc1 - tc0);
      }
      t1 = Number(new Date().getSeconds() + new Date().getMinutes() * 60);
      
      if(setsCompleted === 0) {
        finalCalibrationTime = 30;
      } else {
        finalCalibrationTime = (calibratedTime / requiredReps) + 5;
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

      maxAngleSum += maxAngle;
      dayRange = (maxAngleSum / (repsCompleted / 2 + (setsCompleted * requiredReps))).toFixed(2);

      if(dayRange && setsCompleted === 0) {
        calibrationAngle = Number(calibrationAngle) + Number(dayRange);
      } else {
        calibrationAngle += 0;
      }

      maxAngle = 30;
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