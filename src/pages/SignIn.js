import React from "react";
import Box from "@mui/material/Box";
import iphone from "../assets/iPhoneScreen.png";
import android from "../assets/androidScreen.png";
import { Link } from "react-router-dom";
import { Button, Divider, Grid, TextField } from "@mui/material";
import  Instagram  from "../assets/instagram-logo.png";

export default function OverlappingPhotosLayout() {
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
            style={{ width: "200px",
             height: "410px" }} // Adjust image size as needed
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
            <img src={Instagram} alt = "instagram" width={'150px'} ></img>
            
          <form noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Mobile Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            
          </form>
            <hr/>
          <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login with Facebook
            </Button>

            <div
            style={{
            
                borderRadius: "10px",
                padding: "20px"
    
              }}>
            forget password?
            </div>
          </Box>
        </Box>
        </Box>
    </div>
  );
}
