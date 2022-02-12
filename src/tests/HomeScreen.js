import * as React from 'react';
import Button from '@mui/material/Button';
//import { Link as Li } from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";
import "./HomeScreen.css";

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Li color="inherit" href="https://mui.com/">
//         Your Website
//       </Li>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const theme = createTheme();

export default function HomeScreen() {
    return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
<<<<<<< HEAD:src/HomeScreen.js
            >
=======
          >
            <div>physiotherapy app</div>
            <Link to="signup">
>>>>>>> 6701ed256e29f7e6715114a8081843aad323f4cb:src/tests/HomeScreen.js
              <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              href="/signin"
            >
              Sign In
            </Button>
            </Link>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              href="/signup"
            >
              Sign Up
            </Button>
            </Box>
            {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  );
}