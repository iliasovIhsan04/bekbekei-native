import { configureStore } from "@reduxjs/toolkit";
import activationReducer from "./slice/activationReducer";

const store = configureStore({
  reducer: {
    auth: activationReducer,
  },
});

export default store;
