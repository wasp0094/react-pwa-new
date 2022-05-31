// MaterialUI imports
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
// Dependencies imports
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./results.styles.css";
import { useExcerciseData } from "../../context/ExcerciseDataContext";
import { INITIAL_DATA } from "../../context/ExcerciseDataContext";
import { updateRoutineDB } from "../../firebase/firebase";

function Results() {
  const navigate = useNavigate();
  const { excerciseVars, setExcerciseVars } = useExcerciseData();

  const updateRoutine = async () => {
    await updateRoutineDB(excerciseVars);
  };
  useEffect(() => {
    updateRoutine();
    return function cleanup() {
      setExcerciseVars(INITIAL_DATA);
    };
  }, []);
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
