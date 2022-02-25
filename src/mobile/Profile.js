import React from 'react';
//import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import BottomNav from './BottomNav';

import { useUserAuth } from '../context/UserAuthContext';

function Profile() {
  const { user, logOut } = useUserAuth();
  console.log(user);
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
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '1rem 3rem' }}>
        <Avatar src="https://material-ui.com/static/images/avatar/1.jpg" sx={{ width: 56, height: 56 }} />
        <Stack sx={{ display: 'flex', flexDirection: 'column', margin: '1rem', padding: '0 1rem' }}>
          <p>full name
            <br />
            username</p>
        </Stack>
        <IconButton><EditIcon fontSize='small' color="action" /></IconButton>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', margin: '0.5rem' }}>
        <List>
          <ListItem> <ListItemText secondary="profile information"></ListItemText> </ListItem>
          {/* <ListItem> <ListItemText primary="Weight:"></ListItemText> </ListItem>
          <ListItem> <ListItemText primary="Blood Group:"></ListItemText> </ListItem>
          <ListItem> <ListItemText primary="Assigned Doctor:"></ListItemText> </ListItem> */}
          {/* <ListItem divider> </ListItem>
          <ListItem> <ListItemText secondary="private information"></ListItemText> </ListItem> */}
          <ListItem> <ListItemText primary={user && user.email}></ListItemText> </ListItem>
          <ListItem> <ListItemText primary="Phone:"></ListItemText> </ListItem>
          <ListItem> <ListItemText primary="Date of Birth:"></ListItemText> </ListItem>
          <ListItem> <ListItemText primary="Password: ******"></ListItemText><ListItemText secondary="CHANGE"></ListItemText> </ListItem>
        </List>
      </Box>
      <Box sx={{ justifyContent: 'center', alignItems: 'center', marginBottom: '5rem' }}>
        <Stack direction="row" sx={{ marginLeft: '7rem' }}>
          <Button variant="outlined" color="error" onClick={handleLogOut}> Log Out </Button>
          {/* <Button variant="outlined" color="error"> <Link to='home'> Log Out </Link></Button> */}
          {/* above link not working */}
        </Stack>
      </Box>
      <BottomNav />
    </div>
  )
}

export default Profile;
