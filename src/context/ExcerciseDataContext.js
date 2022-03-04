import { createContext, useState, useContext } from "react";

const excerciseDataContext = createContext();

export default function ExcerciseDataContextProvider({ children }) {
  let [excerciseVars, setExcerciseVars] = useState({
    type: "",
    setsCompleted: 0,
    repsCompleted: 0,
    dayRange: 0,
  });
  return (
    <excerciseDataContext.Provider value={{ excerciseVars, setExcerciseVars }}>
      {children}
    </excerciseDataContext.Provider>
  );
}

export function useExcerciseData() {
  return useContext(excerciseDataContext);
}
