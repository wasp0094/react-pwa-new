/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { useUserAuth } from "../../context/UserAuthContext";
import { useSetTitle } from "../../hooks/setTitle";
import "./profile.css";
import { getDoc } from "@firebase/firestore";

function Profile() {
  const { user, logOut } = useUserAuth();
  const [doctorDetails, setDoctorDetails] = useState({});
  useEffect(() => {
    const getDoctorDetails = async () => {
      if (user.doctorAllocatted) {
        const doctorDetail = (await getDoc(user.doctorId)).data();
        setDoctorDetails(doctorDetail);
      }
    };
    getDoctorDetails();
  }, []);
  useSetTitle(user.displayName);
  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="main-div">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="avatar-container"
      >
        <Avatar
          src={user.imgUrl || "https://mui.com/static/images/avatar/2.jpg"}
          sx={{ width: 150, height: 150 }}
        />
      </Box>
      <div className="content-container">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            margin: "1rem 2rem 1rem 0.9rem",
            padding: 0,
          }}
          className="profile-list"
        >
          <div className="field">
            <p>Name</p>
            <p>{user && user.displayName}</p>
          </div>
          <div className="field">
            <p>EMAIL</p>
            <p>{user && user.email}</p>
          </div>
          {user && !user.isDoctor && user.dob && (
            <div className="field">
              <p>D.O.B</p>
              <p>{user && user.dob}</p>
            </div>
          )}
          {user && doctorDetails && doctorDetails.displayName && (
            <div className="field">
              <p>Doctor Name</p>
              <p>{doctorDetails.displayName}</p>
            </div>
          )}
          {user && user.weight && (
            <div className="field">
              <p>Weight</p>
              <p>{user && user.weight}</p>
            </div>
          )}
          {user && user.YOE && (
            <div className="field">
              <p>Year of experience</p>
              <p>{user && user.YOE}</p>
            </div>
          )}
          {user && user.speciality && (
            <div className="field">
              <p>Speciality</p>
              <p>{user && user.speciality}</p>
            </div>
          )}
        </Box>
        {user && user.isDoctor && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="qr-container"
          >
            <a href={user && user.qrCode} download>
              <img src={user && user.qrCode} alt="" className="qrcode" />
            </a>
          </Box>
        )}
        <Box
          sx={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "3rem",
          }}
        >
          <Stack direction="row" sx={{ justifyContent: "center" }}>
            <Button
              variant="contained"
              color="error"
              onClick={handleLogOut}
              sx={{ margin: "0.5rem", borderRadius: "10px" }}
            >
              {" "}
              Log Out{" "}
            </Button>
          </Stack>
        </Box>
      </div>
    </div>
  );
}

export default Profile;
