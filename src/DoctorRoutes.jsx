import { Route } from "react-router-dom";
import ProtectedRoute from "./context/ProtectedRoute";
import PatientsList from "./pages/patients/patients.component";

const DoctorRoutes = [
  <Route
    key="patients"
    path="/patients/*"
    element={
      <ProtectedRoute>
        <PatientsList />
      </ProtectedRoute>
    }
  />,
];

export default DoctorRoutes;
