import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Box,
  IconButton,
  responsiveFontSizes,
  Typography,
} from "@mui/material";
import { globalTheme } from "../../style/theme";
import "./Card.scss";
import { AddRounded } from "@mui/icons-material";
// redux

const Card = ({ productName, productType, productPrice, productImg }) => {
  let theme = createTheme(globalTheme);
  theme = responsiveFontSizes(theme);

  return (
    <div className="card-wrapper">
      <ThemeProvider theme={theme}>
        <Box className="card-container">
          <Box className="card-img-container">
            <img src={productImg} alt="" className="product-image" />
          </Box>

          <Box className="card-product-detail">
            <Box className="card-shape-box"></Box>
            <Typography variant="h5" className="card-item-name">
              {productName}
            </Typography>
            <Typography variant="h5" className="card-item-type">
              {productType}
            </Typography>
            <Typography variant="h5" className="card-item-price">
              {productPrice}
            </Typography>
            <IconButton className="card-item-price-btn">
              <AddRounded />
            </IconButton>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default Card;
