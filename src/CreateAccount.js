import React from 'react';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Stack } from '@mui/material';
import { Link } from "react-router-dom";

// create account page, (for mobile)

function CreateAccount() {
  return (
    <>
      <div className="App">
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2>Create Account</h2>
          <p>Create a new account</p>
          <Stack spacing={2}>
            <TextField required id="standard-basic" label="Full Name" variant="standard" />
            <TextField required id="standard-basic" label="Email" variant="standard" />
            <TextField required id="standard-basic" label="Password" variant="standard" />
            <TextField required id="standard-basic" label="Confirm Password" variant="standard" />
            <br />
            <Button variant="contained">Create Account</Button>
          </Stack>
          <p>Already have an account? <Link to="/">Login</Link></p>
        </Box>
      </div>
    </>
  );
}

export default CreateAccount;
