import React from 'react';
import { SwiperSlide } from 'swiper/react';
import Carousel from '../ui/carousel/Carousel';
import ReciepeCard from './ReciepieCard';

function RecipiesCaurasel({ data }: any) {
  const breakpoints = {
    425: {
      slidesPerView: 1.5,
      spaceBetween: 1,
    },
    
    500: {
      slidesPerView: 1.7,
      spaceBetween: 1,
    },

    600: {
      slidesPerView: 2,
      spaceBetween: 1,
    },

    800: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },

    940: {
      slidesPerView: 3,
      spaceBetween: 30,
    },

    1100: {
      slidesPerView: 3,
      spaceBetween: 120,
    },

    1280: {
      slidesPerView: 3,
      spaceBetween: 180,
    },
  };

  return (
    <Carousel
      className="arrowstyle"
      centeredSlides={true}
      breakpoints={breakpoints}
    >
      {data?.map((d: any, _idx: number) => (
        <SwiperSlide key={`reciepe--key-${_idx}`}>
          <ReciepeCard item={d} />
        </SwiperSlide>
      ))}
    </Carousel>
  );
}

export default RecipiesCaurasel;
