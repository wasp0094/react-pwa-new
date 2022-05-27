import { createContext, useEffect, useState, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, createUserObject } from "../firebase/firebase";
import { useLocation, useNavigate } from "react-router-dom";
import { onSnapshot } from "firebase/firestore";
const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  async function signUp(email, password, data) {
    setLoadingUser(true);
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await createUserObject(user, data);
  }

  function logIn(email, password) {
    setLoadingUser(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  function signInWithGoogle() {
    setLoadingUser(true);
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const userRef = await createUserObject(currentUser);
        onSnapshot(userRef, (snapshot) => {
          setUser({ id: snapshot.id, ...snapshot.data() });
          setLoadingUser(false);
          if (user) navigate(location.pathname, { replace: true });
        });
      } else {
        setLoadingUser(false);
        setUser(null);
      }
    });
    return unsubscribe;
    // eslint-disable-next-line
  }, []);
  return (
    <userAuthContext.Provider
      value={{
        loadingUser,
        user,
        signUp,
        logIn,
        logOut,
        signInWithGoogle,
        setLoadingUser,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
