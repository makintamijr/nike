import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Button, responsiveFontSizes, Typography } from "@mui/material";
import { globalTheme } from "../../style/theme";
import "./categories.scss";

const Categories = () => {
  let theme = createTheme(globalTheme);
  theme = responsiveFontSizes(theme);
  return (
    <div className="categories-wrapper">
      <ThemeProvider theme={theme}>
        <Box className="categories-container">
          <Typography variant="h6" className="categories-head">
            Gear Tailored to You
          </Typography>
          <Box className="categories-contents">
            <Box className="women">
              <Box className="women-content">
                <Typography variant="h6">Featured Women's</Typography>
                <Button variant="contained" className="categories-contents-btn">
                  Shop
                </Button>
              </Box>
            </Box>

            <Box className="categories-contents-box2">
              <Box className="men">
                <Box className="men-content">
                  <Typography variant="h6">Latest Men's</Typography>
                  <Button
                    variant="contained"
                    className="categories-contents-btn"
                  >
                    Shop
                  </Button>
                </Box>
              </Box>

              <Box className="kids">
                <Box className="kids-content">
                  <Typography variant="h6">Kid's Styles</Typography>
                  <Button
                    variant="contained"
                    className="categories-contents-btn"
                  >
                    Shop
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default Categories;
