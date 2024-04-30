import React from 'react'
import FeedBack from './FeedBack'
import Carousel from '../ui/carousel/Carousel'
import { SwiperSlide } from 'swiper/react'
import Swiper from 'swiper'
const data = [1, 2, 3, 4, 5]
const FeedSlider = () => {
    const breakpoints = {
        1024: {
            slidesPerView: 1,
            spaceBetween: 1,
        },
    }
    return (
        <div>
            <Carousel centeredSlides={false} breakpoints={breakpoints}>
                {data?.map((d: any, _idx: number) => (
                    <SwiperSlide key={`product--key-${_idx}`} className='p-10 px-32'>
                        <FeedBack />
                    </SwiperSlide>
                ))}
            </Carousel>
        </div>
    )
}

export default FeedSlider
