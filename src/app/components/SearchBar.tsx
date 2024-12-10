import React from "react";

const SearchBar = () => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md flex items-center space-x-4">
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700">Pick-Up</label>
        <input
          type="text"
          placeholder="Select your location"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700">Drop-Off</label>
        <input
          type="text"
          placeholder="Select your location"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Search
      </button>
    </div>
  );
};

export default SearchBar;