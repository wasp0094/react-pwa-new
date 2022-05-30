import { Route } from "react-router-dom";
import Explore from "./pages/explore/explore.component";
import ExcerciseDataContextProvider from "./context/ExcerciseDataContext";
import Routine from "./pages/routine/routine.component";
import ExcerciseDetails from "./components/excercise-details/excercise-details.component";
import ProtectedRoute from "./context/ProtectedRoute";

const PatientRoutes = [
  <Route
    key="explore"
    path="/explore/*"
    element={
      <ProtectedRoute>
        <Explore />
      </ProtectedRoute>
    }
  />,
  <Route
    key="details"
    path="/details/:excercise_id"
    element={
      <ProtectedRoute>
        <ExcerciseDetails />
      </ProtectedRoute>
    }
  />,
  <Route
    key="routine"
    path="/routine/*"
    element={
      <ProtectedRoute>
        <ExcerciseDataContextProvider>
          <Routine />
        </ExcerciseDataContextProvider>
      </ProtectedRoute>
    }
  />,
];

export default PatientRoutes;
