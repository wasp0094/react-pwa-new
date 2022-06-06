import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../../firebase/firebase";
import { Button } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import getRoutines from "../../utilities/getRoutines";
import createDataset from "../../utilities/createDataset";
import DailyRangeChart from "../daily-range-chart/daily-range-chart.component";
import FormPopup from "../form-popup/form-popup.component";
import { useSetTitle } from "../../hooks/setTitle";

function PatientDetails() {
  const { patientID } = useParams();
  function PatientDetailsPage({ handleModalOpen }) {
    const [load, setLoad] = useState(true);
    const [routineDetails, setRoutineDetails] = useState([]);
    const [patient, setPatient] = useState({});
    useSetTitle("Patient Details");
    const getPatientsProgres = async () => {
      const patientRef = doc(firestore, `users/${patientID}`);
      const patient_data = (await getDoc(patientRef)).data();
      setPatient(patient_data);
      await getRoutines(patient_data.routine, setRoutineDetails);
    };
    useEffect(() => {
      getPatientsProgres();
    }, []);
    useEffect(() => {
      if (routineDetails.length === patient.routine?.length) setLoad(false);
    }, [routineDetails]);
    return (
      <div className="patient-details">
        {!load ? (
          <>
            {routineDetails.length ? (
              <>
                {routineDetails.map((routine, idx) => (
                  <DailyRangeChart key={idx} data={createDataset(routine)} />
                ))}
              </>
            ) : (
              "No Progress Yet"
            )}
            <Button
              variant="contained"
              onClick={handleModalOpen}
              startIcon={<AssignmentIcon />}
            >
              Set Patient Prescription
            </Button>
          </>
        ) : (
          "Loading Patients's Progress"
        )}
        <br />
      </div>
    );
  }
  return FormPopup(PatientDetailsPage)({ userId: patientID });
}

export default PatientDetails;
