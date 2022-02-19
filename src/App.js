import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserAuthContextProvider } from './context/UserAuthContext';
import ProtectedRoute from './context/ProtectedRoute';
import CreateAccount from "./CreateAccount";
import Profile from "./mobile/Profile";
import Home from "./mobile/Home";
import Explore from "./mobile/Explore";
import Login from './Login';

// login page, (home screen for mobile)

function App() {
  return (
    <>
      <UserAuthContextProvider>
        <Router basename='/react-pwa-new'>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/signup" element={<CreateAccount />} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="/home" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
          </Routes>
        </Router>
      </UserAuthContextProvider>
    </>
  );
}

export default App;
