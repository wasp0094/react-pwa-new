/* eslint-disable no-unused-vars */
import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import { useUserAuth } from "../../context/UserAuthContext";
import { useSetTitle } from "../../hooks/setTitle";
import "./profile.css";

function Profile() {
  const { user, logOut } = useUserAuth();
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
          src="https://mui.com/static/images/avatar/2.jpg"
          sx={{ width: 150, height: 150 }}
        />
      </Box>
      <div className="content-container">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            margin: "1rem 2rem 2rem 0.9rem",
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
          <div className="field">
            <p>D.O.B</p>
            <p>{user && user.dob}</p>
          </div>
          <div className="field">
            <p>Weight</p>
            <p>{user && user.weight}</p>
          </div>
        </Box>
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
