// Yahn repsCompleted, Ki jagha (leftCounter+rightCounter) use hoo rakha hai
// maxAngle, dayRange, maxAngleSum ka dekh lio
let setsCompleted = 0;
let repsCompleted = 0;
let leftUp = false,
  leftDown = false;
let leftCounter = 0;
let rightCounter = 0;
let rightUp = false,
  rightDown = false;
let leftMaxAngle = 10;
let rightMaxAngle = 10;

// let maxAngle = 10;
// let dayRange = 0;
// let maxAngleSum = 0;

export default function lunge(points, excerciseVars, setExcerciseVars) {
  const { requiredReps } = excerciseVars;
  const obj24 = points[24];
  const obj26 = points[26];
  const obj28 = points[28];
  const obj23 = points[23];
  const obj25 = points[25];
  const obj27 = points[27];

  const leftVector1 = [obj26.x - obj24.x, obj26.y - obj24.y];
  const leftVector2 = [obj26.x - obj28.x, obj26.y - obj28.y];
  const rightVector1 = [obj25.x - obj23.x, obj25.y - obj23.y];
  const rightVector2 = [obj25.x - obj27.x, obj25.y - obj27.y];

  const leftDot =
    leftVector1[0] * leftVector2[0] + leftVector1[1] * leftVector2[1];
  const leftMod_a = Math.sqrt(
    leftVector1[0] * leftVector1[0] + leftVector1[1] * leftVector1[1]
  );
  const leftMod_b = Math.sqrt(
    leftVector2[0] * leftVector2[0] + leftVector2[1] * leftVector2[1]
  );

  const rightDot =
    rightVector1[0] * rightVector2[0] + rightVector1[1] * rightVector2[1];
  const rightMod_a = Math.sqrt(
    rightVector1[0] * rightVector1[0] + rightVector1[1] * rightVector1[1]
  );
  const rightMod_b = Math.sqrt(
    rightVector2[0] * rightVector2[0] + rightVector2[1] * rightVector2[1]
  );

  const leftAngle = (
    (Math.acos(leftDot / (leftMod_a * leftMod_b)) * 180) /
    3.14
  ).toFixed(2);
  leftMaxAngle = Math.max(leftMaxAngle, leftAngle);

  const rightAngle = (
    (Math.acos(rightDot / (rightMod_a * rightMod_b)) * 180) /
    3.14
  ).toFixed(2);
  rightMaxAngle = Math.max(rightMaxAngle, rightAngle);

  if (leftAngle <= 95) {
    leftDown = true;
  } else if (leftAngle >= 160) {
    leftUp = true;
  }

  if (rightAngle <= 95) {
    rightDown = true;
  } else if (rightAngle >= 160) {
    rightUp = true;
  }

  if (
    leftUp === true &&
    leftDown === true &&
    rightUp === true &&
    rightDown === true
  ) {
    if (leftUp === true && leftDown === true) {
      leftCounter += 1;
      leftUp = false;
      leftDown = false;
    }
    if (rightUp === true && rightDown === true) {
      rightCounter += 1;
      rightUp = false;
      rightDown = false;
    }
    repsCompleted = leftCounter + rightCounter;
    if (repsCompleted % 4 === 0) {
      setExcerciseVars({
        ...excerciseVars,
        repsCompleted: Math.ceil(repsCompleted / 4),
        setsCompleted,
        // dayRange,
      });
      leftMaxAngle = 10;
      rightMaxAngle = 10;
    }
  }

  if ((leftCounter + rightCounter) / 2 === requiredReps) {
    setsCompleted += 1;
    leftCounter = 0;
    rightCounter = 0;
    repsCompleted = leftCounter + rightCounter;
    setExcerciseVars({
      ...excerciseVars,
      repsCompleted,
      setsCompleted,
      //   dayRange,
    });
  }
}
