import React, { useState, useEffect } from "react";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Box } from "@mui/system";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Stack } from "@mui/material";
import Slider from "@mui/material/Slider";
import excercises from "../../excercises/excercises";
import { firestore } from "../../firebase/firebase";
import {
  collection,
  addDoc,
  Timestamp,
  getDocs,
  doc,
} from "firebase/firestore";
import { useUserAuth } from "../../context/UserAuthContext";

function FormComponent({ preDefined, excerciseName }) {
  const [exercise, setExercise] = useState(excerciseName);
  const { user } = useUserAuth();

  const handleChange = (event) => {
    setExercise(event.target.value);
  };

  const [days, setDays] = useState(0);
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);

  //days , sets, reps get sent as strings to database

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(firestore, "prescriptionData"), {
        exercise: exercise,
        days: days,
        sets: sets,
        reps: reps,
        completed: false,
        user: doc(firestore, `users/${user.id}`),
        created: Timestamp.now(),
      });
    } catch (err) {
      alert(err);
    }
  };

  // const [prescriptions, setPrescriptions] = useState([]);

  // useEffect(() => {
  //   const getData = async () => {
  //     const formData = await getDocs(collection(firestore, "prescriptions"));
  //     // console.log(parkingData);
  //     setPrescriptions(
  //       formData.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
  //     );
  //     console.log(formData);
  //   };

  //   getData();
  // }, []);

  // for slider
  function valuetext(value) {
    return `${value}°C`;
  }

  return (
    <Box sx={{ margin: 2 }}>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Exercise</InputLabel>
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
              type="number"
              size="small"
              value={reps}
              onChange={(e) => setReps(e.target.value)}
            />
          </Stack>
          <Slider
            aria-label="Small steps"
            defaultValue={3}
            getAriaValueText={valuetext}
            step={1}
            marks
            min={1}
            max={10}
            valueLabelDisplay="auto"
          />
          <br />
          <Button variant="contained" color="primary" type="submit">
            Save
          </Button>
        </FormControl>
      </form>
    </Box>
  );
}

export default FormComponent;
