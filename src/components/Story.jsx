import { AppBar, Avatar, IconButton, List, ListItem, ListItemButton, ListItemIcon, Toolbar, Typography } from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { useDrawer } from '../contexts/OpenDrawer';

import boy from '../assets/Avatars/boy.png';
import shop_assistant from '../assets/Avatars/shop-assistant.png';
import cock_man from '../assets/Avatars/cock-man.png';
import man from '../assets/Avatars/man.png';
import nurse from '../assets/Avatars/nurse.png';
import singer from '../assets/Avatars/singer.png';
import steward from '../assets/Avatars/steward.png';

import styled from '@emotion/styled';

function Story() {
  const ListItemIconWrapper = styled(ListItemIcon)(({ theme, open }) => ({
    minWidth: 0,
    marginRight: open ? theme.spacing(3) : 'auto',

    '& svg': {
      color: 'white', // Set the color of the icons to white
    },
  }));

  const { open, toggleDrawer } = useDrawer();
  console.log({ open });

  return (
    <AppBar position="fixed" style={{ paddingLeft: open ? '350px' : '65px', backgroundColor: 'black' }}>
      <Toolbar>
        <List
          sx={{
            display: 'flex',
            flexDirection: 'row', // Display list items horizontally
            alignItems: 'center', // Center items vertically
          }}
        >
          {[{ image: boy, name: 'Boy' }, { image: shop_assistant, name: 'Shop' }, { image: cock_man, name: 'Cock' }, { image: man, name: 'Man' }, { image: nurse, name: 'Nurse' }, { image: singer, name: 'Singer' }, { image: steward, name: 'Steward' }].map((item, index) => (
            <ListItem key={item.name} disablePadding>
              <ListItemButton
                sx={{
                  minHeight: 80, // Adjust the height to accommodate the avatar and text
                  flexDirection: 'column', // Display items vertically
                  alignItems: 'center', // Center items horizontally
                  '&:hover': {
                    backgroundColor: '#1D1D1D', // Add your desired hover background color here
                  },
                }}
              >
                <ListItemIconWrapper
                  sx={{
                    minWidth: 0,
                    mb: 1, // Add margin between the avatar and text
                    backgroundImage: 'linear-gradient(#e66465, #9198e5)',
                    border: '2.5px solid ',
                    borderRadius:'50%'
                  }}
                >
                  <Avatar alt={item.name} src={item.image} align="center" style={{ backgroundColor: 'black' }} />
                </ListItemIconWrapper>
                <Typography variant="caption" align="center">{item.name}</Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Toolbar>
    </AppBar>
  );
}

export default Story;
