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

const drawerWidth = 335;

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
    duration: theme.transitions.duration.leavingScreen,
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

export default function MiniDrawer() {
  const { open, toggleDrawer } = useDrawer();
 


  return (

      <Drawer variant="permanent" open={open} >
        

          
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
                  <ChatIcon/>, 
                  <FavoriteBorderIcon/>,
                   <AddCircleOutlineIcon/>,
                   
                   <img src=""/>,
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
        
      </Drawer>
  );
}
