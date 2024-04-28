import React from 'react'
import { SwiperSlide } from 'swiper/react';
import img from '../../images/Recipes/Rectangle1.png'
import img1 from '../../images/Recipes/Rectangle.png'
import img2 from '../../images/Recipes/Rectangle2.png'
import Slider from '../ui/carousel/Carousel'
import Card from './Card'
const Api = [
    img, img1, img2
]

const Slide = () => {
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
        <Slider centeredSlides={false} breakpoints={breakpoints}>
            {Api?.map((d: any, _idx: number) => (
                <SwiperSlide key={`product--key-${_idx}`}>
                    <Card item={d} />
                </SwiperSlide>
            ))}
        </Slider>
    )
}

export default Slide
