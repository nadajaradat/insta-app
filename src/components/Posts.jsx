import React from 'react';
import { useDrawer } from '../contexts/OpenDrawer';

import test from '../assets/ExplorePics/explorePic13.webp';
import styled from '@emotion/styled';
import { Avatar, Box, List, ListItemIcon, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

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
    <List style={{ width:'500px',backgroundColor: 'black', marginLeft: '30px' }}>
      {posts.map((post) => (
        <div key={post.id}>
          <ListItemIconWrapper
            sx={{
              display: 'flex',
              alignItems: 'self-start', // Center align the items horizontally
              mb: 1,
              mt: 3,
              borderRadius: '50%',
            }}
          >
            <Avatar alt={post.description} src={post.image} align="center" style={{ backgroundColor: 'black', width: '38px', height: '38px',  }} />
            <Typography variant="caption" color={'white'} align="center" style={{ marginTop: '10px', marginLeft:'10px' }}>Nada Jaradat .8h</Typography>
          </ListItemIconWrapper>

          <img alt={post.description} src={post.image} align="center" style={{ backgroundColor: 'black', width: '500px', height: '560px' }} />

          <Box
            sx={{
              display: 'flex',
              alignItems: 'self-start', 
              width: '100px',
              
              mt: 2
            }}
          >
            
            <span><FavoriteBorderIcon style={{ color: 'white',  }} /></span>
            <span><ModeCommentOutlinedIcon style={{ color: 'white', marginLeft: '10px' }} /></span>
            <span><SendOutlinedIcon style={{ color: 'white', marginLeft: '10px' }} /></span>
            <BookmarkBorderOutlinedIcon style={{ color: 'white', marginLeft: '380px' }} /> {/* Add marginLeft to move to the left */}
          </Box>
          <Box
          sx={{
            display: 'flex',
            alignItems: 'self-start', 
            color:'white',
        
            mt: 2
          }}>
            774 likes
          </Box>
          <Box
          sx={{
            display: 'flex',
            alignItems: 'self-start', 
            justifyContent:'start',
            color:'white',
            width:'460px',
         
            mt: 2,
            mb:4
          }}>
            Enjoying a peaceful evening by the beach, watching the sun set over the horizon. The colors are simply breathtaking. ️🤍
          </Box>
        </div>
      ))}
    </List>
  );
}

export default Posts;
