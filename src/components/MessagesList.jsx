import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import CircleIcon from '@mui/icons-material/Circle';
import driver from "../assets/StoriesAvatars/driver.png";
import farmer from "../assets/StoriesAvatars/farmer-avatar.png";
import female from "../assets/StoriesAvatars/female-chef.png";
import flight from "../assets/StoriesAvatars/flight-attendant.png";
import graduated from "../assets/StoriesAvatars/graduated-student.png";
import EditIcon from '@mui/icons-material/Edit';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const avatarImages = [
    farmer,
    driver,
    graduated,
    female,
    flight,
    farmer,
    female,
    flight,
  
  ];
  const names = [
    "Ali Ahmad",
    "Ahmad Khaled",
    "Saeed Rida",
    "Samar Ali",
    "Wead Kmail",
    "Khaled Mohamad",
    "Israa Bassam",
    "Aya Kamil",

  ];
  const sec = [
    ".15s",
    ".20h",
    ".1h",
    ".5h",
    ".15h",
    ".3d",
    ".5d ",
    ".1w ",

  ];
export default function MassagesList() {
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List dense sx={{ width: '300px', maxWidth: 360, bgcolor: 'black', marginLeft:'0px' }}>
        <div style={{display:"flex" , wdith:"100px", borderBottom:"1px solid #969696"}}>

            <p>Nada </p><KeyboardArrowDownIcon style={{ marginTop:"17px"}}/> <EditIcon style={{marginLeft:"200px", marginTop:"25px"}}/>
        </div>
        <div style={{display:"flex" ,marginBottom:"20px"}}>
                <p style={{ fontSize:"15px"}}>Messages</p><p style={{color:"#969696" ,fontSize:"15px" , marginLeft:"175px"}}>Request</p>
                </div>
            <div style={{display:"flex"}} className='mass'>

         <Avatar style={{marginLeft:"15px", width:"56px",height:"56px",marginLeft:"0px"}}
                  alt={"avatar"}
                  src={ `${avatarImages[1]}`}
                />
                <div>
                <p style={{fontSize:"15px"}}>Mohamed Mansour </p>
                <p style={{ color:"#ffff",
                    fontSize:"15px",
                    fontWeight:"600",
                    width:"200px", marginTop:"-17px"}}>اعطيهم تاسك صعب على ال..</p>
                </div>
                <p style={{ marginLeft:"0px", display:"flex", marginTop:"35px",color:"#969696"}}> .2s<CircleIcon style={{color:"#0095F6" ,fontSize:"10px",marginLeft:"10px" }}/></p>

                </div>

                
      {avatarImages.map((image, index) => {
        const labelId = `checkbox-list-secondary-label-${names[index]}`;
        return (
          <ListItem
            key={index}
           style={{marginTop:"10px"}}
           secondaryAction={
            <p style={{marginTop:"35px",color:"#969696",marginLeft:"-30px"}}>{sec[index]}</p>
            }
            disablePadding
          >
            <ListItemButton >
              <ListItemAvatar >
                <Avatar
                  alt={`Avatar${names[index]}`}
                  src={image }
                  style={{marginBottom:"-25px", width:"56px" ,height:"56px",marginLeft:"-15px"}}
                />
                   
                <React.Fragment >
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="#969696"
                    fontSize={"15px"}
                    marginLeft={"50px"}
                  >
Lorem ipsum ipsumipsum                  </Typography>
                  
                </React.Fragment>
              
              </ListItemAvatar>
              <ListItemText style={{marginLeft:"-165px", marginBottom:"20px", fontSize:"15px"}}  id={labelId} primary={` ${names[index]}`} />
            </ListItemButton>
          </ListItem>
        );         

      })}
     
    </List>
  );
}