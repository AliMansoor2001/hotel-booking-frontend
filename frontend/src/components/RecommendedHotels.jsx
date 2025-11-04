import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

const RecommendedHotels = ({ searchQuery }) => {
  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [noResults, setNoResults] = useState(false);

 useEffect(() => {
    const fetchHotels = async () => {
      setLoading(true);
      const { data, error } = await supabase.from("hotels").select("*");
      if (error) {
        console.error("Error fetching hotels:", error);
      } else {
        setHotels(data);
        setFilteredHotels(data);
      }
      setLoading(false);
    };

    fetchHotels();
  }, []);

  useEffect(() => {
    if (!searchQuery || searchQuery.trim() === "") {
      setFilteredHotels(hotels);
      setNoResults(false);
    } else {
      const results = hotels.filter((hotel) =>
        hotel.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredHotels(results);
      setNoResults(results.length === 0);
    }
  }, [searchQuery, hotels]);

  if (loading) return <p>Loading hotels...</p>;
  if (noResults) return <p>No hotels found for "{searchQuery}".</p>;
  
  return (
    <section className="py-12 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Recommended Hotels
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredHotels.map((hotel) => (
          <div
            key={hotel.id}
            className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-all"
          >
            <img
              src={hotel.image_url}
              alt={hotel.name}
              className="w-full h-96 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold">{hotel.name}</h3>
              <p className="text-gray-500">{hotel.location}</p>
              <p className="text-yellow-500 mt-1">⭐ {hotel.rating}</p>
              <p className="text-gray-800 font-bold mt-2">${hotel.price} / night</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecommendedHotels;
