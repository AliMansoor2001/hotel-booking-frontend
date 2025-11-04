import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../api/axiosInstance';

export const createBooking = createAsyncThunk('bookings/create', async (payload) => {
  const res = await axios.post('bookings/', payload);
  return res.data;
});

export const fetchUserBookings = createAsyncThunk('bookings/fetchUser', async () => {
  const res = await axios.get('bookings/');
  return res.data;
});

const slice = createSlice({
  name: 'bookings',
  initialState: { items: [], status: 'idle' },
  reducers: {},
  extraReducers: (b) => {
    b.addCase(createBooking.fulfilled, (s,a) => { s.items.unshift(a.payload); });
    b.addCase(fetchUserBookings.fulfilled, (s,a) => { s.items = a.payload; });
  }
});
export default slice.reducer;
