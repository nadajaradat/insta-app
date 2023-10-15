import React from 'react';
import { formatDistanceToNow } from 'date-fns'; // Import the formatDistanceToNow function
import { useDrawer } from '../contexts/OpenDrawer';
import { Avatar, Box, List, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

function Posts({ posts }) {
  const sortedPosts = [...posts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  const { open, toggleDrawer } = useDrawer();

  return (
    <List style={{ width: '500px', backgroundColor: 'black', marginLeft: '30px',minHeight:'1000px' }}>
      {sortedPosts.map((post) => (
        <div key={post.id}>
          <div
            style={{
              display: 'flex',
              alignItems: 'self-start',
            }}
          >
            <Avatar
              alt={post.description}
              src={post.image}
              style={{ backgroundColor: 'black', width: '38px', height: '38px' }}
            />
            <Typography variant="caption" color={'white'} style={{ marginTop: '10px', marginBottom:'5px', marginLeft: '10px' }}>
              Nada Jaradat - {formatDistanceToNow(new Date(post.createdAt))} ago
            </Typography>
          </div>

          <img
            alt={post.description}
            src={post.image}
            style={{ backgroundColor: 'black', width: '500px', height: '560px' }}
          />

          <Box
            style={{
              display: 'flex',
              alignItems: 'self-start',
              width: '100px',
              marginTop: '10px',
            }}
          >
            <span><FavoriteBorderIcon style={{ color: 'white' }} /></span>
            <span><ModeCommentOutlinedIcon style={{ color: 'white', marginLeft: '10px' }} /></span>
            <span><SendOutlinedIcon style={{ color: 'white', marginLeft: '10px' }} /></span>
            <span><BookmarkBorderOutlinedIcon style={{ color: 'white', marginLeft: '380px' }} /></span>
          </Box>
          <Box
            style={{
              display: 'flex',
              alignItems: 'self-start',
              color: 'white',
              marginTop: '10px',
            }}>
            774 likes
          </Box>
          <Box
            style={{
              display: 'flex',
              alignItems: 'self-start',
              justifyContent: 'start',
              color: 'white',
              width: '460px',
              marginTop: '10px',
              marginBottom:'60px'
            }}>
            {post.description}
          </Box>
        </div>
      ))}
    </List>
  );
}

export default Posts;
