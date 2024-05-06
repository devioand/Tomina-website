import React from 'react';
import { SwiperSlide } from 'swiper/react';
import onionPasta from '../../images/imgs/recipes/easy-onion-slider.webp';
import lemonGarlic from '../../images/imgs/recipes/lemon-garlic-slider.webp';
import bakedSalmon from '../../images/imgs/recipes/baked-salmon-slider.webp';
import Carousel from '../ui/carousel/Carousel';
import Card from './RecipeCard';

const data = [
  {
    img: onionPasta,
  },
  {
    img: lemonGarlic,
  },
  {
    img: bakedSalmon,
  },
  {
    img: onionPasta,
  },
  {
    img: lemonGarlic,
  },
  {
    img: bakedSalmon,
  }
]

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
          <Card item={d.img} />
        </SwiperSlide>
      ))}
    </Carousel>
  );
};

export default RecipeCarousel;
