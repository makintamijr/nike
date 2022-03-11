import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Button, responsiveFontSizes, Typography } from "@mui/material";
import { globalTheme } from "../../style/theme";
import "./morenike.scss";

const MoreNike = () => {
  let theme = createTheme(globalTheme);
  theme = responsiveFontSizes(theme);
  return (
    <div className="morenike-wrapper">
      <ThemeProvider theme={theme}>
        <Box className="morenike-container">
          <Typography variant="h6" className="morenike-head">
            More Nike
          </Typography>
          <Box className="morenike-contents">
            <Box className="morenike-men">
              <Button variant="contained" className="morenike-btn men">
                Men's
              </Button>
            </Box>
            <Box className="morenike-women">
              <Button variant="contained" className="morenike-btn women">
                Women's
              </Button>
            </Box>
            <Box className="morenike-kids">
              <Button variant="contained" className="morenike-btn kids">
                Kids'
              </Button>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default MoreNike;
