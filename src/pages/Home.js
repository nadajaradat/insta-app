import React from 'react';
import Drawer from '../components/Drawer';
import Story from '../components/Story';
import Posts from '../components/Posts';
import Suggestions from '../components/Suggestions';
import Container from '@mui/material/Container';
import { useDrawer } from '../contexts/OpenDrawer';

function Home() {
  const { open, toggleDrawer } = useDrawer();

  const containerStyles = {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'black',
    height: 'auto',
  };

  const drawerStyles = {
    flex: open ? '0 0 242px' : '0 0 65px', // Adjust as needed
  };

  const contentStyles = {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    maxWidth:'500px'
  };

  const suggestionsStyles = {
    flexDirection: 'column',
    backgroundColor: 'black', 
    marginLeft: '150px'
  };

  return (
    <div >
      <Drawer />
      <Container style={containerStyles}>
        <div style={drawerStyles}>
          <Drawer />
        </div>
        <div style={contentStyles}>
          <Story />
          <Posts />
        </div>
        <div style={suggestionsStyles}>
          <Suggestions />
        </div>
      </Container>
    </div>
  );
}

export default Home;
