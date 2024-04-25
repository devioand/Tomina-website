import React from 'react';
import 'swiper/css/autoplay';
import 'swiper/css/grid';
import 'swiper/css/hash-navigation';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, Grid, Navigation, Pagination, Swiper } from './Slider';

type BreakPointsType = {
  [key: number]: {
    slidesPerView: number;
    spaceBetween: number;
  };
};

type CarouselPropsType = {
  children: React.ReactNode;
  centeredSlides: boolean;
  breakpoints: BreakPointsType;
  className?: string;
};

const Carousel: React.FunctionComponent<CarouselPropsType> = ({
  children,
  centeredSlides = false,
  breakpoints,
  className = '',
}) => {
  return (
    <Swiper
      className={className}
      spaceBetween={1}
      slidesPerView={1}
      breakpoints={breakpoints}
      centeredSlides={centeredSlides}
      centeredSlidesBounds={true}
      roundLengths={true}
      modules={[Navigation, Autoplay, Pagination, Grid]}
      autoplay={false}
      loop={true}
      navigation={true}
    >
      {children}
    </Swiper>
  );
};

export default Carousel;
