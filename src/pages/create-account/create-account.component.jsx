import React, { useState } from "react";
import { useUserAuth } from "../../context/UserAuthContext";
import {
  TextField,
  MenuItem,
  Box,
  Button,
  Stack,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { Link } from "react-router-dom";
import blob from "../../assets/blob.svg";
import "./create-account.css";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { storage } from "../../firebase/firebase";
import "../login/login.styles.css";
import {
  EmailOutlined,
  LockOutlined,
  Face,
  LineWeightOutlined,
  ManOutlined,
  CakeOutlined,
  // VaccinesIcon,
} from "@mui/icons-material";
import VaccinesIcon from "@mui/icons-material/Vaccines";

function CreateAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [YOE, setYOE] = useState("");
  const [speciality, setSpeciality] = useState("shoulder");
  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState("patient");
  const [imgUrl, setImgUrl] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  );
  const [image, setImage] = useState(null);
  const { signUp } = useUserAuth();

  const handleChange = (e) => {
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImgUrl(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
      setImage(e.target.files[0]);
    }
  };

  const handleUserChange = (e) => {
    setUser(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (image == null) return;
      const imageRef = ref(storage, `images/${image.name + v4()}`);
      uploadBytes(imageRef, image).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setImgUrl(url);
        });
      });
      let data;
      if (user === "patient") {
        data = {
          displayName: name,
          dob: dob ? dob : "2002-03-19",
          gender: gender,
          weight: weight,
          imgUrl: imgUrl,
          isDoctor: false,
          doctorAllocatted: false,
          doctorId: null,
          qrCode: null,
        };
      } else {
        data = {
          displayName: name,
          dob: dob ? dob : "2002-03-19",
          YOE: YOE,
          isDoctor: true,
          speciality: speciality,
          imgUrl: imgUrl,
          qrCode: null,
          patients: [],
        };
      }
      await signUp(email, password, data);
    } catch (error) {
      setError("Failed to create a new account.");
    }
  };

  return (
    <>
      <div className="signup">
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
                  <RadioGroup
                    row
                    defaultValue="patient"
                    name="user-button"
                    onChange={handleUserChange}
                  >
                    <FormControlLabel
                      value="patient"
                      control={<Radio />}
                      label="Patient"
                      style={{ margin: "0 5vw" }}
                    />
                    <FormControlLabel
                      value="doctor"
                      control={<Radio />}
                      label="Doctor"
                      style={{ margin: "0 5vw" }}
                    />
                  </RadioGroup>
                </Box>

                <Box>
                  <img src={imgUrl} className="profile-pic" alt="profile pic" />
                  <input
                    type="file"
                    accept="image/png, image/jpeg, image/jpg"
                    style={{
                      fontSize: "15px",
                      marginLeft: "4vw",
                    }}
                    onChange={handleChange}
                  />
                </Box>

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
                    sx={{ color: "action.active", ml: 1, my: 0.5 }}
                  />
                  {user === "patient" ? (
                    <TextField
                      id="input-with-sx"
                      label="Weight"
                      variant="standard"
                      onChange={(e) => setWeight(e.target.value)}
                      type="number"
                      style={{ width: "5rem" }}
                    />
                  ) : (
                    <TextField
                      id="input-with-sx"
                      label="YOE"
                      variant="standard"
                      onChange={(e) => setYOE(e.target.value)}
                      type="number"
                      style={{ width: "5rem" }}
                    />
                  )}
                </Box>

                {user === "patient" ? (
                  <Box
                    className="input-field"
                    sx={{ display: "flex", alignItems: "flex-end" }}
                  >
                    <CakeOutlined
                      sx={{ color: "action.active", mr: 1, my: 0.5 }}
                    />
                    <TextField
                      id="date"
                      label="DOB"
                      type="date"
                      variant="standard"
                      defaultValue="2002-03-19"
                      sx={{ width: "8rem" }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      onChange={(e) => setDob(e.target.value)}
                    />
                    <ManOutlined
                      sx={{ color: "action.active", ml: 1, my: 0.5 }}
                    />
                    <TextField
                      id="input-with-sx"
                      select
                      label="Gender"
                      variant="standard"
                      defaultValue=""
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
                ) : (
                  <Box
                    className="input-field"
                    sx={{ display: "flex", alignItems: "flex-end" }}
                  >
                    <VaccinesIcon
                      sx={{ color: "action.active", mr: 1, my: 0.5 }}
                    />
                    <TextField
                      id="input-with-sx"
                      select
                      label="Speciality"
                      variant="standard"
                      defaultValue=""
                      onChange={(e) => setSpeciality(e.target.value)}
                      style={{ width: "6rem" }}
                    >
                      <MenuItem key="Shoulder" value="Shoulder">
                        Shoulder
                      </MenuItem>
                      <MenuItem key="Elbow" value="Elbow">
                        Elbow
                      </MenuItem>
                      <MenuItem key="Diabeties" value="Diabeties">
                        Diabeties
                      </MenuItem>
                    </TextField>
                    <CakeOutlined
                      sx={{ color: "action.active", mr: 1, my: 0.5 }}
                    />
                    <TextField
                      id="date"
                      label="DOB"
                      type="date"
                      variant="standard"
                      defaultValue="2002-03-19"
                      sx={{ width: "7rem" }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      onChange={(e) => setDob(e.target.value)}
                    />
                  </Box>
                )}
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
                }}
              >
                Already have an account?{" "}
                <Link className="link" style={{
                  textTransform: "uppercase",
                }} to="/"><u>
                  Login
                </u>
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
