import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateAccount from "./CreateAccount";
import Profile from "./mobile/Profile";
import Home from "./mobile/Home";
import Explore from "./mobile/Explore";
import Login from './Login';

// login page, (home screen for mobile)

function App() {
  return (
    <>
      <Router basename='/react-pwa-new'>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/signup" element={<CreateAccount />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
