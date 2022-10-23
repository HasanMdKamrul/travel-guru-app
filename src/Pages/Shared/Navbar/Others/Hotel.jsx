import React from "react";

const Hotel = ({ hotel }) => {
  const { picture, bed, price, type, place } = hotel;
  return (
    <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-900 text-gray-100">
      <div className="flex space-x-4">
        <img
          alt=""
          src={picture}
          className="object-cover w-12 h-12 rounded-full shadow bg-gray-500"
        />
        <div className="flex flex-col space-y-1">
          <a
            rel="noopener noreferrer"
            href="#"
            className="text-sm font-semibold"
          >
            {place}
          </a>
          <span className="text-xs text-gray-400">{bed}</span>
          <span className="text-xs text-gray-400">${price}</span>
          <span className="text-xs text-gray-400">{type}</span>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
