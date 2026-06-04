import { createSlice } from '@reduxjs/toolkit';

const AuthSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    logout: (state, action) => {
      state.token = null;
    },
  },
});

export const { setToken, logout } = AuthSlice.actions;

export default AuthSlice.reducer;
