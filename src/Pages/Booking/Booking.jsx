import React from "react";
import { useLoaderData } from "react-router-dom";
import Hotel from "../Shared/Navbar/Others/Hotel";
import MapCpmponent from "../Shared/Navbar/Others/Map";

const Booking = () => {
  const hotels = useLoaderData();
  console.log(hotels);
  return (
    <div className="grid grid-cols-2">
      <div className="flex justify-center items-center mt-20">
        <div className="grid grid-cols-2 gap-2 p-5">
          {hotels.map((hotel) => (
            <Hotel key={hotel._id} hotel={hotel} />
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center mt-20">
        <MapCpmponent />
      </div>
    </div>
  );
};

export default Booking;
