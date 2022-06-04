import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../../firebase/firebase";
import getRoutines from "../../utilities/getRoutines";
import createDataset from "../../utilities/createDataset";
import DailyRangeChart from "../daily-range-chart/daily-range-chart.component";

function PatientDetails() {
  const { patientID } = useParams();
  const [load, setLoad] = useState(true);
  const [routineDetails, setRoutineDetails] = useState([]);
  const [patient, setPatient] = useState({});
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
      {!load
        ? routineDetails.map((routine, idx) => (
            <DailyRangeChart key={idx} data={createDataset(routine)} />
          ))
        : "Loading Patients's Progress"}
    </div>
  );
}

export default PatientDetails;
