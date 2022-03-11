import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Button, responsiveFontSizes, Typography } from "@mui/material";
import { globalTheme } from "../../style/theme";
import "./joinus.scss";

const JoinUs = () => {
  let theme = createTheme(globalTheme);
  theme = responsiveFontSizes(theme);
  return (
    <div className="joinus-wrapper">
      <ThemeProvider theme={theme}>
        <Box className="joinus-container">
          <Typography variant="h6" className="joinus-head">
            Join Us
          </Typography>
          <Box className="joinus-contents">
            <Box className="joinus-img">
              <Box className="joinus-text-box">
                <Typography variant="h1" className="joinus-text">
                  Your Nike Membership
                </Typography>
                <Typography variant="body" className="joinus-text-body">
                  Become a Member and show your love with Nike By You
                </Typography>
                <Button variant="contained" className="joinus-btn">
                  Join Us
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default JoinUs;
