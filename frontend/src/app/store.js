import { configureStore } from '@reduxjs/toolkit';
import hotelsReducer from '../features/hotels/hotelsSlice';
import roomsReducer from '../features/rooms/roomsSlice';
import authReducer from '../features/auth/authSlice';
import bookingsReducer from '../features/bookings/bookingsSlice';

export const store = configureStore({
  reducer: {
    hotels: hotelsReducer,
    rooms: roomsReducer,
    auth: authReducer,
    bookings: bookingsReducer,
  }
});
