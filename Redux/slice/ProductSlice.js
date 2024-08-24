import { createSlice } from "@reduxjs/toolkit";

const ProducSlice = createSlice({
  name: "myData",
  initialState: {
    products: [],
  },
  reducers: {
    productsAll: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { productsAll } = ProducSlice.actions;

export default ProducSlice.reducer;
