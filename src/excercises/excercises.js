import leftSideKick from "./side-kicks/leftSideKick";
import rightSideKick from "./side-kicks/rightSideKick";
import leftElbowFlexion from "./elbow-flexion/leftElbowFlexion";
import rightElbowFlexion from "./elbow-flexion/rightElbowFlexion";
import leftShoulderFlexion from "./elbow-flexion/leftElbowFlexion";
import rightShoulderFlexion from "./shoulder-flexion/rightShoulderFlexion";
import leftShoulderAbduction from "./shoulder-abduction/leftShoulderAbduction";
import rightShoulderAbduction from "./shoulder-abduction/rightShoulderAbduction";
import shoulderElevation from "./shoulder-elevation/shoulderElevation";
import squat from "./squats/squats";
import lunge from "./Lunges/lunges";

import diabetesImage from "../assets/diabetes-link.jpg";
import elbowImage from "../assets/elbow-link.jpg";
import shoulderImage from "../assets/shoulder-link.jpg";

import bicepCurl from "../assets/bicepCurl.svg";
import lungesImage from "../assets/lunges.svg";
import sideKick from "../assets/sideKick.svg";
import squatsImage from "../assets/squats.svg";
import elbowFlexion from "../assets/elbowFlexion.svg";
import shoulderElevationImage from "../assets/shoulderElevation.svg";
import shoulderAbduction from "../assets/shoulderAbduction.svg";
import shoulderFlexion from "../assets/shoulderFlexion.svg";

const excerciseImages = {
  hjal5KUjqNxNT9bDZw8n: shoulderAbduction,
  QSfsP0Wwm3XUbfI0nyDi: shoulderFlexion,
  WAtBat858CahWQdzxN4B: elbowFlexion,
  IU2DBECRlUFtzc4VftOe: shoulderElevationImage,
  et7RXuBsXRNZHhG92Jae: bicepCurl,
  "37t6GHylJeUZmGx1eMNg": lungesImage,
  KEsdWebYLs0BPfDuEOur: sideKick,
  ZxgI2YvKjlpCWrIDe2OX: squatsImage,
};

export const resolveImage = (excercise_id) => excerciseImages[excercise_id];

const shoulder_abduction = {
  id: "hjal5KUjqNxNT9bDZw8n",
  name: "Shoulder Abduction",
  tags: ["shoulder", "abduction"],
  color: "#FFEBB5",
  cautions: [
    "Stand and hold a weight in your hand with your palm facing your body.",
    "Do not raise your arm over your head unless your healthcare provider says it is okay.",
  ],
  short_description:
    "Characterized by pain and stiffness in the shoulder joint.",
  description:
    "Shoulder abduction involves moving your arm in the same plane as that of your chest. It is generally implemented through wall sliding, a resisted range of motion exercising technique. Do try this out, if needed!",
  types: {
    left: {
      id: "left-shoulder-abduction",
      name: "Left Shoulder Abduction",
    },
    right: {
      id: "right-shoulder-abduction",
      name: "Right Shoulder Abduction",
    },
  },
  instructions: [
    "Make sure that your upper body is clearly visible on the screen.",
    "Make use of a towel/sponge to slide your arm against the wall.",
    "Face should be towards the camera.",
  ],
};

const shoulder_flexion = {
  id: "QSfsP0Wwm3XUbfI0nyDi",
  name: "Shoulder Flexion",
  tags: ["shoulder", "flexion"],
  color: "#afc3ff",
  cautions: [
    "An extension is when you move your arms and stick them out behind you.",
    "Those with shoulder injuries should initially steer clear of exercises that involve pressing movements or overhead movements",
  ],
  short_description:
    "Characterized by pain and stiffness in the shoulder joint.",
  description:
    "Shoulder flexion involves picking your arms up and raising them overhead. This gives an exercise to the joint and muscles of shoulder thus, helping to bring the motion back about the joint. Yes, it's that's simple!",
  types: {
    left: {
      id: "left-shoulder-flexion",
      name: "Left Shoulder Flexion",
    },
    right: {
      id: "right-shoulder-flexion",
      name: "Right Shoulder Flexion",
    },
  },
  instructions: [
    "Left-arm away from the camera (for left-hand shoulder flexion)",
    "Head away from the elbow.",
    "Make use of a towel/sponge to slide your arm against the wall.",
    "Arms should be straight and perpendicular to the wall.",
  ],
};

const elbow_flexion = {
  id: "WAtBat858CahWQdzxN4B",
  name: "Elbow Flexion",
  tags: ["elbow", "flexion"],
  color: "#FFEBB5",
  cautions: [
    "The elbow joint allows us to perform flexion–extension,values for flexion lie between 130° and 154°",
    "Dont exaggerate yourself to achieve maximum range.",
  ],
  short_description:
    "Swelling, stiffness and hindered motion after fracture/ burns.",
  description:
    "Elbow flexion aims at restoring elbow's extension motion. This gives an exercise to the elbow joint thus, helping to bring the motion back about the joint. Yay, you got this!",
  types: {
    left: {
      id: "left-elbow-flexion",
      name: "Left Elbow Flexion",
    },
    right: {
      id: "right-elbow-flexion",
      name: "Right Elbow Flexion",
    },
  },
  instructions: [
    "Perform this exercise while seated.",
    "Affected elbow should be away from the camera.",
    "Make sure the other elbow is still in the camera scope as shown in the image attached.",
    "Upper arm should rest on the table completely.",
  ],
};

const shoulder_elevation = {
  id: "IU2DBECRlUFtzc4VftOe",
  name: "Shoulder Elevation",
  tags: ["elbow", "elevation"],
  color: "#afc3ff",
  cautions: [
    "Exercise the right way. Warm up before you work out.",
    "Listen to your body. If your shoulder gets sore after any activity, don't ignore it. If the pain is serious and doesn't go away, see your doctor",
  ],
  short_description:
    "Stiffness and hindered motion of shoulder after elbow fracture.",
  description:
    "This exercise helps in improving the shoulder joint motion which gets hindered due to prolonged fracture plaster. Simply grasp your hand and elevate it to the maximum point where you can take it to. Yes! it's that simple.",
  types: {
    full: {
      id: "full-shoulder-elevation",
      name: "Shoulder Elevation",
    },
  },
  instructions: [
    "Make sure that your upper body is clearly visible on the screen.",
  ],
};

const dumbell_bicep_curl = {
  id: "et7RXuBsXRNZHhG92Jae",
  name: "Dumbell Bicep Curl",
  tags: ["diabetes", "bicep", "dumbell", "curls"],
  color: "#ffd2d9",
  cautions: [
    "Be sure to keep the body in a neutral alignment and avoid compensation when performing the movement.",
    "Shoulders should remain stable and fixed to the side of the body.",
    "The elbows should be a hinge joint and also be pinned to the side of the body.",
  ],
  short_description:
    "A lifestyle therapy for prevention and treatment of diabetes.",
  description:
    "The dumbbell bicep curls exercise is a weight-training exercise that works the muscles of the upper arm, and to a lesser extent, those of the lower arm. It's a great exercise for seeing results in strength and definition in your arms.",
  types: {
    left: {
      id: "left-dumbell-bicep-curl",
      name: "Left Dumbell Bicep Curl",
    },
    right: {
      id: "right-dumbell-bicep-curl",
      name: "Right Dumbell Bicep Curl",
    },
  },
  instructions: [
    "Perform this exercise while seated.",
    "The face should be towards the camera.",
    "Make sure that your upper body is clearly visible on the screen.",
  ],
};

const lunges = {
  id: "37t6GHylJeUZmGx1eMNg",
  name: "Lunges",
  tags: ["diabetes", "lunges", "legs"],
  color: "#FFEBB5",
  cautions: [
    "Keep your body upright through the movement",
    "Don't overextend your leg when you lunge forward, which can cause your back to arch.",
    "Keep your core engaged throughout the entire lunge.",
  ],
  short_description:
    "A lifestyle therapy for prevention and treatment of diabetes.",
  description:
    "Lunges refer to any position of the human body where one leg is positioned forward with knee bent and foot flat on the ground while the other leg is positioned behind. Strengthen your lower body and increase your core strength with lunges!",
  types: {
    full: {
      id: "full-lunges",
      name: "Lunges",
    },
  },
  instructions: [
    "Look towards your left.",
    "Make sure that your full body is clearly visible on the screen.",
  ],
};

const side_kicks = {
  id: "KEsdWebYLs0BPfDuEOur",
  name: "Side Kicks",
  tags: ["diabetes", "kicks", "legs", "cardio"],
  color: "#afc3ff",
  cautions: [
    "Keep your heel up and your toes down.",
    "Strike with the outside of the foot.",
    "Set the heel of your supporting leg towards the direction of your kick",
  ],
  short_description:
    "A lifestyle therapy for prevention and treatment of diabetes.",
  description:
    "This is a simple yet dynamic exercise that benefits the legs, glutes, and core muscles. You can expect to see improvements in your stability and an increase in muscle strength. Yes it's that helpful!",
  types: {
    left: {
      id: "left-side-kicks",
      name: "Left Side Kicks",
    },
    right: {
      id: "right-side-kicks",
      name: "Right Side Kicks",
    },
  },
  instructions: [
    "Perform this exercise in a standing position and you can take support from the table.",
    "Make sure that your full body is clearly visible on the screen.",
  ],
};

const squats = {
  id: "ZxgI2YvKjlpCWrIDe2OX",
  name: "Squats",
  tags: ["diabetes", "legs", "squats"],
  color: "#ffd2d9",
  cautions: [
    "Always push off from the heels.",
    "Avoid letting your knees get close together when you squat.",
    "Your knees should move out in a 30-degree angle following the line of your feet",
  ],
  short_description:
    "A lifestyle therapy for prevention and treatment of diabetes.",
  description:
    "Squats refer to crouching. Gift yourself with better flexibility and mobility, burn extra calories, and increase your core strength. Feel fresh once done!",
  types: {
    full: {
      id: "full_squats",
      name: "Squats",
    },
  },
  instructions: [
    "The face should be towards the camera.",
    "Make sure that your full body is clearly visible on the screen.",
  ],
};

const excercises = {
  hjal5KUjqNxNT9bDZw8n: shoulder_abduction,
  QSfsP0Wwm3XUbfI0nyDi: shoulder_flexion,
  WAtBat858CahWQdzxN4B: elbow_flexion,
  IU2DBECRlUFtzc4VftOe: shoulder_elevation,
  et7RXuBsXRNZHhG92Jae: dumbell_bicep_curl,
  "37t6GHylJeUZmGx1eMNg": lunges,
  KEsdWebYLs0BPfDuEOur: side_kicks,
  ZxgI2YvKjlpCWrIDe2OX: squats,
};

export const targets = {
  diabetes: {
    id: "diabetes",
    name: "Diabetes",
    src: diabetesImage,
  },
  shoulder: {
    id: "shoulder",
    name: "Shoulder",
    src: shoulderImage,
  },
  elbow: {
    id: "elbow",
    name: "Elbow",
    src: elbowImage,
  },
};

const excerciseFuncs = {
  "left-shoulder-abduction": leftShoulderAbduction,
  "right-shoulder-abduction": rightShoulderAbduction,
  "full-squats": squat,
  "left-side-kicks": leftSideKick,
  "right-side-kicks": rightSideKick,
  "left-elbow-kicks": leftElbowFlexion,
  "right-elbow-kicks": rightElbowFlexion,
  "left-shoulder-flexion": leftShoulderFlexion,
  "right-shoulder-flexion": rightShoulderFlexion,
  "full-lunges": lunge,
  "full-shoulder-elevation": shoulderElevation,
};

export const calculate = (excercise_id) => {
  return excerciseFuncs[excercise_id];
};

export default excercises;
