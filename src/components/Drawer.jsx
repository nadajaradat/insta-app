import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InstagramLogo from '../assets/instagram-logo.png';
import shop_assistant from '../assets/Avatars/shop-assistant.png'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useDrawer } from '../contexts/OpenDrawer';
import { Link } from 'react-router-dom';
import { Avatar, Box, Button, Grid, Input, Modal, Typography } from '@mui/material';
import '../App.css';
import axios from 'axios';

const drawerWidth = 242;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  backgroundColor:'black',
  color:'white'
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen ,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  backgroundColor: 'black',
  color:'white'
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
const ListItemIconWrapper = styled(ListItemIcon)(({ theme, open }) => ({
    minWidth: 0,
    marginRight: open ? theme.spacing(3) : 'auto',
    
    '& svg': {
      color: 'white', // Set the color of the icons to white
    },
  }));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer(props) {
  const { open, toggleDrawer } = useDrawer();
  const [openModal, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [description, setdescription] = React.useState("");
  const [image, setImage] = React.useState(null)
  const [imageCover, setImageCover] = React.useState(null);

  const token = localStorage.getItem("token")

  const handledescriptionChange = (event) => {
    setdescription(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);

    const reader = new FileReader();
    reader.onload = () => {
      setImageCover(reader.result);
    };
    reader.readAsDataURL(file);
  };

  let formData = new FormData();

  formData.append("description", description)
  formData.append("image", image)
  const [memories, setMemories] = React.useState([]);
  function handleSubmit(event) {
    event.preventDefault();


    axios.post("http://16.170.173.197/posts", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data"
      }
    }).then((response) => {
      console.log("🚀 ~ file: CreateMemory.jsx:59 ~ handleSubmit ~ response:", response)
      setMemories((prevMomeris) => [...prevMomeris, response.data])
    }).catch((error) => {
      console.log("Error:", error)
    })

    handleClose()
  }


  return (

      <Drawer variant="permanent" open={open} className="custom-drawer">
        

          
{open?<DrawerHeader 
        sx={{
        display: 'block'} }
        >
  <img
    src={InstagramLogo}
    alt="instagram logo"
    style={{ width: '149px', height: '37px', marginTop:'20px' }} 
    
    
  />
</DrawerHeader>:<InstagramIcon 
sx={{
  minHeight: 48,
  justifyContent: open ? 'initial' : 'center',
  px: 2.5,
}}/>}
        
 
        
        <List>
          {['Home', 'Search', 'Explore', 'Reels', 'Messages', 'Notifications', 'Create', 'Nada Jaradat'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  '&:hover': {
                    backgroundColor: '#1D1D1D', // Add your desired hover background color here
                  },
                }}
              >
                <ListItemIconWrapper
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {[
                    <Link to ='/home'>
                  <HomeIcon/></Link>,
                  <SearchIcon/>,
                  <ExploreIcon/>,
                  <SlideshowIcon/>,
                  <Link to ='/messages'>
                  <ChatIcon/></Link>, 
                  <FavoriteBorderIcon/>,
                   <AddCircleOutlineIcon  onClick={handleOpen}/>,
                   
                   <Avatar alt="Nada" src={shop_assistant} style={{width:'30px', height:'30px'}}/>
                   ][index]}
                </ListItemIconWrapper>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <List>
          {['Menu'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  '&:hover': {
                    backgroundColor: '#1D1D1D', // Add your desired hover background color here
                  },
                }}
              >
                <ListItemIconWrapper
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    
                  }}
                >
                  {[
                   <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            edge="start"
            
          >
            <MenuIcon />
          </IconButton>][index]}
                </ListItemIconWrapper>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        
        <div>
        <Modal
  open={openModal}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box
    sx={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 400,
      bgcolor: "#f2f2f2",
      boxShadow: 24,
      p: 4,
      borderRadius: "20px",
      backgroundColor:'#1D1D1D'
    }}
  >
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Create a New Post
      <hr />
    </Typography>
    <form>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Center content horizontally
          justifyContent: "center", // Center content vertically
          backgroundColor:'#1D1D1D'
        }}
      >
        Description
        <Input
          type="text"
          placeholder=""
          value={description}
          onChange={handledescriptionChange}
          required
          fullWidth
          sx={{
            mb: 2,
            backgroundColor: "#353535",
            borderRadius: "10px",
            height: "120px",
          }}
        />
        {imageCover && (
          <img
            src={imageCover}
            alt="Uploaded"
            style={{ width: "100%", marginBottom: "1rem" }}
          />
        )}

        <label htmlFor="image-upload">
          <Button
            variant="contained"
            component="span"
            sx={{
              fontFamily: "Signika",
              width: "100%",
              textAlign: "left",
              fontWeight: 900,
              marginBottom: "5px",
              paddingTop: "5px",
              paddingBottom: "5px",
              borderRadius: "10px",
              fontSize: "14px",
              color: "white",
              backgroundColor: "#0095F6",
              ":hover": {
                bgcolor: "#0095F70",
                color: "white",
              },
              "&:active": {
                boxShadow: "none",
                backgroundColor: "#0095F6",
                color: "white",
              },
            }}
          >
            Choose Image
          </Button>
        </label>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{
            fontWeight: 900,
            paddingTop: "5px",
            fontFamily: "Signika",
            paddingBottom: "5px",
            borderRadius: "10px",
            fontSize: "14px",
            color: "white",
            backgroundColor: "#0095F6",
            ":hover": {
              bgcolor: "#0095F71",
              color: "white",
            },
            "&:active": {
              boxShadow: "none",
              backgroundColor: "#0095F6",
              color: "white",
            },
          }}
        >
          Post
        </Button>
      </Box>
    </form>
  </Box>
</Modal>

    </div>

      </Drawer>
  );
}
