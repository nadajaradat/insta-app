import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns'; // Import the formatDistanceToNow function
import { useDrawer } from '../contexts/OpenDrawer';
import { Avatar, Box, Button, List, Modal, Paper, Typography } from '@mui/material';
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
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import MoreVertIcon from '@mui/icons-material/MoreVert';

 
function Posts({ posts, setPosts, token }) {
  const sortedPosts = [...posts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  const { open, toggleDrawer } = useDrawer();

 

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const openModal = (post) => {
    setSelectedPost(post);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedPost(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('token')
    Navigate('/')
  }


  const handleDeletePost = (postId) => {
    axios
      .request({
        method: "delete",
        url: `http://16.170.173.197/posts/${postId}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const updatedPosts = posts.filter((post) => post.id !== postId);
        setPosts(updatedPosts);
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      });
  };
  

  const handleEditPost = (postId) => {
    const newDescription = prompt("Please add the new description"+postId);
  
    axios
      .request({
        method: "put",
        url: `http://16.170.173.197/posts/${postId}`,
        data: {
          description: newDescription,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Error editing post:", error);
      });
  };
  


  return (
    
    <List style={{ width: '500px', backgroundColor: 'black', marginLeft: '30px', minHeight: '1000px' }}>
      {
      sortedPosts.map((post) => {
        return (
          <div key={post.id}>
            
          
             <Box
              style={{
                display: 'flex',
                alignItems: 'self-start',
                marginTop: '10px',
              }}
            >
              <span><Avatar
                alt={post.description}
                src={post.user.avatar}
                style={{ backgroundColor: 'black', width: '38px', height: '38px', marginBottom:'10px' }}
              /></span>
              <Typography
              variant="caption"
              color="white"
              style={{
                width: '100px',
                backgroundColor: 'black',
                marginTop: '10px',
                marginBottom: '5px',
                marginLeft: '10px',
                whiteSpace: 'nowrap', // Add this property
              }}
              >
              {post.user.userName}. {formatDistanceToNow(new Date(post.createdAt))}
</Typography>

              <span><MoreVertIcon style={{ color: 'white', marginLeft: '340px' }} onClick={() => openModal(post.id)}  ></MoreVertIcon> </span>
            </Box>

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
              {post.likes.length} likes {post.id}
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
      <Modal open={isModalOpen} onClose={closeModal} >
  <Paper style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', justifyContent: 'center', alignItems: 'center' }}>
    <Typography variant="h6">Post Options</Typography>
    <Button startIcon={<EditIcon />} onClick={() => handleEditPost(selectedPost)}>Edit</Button>
    <Button startIcon={<DeleteIcon />} onClick={() => handleDeletePost(selectedPost)}>Delete</Button>
  </Paper>
</Modal>

    </List>
  );
}

export default Posts;
