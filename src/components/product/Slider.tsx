import React from 'react';
import { SwiperSlide } from 'swiper/react';
import Carousel from '../ui/carousel/Carousel';
import SliderCard from './SliderCard';

const Slider = ({ data }: any) => {
  const breakpoints = {
    1024: {
      slidesPerView: 1,
      spaceBetween: 1,
    },
  };
  return (
    <Carousel className='sliderarrows' centeredSlides={false} breakpoints={breakpoints}>
      {data?.map((d: any, _idx: number) => (
        <SwiperSlide key={`product--key-${_idx}`}>
          <SliderCard item={d} />
        </SwiperSlide>
      ))}
    </Carousel>
  );
};

export default Slider;
