import React, { useContext } from "react";
import { DestinationContext } from "../../contexts/DestinationProvider";
import DetailsDestinationText from "../Shared/Navbar/Others/DetailsDestinationText";

const BookingDetails = () => {
  const { destinations } = useContext(DestinationContext);

  console.log(destinations);

  return (
    <div>
      <h1 className="text-center mt-40 font-extrabold text-5xl">
        Book Your Desired destination
      </h1>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {destinations.map((destination) => (
            <DetailsDestinationText
              key={destination.id}
              destination={destination}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
