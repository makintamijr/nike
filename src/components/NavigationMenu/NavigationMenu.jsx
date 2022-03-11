import {
  Box,
  IconButton,
  InputBase,
  Typography,
  useMediaQuery,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../../img/nikeLogo.svg";
import "./navigationmenu.scss";
import { Menu, ShoppingBagOutlined } from "@mui/icons-material";
import SideBarNav from "./SideBarNav";
import { useState } from "react";
import { createTheme } from "@mui/material/styles";
import { globalTheme } from "../../style/theme";
import { ThemeProvider } from "@emotion/react";

const NavigationMenu = () => {
  const [openSideNav, setOpenSideNav] = useState();

  // theme instance
  let theme = createTheme(globalTheme);
  const sideBarNavRes = useMediaQuery(theme.breakpoints.down("md", "lg", "sm"));
  console.log(sideBarNavRes);
  return (
    <div className="navigation-wrapper">
      <ThemeProvider theme={theme}>
        <Box className="top-navigation-bar">
          <Box className="left-side-navigation">
            <Box className="logo-wrapper">
              <img src={logo} alt="nike-logo" className="logo" />
            </Box>
          </Box>

          {/* links */}
          {sideBarNavRes ? (
            <SideBarNav
              openSideNav={openSideNav}
              setOpenSideNav={setOpenSideNav}
            />
          ) : (
            <Box className="center-navigation">
              <Typography variant="h6" className="center-typo typo">
                New releases
              </Typography>
              <Typography variant="h6" className="center-typo typo">
                Men
              </Typography>
              <Typography variant="h6" className="center-typo typo">
                Women
              </Typography>
              <Typography variant="h6" className="center-typo typo">
                Kids
              </Typography>
              <Typography variant="h6" className="center-typo typo">
                Sale
              </Typography>
              <Typography variant="h6" className="center-typo typo">
                Collections
              </Typography>
            </Box>
          )}

          <Box className="right-side-navigation">
            <Box className="search-box">
              <IconButton>
                <SearchIcon className="search-icon" />
              </IconButton>
              <InputBase placeholder="Search" className="search-input" />
            </Box>
            <IconButton>
              <ShoppingBagOutlined className="cart-icon" />
            </IconButton>
            {sideBarNavRes ? (
              <IconButton onClick={() => setOpenSideNav(true)}>
                <Menu className="menu-icon" />
              </IconButton>
            ) : (
              ""
            )}
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default NavigationMenu;
