import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: "",
    session: "",
  },
  reducers: {
    login: (state, { payload }) => {
      state.user = payload.user;
      state.session = payload.session;
    },
    logout: (state) => {
      state.user = "";
      state.session = "";
      return;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user;
export const selectSession = (state) => state.session;

export default userSlice.reducer;
