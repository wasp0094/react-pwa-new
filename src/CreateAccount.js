import React, { useState } from 'react';
import { useUserAuth } from './context/UserAuthContext';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
// import "./createAccount.css";
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
      setError(error.message);
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
            {error && <p>{error}</p>}
            <Stack spacing={2}>
            <Box className = "input-detail" sx={{ display: 'flex', alignItems: 'flex-end' }}> 
                                <FaceIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField id="input-with-sx" label="Full Name" variant="standard" type='text' style={{width:"15rem"}}/>
                            </Box>
              <Box className = "input-detail" sx={{ display: 'flex', alignItems: 'flex-end' }}> 
                                <EmailOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField id="input-with-sx" label="Email" variant="standard" type='email' onChange={(e) => setEmail(e.target.value)}  style={{width:"15rem"}}/>
                            </Box>
              
                            <Box className = "input-detail" sx={{ display: 'flex', alignItems: 'flex-end' }}> 
                                <LockOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField id="input-with-sx" label="Password" variant="standard" type='password' onChange={(e) => setPassword(e.target.value)} style={{width:"15rem"}}> </TextField>     
                            </Box>
              <Box className = "input-detail" sx={{ display: 'flex', alignItems: 'flex-end' }}> 
                                <LockOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField id="input-with-sx" label="Confirm Password" variant="standard" type='password' onChange={(e) => setPassword(e.target.value)} style={{width:"15rem"}}> </TextField>     
                            </Box>
              <br />
              <Button variant="contained" className = "account-button login-btn" style={{marginTop: "0.6rem", borderRadius: "30px" }} type='Submit'>Create Account</Button>
            </Stack>
            <p className = "sign-up" style={{margin: "3.5rem auto 0", textAlign: 'center', fontSize: '0.9rem', fontFamily: "Fredoka One", color:' #fa7d34'}}>Already have an account? <Link className = "link" to="/">Login</Link></p>
           </div>
          </Box>
        </form>
      </div>
    </>
  );
}

export default CreateAccount;
