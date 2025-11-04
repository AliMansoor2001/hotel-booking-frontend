import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header';
import HeroSection from '../components/HeroSection';
import Carousel from '../components/Carousel';
import RecommendedHotels from '../components/RecommendedHotels';
import Footer from '../components/Footer';

export default function Home(){
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const navigate = useNavigate();

  const onSearch = () => {
    if (!location) alert("Please enter a location")
    navigate(`/search?location=${encodeURIComponent(location)}&check_in=${checkIn}&check_out=${checkOut}`);
  };

  return (
    <div>
      <Header />
      <HeroSection 
          location={location}
          setLocation={setLocation}
          checkIn={checkIn}
          setCheckIn={setCheckIn}
          checkOut={checkOut}
          setCheckOut={setCheckOut}
          onSearch={onSearch}
      />
      <RecommendedHotels />
      <Carousel />
      <Footer />
    </div>
  );
}
