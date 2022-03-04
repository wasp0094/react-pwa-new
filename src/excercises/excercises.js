import leftArmAbduction from "./leftArmAbduction";
import rightArmAbduction from "./rightArmAbduction";

const excercises = {
  left_arm_abduction: {
    name: "Left Arm Abduction",
    calculate: leftArmAbduction,
  },
  right_arm_abduction: {
    name: "Right Arm Abduction",
    calculate: rightArmAbduction,
  },
};

export default excercises;
