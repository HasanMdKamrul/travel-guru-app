import React from "react";
import MapCpmponent from "../Shared/Navbar/Others/Map";

const Booking = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="flex justify-center items-center mt-60">
        <h1>Hotel Info</h1>
      </div>
      <div className="flex justify-center items-center mt-60">
        <MapCpmponent />
      </div>
    </div>
  );
};

export default Booking;
