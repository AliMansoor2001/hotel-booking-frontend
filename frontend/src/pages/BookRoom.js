import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createBooking } from '../features/bookings/bookingsSlice';

export default function BookRoom(){
  const { id } = useParams(); // room id
  const [qs] = useSearchParams();
  const check_in = qs.get('ci');
  const check_out = qs.get('co');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onBook = async () => {
    // guests simple fixed for MVP
    const payload = { room: id, check_in, check_out, guests: 2 };
    try {
      await dispatch(createBooking(payload)).unwrap();
      navigate('/dashboard');
    } catch (err) {
      alert('Booking failed: ' + err.message);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Confirm Booking</h2>
      <p>Room ID: {id}</p>
      <p>From: {check_in} To: {check_out}</p>
      <button onClick={onBook} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Confirm & Book</button>
    </div>
  );
}
