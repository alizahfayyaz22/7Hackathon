

"use client";
import Image from "next/image";
import React from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"; // Outline and filled icons

interface CarCardProps {
  name: string;
  type: string;
  price: string;
  fuel: string;
  transmission: string;
  capacity: string;
  image: string;
}

const CarCard: React.FC<CarCardProps> = ({ name, type, price, fuel, transmission, capacity, image }) => {
  // Heart toggle handler
  const handleToggleHeart = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const isLiked = button.getAttribute("data-liked") === "true";

    if (isLiked) {
      button.setAttribute("data-liked", "false");
      button.innerHTML = `<svg class="text-gray-400 hover:text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="20" height="20">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="currentColor" />
      </svg>`;
    } else {
      button.setAttribute("data-liked", "true");
      button.innerHTML = `<svg class="text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>`;
    }
  };

  return (
    <div className="bg-white rounded-md shadow-md p-4 relative">
      {/* Heart Icon with Toggle */}
      <button
        className="absolute top-4 right-4"
        onClick={handleToggleHeart}
        data-liked="false" // Attribute to store liked state
        dangerouslySetInnerHTML={{
          __html: `
            <svg class="text-gray-400 hover:text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="20" height="20">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="currentColor" />
            </svg>`,
        }}
      ></button>

      {/* Car Image */}
      <div className="h-40 bg-white rounded-md mb-4 overflow-hidden">
      <img src={image} alt={name} className="w-[244px] h-[76px] mt-[50px] object-cover" />
      </div>

      {/* Car Name and Type */}
      <div className="absolute top-4 left-4">
        {/* Car Name */}
        <h3 className="text-xl font-semibold text-black">{name}</h3>
        {/* Car Type */}
        <p className="text-lg text-blue-500">{type}</p>
      </div>

      {/* Details */}
      <div className="mt-4 flex items-center space-x-4 text-sm text-gray-600">
        <p>{fuel}L</p>
        <p>{transmission}</p>
        <p>{capacity} People</p>
      </div>

      {/* Price and Rent Button */}
      <div className="mt-4 flex justify-between items-center">
        <p className="text-blue-500 font-bold">${price}/day</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Rent Now
        </button>
      </div>
    
    
  </div>
  );
};

export default CarCard;
