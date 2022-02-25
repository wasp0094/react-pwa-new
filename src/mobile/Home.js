import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Camera from './camera';

function Home() {
  const [value, setValue] = React.useState(0);
  return (
    <div>
    <Box sx={{ width: 500 }}>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <Camera />
        <BottomNavigation showLabels value={value} onChange={(event, newValue) => { setValue(newValue); }}>
            <BottomNavigationAction label="Home" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Routine" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Profile" icon={<LocationOnIcon />} />
        </BottomNavigation>
        </Paper>
    </Box>
    </div>
  );
}

export default Home;
