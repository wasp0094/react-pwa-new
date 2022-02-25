import React, { useState } from 'react';
import { useUserAuth } from './context/UserAuthContext';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Stack } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
//import GoogleButton from 'react-google-button';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { logIn, signInWithGoogle } = useUserAuth();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await logIn(email, password);
            navigate('/profile');
        } catch (error) {
            setError(error.message);
        }
    };

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try {
            await signInWithGoogle();
            navigate('/profile');
        } catch (error) { setError(error.message); }
    };
    return (
        <>
            <div className="App">
                <form onSubmit={handleSubmit}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h2>Login</h2>
                        <p>Please sign in to continue</p>
                        {error && <p>{error}</p>}
                        <Stack spacing={2}>
                            <TextField required id="standard-basic" label="Username" variant="standard" onChange={(e) => setEmail(e.target.value)} />
                            <TextField required id="standard-basic" label="Password" variant="standard" onChange={(e) => setPassword(e.target.value)} />
                            <p>Forgot Password?</p>
                            <br />
                            <Button variant="contained" type='Submit'>Login</Button>
                            <hr />
                            {/* <GoogleButton /> */}
                            <Button variant="contained" type='Submit' onClick={handleGoogleSignIn}>Sign Up with Google</Button>
                        </Stack>
                        <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
                    </Box>
                </form>
            </div>
        </>
    );
}

export default Login
