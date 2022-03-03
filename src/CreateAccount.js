import React, { useState } from 'react';
import { useUserAuth } from './context/UserAuthContext';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Stack } from '@mui/material';
import { Link } from "react-router-dom";
import blob from './assets/blob1.svg';
import "./login.css";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FaceIcon from '@mui/icons-material/Face';

// create account page, (for mobile)

function CreateAccount() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signUp } = useUserAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
    } catch (error) {
      setError("Failed to create a new account.");
    }
  };

  return (
    <>
      <div className="App">
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div className= "blob-box">
                <img className = "top-blob" src={blob} alt='blob' />
              </div>
              <div className = "login-content">
                <h2>Create Account</h2>
                <p className = "text1">Create a new account</p>
                <Stack className = "details" spacing={2}>
                  <Box className = "input-field" sx={{ display: 'flex', alignItems: 'flex-end' }}> 
                    <FaceIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField id="input-with-sx" label="Full Name" variant="standard" type='text' style={{width:"12rem"}}/>
                  </Box>
                  <Box className = "input-field" sx={{ display: 'flex', alignItems: 'flex-end' }}> 
                    <EmailOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField id="input-with-sx" label="Email" variant="standard" type='email' onChange={(e) => setEmail(e.target.value)}  style={{width:"12rem"}}/>
                  </Box>
                  <Box className = "input-field" sx={{ display: 'flex', alignItems: 'flex-end' }}> 
                    <LockOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField id="input-with-sx" label="Password" variant="standard" type='password' onChange={(e) => setPassword(e.target.value)} style={{width:"12rem"}}> </TextField>     
                  </Box>
                  <Box className = "input-field" sx={{ display: 'flex', alignItems: 'flex-end' }}> 
                    <LockOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField id="input-with-sx" label="Confirm Password" variant="standard" type='password' onChange={(e) => setPassword(e.target.value)} style={{width:"12rem"}}> </TextField>     
                  </Box>
                  <br />
                  <div className = 'error-msg' style={{marginTop: '0.2rem', marginLeft: '0.2rem'}} >
                    {error && <p className='error-text' style={{color: 'red', fontSize: '0.8rem', fontWeight:'600'}}>     {error}</p>}
                  </div>
                  <Button variant="contained" className = "account-button login-btn" style={{marginTop: "0.6rem", borderRadius: "30px" }} type='Submit'>Create Account</Button>
                </Stack>
                <p className = "sign-up" style={{margin: "3rem auto 0", textAlign: 'center', fontSize: '0.9rem', fontFamily: "Ubuntu", color:' #fa7d34'}}>Already have an account? <Link className = "link" to="/">Login</Link></p>
              </div>
          </Box>
        </form>
      </div>
    </>
  );
}

export default CreateAccount;
