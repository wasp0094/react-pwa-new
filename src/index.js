import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import TitleBarContextProvider from "./context/TitleContext";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <UserAuthContextProvider>
        <TitleBarContextProvider>
          <App />
        </TitleBarContextProvider>
      </UserAuthContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
