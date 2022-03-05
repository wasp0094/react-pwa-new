import leftArmAbduction from "./leftArmAbduction";
import rightArmAbduction from "./rightArmAbduction";

const excercises = {
  left_arm_abduction: {
    name: "Left Arm Abduction",
    color: "#FFEBB5",
    calculate: leftArmAbduction,
  },
  right_arm_abduction: {
    name: "Right Arm Abduction",
    color: "#FFD0CF",
    calculate: rightArmAbduction,
  },
};

export default excercises;
