import { useState } from "react";
import { useSetTitle } from "../../hooks/setTitle";
import { getDoc } from "firebase/firestore";
import { useUserAuth } from "../../context/UserAuthContext";
import { useEffect } from "react";
import { Box } from "@material-ui/core";

function PatientsList() {
  let patients_data = [];
  const [loading, setLoading] = useState(true);
  const [patientsData, setPatientData] = useState([]);
  const { user } = useUserAuth();
  useSetTitle("Patients List");
  const getPatientDetails = async () => {
    user.patients.forEach(async (patient, idx) => {
      const patient_data = (await getDoc(patient)).data();
      const new_patients_data = [...patients_data, patient_data];
      patients_data = new_patients_data;
      setPatientData(new_patients_data);
    });
  };
  useEffect(() => {
    getPatientDetails();
  }, []);
  useEffect(() => {
    if (patientsData.length === user.patients?.length) {
      setLoading(false);
    }
  }, [patientsData]);
  return (
    <Box sx={{ width: "100%" }}>
      {!loading ? (
        <div className="patients-list">
          {patientsData.map((patient, idx) => (
            <p key={idx}>{patient.displayName} </p>
          ))}
        </div>
      ) : (
        "Loading Your Patients"
      )}
    </Box>
  );
}

export default PatientsList;
