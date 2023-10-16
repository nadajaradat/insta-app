import React, { useEffect, useState } from 'react';
import Drawer from '../components/Drawer';
import Story from '../components/Story';
import Posts from '../components/Posts';
import Suggestions from '../components/Suggestions';
import Container from '@mui/material/Container';
import { useDrawer } from '../contexts/OpenDrawer';
import axios from 'axios';

function Home() {
  const { open, toggleDrawer } = useDrawer();

  const [posts, setPosts] = useState([]);
  const token = localStorage.getItem("token")

  useEffect(() => {
    axios.get("http://16.170.173.197/posts", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      setPosts(response.data.posts)
    }).catch((error) => {
      console.log("Error Fedching Posts", error)
    })
  }, [])
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
    <div style={{backgroundColor:'black',width:'100%'}}>
      
      <Container style={containerStyles}>
        <div style={drawerStyles}>
          <Drawer setPosts={setPosts}/>
        </div>
        <div style={contentStyles}>
          <Story />
          <Posts posts={posts} setPosts = {setPosts} token = {token}/>
        </div>
        <div style={suggestionsStyles}>
          <Suggestions />
        </div>
      </Container>
    </div>
  );
}

export default Home;
