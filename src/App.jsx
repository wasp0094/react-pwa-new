import React from "react";
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

function LoginLoader({ user }) {
  return user ? <Navigate to="/home" replace /> : <Login />;
}

function CreateAccountLoader({ user }) {
  return user ? <Navigate to="/home" replace /> : <CreateAccount />;
}

function App() {
  const { user, loadingUser } = useUserAuth();
  return (
    <>
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
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/explore"
          element={
            <ProtectedRoute>
              <Explore />
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
      </Routes>
      {user && <BottomNav />}
    </>
  );
}

export default App;
