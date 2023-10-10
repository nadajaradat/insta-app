import React from 'react';
import Drawer from '../components/Drawer';
import Story from '../components/Story';
import Posts from '../components/Posts';
import Container from '@mui/material/Container';
import { useDrawer } from '../contexts/OpenDrawer';

function Home() {
  const { open, toggleDrawer } = useDrawer();

  // Always apply the transition to marginLeft
  const containerStyles = {
    width:'728px',
    marginLeft: open ? '242px' : '65px',
    backgroundColor: 'black',
    height: 'auto',
    transition: ' .5s ease', // Add transition for marginLeft
  };

  return (
    <>
      <Drawer />
      <Container
        style={containerStyles} // Apply styles to the Container
      >
        <Story />
        <Posts />
      </Container>
    </>
  );
}

export default Home;
