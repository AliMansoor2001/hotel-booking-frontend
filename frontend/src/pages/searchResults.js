import React, {useEffect} from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHotels } from '../features/hotels/hotelsSlice';
import { fetchAvailableRooms } from '../features/rooms/roomsSlice';

export default function SearchResults(){
  const [qs] = useSearchParams();
  const location = qs.get('location') || '';
  const check_in = qs.get('check_in') || '';
  const check_out = qs.get('check_out') || '';
  const dispatch = useDispatch();
  const hotels = useSelector(s=>s.hotels.items);
  const rooms = useSelector(s=>s.rooms.items);

  useEffect(()=>{
    dispatch(fetchHotels());
  },[dispatch]);

  useEffect(()=>{
    // find hotel ids by filtering hotels in location
    const hotel = hotels.find(h=>h.location.toLowerCase().includes(location.toLowerCase()));
    if(hotel){
      dispatch(fetchAvailableRooms({hotel: hotel.id, check_in, check_out}));
    }
  },[dispatch, hotels, location, check_in, check_out]);

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold">Results</h2>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {rooms.map(r=>(
          <div key={r.id} className="bg-white p-4 shadow rounded">
            <h3 className="font-bold">{r.room_type}</h3>
            <p>Price: ${r.price}</p>
            <p>Beds: {r.beds}</p>
            <Link to={`/book/${r.id}?ci=${check_in}&co=${check_out}`} className="mt-2 inline-block bg-green-600 text-white px-3 py-1 rounded">Book</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
