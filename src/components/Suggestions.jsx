import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import driver from "../assets/StoriesAvatars/driver.png";
import farmer from "../assets/StoriesAvatars/farmer-avatar.png";
import female from "../assets/StoriesAvatars/female-chef.png";
import flight from "../assets/StoriesAvatars/flight-attendant.png";
import graduated from "../assets/StoriesAvatars/graduated-student.png";
const avatarImages = [
    driver,
    farmer,
    graduated,
    female,
    flight,
  
  ];
  const names = [
    "Ward Daraghmeh",
    "Omar Yasin",
    "saeed ahmad",
    "Anwar Ghannam",
    "Jenan Kmail",
  
  ];
export default function Suggestions() {


  return (
    <List dense sx={{ width: '100%', maxWidth: 360, backgroundColor: 'black',marginTop:"30px", fontSize:'12px' }}>
                        <div style={{display:"flex"}}>

         <Avatar style={{marginLeft:"15px", width:"56px",height:"56px"}}
                  alt={"avatar"}
                  src={ `${avatarImages[0]}`}
                />
                <div>
                <p>mman9our </p>
                <p style={{ color:"#969696",
                    fontSize:"10px",
                    width:"100%", marginTop:"-15px"}}>Mohamed Mansour</p>
                </div>
                <p style={{color:"#0095F6" , marginLeft:"150px"}}>follow</p>

                </div>

                <div style={{display:"flex", justifyContent:"space-between"}}>
                <p style={{color:"#969696" , fontSize:"14px"}}>Suggestions for you</p><p style={{fontSize:"12px"}}>See more</p>
                </div>
      {avatarImages.map((image, index) => {
        const labelId = `checkbox-list-secondary-label-${names[index]}`;
        return (
          <ListItem
            key={index}
            secondaryAction={
            <p style={{color:"#0095F6"}}>follow</p>
            }
        
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar${names[index]}`}
                  src={image }
                  style={{marginBottom:"-18px"}}
                />
                   
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="#969696"
                    fontSize={"10px"}
                    marginLeft={"50px"}
                  >
                Followed by moath
                  </Typography>
                  
                </React.Fragment>
              
              </ListItemAvatar>
              <ListItemText id={labelId} primary={` ${names[index]}`} style={{marginLeft:"-87px", marginBottom:"20px"}} />
            </ListItemButton>
          </ListItem>
        );         

      })}
       <p style={{width:"95%", fontSize:"12px" , marginLeft:"20px"}}>About . Help . Press . API . Jobs . Privacy . Terms. Locations . Language . Meta Verified</p>
       <p style={{width:"95%", fontSize:"12px", marginLeft:"20px"}}>© 2023 INSTAGRAM FROM META</p>
    </List>
  );
}