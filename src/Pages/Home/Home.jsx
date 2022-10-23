import Lottie from "lottie-react";
import React, { useContext } from "react";
import bookingAnimation from "../../assests/Animations/travelBooking.json";
import { DestinationContext } from "../../contexts/DestinationProvider";

// Import Swiper styles
import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import image26 from "../../assests/images/Sajek.png";
import image27 from "../../assests/images/Sreemongol.png";
import image28 from "../../assests/images/sundorbon.png";

const Home = () => {
  const { destinations } = useContext(DestinationContext);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="relative lg:w-1/2">
          <Lottie animationData={bookingAnimation} />
        </div>
        <div className="mb-10 lg:max-w-lg  lg:mb-0 ">
          <div className="flex items-center justify-center -mx-4 lg:pl-8">
            <div className="flex flex-col items-end px-3">
              <img
                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                src={image26}
                alt=""
              />
              <img
                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                src={image27}
                alt=""
              />
            </div>
            <div className="px-3">
              <img
                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                src={image28}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Link to="/bookingdetails">
          <button
            type="button"
            className="px-8 py-3 font-semibold border-0 bg-sky-400 flex justify-center items-center  rounded border-gray-100 text-slate-900"
          >
            Book Now
            <HiArrowLongRight className="ml-2" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
