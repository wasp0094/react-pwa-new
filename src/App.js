import React from "react";
import { Route, Routes } from "react-router-dom";
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

// login page, (home screen for mobile)

function App() {
  const { user } = useUserAuth();
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/signup" element={<CreateAccount />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/excercise" element={<Excercise />} />
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/routine" element={<Routine />} />
      </Routes>
      {user && <BottomNav />}
    </>
  );
}

export default App;
