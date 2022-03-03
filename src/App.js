import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useUserAuth } from "./context/UserAuthContext";
import ProtectedRoute from "./context/ProtectedRoute";
import CreateAccount from "./pages/CreateAccount";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Login from "./pages/Login";
import Routine from "./pages/Routine";
import BottomNav from "./components/mobile/BottomNav";
import Excercise from "./components/start-excercise/excercise.component";
import Loading from "./components/loading/loading.component";

// login page, (home screen for mobile)

function App() {
  const { user, loadingUser } = useUserAuth();
  function LoginLoader() {
    return user ? <Navigate to="/home" /> : <Login />;
  }
  return (
    <>
      <Routes>
        <Route exact path="/" element={Loading(LoginLoader)(loadingUser)} />
        <Route path="/signup" element={<CreateAccount />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/excercise"
          element={
            <ProtectedRoute>
              <Excercise />
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
          path="/routine"
          element={
            <ProtectedRoute>
              <Routine />
            </ProtectedRoute>
          }
        />
      </Routes>
      {user && <BottomNav />}
    </>
  );
}

export default App;
