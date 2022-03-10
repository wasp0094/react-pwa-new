import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  doc,
  getDoc,
  getFirestore,
  setDoc,
  writeBatch,
  collection,
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

export async function createUserObject(userAuth, data) {
  if (!userAuth) return;
  const userRef = doc(firestore, `users/${userAuth.uid}`);
  const userSnapshot = await getDoc(userRef);
  if (!userSnapshot.exists()) {
    const { email, displayName } = userAuth;
    const createdAt = new Date(),
      routine = [];
    try {
      setDoc(userRef, { displayName, email, routine, createdAt, ...data });
    } catch (err) {
      console.log(err);
    }
  }
  return userRef;
}

export const auth = getAuth(app);
export default app;

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
