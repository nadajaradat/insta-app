import React from 'react';
import { useDrawer } from '../contexts/OpenDrawer';

import test from '../assets/ExplorePics/explorePic13.webp';
import styled from '@emotion/styled';
import { Avatar, List, ListItemIcon, Typography } from '@mui/material';

function Posts() {
  const posts = [
    {
      "likes": [],
      "id": 15,
      "image": test, // Use the imported image directly
      "description": "test",
      "bookmark": null,
      "shares": null,
      "createdAt": "2023-10-06T21:35:28.585Z"
    },
    {
      "likes": [],
      "id": 20,
      "image": test, // Use the imported image directly
      "description": "Labtop",
      "bookmark": null,
      "shares": null,
      "createdAt": "2023-10-06T22:19:57.490Z"
    }
  ];

  const { open, toggleDrawer } = useDrawer();

  const ListItemIconWrapper = styled(ListItemIcon)(({ theme, open }) => ({
    minWidth: 0,
    '& svg': {
      color: 'white', // Set the color of the icons to white
    },
  }));
  return (
    <List style={{ backgroundColor: 'black', marginLeft:'30px' }}>
      {posts.map((post) => (
        <div key={post.id} >
          <ListItemIconWrapper
  sx={{
    display: 'flex',
    alignItems: 'self-start', // Center align the items horizontally
    mb: 1,
    mt: 3,
    borderRadius: '50%',
  }}
>
  <Avatar alt={post.description} src={post.image} align="center" style={{ backgroundColor: 'black', width: '40px', height: '40px',marginLeft:'45px' }} />
  <Typography variant="caption" color={'white'} align="center" style={{marginTop:'10px', marginLeft:'10px'  }}>Nada Jaradat</Typography>
</ListItemIconWrapper>

                <img alt={post.description} src={post.image} align="center" style={{ backgroundColor: 'black', width:'560px', height:'560px'}} />

         
        </div>
      ))}
    </List>
  );
}

export default Posts;
