import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API = 'http://127.0.0.1:8000/api/';

export const loginUser = createAsyncThunk('auth/loginUser', async (credentials) => {
  const res = await axios.post(API + 'token/', credentials);
  localStorage.setItem('access', res.data.access);
  localStorage.setItem('refresh', res.data.refresh);
  return res.data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState: { token: localStorage.getItem('access') || null },
  reducers: { logout: (state) => { state.token = null; localStorage.removeItem('access'); localStorage.removeItem('refresh'); } },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => { state.token = action.payload.access; });
  }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
