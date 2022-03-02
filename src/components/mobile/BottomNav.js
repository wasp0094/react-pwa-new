import React, { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
//import Link from '@mui/material/Link';

function BottomNav() {
  // const [value, setValue] = React.useState(0);
  const pathname = window.location.pathname;
  const [value, setValue] = useState(pathname);
  const onChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Box sx={{ width: 500 }}>
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
              value={"/react-pwa-new/home"}
            />
            <BottomNavigationAction
              label="Explore"
              icon={<ExploreIcon />}
              component={Link}
              to="/explore"
              value={"/react-pwa-new/explore"}
            />
            <BottomNavigationAction
              label="Routine"
              icon={<FavoriteIcon />}
              component={Link}
              to="/routine"
              value={"/react-pwa-new/routine"}
            />
            <BottomNavigationAction
              label="Profile"
              icon={<PersonIcon />}
              component={Link}
              to={"/profile"}
              value={"/react-pwa-new/profile"}
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
