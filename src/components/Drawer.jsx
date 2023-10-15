import InstagramIcon from '@mui/icons-material/Instagram';
import { useDrawer } from '../contexts/OpenDrawer';
import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material';
import '../App.css'
import { Avatar, Box, Button, Grid, Input, Modal, Typography } from '@mui/material';
import '../App.css';
import axios from 'axios';

const drawerWidth = 242;

const openedMixin = (theme) => ({
@@ -85,7 +87,53 @@ const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open'

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
@@ -143,7 +191,7 @@ sx={{
                  <Link to ='/messages'>
                  <ChatIcon/></Link>, 
                  <FavoriteBorderIcon/>,
                   <AddCircleOutlineIcon/>,
                   <AddCircleOutlineIcon  onClick={handleOpen}/>,

                   <Avatar alt="Nada" src={shop_assistant} style={{width:'30px', height:'30px'}}/>
                   ][index]}
@@ -192,6 +240,128 @@ sx={{
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