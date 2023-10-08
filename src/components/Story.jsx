import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { useDrawer } from '../contexts/OpenDrawer';

function Story() {
    const { open, toggleDrawer } = useDrawer();
    console.log({open});
    return (
        <AppBar position="fixed" 
        style={{ paddingLeft: open ? '350px' : '65px'}}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar>
    )
}

export default Story
