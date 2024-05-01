import React from 'react';
import { SwiperSlide } from 'swiper/react';
import Carousel from '../ui/carousel/Carousel';
import TeamCard from './TeamCard';

const OurTeam = () => {
  const breakpoints = {
    320: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },

    600: {
      slidesPerView: 3,
      spaceBetween: 10,
    },

    940: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  };
  return (
    <Carousel centeredSlides={true} breakpoints={breakpoints}>
      {[0, 1, 2, 3, 4, 5].map((d: any, _idx: number) => (
        <SwiperSlide key={`team--key-${_idx}`}>
          <TeamCard />
        </SwiperSlide>
      ))}
    </Carousel>
  );
};

export default OurTeam;
