import React from "react";
import "swiper/css";
import "swiper/css/effect-cards";
import { SwiperSlide } from "swiper/react";

const DestinationCards = ({ destination }) => {
  const { picture } = destination;

  return (
    <>
      <SwiperSlide>
        <img src={picture} alt="" />
      </SwiperSlide>
    </>
  );
};

export default DestinationCards;
