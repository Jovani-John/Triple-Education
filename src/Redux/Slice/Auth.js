import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "Auth",
  initialState: {
    isAuthenticated: false,
    user: null,
  },
  reducers: {
    signIn: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    signOut: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

// ✅ شيلنا الـ auth من الـ export
export const { signIn, signOut } = AuthSlice.actions;

export default AuthSlice.reducer;
