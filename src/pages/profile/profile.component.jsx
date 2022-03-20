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
    <div>
      {/* <h3>Profile</h3> */}
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
          src="https://mui.com/static/images/avatar/1.jpg"
          sx={{ width: 70, height: 70 }}
        />
        {/* <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            margin: "1rem",
            padding: "0 1rem",
          }}
        >
          <p>
            {user.displayName}
            <br />
            username
          </p>
        </Stack> */}
        {/* <IconButton sx={{ marginTop: "1.5rem" }}>
          <EditIcon fontSize="small" color="action" />
        </IconButton> */}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
        className="profile-list"
      >
        <div className="field">
          <p>EMAIL</p>
          <p>{user && user.email}</p>
        </div>

        <div className="field">
          <p>PASSWORD</p>
          <p>*************</p>
        </div>

        <div className="field">
          <p>PHONE</p>
          <p>00000-0000</p>
        </div>

        <div className="field">
          <p>D.O.B.</p>
          <p>02/12/1998</p>
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
            sx={{ margin: "0.5rem" }}
          >
            {" "}
            Log Out{" "}
          </Button>
          {/* <Button variant="outlined" color="error"> <Link to='home'> Log Out </Link></Button> */}
          {/* above link not working */}
        </Stack>
      </Box>
    </div>
  );
}

export default Profile;
