import React from 'react';
import SearchBar from './SearchBar';

const HeroSection = ({ location, setLocation, checkIn, setCheckIn, checkOut, setCheckOut, onSearch }) => {
  return (
    <section
      className="relative h-[80vh] bg-cover bg-center flex flex-col justify-center items-center text-white"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')" }}
    >
      <div className="bg-black bg-opacity-50 absolute inset-0"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold mb-4">Find Your Perfect Stay</h1>
        <p className="text-lg mb-6">Discover hotels, resorts, and villas across the world.</p>
        <SearchBar 
          location={location}
          setLocation={setLocation}
          checkIn={checkIn}
          setCheckIn={setCheckIn}
          checkOut={checkOut}
          setCheckOut={setCheckOut}
          onSearch={onSearch}
        />
      </div>
    </section>
  );
};

export default HeroSection;
