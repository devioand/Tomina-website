import React from 'react'
import Slider from './Slide'

const Recipes = () => {
    return (
        <div>
            <div>
                <div className='px-2 md:px-4 lg:px-8 py-12 bg-[#282828]'>
                    <h1 className='text-center text-[#B8AA84] text-5xl md:text-6xl font-bold py-5'>RECIPES</h1>
                    <div className='py-4 md:px-7'>
                        <Slider />
                    </div>
                    <div className='flex justify-center items-center'>
                        <button className='border text-white px-12 py-3 rounded-full '>Learn more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recipes
