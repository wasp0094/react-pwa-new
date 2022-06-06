import { Routes } from "react-router-dom";

import { useUserAuth } from "./context/UserAuthContext";
import BottomNav from "./components/bottom-nav/bottom-nav.component";
import PatientRoutes from "./PatientRoutes";
import GeneralRoutes from "./GeneralRoutes";
import DoctorRoutes from "./DoctorRoutes";
import TitleBar from "./components/title-bar/title-bar.component";
import "./App.css";

function App() {
  const { user, loadingUser } = useUserAuth();
  return (
    <div className="app">
      {user && <TitleBar />}
      <Routes>
        {GeneralRoutes({ loadingUser, user })}
        {DoctorRoutes}
        {PatientRoutes}
      </Routes>
      {user && <BottomNav />}
    </div>
  );
}

export default App;
