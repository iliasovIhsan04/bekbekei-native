import { configureStore } from "@reduxjs/toolkit";
import ActivationReducer from "./slice/ActivationReducer";

const store = configureStore({
  reducer: {
    auth: ActivationReducer,
  },
});

export default store;
