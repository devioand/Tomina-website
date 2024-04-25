import React from 'react';
import { SwiperSlide } from 'swiper/react';
import Carousel from '../ui/carousel/Carousel';
import ReciepeCard from './FeaturedReciepeCard';

function FeaturedRecipiesCaurasel({ data }: any) {
  const breakpoints = {
    425: {
      slidesPerView: 1.5,
      spaceBetween: 1,
    },
    500: {
      slidesPerView: 1.7,
      spaceBetween: 1,
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  };

  return (
    <Carousel centeredSlides={true} breakpoints={breakpoints}>
      {data?.map((d: any, _idx: number) => (
        <SwiperSlide key={`f-reciepe--key-${_idx}`}>
          <ReciepeCard item={d} />
        </SwiperSlide>
      ))}
    </Carousel>
  );
}

export default FeaturedRecipiesCaurasel;
