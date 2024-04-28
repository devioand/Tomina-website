import React from 'react'

const Ratio = () => {
    return (
        <div className='max-w-full flex justify-between items-center px-5 md:px-32 py-9 bg-[#282828]'>
            <div className='flex justify-center items-center flex-col py-5 md:py-0'>
                <h2 className='text-sm md:text-2xl pb-3 text-white'>Prep Time</h2>
                <div className='border py-2 px-5 md:py-4 md:px-7 rounded-[5rem] text-xl text-white'>10<br />min</div>
            </div>
            <div className='flex justify-center items-center flex-col py-5 md:py-0'>
                <h2 className='text-sm md:text-2xl pb-3 text-white'>Cook Time</h2>
                <div className='border py-2 px-5 md:py-4 md:px-7 rounded-[5rem] text-xl text-white'>60<br />min</div>
            </div>
            <div className='flex justify-center items-center flex-col py-5 md:py-0'>
                <h2 className='text-sm md:text-2xl pb-3 text-white'>Servings</h2>
                <div className='border py-6 px-5 md:py-7 md:px-6 rounded-[5rem] text-xl text-white'>8-10</div>
            </div>
        </div>
    )
}

export default Ratio
