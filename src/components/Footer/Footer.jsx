import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Box,
  IconButton,
  responsiveFontSizes,
  Typography,
} from "@mui/material";
import { globalTheme } from "../../style/theme";
import "./footer.scss";
import { ReactComponent as Twitter } from "../../img/twitter.svg";
import { ReactComponent as Facebook } from "../../img/facebook.svg";
import { ReactComponent as Youtube } from "../../img/youtube.svg";
import { ReactComponent as Instagram } from "../../img/instagram.svg";

const Footer = () => {
  let theme = createTheme(globalTheme);
  theme = responsiveFontSizes(theme);
  return (
    <div className="footer-wrapper">
      <ThemeProvider theme={theme}>
        <Box className="footer-container">
          <Box className="footer-contents">
            <Box className="top-footer-box">
              <Box className="top-left">
                <Box className="find-a-store">
                  <Typography
                    variant="h5"
                    className="footer-text-head footer-text"
                  >
                    Find a store
                  </Typography>
                  <Typography
                    variant="h5"
                    className="footer-text-head footer-text"
                  >
                    Sign up for email
                  </Typography>
                  <Typography
                    variant="h5"
                    className="footer-text-head footer-text"
                  >
                    Feedback
                  </Typography>
                  <Typography
                    variant="h5"
                    className="footer-text-head footer-text footer-promo"
                  >
                    Promo codes
                  </Typography>
                </Box>

                <Box className="get-help">
                  <Typography
                    variant="h5"
                    className="footer-text-head footer-text"
                  >
                    Get help
                  </Typography>
                  <Typography
                    variant="h6"
                    className="footer-text footer-text-small"
                  >
                    Order Status
                  </Typography>
                  <Typography
                    variant="h6"
                    className="footer-text footer-text-small"
                  >
                    Shipping and Delivery
                  </Typography>
                  <Typography
                    variant="h6"
                    className="footer-text footer-text-small"
                  >
                    Returns
                  </Typography>
                  <Typography
                    variant="h6"
                    className="footer-text footer-text-small"
                  >
                    Payment Options
                  </Typography>
                  <Typography
                    variant="h6"
                    className="footer-text footer-text-small"
                  >
                    Contact Us
                  </Typography>
                </Box>

                <Box className="about-nike">
                  <Typography
                    variant="h5"
                    className="footer-text-head footer-text"
                  >
                    About Nike
                  </Typography>
                  <Typography
                    variant="h6"
                    className="footer-text footer-text-small"
                  >
                    News
                  </Typography>
                  <Typography
                    variant="h6"
                    className="footer-text footer-text-small"
                  >
                    Careers
                  </Typography>
                  <Typography
                    variant="h6"
                    className="footer-text footer-text-small"
                  >
                    Investors
                  </Typography>
                  <Typography
                    variant="h6"
                    className="footer-text footer-text-small"
                  >
                    Sustainability
                  </Typography>
                </Box>

                <Box className="nike-apps">
                  <Typography
                    variant="h5"
                    className="footer-text-head footer-text"
                  >
                    Nike Apps
                  </Typography>
                  <Typography
                    variant="h6"
                    className="footer-text footer-text-small"
                  >
                    Nike Run Club
                  </Typography>
                  <Typography
                    variant="h6"
                    className="footer-text footer-text-small"
                  >
                    Nike Training Club
                  </Typography>
                </Box>
              </Box>
              <Box className="top-right">
                <IconButton className="footer-btn">
                  <Twitter className="twitter-icon" />
                </IconButton>
                <IconButton className="footer-btn">
                  <Facebook />
                </IconButton>
                <IconButton className="footer-btn">
                  <Youtube />
                </IconButton>
                <IconButton className="footer-btn">
                  <Instagram />
                </IconButton>
              </Box>
            </Box>

            <Box className="bottom-footer-box">
              <Box className="footer-copyright">
                <Typography variant="h6" className="footer-copyright-text">
                  Australia
                  <span>&copy; 2022 Nike, Inc. All Rights Reserved</span>
                </Typography>
              </Box>
              <Box className="footer-terms">
                <Typography variant="h6" className="footer-terms-text">
                  {" "}
                  Guides
                </Typography>
                <Typography variant="h6" className="footer-terms-text">
                  {" "}
                  Terms of Use
                </Typography>
                <Typography variant="h6" className="footer-terms-text">
                  {" "}
                  Company Details
                </Typography>
                <Typography variant="h6" className="footer-terms-text">
                  {" "}
                  Modern Slavery Act
                </Typography>
                <Typography variant="h6" className="footer-terms-text">
                  {" "}
                  Privacy & Cookie Policy
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default Footer;
