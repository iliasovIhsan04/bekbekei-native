import { configureStore } from "@reduxjs/toolkit";
import activationReducer from "./slice/activationReducer";
import userInfoSlice from "./slice/userInfoSlice";
import ProductSlice from "./slice/ProductSlice";

const store = configureStore({
  reducer: {
    auth: activationReducer,
    users: userInfoSlice,
    products: ProductSlice,
  },
});

export default store;
