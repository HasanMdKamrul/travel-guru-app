import Lottie from "lottie-react";
import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import bookingAnimation from "../../assests/Animations/travelBooking.json";
import { DestinationContext } from "../../contexts/DestinationProvider";

// Import Swiper styles
import { MdPlace } from "react-icons/md";
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";

const Home = () => {
  const { destinations } = useContext(DestinationContext);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
          {/* ** Swipper js */}
          {/* cards destinations */}
          <div className="w-full">
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
                <>
                  <SwiperSlide>
                    <img
                      className="ring-4 ring-yellow-500"
                      style={{ width: "1000px", height: "300px" }}
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
        <div className="relative lg:w-1/2">
          <Lottie animationData={bookingAnimation} />
        </div>
      </div>
    </div>
  );
};

export default Home;
