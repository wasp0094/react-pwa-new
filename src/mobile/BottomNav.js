import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
// import Link from '@mui/material/Link'; 

function BottomNav() {
  const [value, setValue] = React.useState(0);
  return (
    <div>
      <Box sx={{ width: 500 }}>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <BottomNavigation showLabels value={value} onChange={(event, newValue) => { setValue(newValue); }}>
            <BottomNavigationAction label="Home" icon={<HomeIcon />} />
            <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
            <BottomNavigationAction label="Routine" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
            {/* <Link to='/profile'><BottomNavigationAction label="Profile" icon={<LocationOnIcon />} /></Link> */}
          </BottomNavigation>
        </Paper>
      </Box>
    </div>
  );
}

export default BottomNav;
