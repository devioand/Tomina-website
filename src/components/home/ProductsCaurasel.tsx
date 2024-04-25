import React from 'react';
import { SwiperSlide } from 'swiper/react';
import Carousel from '../ui/carousel/Carousel';
import ProductCard from './ProductCard';

function ProductsCaurasel({ data }: any) {

  const breakpoints = {
    1024: {
      slidesPerView: 1,
      spaceBetween: 1,
    },
  }

  return (
    <Carousel centeredSlides={false} breakpoints={breakpoints}>
      {data?.map((d: any, _idx: number) => (
        <SwiperSlide key={`product--key-${_idx}`}>
          <ProductCard item={d} />
        </SwiperSlide>
      ))}
    </Carousel>
  );
}

export default ProductsCaurasel;
