import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { useUserAuth } from "./context/UserAuthContext";
import ProtectedRoute from "./context/ProtectedRoute";
import ExcerciseDataContextProvider from "./context/ExcerciseDataContext";

import CreateAccount from "./pages/create-account/create-account.component";
import Profile from "./pages/profile/profile.component";
import Home from "./pages/home/home.component";
import Explore from "./pages/explore/explore.component";
import Login from "./pages/login/login.component";
import Routine from "./pages/routine/routine.component";
import BottomNav from "./components/bottom-nav/bottom-nav.component";
import Loading from "./components/loading/loading.component";
import FormPopup from "./components/form-popup/form-popup.component";
import VideoCall from "./components/video-call/video-call.component";

import ExcerciseDetails from "./components/excercise-details/excercise-details.component";
// import { addCollectionsAndDocuments } from "./firebase/firebase";
// import excercises from "./excercises/excercises";
import TitleBar from "./components/title-bar/title-bar.component";
import "./App.css";

function LoginLoader({ user }) {
  return user ? <Navigate to="/home" replace /> : <Login />;
}

function CreateAccountLoader({ user }) {
  return user ? <Navigate to="/home" replace /> : <CreateAccount />;
}

function App() {
  useEffect(() => {
    // addCollectionsAndDocuments("excercises", excercises);
  }, []);
  const { user, loadingUser } = useUserAuth();
  return (
    <div className="app">
      {user && <TitleBar />}
      <Routes>
        <Route
          exact
          path="/"
          element={Loading(LoginLoader)({
            isLoading: loadingUser,
            user,
          })}
        />
        <Route
          path="/signup"
          element={Loading(CreateAccountLoader)({
            isLoading: loadingUser,
            user,
          })}
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/home/*"
          element={<ProtectedRoute>{FormPopup(Home)()}</ProtectedRoute>}
        />
        <Route
          path="/explore/*"
          element={
            <ProtectedRoute>
              <Explore />
            </ProtectedRoute>
          }
        />
        <Route
          path="/details/:excercise_id"
          element={
            <ProtectedRoute>
              <ExcerciseDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/routine/*"
          element={
            <ProtectedRoute>
              <ExcerciseDataContextProvider>
                <Routine />
              </ExcerciseDataContextProvider>
            </ProtectedRoute>
          }
        />
        <Route
          path="/chat"
          element={
            <ProtectedRoute>
              <VideoCall />
            </ProtectedRoute>
          }
        />
      </Routes>
      {user && <BottomNav />}
    </div>
  );
}

export default App;
