import React, { useState } from "react";
import { useUserAuth } from "../../context/UserAuthContext";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { Stack } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import blob from "../../assets/blob.svg";
import "./login.styles.css";
import TextField from "@mui/material/TextField";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { FaFacebook } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

//import GoogleButton from 'react-google-button';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, signInWithGoogle, setLoadingUser } = useUserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      navigate("/profile");
    } catch (error) {
      setLoadingUser(false);
      setError("Incorrect Email or Password");
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithGoogle();
      navigate("/profile");
    } catch (error) {
      setLoadingUser(false);
      setError("Couldn't login, please try again");
    }
  };

  return (
    <>
      <div className="login">
        <form onSubmit={handleSubmit}>
          <Box className="content-box">
            <div className="blob-box">
              <img className="top-blob" src={blob} alt="blob" />
            </div>
            <div className="login-content">
              <h2>Login</h2>
              <p className="text1">Please sign in to continue.</p>
              <Stack spacing={2}>
                <div className="input-details">
                  <Box
                    className="input-detail"
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
                    className="input-detail"
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
                </div>
                <div
                  className="error-msg"
                  style={{ marginTop: "0.5rem", marginLeft: "0.5rem" }}
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
                  type="Submit"
                  className="login-btn"
                  style={{
                    marginTop: "0.6rem",
                    borderRadius: "30px",
                    backgroundColor: "#4645e3",
                  }}
                >
                  Sign In
                </Button>
                <div className="else">
                  <hr></hr>
                  <p className="text1">or</p>
                  <hr></hr>
                </div>
                <div className="social-accounts">
                  <FaFacebook className="facebook" />
                  <FaGooglePlus
                    className="google"
                    onClick={handleGoogleSignIn}
                  />
                  <AiFillTwitterCircle className="twitter" />
                </div>
                <p
                  className="sign-up"
                  style={{
                    margin: "4.5rem auto 0",
                    textAlign: "center",
                    fontSize: "0.9rem",
                    fontFamily: "Ubuntu",
                    color: " #4645e3",
                    textTransform: "uppercase",
                  }}
                >
                  Don't have an account?{" "}
                  <Link className="link" to="/signup">
                    Sign up
                  </Link>
                </p>
              </Stack>
            </div>
          </Box>
        </form>
      </div>
    </>
  );
}
export default Login;
