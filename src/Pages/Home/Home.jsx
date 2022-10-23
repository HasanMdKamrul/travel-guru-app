import Lottie from "lottie-react";
import React, { useContext } from "react";
import bookingAnimation from "../../assests/Animations/travelBooking.json";

// ** Swiper
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

// import required modules
import { HiArrowLongRight } from "react-icons/hi2";
import { MdPlace } from "react-icons/md";
import { Link } from "react-router-dom";
import { EffectCoverflow, Pagination } from "swiper";
import { DestinationContext } from "../../contexts/DestinationProvider";

const Home = () => {
  const { destinations } = useContext(DestinationContext);

  return (
    <div>
      <div className="grid grid-cols-2 gap-5">
        <div className="flex justify-center items-center pt-40">
          <Lottie animationData={bookingAnimation} />
        </div>
        <div className="flex justify-center items-center pt-40">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {destinations.map((destination) => (
              <SwiperSlide key={destination.id}>
                <Link to={`/book/${destination.id}`}>
                  <div className="flex justify-center items-center">
                    <img
                      className="ring-2 ring-orange-400"
                      style={{
                        width: "270px",
                        height: "416px",
                        borderRadius: "20px",
                      }}
                      src={destination.picture}
                      alt=""
                    />
                    <small className="opacity-60 ml-2 text-blue-700 mt-96">
                      <MdPlace />
                      {destination.place}
                    </small>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
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
