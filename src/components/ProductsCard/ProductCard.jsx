import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Box,
  IconButton,
  responsiveFontSizes,
  Typography,
} from "@mui/material";
import { globalTheme } from "../../style/theme";
import "./productcard.scss";
import {
  ArrowBackIosRounded,
  ArrowForwardIosRounded,
} from "@mui/icons-material";
import Card from "../Card/Card";
import product1 from "../../img/product-1.png";
import product2 from "../../img/product-2.png";
import product3 from "../../img/product-3.png";
import product4 from "../../img/product-4.png";
import product5 from "../../img/product-5.png";
import product6 from "../../img/product-6.png";
import product7 from "../../img/product-7.png";
import product8 from "../../img/product-8.png";
import product9 from "../../img/product-9.png";
import product10 from "../../img/product-10.png";

const ProductCard = () => {
  let theme = createTheme(globalTheme);
  theme = responsiveFontSizes(theme);
  //
  const slideLeft = () => {
    var carousel = document.querySelector(".product-card-carousel");
    carousel.scrollLeft = carousel.scrollLeft + 500;
  };
  console.log(slideLeft);
  const slideRight = () => {
    var carousel = document.querySelector(".product-card-carousel");
    carousel.scrollLeft = carousel.scrollLeft - 500;
  };
  return (
    <div className="product-card-wrapper">
      <ThemeProvider theme={theme}>
        <Box className="product-card-container">
          <Box className="product-card-header">
            <Typography variant="h6" className="card-head">
              Gear up
            </Typography>

            <Box className="product-card-btn-container">
              <IconButton
                className="product-card-btn product-card-btn1"
                onClick={slideRight}
              >
                <ArrowBackIosRounded />
              </IconButton>
              <IconButton
                className="product-card-btn product-card-btn2"
                onClick={slideLeft}
              >
                <ArrowForwardIosRounded />
              </IconButton>
            </Box>
          </Box>
          <Box className="product-card-carousel carousel">
            <Card
              productName="Nike Sb zoom blazer mid premuim"
              productType="skate shoe"
              productPrice="$ 170"
              productImg={product1}
            />
            <Card
              productName="Nike Sb zoom blazer mid premuim"
              productType="Women's shoe"
              productPrice="$ 160"
              productImg={product2}
            />
            <Card
              productName="Nike blazer Low platform"
              productType="Women's shoe"
              productPrice="$ 150"
              productImg={product3}
            />
            <Card
              productName="Nike blazer low platform sp"
              productType="Women's shoe"
              productPrice="$ 160"
              productImg={product4}
            />
            <Card
              productName="nike blazer mid '77"
              productType="Men's shoe"
              productPrice="$ 150"
              productImg={product5}
            />
            <Card
              productName="nike blazer mid '77"
              productType="Men's shoe"
              productPrice="$ 140"
              productImg={product6}
            />
            <Card
              productName="nike blazer mid '77"
              productType="Men's"
              productPrice="$ 160"
              productImg={product7}
            />
            <Card
              productName="nike blazer mid '77 jumbo"
              productType="Men's shoe"
              productPrice="$ 150"
              productImg={product8}
            />
            <Card
              productName="nike blazer mid '77 vintage"
              productType="Women's shoe"
              productPrice="$ 140"
              productImg={product9}
            />
            <Card
              productName="nike blazer mid '77"
              productType="Men's shoe"
              productPrice="$ 170"
              productImg={product10}
            />
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default ProductCard;
