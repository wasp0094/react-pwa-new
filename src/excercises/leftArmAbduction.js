let counter = 0;
let set_counter = 0;
let up = false,
  down = false;
let maxAngle = 10;
let maxAngleSum = 0;
let dayRange = 0;

export default function leftArmAbduction(
  obj12,
  obj14,
  camera,
  { requiredSets, requiredReps }
) {
  const vector1 = [obj12.x - obj14.x, obj12.y - obj14.y];
  const vector2 = [obj12.x - obj12.x, obj12.y - obj12.y - 0.3];

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
    counter += 1;
    up = false;
    down = false;
    if (counter % 2 === 0) {
      maxAngleSum += maxAngle;
      dayRange = (
        (maxAngleSum / Math.ceil(counter / 2)) *
        (set_counter ? set_counter : 1)
      ).toFixed(2);
      maxAngle = 10;
    }
  }

  if (counter / 2 === requiredReps) {
    set_counter += 1;
    if (set_counter === requiredSets) {
      camera.stop();
      console.log({ counter: Math.ceil(counter / 2), set_counter, dayRange });
      return { counter: Math.ceil(counter / 2), set_counter, dayRange };
    }
    counter = 0;
  }
  return { counter: Math.ceil(counter / 2), set_counter, dayRange };
}
