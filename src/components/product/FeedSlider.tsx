import React from 'react'
import FeedBack from './FeedBack'
import Carousel from '../ui/carousel/Carousel'
import { SwiperSlide } from 'swiper/react'
const data = [1, 2]
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
                    <SwiperSlide key={`product--key-${_idx}`} className='p-5 px-5 md:p-10 md:px-32'>

                    </SwiperSlide>
                ))}
            </Carousel>
        </div>
    )
}

export default FeedSlider
