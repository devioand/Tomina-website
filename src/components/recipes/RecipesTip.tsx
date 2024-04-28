import React from 'react'
import Video from './Video.tsx'
import img from '../../images/Recipes/Layer.png'


const RecipesTip = () => {
    return (
        <div className='flex flex-col justify-center items-center bg-[#004F2D] px-2 md:px-4 lg:px-8 py-12'>
            <img src={img} alt='logo' className='max-w-10 max-h-10' />
            <h2 className='text-white text-sm md:text-xl pb-5 '>Recipe Tip:</h2>
            <p className='text-white text-[1rem] text-center pb-6 font-bold' >1 Clove of Fresh Garlic<br />
                = 1 tsp of Chopped Garlic<br />
                or 2 tsp of Minced Garlic</p>
            <div className=''>
                <Video />
            </div>
        </div>
    )
}

export default RecipesTip
