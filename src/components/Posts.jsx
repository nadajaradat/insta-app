import React from 'react'
import { useDrawer } from '../contexts/OpenDrawer';

function Posts() {
    
  const { open, toggleDrawer } = useDrawer();
  return (
    <div style={{ backgroundColor: 'yellow'}}>
        <div>hello</div>
    </div>
  )
}

export default Posts