import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shoes: [
    "Nike Sb zoom blazer mid premuim",
    "Nike blazer Low platform next nature",
    "Nike blazer low platform",
    "Nike blazer low platform sp",
    "nike blazer mid '77",
    "nike blazer mid '77",
    "nike blazer mid '77",
    "nike blazer low '77 jumbo",
    "nike blazer mid '77 vintage",
    "nike blazer mid '77",
  ],
};

const shoeSlice = createSlice({
  name: "shoe",
  initialState,
  reducers: {},
});

export const selectShoes = (state) => state.shoe.shoes;

export default shoeSlice.reducer;
