import React from 'react';
import { formatDistanceToNow } from 'date-fns'; // Import the formatDistanceToNow function
import { useDrawer } from '../contexts/OpenDrawer';
import { Avatar, Box, List, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import boy from '../assets/Avatars/boy.png';
import shop_assistant from '../assets/Avatars/shop-assistant.png';
import cock_man from '../assets/Avatars/cock-man.png';
import man from '../assets/Avatars/man.png';
import nurse from '../assets/Avatars/nurse.png';
import singer from '../assets/Avatars/singer.png';
import steward from '../assets/Avatars/steward.png';

function generateRandomName() {
  const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eva', 'Frank', 'Grace'];
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
}
function generateRandomAvatar() {
  const avatarUrls = [
    boy,
    shop_assistant,
    cock_man,
    man,
    nurse,
    singer,
    steward
  ];
  const randomIndex = Math.floor(Math.random() * avatarUrls.length);
  return avatarUrls[randomIndex];
}
function Posts({ posts }) {
  const sortedPosts = [...posts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  const { open, toggleDrawer } = useDrawer();

  const generateRandomData = () => {
    const randomName = generateRandomName();
    const randomAvatar = generateRandomAvatar();
    return { name: randomName, avatar: randomAvatar };
  };

  return (
    <List style={{ width: '500px', backgroundColor: 'black', marginLeft: '30px', minHeight: '1000px' }}>
      {sortedPosts.map((post) => {
        const randomData = generateRandomData();
        return (
          <div key={post.id}>
            <div
              style={{
                display: 'flex',
                alignItems: 'self-start',
              }}
            >
              <Avatar
                alt={post.description}
                src={randomData.avatar}
                style={{ backgroundColor: 'black', width: '38px', height: '38px', marginBottom:'10px' }}
              />
              <Typography variant="caption" color={'white'} style={{ marginTop: '10px', marginBottom: '5px', marginLeft: '10px' }}>
                {randomData.name}. {formatDistanceToNow(new Date(post.createdAt))}
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
                marginBottom: '60px'
              }}>
              {post.description}
            </Box>
          </div>
        );
      })}
    </List>
  );
}

export default Posts;
