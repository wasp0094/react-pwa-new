import { Navigate, Route } from "react-router-dom";

import ProtectedRoute from "./context/ProtectedRoute";

import CreateAccount from "./pages/create-account/create-account.component";
import Profile from "./pages/profile/profile.component";
import Home from "./pages/home/home.component";
import Loading from "./components/loading/loading.component";
import VideoCall from "./components/video-call/video-call.component";
import Login from "./pages/login/login.component";

function LoginLoader({ user }) {
  return user ? <Navigate to="/home" replace /> : <Login />;
}

function CreateAccountLoader({ user }) {
  return user ? <Navigate to="/home" replace /> : <CreateAccount />;
}

const GeneralRoutes = ({ loadingUser, user }) => [
  <Route
    exact
    key="/"
    path="/"
    element={Loading(LoginLoader)({
      isLoading: loadingUser,
      user,
    })}
  />,
  <Route
    key="signup"
    path="/signup"
    element={Loading(CreateAccountLoader)({
      isLoading: loadingUser,
      user,
    })}
  />,
  <Route
    key="profile"
    path="/profile"
    element={
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    }
  />,
  <Route
    key="chat"
    path="/chat"
    element={
      <ProtectedRoute>
        <VideoCall />
      </ProtectedRoute>
    }
  />,
  <Route
    key="home"
    path="/home/*"
    element={
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    }
  />,
];

export default GeneralRoutes;
