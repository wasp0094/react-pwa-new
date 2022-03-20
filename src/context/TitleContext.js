import { createContext, useState, useContext } from "react";

const titleBarContext = createContext();
export default function TitleBarContextProvider({ children }) {
  const [title, setTitle] = useState("PROCTIFY.me");
  const [visible, setVisible] = useState(true);
  return (
    <titleBarContext.Provider value={{ setTitle, title, visible, setVisible }}>
      {children}
    </titleBarContext.Provider>
  );
}

export function useTitleBar() {
  return useContext(titleBarContext);
}
