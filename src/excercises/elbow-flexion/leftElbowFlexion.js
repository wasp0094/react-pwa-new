let repsCompleted = 0;
let setsCompleted = 0;
let up = false,
  down = false;
let maxAngle = 15;
let dayRange = 0;
let maxAngleSum = 0;
let caliberationAngle = 0;
let t0, t1;
let tc0, tc1, caliberatedTime; // tc --> time_caliberation stamp
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
  let angle = ((Math.acos(dot / (mod_a * mod_b)) * 180) / 3.14 - 90).toFixed(2);

  angle = angle > 90 ? 90 : angle;
  maxAngle = Math.max(maxAngle, angle);

  if (flag === 0) {
    speak_js(
      "Stretch your arms to the maximum possible as this set helps us to caliberate"
    );
    flag = 1;
  }

  if (angle <= 15) {
    down = true;
    if (up === false && setsCompleted === 0)
      tc0 = new Date().getSeconds() + new Date().getMinutes() * 60;
    if (up === false)
      t0 = new Date().getSeconds() + new Date().getMinutes() * 60;
  } else if (
    angle >= (setsCompleted === 0 ? 25 : caliberationAngle / (2 * requiredReps))
  ) {
    up = true;
    console.log(
      setsCompleted === 0
        ? 25
        : caliberationAngle / (2 * requiredReps) + " " + angle
    );
  }

  if (up === true && down === true) {
    repsCompleted += angle < 0 ? 0 : 1;
    up = false;
    down = false;

    if (repsCompleted % 2 === 0) {
      if (setsCompleted === 0) {
        tc1 = new Date().getSeconds() + new Date().getMinutes() * 60;
        caliberatedTime += tc1 - tc0;
      }
      t1 = new Date().getSeconds() + new Date().getMinutes() * 60;
      // console.log(t0 + " " + t1);
      if (
        t1 - t0 > (setsCompleted === 0)
          ? 30
          : caliberatedTime / (2 * requiredReps)
      ) {
        speak_js("Too slow");
      }
      window.t0 = t1;
      speak_js(
        (repsCompleted / 2).toString() +
          "reps" +
          setsCompleted.toString() +
          "sets"
      );

      maxAngleSum += maxAngle;
      dayRange = (
        maxAngleSum / (repsCompleted / 2 + setsCompleted * requiredReps) +
        90
      ).toFixed(2);
      caliberationAngle += setsCompleted === 0 ? maxAngle : 0;
      maxAngle = 15;
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

  // if(set_counter === 3 && flag === 0) {
  //   flag = 1;
  //   finalReport = (dayRange / (5 * 3)).toFixed(2);
  //   return finalReport;
  // }
  // return (flag === 0) ? 0 : finalReport;
}
