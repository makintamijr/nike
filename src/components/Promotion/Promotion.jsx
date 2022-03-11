import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Box,
  Button,
  IconButton,
  responsiveFontSizes,
  Typography,
} from "@mui/material";
import { globalTheme } from "../../style/theme";
import "./promotion.scss";
import { AddRounded } from "@mui/icons-material";

const Promotion = () => {
  let theme = createTheme(globalTheme);
  theme = responsiveFontSizes(theme);
  return (
    <div className="promotion-wrapper">
      <ThemeProvider theme={theme}>
        <Box className="promotion-container">
          <Box className="promotion-image">
            <Box className="item-detail-container">
              <Typography variant="h5" className="item-name">
                Nike <span>Air Zoom</span>
              </Typography>
              <Box className="item-price-container">
                <Typography variant="h5" className="item-price-amount">
                  $ 300
                </Typography>
                <IconButton className="item-price-btn">
                  <AddRounded />
                </IconButton>
              </Box>
            </Box>
          </Box>

          <Box className="promotion-container-welcome">
            <Box className="promotion-container-items">
              <Typography variant="h1" className="welcome-head">
                Your Best <span>Hiit</span> Starts Here
              </Typography>
              <Typography variant="body" className="welcome-body">
                Get Your Style on with the new Nike Air Zoom SuperRep 3
              </Typography>
              <Button variant="contained" className="welcome-btn">
                Shop
              </Button>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default Promotion;
