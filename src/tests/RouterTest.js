import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import SignIn from './SignIn';
import SignUp from './SignUp';

function RouterTest() {
    return (
        <main>
            <Router>
                <Routes>
                    <Route exact path='/' element={<HomeScreen />} />
                    <Route path='/signin' element={<SignIn />} />
                    <Route path='/signup' element={<SignUp />} />
                    
                </Routes>
            </Router>
        </main>
    );
}

export default RouterTest;