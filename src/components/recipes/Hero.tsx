import React from 'react'
import Header from '../nav/Navigation.tsx'



function Hero({ title, discription }) {
    return (
        <div className='background w-full h-[100vh] bg-center bg-cover '>
            <div className='flex flex-col justify-between items-center w-full h-[100vh] bg-h-gradiant px-2 md:px-4 lg:px-8 py-12 '>
                <div className='w-full'>
                    <div className="w-full h-[2rem] flex justify-end hidden md:flex">
                        <div className="w-[3rem] h-[3rem] rounded-full bg-red-900 ml-[.1rem]"></div>
                        <div className="w-[3rem] h-[3rem] rounded-full bg-red-900 ml-[.1rem]"></div>
                        <div className="w-[3rem] h-[3rem] rounded-full bg-red-900 ml-[.1rem]"></div>
                        <div className="w-[3rem] h-[3rem] rounded-full bg-red-900 ml-[.1rem]"></div>
                    </div>
                    <div className="absolute max-[767px]:top-0 left-0 right-0 px-[0rem] md:p-[2rem]  md:mt-[.1rem]">
                        <Header />
                    </div>
                </div>
                <div className='flex justify-center items-center flex-col'>
                    <h2 className='text-4xl md:text-6xl text-white text-center font-bold'>{title}</h2>
                    <p className='text-sm text-white text-center w-[20rem] md:pt-3'>{discription}</p>
                </div>
            </div>
        </div>
    )
}

export default Hero
