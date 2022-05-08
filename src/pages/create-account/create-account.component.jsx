import React, { useState } from "react";
import { useUserAuth } from "../../context/UserAuthContext";
import { TextField, MenuItem, Box, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import blob from "../../assets/blob.svg";
import "../login/login.styles.css";
import {
  EmailOutlined,
  LockOutlined,
  Face,
  LineWeightOutlined,
  ManOutlined,
} from "@mui/icons-material";

function CreateAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        displayName: name,
        dob: dob,
        gender: gender,
        weight: weight,
      };
      await signUp(email, password, data);
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
                  <Face sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                  <TextField
                    id="input-with-sx"
                    label="Full Name"
                    variant="standard"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    style={{ width: "8rem" }}
                  />
                  <LineWeightOutlined
                    sx={{ color: "action.active", mr: 1, my: 0.5 }}
                  />
                  <TextField
                    id="input-with-sx"
                    label="Weight"
                    variant="standard"
                    onChange={(e) => setWeight(e.target.value)}
                    type="number"
                    style={{ width: "4rem" }}
                  />
                </Box>

                <Box
                  className="input-field"
                  sx={{ display: "flex", alignItems: "flex-end" }}
                >
                  <Face sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                  <TextField
                    id="date"
                    label="DOB"
                    type="date"
                    variant="standard"
                    defaultValue="2002-03-19"
                    sx={{ width: "6.5rem" }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => setDob(e.target.value)}
                  />
                  <ManOutlined
                    sx={{ color: "action.active", mr: 1, my: 0.5 }}
                  />
                  <TextField
                    id="input-with-sx"
                    select
                    label="Gender"
                    variant="standard"
                    onChange={(e) => setGender(e.target.value)}
                    style={{ width: "5rem" }}
                  >
                    <MenuItem key="Male" value="Male">
                      Male
                    </MenuItem>
                    <MenuItem key="Female" value="Female">
                      Female
                    </MenuItem>
                    <MenuItem key="Others" value="Others">
                      Others
                    </MenuItem>
                  </TextField>
                </Box>
                <Box
                  className="input-field"
                  sx={{ display: "flex", alignItems: "flex-end" }}
                >
                  <EmailOutlined
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
                  <LockOutlined
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
                  <LockOutlined
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
                  textTransform: "uppercase",
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
