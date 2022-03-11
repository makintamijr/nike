import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Button, responsiveFontSizes, Typography } from "@mui/material";
import { globalTheme } from "../../style/theme";
import "./featured.scss";

const Featured = () => {
  let theme = createTheme(globalTheme);
  theme = responsiveFontSizes(theme);
  return (
    <div className="featured-wrapper">
      <ThemeProvider theme={theme}>
        <Box className="featured-container">
          <Typography variant="h6" className="featured-head">
            Featured
          </Typography>
          <Box className="featured-contents">
            <Box className="featured-img"></Box>
            <Box className="featured-text-box">
              <Typography variant="h1" className="featured-text">
                Jordan X Paris Saint-German
              </Typography>
              <Button variant="contained" className="featured-btn">
                Shop
              </Button>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default Featured;
