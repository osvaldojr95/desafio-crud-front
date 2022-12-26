import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: "",
    token: "",
  },
  reducers: {
    login: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
    },
    logout: (state) => {
      state.user = "";
      state.token = "";
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => {
  return state.user.user;
};
export const selectToken = (state) => {
  return state.user.token;
};

export default userSlice.reducer;
