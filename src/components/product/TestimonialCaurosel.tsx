import React from 'react';
import Carousel from '../ui/carousel/Carousel';
import { SwiperSlide } from 'swiper/react';
import Testimonial from './Testimonial';

const TestimonialCaurosel = ({ data }: any) => {
  const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 1,
    },
  };

  return (
    <Carousel className='sliderarrows' centeredSlides={true} breakpoints={breakpoints}>
      {data?.map((d: any, _idx: number) => (
        <SwiperSlide key={`testimonal--key-${_idx}`}>
          <Testimonial item={d} />
        </SwiperSlide>
      ))}
    </Carousel>
  );
};

export default TestimonialCaurosel;
