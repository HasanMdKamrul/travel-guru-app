import React from "react";
import { MdHome } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import Hotel from "../Shared/Navbar/Others/Hotel";
import MapCpmponent from "../Shared/Navbar/Others/Map";

const Booking = () => {
  const hotels = useLoaderData();
  console.log(hotels);
  return (
    <div className="grid grid-cols-2">
      <div className="flex justify-center items-center mt-0">
        <div className="grid grid-cols-3  gap-2 mx-5">
          {hotels.slice(0, 6).map((hotel) => (
            <Hotel key={hotel._id} hotel={hotel} />
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center mt-0">
        <MapCpmponent />
      </div>
      <div className="flex justify-center">
        <Link to="/">
          <button
            type="button"
            className="px-8 py-3 font-semibold border-0 bg-sky-400 flex justify-center items-center  rounded border-gray-100 text-slate-900"
          >
            Go Back Home
            <MdHome className="ml-1" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Booking;
