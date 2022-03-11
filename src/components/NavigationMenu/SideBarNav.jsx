import React from "react";
import { CloseRounded } from "@mui/icons-material";
import { Drawer, Typography, IconButton, Button } from "@mui/material";
import "./sidebarnav.scss";
import { Box } from "@mui/system";

const SideBarNav = ({ openSideNav, setOpenSideNav }) => {
  return (
    <div className="sidebar-nav-wrapper">
      <Drawer anchor="right" open={openSideNav}>
        <Box className="close-icon-container">
          <IconButton
            className=""
            onClick={() => setOpenSideNav(false)}
            edge="false"
          >
            <CloseRounded className="close-btn-icon" />
          </IconButton>
        </Box>
        <Box className="sidebar-nav-container">
          <Box className="sidebar-nav-links">
            <Typography variant="h6" className="links">
              New releases
            </Typography>
            <Typography variant="h6" className="links">
              Men
            </Typography>
            <Typography variant="h6" className="links">
              Women
            </Typography>
            <Typography variant="h6" className="links">
              Kids
            </Typography>
            <Typography variant="h6" className="links">
              Sale
            </Typography>
            <Typography variant="h6" className="links">
              Collections
            </Typography>
          </Box>
          <Box className="sidebar-nav-bottom">
            <Typography variant="h6" className="bottom-text">
              Become a Nike Member for the best products, inspiration and
              stories in sports.<a href="#">Learn More</a>
            </Typography>
            <Box className="bottom-btn-container">
              <Button variant="contained" className="bottom-btn btn-1">
                Join Us
              </Button>
              <Button variant="outlined" className="bottom-btn btn-2">
                Sign In
              </Button>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </div>
  );
};

export default SideBarNav;
