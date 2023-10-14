import React, { useState } from "react";
import Box from "@mui/material/Box";
import iphone from "../assets/iPhoneScreen.png";
import android from "../assets/androidScreen.png";
import { Link, useNavigate } from "react-router-dom";
import { Button, Divider, Grid, TextField } from "@mui/material";
import Instagram from "../assets/instagram-logo.png";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import axios from "axios";
export default function OverlappingPhotosLayout() {
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });
  
  const navigate = useNavigate()
  function handleSubmit(e) {
    e.preventDefault()

    axios.post("http://16.170.173.197/users/login", userData)
      .then((response) => {
        console.log("🚀 ~ file: SignIn.jsx:57 ~ .then ~ response:", response)
        const token = response.data.token;
        localStorage.setItem("token", token)
        navigate("/home")

      }).catch((error) => {
        console.log(error)
      })
  }
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "100vh", // Adjust as needed
        }}
      >
        {/* Left Section */}
        <Box
          sx={{
            position: "relative", // Set to relative for positioning
            flex: 1,
            backgroundColor: "black", // Background color for the left section
            padding: "20px",
            overflow: "hidden", // Hide overflowing content
          }}
        >
          {/* First Photo (overlaps the second photo) */}
          <img
            src={iphone}
            alt="First"
            style={{
              width: "300px",
              height: "auto",
              position: "absolute", // Position absolute for overlapping
              top: '20px', // Adjust top position to control overlap
              left: '250px', // Adjust left position to control overlap
            }}
          />

          {/* Second Photo */}
          <img
            src={android}
            alt="Second"
            style={{ width: "200px", height: "410px" }} // Adjust image size as needed
          />
        </Box>

        {/* Right Section */}
        <Box
          sx={{
            flex: 1,
            backgroundColor: "black", // Background color for the right section
            padding: "20px",
          }}
        >
          <Box
            sx={{
              flex: 1,
              backgroundColor: "#1D1D1D", // Background color for the right section
              marginLeft: "0px",
              marginRight: "200px",
              marginTop: "10px",
              borderRadius: "10px",
              padding: "20px"
            }}
          >
            <img src={Instagram} alt="instagram" width={'150px'} />

            <form noValidate sx={{ mt: 3 }} onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    name="email"
                    placeholder="Mobile Number Or Email"
                    sx={{ backgroundColor: "lightgray", borderRadius: '10px' }}
                    value={userData.email}
                onChange={(e) => {
                  setUserData({ ...userData, email: e.target.value })
                }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    type="password"
                    id="password"

                    placeholder="Password" 
                    sx={{ backgroundColor: "lightgray", borderRadius: '10px', color: 'black' }}
                    value={userData.password}
                onChange={(e) => {
                  setUserData({ ...userData, password: e.target.value })
                }}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>
            </form>
            <hr />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              <FacebookOutlinedIcon style={{marginRight:'5px'}}/> Login with Facebook
            </Button>

            <Link href="#" variant="body2">
            <div
              style={{
                borderRadius: "10px",
                padding: "20px"
              }}>
              Forget password?
            </div>
            </Link>
          </Box>
          <Box
          sx={{
            flex: 1,
            backgroundColor: "#1D1D1D", // Background color for the right section
            marginLeft: "0px",
            marginRight: "200px",
            marginTop: "10px",
            borderRadius: "10px",
            padding: "20px"

          }}
        >
            <Grid container justifyContent="center">
              <Grid item>
                <Link to="/signup" variant="body2">
                  <div>Don't have an account?<strong style={{color:'#1976D2'}}>sign up</strong> </div>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
