let repsCompleted = 0;
let setsCompleted = 0;
let up = false,
  down = false;
let maxAngle = 15;
let dayRange = 0;

let maxAngleSum = 0;
// let flag = 0;
// let finalReport = 0;

export default function rightElbowFlexion(
  points,
  excerciseVars,
  setExcerciseVars
) {
  const { requiredReps } = excerciseVars;
  const obj13 = points[13];
  const obj15 = points[15];

  const vector1 = [obj13.x - obj13.x - 0.2, obj13.y - obj13.y];
  const vector2 = [obj13.x - obj15.x, obj13.y - obj15.y];
  const dot = vector1[0] * vector2[0] + vector1[1] * vector2[1];
  const mod_a = Math.sqrt(vector1[0] * vector1[0] + vector1[1] * vector1[1]);
  const mod_b = Math.sqrt(vector2[0] * vector2[0] + vector2[1] * vector2[1]);
  let angle = ((Math.acos(dot / (mod_a * mod_b)) * 180) / 3.14 - 90).toFixed(2);

  angle = angle > 90 ? 90 : angle;
  maxAngle = Math.max(maxAngle, angle);

  if (angle <= 15) {
    down = true;
  } else if (angle >= 30) {
    up = true;
  }

  if (up === true && down === true) {
    repsCompleted += angle < 0 ? 0 : 1;
    up = false;
    down = false;

    if (repsCompleted % 2 === 0) {
      maxAngleSum += maxAngle;
      dayRange = (
        maxAngleSum /
        (repsCompleted / 2 + setsCompleted * requiredReps)
      ).toFixed(2);
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

  //   if(set_counter == 3 && flag === 0) {
  //     flag = 1;
  //     finalReport = (dayRange / (5 * 3)).toFixed(2);
  //     return finalReport;
  //   }
  //   return (flag === 0) ? 0 : finalReport;
}
