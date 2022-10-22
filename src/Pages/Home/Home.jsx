import Lottie from "lottie-react";
import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import bookingAnimation from "../../assests/Animations/travelBooking.json";
import { DestinationContext } from "../../contexts/DestinationProvider";

// Import Swiper styles
import { HiArrowLongRight } from "react-icons/hi2";
import { MdPlace } from "react-icons/md";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";

const Home = () => {
  const { destinations } = useContext(DestinationContext);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="relative lg:w-1/2">
          <Lottie animationData={bookingAnimation} />
          <button
            type="button"
            className="px-8 py-3 font-semibold border-0 bg-sky-400 flex justify-center items-center  rounded border-gray-100 text-slate-900"
          >
            Book Now
            <HiArrowLongRight className="ml-2" />
          </button>
        </div>
        <div className="mb-10 lg:max-w-lg  lg:mb-0 ">
          {/* ** Swipper js */}
          {/* cards destinations */}

          <Swiper
            slidesPerView={2.5}
            spaceBetween={10}
            autoplay={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {destinations.map((destination) => (
              <>
                <SwiperSlide className="w-50">
                  <img
                    className="ring-4 rounded-2xl  ring-yellow-500  "
                    style={{ height: "300px", width: "100%" }}
                    src={destination.picture}
                    alt=""
                  />
                  <div className="text-center">
                    <small className="text-blue-700 mt-2 text-center flex items-center justify-center">
                      <span>
                        {" "}
                        <MdPlace />
                      </span>
                      <p>{destination.place}</p>
                    </small>
                  </div>
                </SwiperSlide>
              </>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Home;
