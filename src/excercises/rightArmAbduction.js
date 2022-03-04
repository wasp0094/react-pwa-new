let repsCompleted = 0;
let setsCompleted = 0;
let up = false,
  down = false;
let maxAngle = 10;
let maxAngleSum = 0;
let dayRange = 0;

export default function rightArmAbduction(
  points,
  excerciseVars,
  setExcerciseVars
) {
  const { requiredReps } = excerciseVars;
  const obj11 = points[11];
  const obj13 = points[13];
  const vector1 = [obj11.x - obj11.x, obj11.y - obj11.y - 0.3];
  const vector2 = [obj11.x - obj13.x, obj11.y - obj13.y];
  const dot = vector1[0] * vector2[0] + vector1[1] * vector2[1];
  const mod_a = Math.sqrt(vector1[0] * vector1[0] + vector1[1] * vector1[1]);
  const mod_b = Math.sqrt(vector2[0] * vector2[0] + vector2[1] * vector2[1]);
  const angle = ((Math.acos(dot / (mod_a * mod_b)) * 180) / 3.14).toFixed(2);
  maxAngle = Math.max(maxAngle, angle);

  if (angle <= 30) {
    down = true;
  } else if (angle >= 90) {
    up = true;
  }
  if (up === true && down === true) {
    repsCompleted += 1;
    up = false;
    down = false;
    if (repsCompleted % 2 === 0) {
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
