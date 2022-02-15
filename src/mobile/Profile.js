import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import BottomNav from './BottomNav';

function Profile() {
  return (
    <div>
      {/* <h3>Profile</h3> */}
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '1rem 3rem' }}>
        <Avatar src="https://material-ui.com/static/images/avatar/1.jpg" sx={{ width: 56, height: 56 }} />
        <Stack sx={{ display: 'flex', flexDirection: 'column', margin: '1rem', padding: '0 1rem' }}>
          <p>full name
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
          <ListItem> <ListItemText primary="Email:"></ListItemText> </ListItem>
          <ListItem> <ListItemText primary="Phone:"></ListItemText> </ListItem>
          <ListItem> <ListItemText primary="Date of Birth:"></ListItemText> </ListItem>
          <ListItem> <ListItemText primary="Password: ******"></ListItemText><ListItemText secondary="CHANGE"></ListItemText> </ListItem>
        </List>
      </Box>
      <Box sx={{ justifyContent: 'center', alignItems: 'center' }}>
        <Stack direction="row">
          <Button variant="outlined" color="error"> Log Out </Button>
          {/* <Button variant="outlined" color="error"> <Link to='home'> Log Out </Link></Button> */}
          {/* above link not working */}
        </Stack>
        <BottomNav />
      </Box>

    </div>
  )
}

export default Profile;
