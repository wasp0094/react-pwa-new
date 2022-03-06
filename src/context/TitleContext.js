import { createContext, useState, useContext } from "react";

const titleBarContext = createContext();
export default function TitleBarContextProvider({ children }) {
  let [title, setTitle] = useState("PROCTIFY.me");
  return (
    <titleBarContext.Provider value={{ setTitle, title }}>
      {children}
    </titleBarContext.Provider>
  );
}

export function useTitleBar() {
  return useContext(titleBarContext);
}
