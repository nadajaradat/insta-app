import React from 'react';
import Drawer from '../components/Drawer';
import inProgress from '../assets/rocket-launch.png';
import { useDrawer } from '../contexts/OpenDrawer';




function InProgress() {
    const { open, toggleDrawer } = useDrawer();
    
    const centerImageStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh', // Make sure the image takes up the entire viewport height
  flex: open ? '0 0 242px' : '0 0 65px'
};
  return (
    <>
      <Drawer />
      <div style={centerImageStyle}>
        <img src={inProgress} alt="in progress" style={{ width: '400px' }} />
      </div>
    </>
  );
}

export default InProgress;
