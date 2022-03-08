import { createContext, useState, useContext } from "react";

const excerciseDataContext = createContext();
export const INITIAL_DATA = {
  task: "",
  type: "",
  setsCompleted: 0,
  repsCompleted: 0,
  dayRange: 0,
  requiredSets: 2,
  requiredReps: 2,
};
export default function ExcerciseDataContextProvider({ children }) {
  let [excerciseVars, setExcerciseVars] = useState(INITIAL_DATA);
  return (
    <excerciseDataContext.Provider value={{ excerciseVars, setExcerciseVars }}>
      {children}
    </excerciseDataContext.Provider>
  );
}

export function useExcerciseData() {
  return useContext(excerciseDataContext);
}
