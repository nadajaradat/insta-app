import { AppBar, Avatar, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { useDrawer } from '../contexts/OpenDrawer';
import '../App.css'
import boy from '../assets/Avatars/boy.png';
import shop_assistant from '../assets/Avatars/shop-assistant.png';
import cock_man from '../assets/Avatars/cock-man.png';
import man from '../assets/Avatars/man.png';
import nurse from '../assets/Avatars/nurse.png';
import singer from '../assets/Avatars/singer.png';
import steward from '../assets/Avatars/steward.png';
import styled from '@emotion/styled';

function MessagesList() {
    
  const { open, toggleDrawer } = useDrawer();
  const ListItemIconWrapper = styled(ListItemIcon)(({ theme, open }) => ({
    minWidth: 0,
    '& svg': {
      color: 'white', // Set the color of the icons to white
    },
  }));
  return (
    
    <>
    
    <List style={{color:'white'}}>
          {['Home', 'Search', 'Explore', 'Reels', 'Messages', 'Notifications', 'Create', 'Nada Jaradat'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  '&:hover': {
                    backgroundColor: '#1D1D1D', // Add your desired hover background color here
                  },
                }}
              >
                <ListItemIconWrapper
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {[
                  <Avatar alt="Nada" src={shop_assistant} style={{width:'30px', height:'30px'}}/>,
                  <Avatar alt="Nada" src={shop_assistant} style={{width:'30px', height:'30px'}}/>,
                  <Avatar alt="Nada" src={shop_assistant} style={{width:'30px', height:'30px'}}/>,
                  <Avatar alt="Nada" src={shop_assistant} style={{width:'30px', height:'30px'}}/>,
                  <Avatar alt="Nada" src={shop_assistant} style={{width:'30px', height:'30px'}}/>, 
                  <Avatar alt="Nada" src={shop_assistant} style={{width:'30px', height:'30px'}}/>,
                  <Avatar alt="Nada" src={shop_assistant} style={{width:'30px', height:'30px'}}/>,
                   
                   <Avatar alt="Nada" src={shop_assistant} style={{width:'30px', height:'30px'}}/>
                   ][index]}
                </ListItemIconWrapper>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        
        </>
  )
}

export default MessagesList