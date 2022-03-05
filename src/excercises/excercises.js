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
};

const excercises = {
  shoulder_abduction,
  shoulder_flexion,
  knee_extension,
  elbow_flexion,
};

export const calculate = (excercis_id) => {
  if (excercis_id === "left-shoulder-abduction") return leftShoulderAbduction;
  else if (excercis_id === "right-shoulder-abduction")
    return rightShoulderAbduction;
};

export default excercises;
