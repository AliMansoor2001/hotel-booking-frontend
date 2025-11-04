import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../api/axiosInstance';

export const fetchHotels = createAsyncThunk('hotels/fetchHotels', async () => {
  const res = await axios.get('hotels/');
  return res.data;
});

const slice = createSlice({
  name: 'hotels',
  initialState: { items: [], status: 'idle' },
  reducers: {},
  extraReducers: (b) => b.addCase(fetchHotels.fulfilled, (s,a)=>{s.items=a.payload; s.status='succeeded'})
});
export default slice.reducer;
