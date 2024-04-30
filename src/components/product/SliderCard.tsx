import React from 'react'

const SliderCard = ({ item }) => {
    return (
        <div className='flex justify-center items-center'>
            <img src={item} alt='Products' className='w-[500px] ' />
        </div>
    )
}

export default SliderCard
