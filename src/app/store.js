import { configureStore } from "@reduxjs/toolkit";
import shoeReducer from "../features/productsSlice";

export const store = configureStore({
  reducer: {
    shoe: shoeReducer,
  },
});
