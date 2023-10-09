import React from 'react'
import { useDrawer } from '../contexts/OpenDrawer';

function Posts() {
    
  const { open, toggleDrawer } = useDrawer();
  return (
    <div style={{height:'1000px',paddingTop:'100px', paddingLeft: open ? '350px' : '65px', backgroundColor: 'yellow'}}>hhhhhhhhhh</div>
  )
}

export default Posts