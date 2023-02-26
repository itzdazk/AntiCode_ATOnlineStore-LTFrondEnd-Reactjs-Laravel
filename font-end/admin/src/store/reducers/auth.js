import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    token: null,
    userInfo: {},
  },

  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.userInfo = action.payload.userInfo;
    },

    logout: (state) => {
      state.isLoggedIn = false;
      state.token = null;
      state.userInfo = {};
    },
  },
});

export const { login, logout } = authSlice.actions;

const authReducer = authSlice.reducer;

export default authReducer;
