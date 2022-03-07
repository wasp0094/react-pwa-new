// Yahn repsCompleted, Ki jagha (leftCounter+rightCounter) use hoo rakha hai
// maxAngle, dayRange, maxAngleSum ka dekh lio
let leftCounter = 0;
let rightCounter = 0;
let setsCompleted = 0;
let repsCompleted = 0;
let leftUp = false,
  leftDown = false;
let rightUp = false,
  rightDown = false;
let leftMaxAngle = 10;
let rightMaxAngle = 10;

// let maxAngle = 10;
// let dayRange = 0;
// let maxAngleSum = 0;

export default function leftShoulderAbduction(
  points,
  excerciseVars,
  setExcerciseVars
) {
  const { requiredReps } = excerciseVars;
  const obj14 = points[14];
  const obj16 = points[16];
  const obj12 = points[12];
  const obj13 = points[13];
  const obj15 = points[15];
  const obj11 = points[11];

  const leftVector1 = [obj14.x - obj12.x, obj14.y - obj12.y];
  const leftVector2 = [obj14.x - obj16.x, obj14.y - obj16.y];
  const rightVector1 = [obj13.x - obj11.x, obj13.y - obj11.y];
  const rightVector2 = [obj13.x - obj15.x, obj13.y - obj15.y];

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

  if (leftAngle <= 25) {
    leftDown = true;
  } else if (leftAngle >= 130) {
    leftUp = true;
  }

  if (rightAngle <= 25) {
    rightDown = true;
  } else if (rightAngle >= 130) {
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
