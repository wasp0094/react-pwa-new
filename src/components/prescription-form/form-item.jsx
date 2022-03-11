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
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Slider from "@mui/material/Slider";

import FormControlLabel from "@mui/material/FormControlLabel";
import excercises from "../../excercises/excercises";
import { firestore } from "../../firebase/firebase";
import {
  collection,
  addDoc,
  Timestamp,
  doc,
  updateDoc,
} from "firebase/firestore";
import { useUserAuth } from "../../context/UserAuthContext";

function FormComponent({ preDefined, excerciseName, handleClose }) {
  const [exercise, setExercise] = useState(excerciseName);
  const [days, setDays] = useState(0);
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);
  const [types, setTypes] = useState(excercises[exercise]["types"]);
  const { user } = useUserAuth();

  const handleChange = (event) => {
    setExercise(event.target.value);
  };

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

  //days , sets, reps get sent as strings to database

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleClose();
    try {
      const userRef = doc(firestore, `users/${user.id}`);
      const docRef = await addDoc(collection(firestore, "prescriptions"), {
        exercise: doc(firestore, `excercises/${exercise}`),
        type: getType(),
        days: days,
        sets: sets,
        reps: reps,
        completed: false,
        user: userRef,
        created: Timestamp.now(),
      });
      const routine = user?.routine || [];
      await updateDoc(userRef, { routine: [...routine, docRef] });
    } catch (err) {
      alert(err);
    }
  };

  function valuetext(value) {
    return `${value}°C`;
  }
  return (
    <Box sx={{ margin: 2 }}>
      <form onSubmit={handleSubmit}>
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

          <Button variant="contained" color="primary" type="submit">
            Save
          </Button>
        </FormControl>
      </form>
    </Box>
  );
}

export default FormComponent;
