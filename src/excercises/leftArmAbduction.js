export default function leftArmAbduction(obj12, obj14) {
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
      // reps.innerHTML = '#reps = ' + counter/2;
      console.log("#reps = " + counter / 2);
      console.log(maxAngle);
      dayRange += maxAngle;
      maxAngle = 10;
    }
  }

  if (counter / 2 === 5) {
    counter = 0;
    //   reps.innerHTML = '#reps = ' + Math.trunc(counter);
    console.log("#reps = " + Math.trunc(counter));
    set_counter += 1;
    //   sets.innerHTML = "#sets " + set_counter;
    console.log("#sets " + set_counter);
  }

  if (set_counter === 3) {
    return (dayRange / (5 * 3)).toFixed(2);
  }

  return 0;
}
