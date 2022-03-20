import React, { useEffect } from "react";
import { useExcerciseData } from "../../context/ExcerciseDataContext";
import "./results.styles.css";
import { INITIAL_DATA } from "../../context/ExcerciseDataContext";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { useNavigate } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { firestore } from "../../firebase/firebase";

function Results() {
  const navigate = useNavigate();
  const { excerciseVars, setExcerciseVars } = useExcerciseData();
  const { requiredReps, requiredSets, routine_id, dayRange } = excerciseVars;
  const updateRoutine = async () => {
    const routine_item_ref = doc(firestore, `prescriptions/${routine_id}`);
    const routine_item = (await getDoc(routine_item_ref)).data();
    const dayNo = Math.floor(
      (new Date() - routine_item.created.toDate()) / 86400000
    );
    const dayValues = {
      completed: true,
      reps: requiredReps,
      sets: requiredSets,
      dailyRange: dayRange || 135.0,
    };
    const updatedRoutineArray = routine_item.routine.map((item, idx) =>
      idx === dayNo ? dayValues : item
    );
    const updated_routine_item = {
      ...routine_item,
      routine: updatedRoutineArray,
      completed: dayNo === updatedRoutineArray.length ? true : false,
    };
    console.log(updated_routine_item);
    await updateDoc(routine_item_ref, updated_routine_item);
  };
  useEffect(() => {
    console.log(excerciseVars);
    updateRoutine();
  }, []);
  useEffect(() => {
    return function cleanup() {
      setExcerciseVars(INITIAL_DATA);
    };
  });
  return (
    <div className="results">
      <div className="explore-item card">
        <Accordion sx={{ background: "pink" }}>
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            className="card-header"
          >
            <div className="card-content">
              <h2>Result</h2>
              <div className="results-box">
                <h4>Day range : </h4> <h5>{excerciseVars.dayRange}</h5>
                <br />
                <h4>Reps : </h4>
                <h5>{excerciseVars.repsCompleted}</h5>
                <br />
                <h4>Sets : </h4>
                <h5>{excerciseVars.setsCompleted}</h5>
                <br />
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <button
              className="explore-item-button"
              onClick={() => {
                navigate(`/routine`);
              }}
            >
              Go to Routine Section
            </button>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default Results;
