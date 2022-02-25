import React, { useState } from 'react';
import { useUserAuth } from './context/UserAuthContext';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Stack } from '@mui/material';
import { Link } from "react-router-dom";

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
            <h2>Create Account</h2>
            <p>Create a new account</p>
            {error && <p>{error}</p>}
            <Stack spacing={2}>
              {/* <TextField required id="standard-basic" label="Full Name" variant="standard" /> */}
              <TextField id="standard-basic" label="Email" variant="standard" onChange={(e) => setEmail(e.target.value)} />
              <TextField id="standard-basic" label="Password" variant="standard" onChange={(e) => setPassword(e.target.value)} />
              {/* <TextField required id="standard-basic" label="Confirm Password" variant="standard" /> */}
              <br />
              <Button variant="contained" type='Submit'>Create Account</Button>
            </Stack>
            <p>Already have an account? <Link to="/">Login</Link></p>
          </Box>
        </form>
      </div>
    </>
  );
}

export default CreateAccount;
