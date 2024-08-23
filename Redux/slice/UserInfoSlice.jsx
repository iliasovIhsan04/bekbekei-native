import { createSlice } from "@reduxjs/toolkit";

const userInfoSlice = createSlice({
  name: "myData",
  initialState: {
    user: [],
  },
  reducers: {
    authUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { authUser } = userInfoSlice.actions;
export default userInfoSlice.reducer;
