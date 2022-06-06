import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import QRCode from "qrcode";
// import axios from "axios";
import {
  doc,
  getDoc,
  getFirestore,
  setDoc,
  writeBatch,
  collection,
  Timestamp,
  updateDoc,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore();
export const storage = getStorage(app);
export const auth = getAuth(app);
export default app;

export async function createUserObject(userAuth, data) {
  if (!userAuth) return;
  const uid = userAuth.uid;
  const userRef = doc(firestore, `users/${uid}`);
  const userSnapshot = await getDoc(userRef);
  if (!userSnapshot.exists()) {
    const { email, displayName } = userAuth;
    const createdAt = new Date(),
      routine = [];
    if (data && data.isDoctor) {
      const obj = {
        id: userAuth.uid,
        name: data.displayName,
      };
      // console.log(JSON.stringify(obj));
      data.qrCode = await QRCode.toDataURL(JSON.stringify(obj));
    }
    try {
      setDoc(userRef, { displayName, uid, email, routine, createdAt, ...data });
    } catch (err) {
      console.log(err);
    }
  }
  return userRef;
}

export const setGoalstoDB = async (goals) => {
  try {
    const userRef = doc(firestore, `users/${goals.user}`);
    const userSnap = (await getDoc(userRef)).data();
    const docRef = await addDoc(collection(firestore, "prescriptions"), {
      exercise: doc(firestore, `excercises/${goals.exercise}`),
      type: goals.type,
      days: goals.days,
      sets: goals.sets,
      reps: goals.reps,
      completed: goals.completed,
      user: userRef,
      routine: Array(parseInt(goals.days)).fill({
        completed: false,
        sets: 0,
        reps: 0,
        dailyRange: 0,
      }),
      created: Timestamp.now(),
    });
    const routine = userSnap.routine;
    await updateDoc(userRef, { routine: [...routine, docRef] });
  } catch (err) {
    alert(err);
  }
};

export const addCollectionsAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(firestore, collectionKey);
  const batch = writeBatch(firestore);
  Object.keys(objectsToAdd).forEach((key) => {
    const docRef = doc(collectionRef, key);
    batch.set(docRef, { ...objectsToAdd[key], id: docRef.id });
  });
  await batch.commit();
};

export const updateRoutineDB = async (excerciseVars) => {
  const { requiredReps, requiredSets, routine_id, dayRange } = excerciseVars;
  const routine_item_ref = doc(firestore, `prescriptions/${routine_id}`);
  const routine_item = (await getDoc(routine_item_ref)).data();
  const dayNo = Math.floor(
    (new Date() - routine_item.created.toDate()) / 86400000
  );
  const dayValues = {
    completed: true,
    reps: requiredReps,
    sets: requiredSets,
    dailyRange: dayRange || 135.0,
  };
  const updatedRoutineArray = routine_item.routine.map((item, idx) =>
    idx === dayNo ? dayValues : item
  );
  const updated_routine_item = {
    ...routine_item,
    routine: updatedRoutineArray,
    completed: dayNo === updatedRoutineArray.length ? true : false,
  };
  await updateDoc(routine_item_ref, updated_routine_item);
};

export const allocateDoctor = async (doctorId, userId) => {
  try {
    let docRef = doc(firestore, `users/${doctorId}`);
    let userRef = doc(firestore, `users/${userId}`);
    let user = (await getDoc(userRef)).data();
    let doctor = (await getDoc(docRef)).data();
    // console.log(user);
    const doctor_patients = doctor.patients || [];
    const updated_doctor = {
      ...doctor,
      patients: [...doctor_patients, userRef],
    };
    await updateDoc(docRef, updated_doctor);
    const updated_user = {
      ...user,
      doctorAllocatted: true,
      doctorId: docRef,
    };
    await updateDoc(userRef, updated_user);
  } catch (err) {
    console.log(err);
  }
};

// export async function createUserObject(userAuth, data) {
//   if (!userAuth) return;
//   const userRef = doc(firestore, `users/${userAuth.uid}`);
//   const res = await axios.post("http://localhost:4000/create-user", {
//     userAuth: userAuth,
//     data: data,
//   });
//   return userRef;
// }

// export const setGoalstoDB = async (goals) => {
//   if(!goals) return;
//   const res = await axios.post("http://localhost:4000/set-goals", {
//     goals: goals,
//   });
// };

// export const updateRoutineDB = async (excerciseVars) => {
//   if(!excerciseVars) return;
//   const res = await axios.post("http://localhost:4000/update-routine", {
//     excerciseVars: excerciseVars,
//   });
// };
