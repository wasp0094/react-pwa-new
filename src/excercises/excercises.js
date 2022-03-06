import leftShoulderAbduction from "./leftShoulderAbduction";
import rightShoulderAbduction from "./rightShoulderAbduction";

const shoulder_abduction = {
  id: "shoulder_abduction",
  name: "Shoulder Abduction",
  tags: ["shoulder", "abduction"],
  color: "#FFEBB5",
  short_description:
    "Characterized by pain and stiffness in the shoulder joint.",
  description:
    "Shoulder abduction involves moving your arm in the same plane as that of your chest. It is generally implemented through wall sliding, a resisted range of motion exercising technique. Do try this out, if needed!",
  left: {
    id: "left-shoulder-abduction",
    name: "Left Shoulder Abduction",
  },
  right: {
    id: "right-shoulder-abduction",
    name: "Right Shoulder Abduction",
  },
};

const shoulder_flexion = {
  id: "shoulder_flexion",
  name: "Shoulder Flexion",
  tags: ["shoulder", "flexion"],
  color: "#afc3ff",
  short_description:
    "Characterized by pain and stiffness in the shoulder joint.",
  description:
    "Shoulder flexion involves picking your arms up and raising them overhead. This gives an exercise to the joint and muscles of shoulder thus, helping to bring the motion back about the joint. Yes, it's that's simple!",
  left: {
    id: "left-shoulder-flexion",
    name: "Left Shoulder Flexion",
  },
  right: {
    id: "right-shoulder-flexion",
    name: "Right Shoulder Flexion",
  },
};

const elbow_flexion = {
  id: "elbow_flexion",
  name: "Elbow Flexion",
  tags: ["elbow", "flexion"],
  color: "#FFEBB5",
  short_description:
    "Swelling, stiffness and hindered motion after fracture/ burns.",
  description:
    "Elbow flexion aims at restoring elbow's extension motion. This gives an exercise to the elbow joint thus, helping to bring the motion back about the joint. Yay, you got this!",
  left: {
    id: "left-elbow-flexion",
    name: "Left Elbow Flexion",
  },
  right: {
    id: "right-elbow-flexion",
    name: "Right Elbow Flexion",
  },
};

const knee_extension = {
  id: "knee_extension",
  name: "Knee Extension",
  tags: ["knee", "extension"],
  color: "#ffd2d9",
  short_description:
    "Stiffness and hindered motion after fracture/ burns in knee joint.",
  description:
    "Knee extension is a resistance training exercise. Simply contract your quadriceps muscles to extend the lower leg until the whole leg is sticking straight out. For the rest, we'll take care. Go ahead!",
  left: {
    id: "left-knee-extension",
    name: "Left Knee Extension",
  },
  right: {
    id: "right-knee-extension",
    name: "Right Knee Extension",
  },
};

const shoulder_elevation = {
  id: "shoulder_elevation",
  name: "Shoulder Elevation",
  tags: ["elbow", "elevation"],
  color: "#afc3ff",
  short_description:
    "Stiffness and hindered motion of shoulder after elbow fracture.",
  description:
    "This exercise helps in improving the shoulder joint motion which gets hindered due to prolonged fracture plaster. Simply grasp your hand and elevate it to the maximum point where you can take it to. Yes! it's that simple.",
  left: {
    id: "left-shoulder-elevation",
    name: "Left Shoulder Elevation",
  },
  right: {
    id: "right-shoulder-elevation",
    name: "Right Shoulder Elevation",
  },
};

const dumbell_bicep_curl = {
  id: "dumbell_bicep_curl",
  name: "Dumbell Bicep Curl",
  tags: ["diabetes", "bicep", "dumbell", "curls"],
  color: "#ffd2d9",
  short_description:
    "A lifestyle therapy for prevention and treatment of diabetes.",
  description:
    "The dumbbell bicep curls exercise is a weight-training exercise that works the muscles of the upper arm, and to a lesser extent, those of the lower arm. It's a great exercise for seeing results in strength and definition in your arms.",
  left: {
    id: "left-dumbell-bicep-curl",
    name: "Left Dumbell Bicep Curl",
  },
  right: {
    id: "right-dumbell-bicep-curl",
    name: "Right Dumbell Bicep Curl",
  },
};

const lunges = {
  id: "lunges",
  name: "Lunges",
  tags: ["diabetes", "lunges", "legs"],
  color: "#FFEBB5",
  short_description:
    "A lifestyle therapy for prevention and treatment of diabetes.",
  description:
    "Lunges refer to any position of the human body where one leg is positioned forward with knee bent and foot flat on the ground while the other leg is positioned behind. Strengthen your lower body and increase your core strength with lunges!",
  left: {
    id: "left-lunges",
    name: "Left Lunges",
  },
  right: {
    id: "right-lunges",
    name: "Right Lunges",
  },
};

const side_kicks = {
  id: "side_kicks",
  name: "Side Kicks",
  tags: ["diabetes", "kicks", "legs"],
  color: "#afc3ff",
  short_description:
    "A lifestyle therapy for prevention and treatment of diabetes.",
  description:
    "This is a simple yet dynamic exercise that benefits the legs, glutes, and core muscles. You can expect to see improvements in your stability and an increase in muscle strength. Yes it's that helpful!",
  left: {
    id: "left-side-kicks",
    name: "Left Side Kicks",
  },
  right: {
    id: "right-side-kicks",
    name: "Right Side Kicks",
  },
};

const squats = {
  id: "squats",
  name: "Squats",
  tags: ["diabetes", "legs", "squats"],
  color: "#ffd2d9",
  short_description:
    "A lifestyle therapy for prevention and treatment of diabetes.",
  description:
    "Squats refer to crouching. Gift yourself with better flexibility and mobility, burn extra calories, and increase your core strength. Feel fresh once done!",
};

const excercises = {
  shoulder_abduction,
  shoulder_flexion,
  knee_extension,
  elbow_flexion,
  shoulder_elevation,
  dumbell_bicep_curl,
  lunges,
  side_kicks,
  squats,
};

export const targets = {
  diabetes: {
    id: "diabetes",
    name: "Diabetes",
    src: "https://thumbs.dreamstime.com/b/diabetes-icon-sugar-cube-inside-blood-drop-diabetes-icon-sugar-cube-dissolving-inside-blood-drop-high-glucose-level-sign-isolated-194940500.jpg",
  },
  shoulder: {
    id: "shoulder",
    name: "Shoulder",
    src: "https://thumbs.dreamstime.com/b/basic-rgb-161165903.jpg",
  },
  elbow: {
    id: "elbow",
    name: "Elbow",
    src: "https://en.pimg.jp/040/445/662/1/40445662.jpg",
  },
  knee: {
    id: "knee",
    name: "Knee",
    src: "https://media.istockphoto.com/vectors/woman-feel-knee-pain-vector-isolated-vector-id1215090835?k=20&m=1215090835&s=612x612&w=0&h=43wcP-i3ISjz6IU0ZiE25XeaMIocoRH-eZ_pKZuCWqA=",
  },
};

export const calculate = (excercis_id) => {
  if (excercis_id === "left-shoulder-abduction") return leftShoulderAbduction;
  else if (excercis_id === "right-shoulder-abduction")
    return rightShoulderAbduction;
};

export default excercises;
