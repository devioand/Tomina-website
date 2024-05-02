import React, { useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import img1 from '../../images/Group11.png'
import img3 from '../../images/Group11.png'
import img2 from '../../images/Group13.png'

const images = [
    img2, img1, img3
]

const FeedBack = ({ User }) => {
    const [index, setindex] = useState(0);
    const forward = () => {
        if (index < User.length - 1) {
            setindex(index + 1)
        }
        else {
            setindex(0)
        }
    }
    const back = () => {
        setindex(index - 1)
        if (index != 0) {
            setindex(index - 1)
        }
        else {
            setindex(User.length - 1)
        }
    }
    return (
        <div className='flex flex-col justify-center items-center pb-12 relative'>
            <div className='px-[3rem] sm:px-[5rem]'>
                <div className='container bg-white rounded-[1rem]'>
                    <div className='p-2 md:p-3 px-3 lg:px-32 text-center '>
                        <p className='text-sm md:text-lg'>
                            {User[index].feedback}
                        </p>
                        <h2 className='font-bold p-3'>{User[index].user}</h2>
                    </div>
                </div>
            </div>
            <div className='px-7'>
                <IoIosArrowForward onClick={forward} className='absolute right-0 text-6xl top-[10%] text-[#A51E1E]' />
                <IoIosArrowBack onClick={back} className='absolute left-0 text-6xl top-[10%] text-[#A51E1E]' />
            </div>
            <div className='pt-20 flex justify-center items-center hidden md:flex'>
                {
                    images.map((item, i) => {
                        if (i == index) {
                            return (
                                <>
                                    <img src={item} alt='user' className='w-[70px] rounded-full absolute' />
                                </>
                            )
                        }
                        else {
                            return (
                                <>
                                    <img key={index} src={item} alt='user' className={`w-[70px] rounded-full absolute`} style={{
                                        left: `${i + 1 < images.length ? "42" : "54"}%`
                                    }} />
                                </>
                            )
                        }
                    })
                }
            </div>
            <div className='pt-12 flex justify-center md:hidden'>
                {
                    images.map((item, i) => {
                        if (i === index) {
                            return (
                                <>
                                    <img src={item} alt='user' className='w-[70px] rounded-full' />
                                </>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}

export default FeedBack
