import React, { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import ExploreIcon from "@mui/icons-material/Explore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import { useUserAuth } from "../../context/UserAuthContext";
//import Link from '@mui/material/Link';

function BottomNav() {
  // const [value, setValue] = React.useState(0);
  const pathname = window.location.pathname;
  const [value, setValue] = useState(pathname);
  const {
    user: { isDoctor },
  } = useUserAuth();
  const onChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Box>
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation showLabels value={value} onChange={onChange}>
            <BottomNavigationAction
              label="Home"
              icon={<HomeIcon />}
              component={Link}
              to="/home"
              value={"/home"}
            />
            <BottomNavigationAction
              label="Chat"
              icon={<VideoCallIcon />}
              component={Link}
              to="/chat"
              value={"/chat"}
            />
            {!isDoctor ? (
              <BottomNavigationAction
                label="Explore"
                icon={<ExploreIcon />}
                component={Link}
                to="/explore"
                value={"/explore"}
              />
            ) : (
              <BottomNavigationAction
                label="Patients"
                icon={<FavoriteIcon />}
                component={Link}
                to="/patients"
                value={"/patients"}
              />
            )}
            {!isDoctor && (
              <BottomNavigationAction
                label="Routine"
                icon={<ExploreIcon />}
                component={Link}
                to="/routine"
                value={"/routine"}
              />
            )}
            <BottomNavigationAction
              label="Profile"
              icon={<PersonIcon />}
              component={Link}
              to={"/profile"}
              value={"/profile"}
            />
          </BottomNavigation>
        </Paper>
      </Box>
    </div>
  );
}

export default BottomNav;

//facing a bug, nav icons dont get highlighted when clicked but still display correct components
// fixed, but lost the smooth transition in the process ;-;
