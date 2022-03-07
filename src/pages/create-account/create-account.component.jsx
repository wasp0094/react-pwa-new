import React, { useState } from "react";
import { useUserAuth } from "../../context/UserAuthContext";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import blob from "../../assets/blob.svg";
import "../login/login.styles.css";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FaceIcon from "@mui/icons-material/Face";

// create account page, (for mobile)

function CreateAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="blob-box">
              <img className="top-blob" src={blob} alt="blob" />
            </div>
            <div className="create-account-content">
              <h2>Create Account</h2>
              <p className="text1">Create a new account</p>
              <Stack className="details" spacing={2}>
                <Box
                  className="input-field"
                  sx={{ display: "flex", alignItems: "flex-end" }}
                >
                  <FaceIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                  <TextField
                    id="input-with-sx"
                    label="Full Name"
                    variant="standard"
                    type="text"
                    style={{ width: "14rem" }}
                  />
                </Box>
                <Box
                  className="input-field"
                  sx={{ display: "flex", alignItems: "flex-end" }}
                >
                  <EmailOutlinedIcon
                    sx={{ color: "action.active", mr: 1, my: 0.5 }}
                  />
                  <TextField
                    id="input-with-sx"
                    label="Email"
                    variant="standard"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ width: "14rem" }}
                  />
                </Box>
                <Box
                  className="input-field"
                  sx={{ display: "flex", alignItems: "flex-end" }}
                >
                  <LockOutlinedIcon
                    sx={{ color: "action.active", mr: 1, my: 0.5 }}
                  />
                  <TextField
                    id="input-with-sx"
                    label="Password"
                    variant="standard"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ width: "14rem" }}
                  >
                    {" "}
                  </TextField>
                </Box>
                <Box
                  className="input-field"
                  sx={{ display: "flex", alignItems: "flex-end" }}
                >
                  <LockOutlinedIcon
                    sx={{ color: "action.active", mr: 1, my: 0.5 }}
                  />
                  <TextField
                    id="input-with-sx"
                    label="Confirm Password"
                    variant="standard"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ width: "14rem" }}
                  >
                    {" "}
                  </TextField>
                </Box>
                <br />
                <div
                  className="error-msg"
                  style={{ marginTop: "0.2rem", marginLeft: "0.2rem" }}
                >
                  {error && (
                    <p
                      className="error-text"
                      style={{
                        color: "red",
                        fontSize: "0.8rem",
                        fontWeight: "600",
                      }}
                    >
                      {" "}
                      {error}
                    </p>
                  )}
                </div>
                <Button
                  variant="contained"
                  className="login-btn"
                  style={{
                    marginTop: "0.6rem",
                    borderRadius: "30px",
                    backgroundColor: "#4645e3",
                  }}
                  type="Submit"
                >
                  Create Account
                </Button>
              </Stack>
              <p
                className="sign-up"
                style={{
                  margin: "2.4rem auto 0",
                  textAlign: "center",
                  fontSize: "0.9rem",
                  fontFamily: "Ubuntu",
                  color: "#4645e3",
                }}
              >
                Already have an account?{" "}
                <Link className="link" to="/">
                  Login
                </Link>
              </p>
            </div>
          </Box>
        </form>
      </div>
    </>
  );
}

export default CreateAccount;
