import { useState } from "react";
import { useSetTitle } from "../../hooks/setTitle";
import { getDoc } from "firebase/firestore";
import { useUserAuth } from "../../context/UserAuthContext";
import { useEffect } from "react";
import { Box } from "@material-ui/core";
import { Routes, Route } from "react-router-dom";
import PatientItem from "../../components/patient-item/patient-item.component";
import PatientDetails from "../../components/patient-details/patient-details.component";

function PatientsList() {
  let patients_data = [];
  const [loading, setLoading] = useState(true);
  const [patientsData, setPatientData] = useState([]);
  const { user } = useUserAuth();
  useSetTitle("Patients List");
  const getPatientDetails = async () => {
    user.patients.forEach(async (patient, idx) => {
      let patient_data = (await getDoc(patient)).data();
      patient_data = { ...patient_data, id: patient.id };
      const new_patients_data = [...patients_data, patient_data];
      patients_data = new_patients_data;
      setPatientData(new_patients_data);
    });
  };
  useEffect(() => {
    getPatientDetails();
  }, []);
  useEffect(() => {
    if (patientsData.length === user.patients?.length) setLoading(false);
  }, [patientsData]);
  return (
    <Box sx={{ width: "100%", paddingBottom: "3rem", paddingTop: "1rem" }}>
      {!loading ? (
        <div className="patients-list">
          {patientsData.map((patient, idx) => (
            <PatientItem key={idx} {...patient} />
          ))}
        </div>
      ) : (
        "Loading Your Patients"
      )}
    </Box>
  );
}

function PatientsPage() {
  return (
    <Routes>
      <Route exact path="/" element={<PatientsList />} />
      <Route path="/:patientID" element={<PatientDetails />} />
    </Routes>
  );
}

export default PatientsPage;
