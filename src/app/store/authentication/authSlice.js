import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem("token");

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: token ? true : false,
  },
  reducers: {
    login: (state) => {
      const token = localStorage.getItem("token");
      if (!token) {
        return;
      }
      state.isAuthenticated = true;
    },
    logout: (state) => {
      localStorage.removeItem("token");
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
