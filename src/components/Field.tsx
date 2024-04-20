import React from 'react'
import img from '../images/1.png'

function Field() {
    return (
        <div className='relative h-[90vh] py-[2rem]'>
            <div className='bg-[url("../images/1.png")] bg-cover h-[100vh] blur-[4px]' style={{
                backgroundSize: "100vw 60rem",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}></div >
            <div className='absolute top-[0] left-[0] right-[0]'>
                <div className='flex flex-col items-center w-full bg-black bg-opacity-30 h-[100vh] '>
                    <h1 className='text-6xl text-white text-center font-bold w-full p-12 bg-gradient-to-t opacity-70 from-transparent to-red-700'>Tomina Field Tour</h1>
                    <img src={img} alt='' className='w-[40rem] h-[25rem] rounded mt-[.2rem] md:w-[40rem] rounded-[7rem]' />
                    <p className='text-1xl text-white text-center mt-[.5rem] font-extralight'>Watch a tour of our facility</p>
                </div>
            </div>
        </div>

    )
}

export default Field
