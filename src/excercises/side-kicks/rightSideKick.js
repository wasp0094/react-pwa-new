let repsCompleted = 0;
let setsCompleted = 0;
let up = false,
  down = false;
let maxAngle = 10;
let dayRange = 0;
let maxAngleSum = 0;
let t0, t1;
let tc0, tc1, caliberatedTime; // tc --> time_caliberation stamp
let flag = 0;

function speak_js(message) {
  var msg = new SpeechSynthesisUtterance(message);
  window.speechSynthesis.speak(msg);
}

export default function rightSideKick(points, excerciseVars, setExcerciseVars) {
  const { requiredReps } = excerciseVars;
  const obj23 = points[23];
  const obj25 = points[25];

  const vector1 = [obj23.x - obj23.x, obj23.y - obj23.y - 0.3];
  const vector2 = [obj23.x - obj25.x, obj23.y - obj25.y];

  const dot = vector1[0] * vector2[0] + vector1[1] * vector2[1];
  const mod_a = Math.sqrt(vector1[0] * vector1[0] + vector1[1] * vector1[1]);
  const mod_b = Math.sqrt(vector2[0] * vector2[0] + vector2[1] * vector2[1]);

  const angle = ((Math.acos(dot / (mod_a * mod_b)) * 180) / 3.14).toFixed(2);
  maxAngle = Math.max(maxAngle, angle);

  if (flag === 0) {
    speak_js(
      "Stretch your arms to the maximum possible as this set helps us to caliberate"
    );
    flag = 1;
  }

  if (angle <= 25) {
    down = true;
    if (up === false && setsCompleted === 0)
      tc0 = new Date().getSeconds() + new Date().getMinutes() * 60;
    if (up === false)
      t0 = new Date().getSeconds() + new Date().getMinutes() * 60;
  } else if (angle >= 40) {
    up = true;
  }

  if (up === true && down === true) {
    repsCompleted += 1;
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
        maxAngleSum /
        (repsCompleted / 2 + setsCompleted * requiredReps)
      ).toFixed(2);
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
