import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./index.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import CreateAccount from "./CreateAccount";
import Profile from "./mobile/Profile";
import BottomNav from "./mobile/BottomNav";
import Home from "./mobile/Home";
import Explore from "./mobile/ExploreCard";
import PhysioCard from "./mobile/PhysioCard";
import ExploreCard from "./mobile/ExploreCard";

ReactDOM.render(
  <React.StrictMode>
    <Router basename='/react-pwa-new'>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/signup" element={<CreateAccount />} />
        <Route path="/home" element={<BottomNav />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/homescreen" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/explorecard" element={<ExploreCard />} />
        <Route path="/card" element={<PhysioCard />} />
      </Routes>
    </Router>
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
