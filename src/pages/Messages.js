import React from 'react';
import Drawer from '../components/Drawer';
import MessagesList from '../components/MessagesList';
import { Box, Button, Typography, Grid } from '@mui/material';
import Mes from '../assets/messengar-logo.png';

function Messages() {
  return (
    <>
      
      <Grid container spacing={2}>
      <Grid item xs={2.5}>
      <Drawer />
        </Grid>
        <Grid item xs={3}>
          <MessagesList />
        </Grid>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Box sx={{ marginTop: 18 }}>
              <img src={Mes} alt="messengar" />
            </Box>
            <Typography variant="h3">Your Messages</Typography>
            <Typography variant="p" style={{ color: 'gray' }}>
              Send private photos and messages to a friend or group
            </Typography>
            <Button variant="contained" style={{ borderRadius: 20, marginLeft: 0 }}>
              SEND MESSAGE
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Messages;
