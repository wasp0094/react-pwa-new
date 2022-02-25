import React from 'react';
import './App.css';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Stack } from '@mui/material';
import { Link } from "react-router-dom";

// login page, (home screen for mobile)

function App() {
  return (
    <>
      <div className="App">
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2>Login</h2>
        <p>Please sign in to continue</p>
        <Stack spacing={2}>
          <TextField required id="standard-basic" label="Username" variant="standard" />
          <TextField required id="standard-basic" label="Password" variant="standard" />
          <p>Forgot Password?</p>
          <br />
          <Button variant="contained"><Link to ="home">Login</Link></Button>
        </Stack>
      </Box>
      <p>Don't have an account? <Link to ="/signup">Sign up</Link></p>
      </div>
    </>
  );
}

export default App;
