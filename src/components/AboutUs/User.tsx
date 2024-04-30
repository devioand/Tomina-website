import React from 'react'
import Slider from './Slider'
const User = () => {
    return (
        <div className='bg-[#282828] text-white'>
            <div className='flex flex-col items-center justify-center backgradiand px-2 py-5 md:p-12'>
                <div className='py-5'>
                    <h1 className='text-5xl font-bold'>Our team</h1>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h2 className='text-[.7rem] md:text-lg font-bold text-center py-4 px-5'>All in good taste elementum integer enim neque volutpat ac.</h2>
                    <p className='text-center font-sm px-[2rem] min-[500px]:px-[5rem] md:px-[3rem] lg:px-[10rem]'>Massa placerat duis ultricies lacus sed turpis tincidunt id. Interdum varius sit amet mattis  enim. Quis hendrerit dolor magna eget est lorem ipsum dolor. Sagittis scelerisque purus semper.</p>
                </div>
            </div>
            <div className='px-7 md:px-5'>
                <Slider />
            </div>

        </div>
    )
}

export default User
