import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import CreateAccount from "./CreateAccount";
import Home from "./mobile/Home";

ReactDOM.render(
  <React.StrictMode>
<<<<<<< HEAD
    {/* <BrowserRouter> */}
      <RouterTest />
    {/* </BrowserRouter> */}
=======
    
      <CreateAccount />
    
>>>>>>> 6701ed256e29f7e6715114a8081843aad323f4cb
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
