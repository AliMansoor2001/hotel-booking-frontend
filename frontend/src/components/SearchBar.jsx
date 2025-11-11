import {Search} from 'lucide-react';

const SearchBar = ({ location, setLocation, checkIn, setCheckIn, checkOut, setCheckOut, onSearch }) => {

  return (
    <div className="flex flex-wrap bg-white rounded-lg shadow-lg p-4 justify-center gap-4 max-w-4xl mx-auto">
      <input
        type="text"
        placeholder="Where are you going?"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="p-2 text-gray-800 rounded-md border w-64"
      />
      <input
        type="date"
        className="p-2 text-gray-800 rounded-md border"
        value={checkIn}
        onChange={(e) => setCheckIn(e.target.value)}
      />
      <input
        type="date"
        className="p-2 text-gray-800 rounded-md border"
        value={checkOut}
        onChange={(e) => setCheckOut(e.target.value)}
      />
      <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700" onClick={onSearch}>
        <Search />
      </button>
    </div>
  );
};

export default SearchBar;
