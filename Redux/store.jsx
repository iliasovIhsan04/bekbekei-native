import { configureStore } from "@reduxjs/toolkit";
import activationReducer from "./slice/activationReducer";
import userInfoSlice from "./slice/userInfoSlice";

const store = configureStore({
  reducer: {
    auth: activationReducer,
    users: userInfoSlice,
  },
});

export default store;
