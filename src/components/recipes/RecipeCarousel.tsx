import React from 'react';
import { SwiperSlide } from 'swiper/react';
import img1 from '../../images/imgs/recipes/garlic-dish.webp';
import img from '../../images/imgs/recipes/garlic-plate.webp';
import img2 from '../../images/imgs/recipes/garlic-fish.webp';
import Carousel from '../ui/carousel/Carousel';
import Card from './RecipeCard';

const data = [img, img1, img2, img, img1, img2];

const RecipeCarousel = () => {
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
      slidesPerView: 2.2,
      spaceBetween: 30,
    },
  };
  return (
    <Carousel centeredSlides={true} breakpoints={breakpoints}>
      {data?.map((d: any, _idx: number) => (
        <SwiperSlide key={`reciepe--key-${_idx}`}>
          <Card item={d} />
        </SwiperSlide>
      ))}
    </Carousel>
  );
};

export default RecipeCarousel;
