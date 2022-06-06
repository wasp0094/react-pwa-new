import React, { useEffect, useState } from "react";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Box } from "@mui/system";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Stack } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import excercises from "../../excercises/excercises";
import { setGoalstoDB } from "../../firebase/firebase";
import { useUserAuth } from "../../context/UserAuthContext";
import { getDoc } from "firebase/firestore";

function FormComponent({
  preDefined,
  excerciseName,
  handleClose,
  userId = "",
}) {
  const [exercise, setExercise] = useState(excerciseName);
  const [days, setDays] = useState(0);
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);
  const [types, setTypes] = useState(excercises[exercise]["types"]);
  const [patient, setPatient] = useState(userId);
  const { user } = useUserAuth();

  const handleChange = (event) => {
    setExercise(event.target.value);
  };

  const handlePatientChange = (event) => {
    setPatient(event.target.value);
  };

  let patients_data = [];
  const [patientsData, setPatientData] = useState([]);
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
    if (user?.isDoctor) getPatientDetails();
    else setPatient(user.id);
  }, []);

  useEffect(() => {
    setTypes(excercises[exercise]["types"]);
  }, [exercise]);

  const getType = () => {
    const [FULL, LEFT, RIGHT] = [0, 1, 2];
    if (left && right) return FULL;
    if (left) return LEFT;
    if (right) return RIGHT;
    return FULL;
  };

  const setGoalToDb = async () => {
    const goals = {
      user: patient,
      exercise: exercise,
      type: getType(),
      days: parseInt(days),
      sets: parseInt(sets),
      reps: parseInt(reps),
      completed: false,
    };
    await setGoalstoDB(goals);
  };

  const handleSetGoal = async (e) => {
    handleClose();
    await setGoalToDb();
  };

  const handleAddMore = async (e) => {
    setExercise(excerciseName);
    setDays(0);
    setSets(0);
    setReps(0);
    setLeft(false);
    setRight(false);
    await setGoalToDb();
  };

  return (
    <Box sx={{ margin: 2 }}>
      <form>
        <FormControl fullWidth>
          {!userId && (
            <>
              <InputLabel id="patient-name">Patient</InputLabel>
              <Select
                disabled={preDefined}
                labelId="patientId"
                id="patient"
                value={patient.displayName}
                label="Patient"
                onChange={handlePatientChange}
                size="small"
              >
                {patientsData.map((patient, idx) => (
                  <MenuItem value={patient.id} key={idx}>
                    {patient.displayName}
                  </MenuItem>
                ))}
              </Select>
              <br />
            </>
          )}
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="exercise-name">Exercise</InputLabel>
          <Select
            disabled={preDefined}
            labelId="exercise-name"
            id="exercise"
            value={exercise}
            label="Exercise"
            onChange={handleChange}
            size="small"
          >
            {Object.keys(excercises).map((excercise_id, idx) => (
              <MenuItem value={excercise_id} key={idx}>
                {excercises[excercise_id].name}
              </MenuItem>
            ))}
          </Select>
          <br />
          <Stack direction="row" spacing={2}>
            <TextField
              id="days-input"
              name="days"
              label="Days"
              type="number"
              placeholder="0"
              size="small"
              value={days}
              onChange={(e) => setDays(e.target.value)}
            />
            <br />
            <TextField
              id="sets-input"
              name="sets"
              label="Sets"
              placeholder="0"
              type="number"
              size="small"
              value={sets}
              onChange={(e) => setSets(e.target.value)}
            />
            <br />
            <TextField
              id="reps-input"
              name="reps"
              label="Reps"
              placeholder="0"
              type="number"
              size="small"
              value={reps}
              onChange={(e) => setReps(e.target.value)}
            />
          </Stack>
          {/* <Slider
            aria-label="Small steps"
            defaultValue={3}
            getAriaValueText={valuetext}
            step={1}
            marks
            min={1}
            max={10}
            valueLabelDisplay="auto"
          /> */}
          {!types?.full && (
            <Stack direction="row" spacing={2} style={{ paddingTop: "1rem" }}>
              <FormControlLabel
                control={
                  <Checkbox checked={left} onChange={() => setLeft(!left)} />
                }
                label="Left"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={right} onChange={() => setRight(!right)} />
                }
                label="Right"
              />
            </Stack>
          )}
          <br />
          {!preDefined ? (
            <Stack direction="row" style={{ justifyContent: "space-between" }}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  handleClose();
                }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleAddMore()}
              >
                Add more
              </Button>
            </Stack>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleSetGoal()}
            >
              Set Goal
            </Button>
          )}
        </FormControl>
      </form>
    </Box>
  );
}

export default FormComponent;
