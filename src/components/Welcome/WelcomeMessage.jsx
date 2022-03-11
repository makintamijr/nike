import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, responsiveFontSizes, Typography } from "@mui/material";
import { globalTheme } from "../../style/theme";
import "./welcomemessage.scss";

const WelcomeMessage = () => {
  let theme = createTheme(globalTheme);
  theme = responsiveFontSizes(theme);
  return (
    <div className="welcome-wrapper">
      <ThemeProvider theme={theme}>
        <Box className="welcome-container">
          <Typography variant="h6" className="welcome-text">
            Just Landed: The Nike App. Learn More
          </Typography>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default WelcomeMessage;
