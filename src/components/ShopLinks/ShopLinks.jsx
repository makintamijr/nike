import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Link, responsiveFontSizes, Typography } from "@mui/material";
import { globalTheme } from "../../style/theme";
import "./shoplinks.scss";

const ShopLinks = () => {
  let theme = createTheme(globalTheme);
  theme = responsiveFontSizes(theme);
  return (
    <div className="shoplinks-wrapper">
      <ThemeProvider theme={theme}>
        <Box className="shoplinks-container">
          <Box className="shoplinks-contents">
            <Box className="shoplinks-shoes">
              <Link href="#" underline="none">
                <Typography variant="h6" className="shoplinks-head">
                  Shoes
                </Typography>
              </Link>

              <Box className="shoe-links">
                <Link href="#" underline="none">
                  <Typography variant="h6" className="links-text">
                    Sneakers and shoes
                  </Typography>
                </Link>
                <Link href="#" underline="none">
                  <Typography variant="h6" className="links-text">
                    Football Boots
                  </Typography>
                </Link>
                <Link href="#" underline="none">
                  <Typography variant="h6" className="links-text">
                    Running Shoes
                  </Typography>
                </Link>
                <Link href="#" underline="none">
                  <Typography variant="h6" className="links-text">
                    Netball Sneakers
                  </Typography>
                </Link>
              </Box>
            </Box>

            <Box className="shoplinks-clothing">
              <Link href="#" underline="none">
                <Typography variant="h6" className="shoplinks-head">
                  Clothing
                </Typography>
              </Link>
              <Box className="clothing-links">
                <Link href="#" underline="none">
                  <Typography variant="h6" className="links-text">
                    All clothing
                  </Typography>
                </Link>
                <Link href="#" underline="none">
                  <Typography variant="h6" className="links-text">
                    Tops
                  </Typography>
                </Link>
                <Link href="#" underline="none">
                  <Typography variant="h6" className="links-text">
                    Trousers and Leggigngs
                  </Typography>
                </Link>

                <Link href="#" underline="none">
                  <Typography variant="h6" className="links-text">
                    Tracksuits
                  </Typography>
                </Link>
              </Box>
            </Box>

            <Box className="shoplinks-kids">
              <Link href="#" underline="none">
                <Typography variant="h6" className="shoplinks-head">
                  Kids'
                </Typography>
              </Link>
              <Box className="kids-links">
                <Link href="#" underline="none">
                  <Typography variant="h6" className="links-text">
                    Kids' Sneakers
                  </Typography>
                </Link>
                <Link href="#" underline="none">
                  <Typography variant="h6" className="links-text">
                    Kids' Backpacks
                  </Typography>
                </Link>
                <Link href="#" underline="none">
                  <Typography variant="h6" className="links-text">
                    Kids' Football Boots
                  </Typography>
                </Link>
                <Link href="#" underline="none">
                  <Typography variant="h6" className="links-text">
                    Kids' Running Shoes
                  </Typography>
                </Link>
              </Box>
            </Box>

            <Box className="shoplinks-featured">
              <Link href="#" underline="none">
                <Typography variant="h6" className="shoplinks-head">
                  Featured
                </Typography>
              </Link>
              <Box className="featured-links">
                <Link href="#" underline="none">
                  <Typography variant="h6" className="links-text">
                    New Realeases
                  </Typography>
                </Link>
                <Link href="#" underline="none">
                  <Typography variant="h6" className="links-text">
                    Backpacks and Bags
                  </Typography>
                </Link>
                <Link href="#" underline="none">
                  <Typography variant="h6" className="links-text">
                    Footballs
                  </Typography>
                </Link>
                <Link href="#" underline="none">
                  <Typography variant="h6" className="links-text">
                    Goalkeeper Gloves
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default ShopLinks;
