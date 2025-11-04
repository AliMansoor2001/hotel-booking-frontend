import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../api/axiosInstance';

export const fetchAvailableRooms = createAsyncThunk('rooms/fetchAvailable', async ({hotel, check_in, check_out}) => {
  const params = new URLSearchParams({ hotel, check_in, check_out });
  // roomsSlice.js
const res = await axios.get("http://127.0.0.1:8000/api/rooms/");

  return res.data;
});

const slice = createSlice({
  name: 'rooms',
  initialState: { items: [], status: 'idle' },
  reducers: {},
  extraReducers: (b) => b.addCase(fetchAvailableRooms.fulfilled, (s,a)=>{ s.items=a.payload; s.status='succeeded' })
});
export default slice.reducer;
