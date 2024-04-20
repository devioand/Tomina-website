import React, { useState } from 'react'
import img from '../images/Rectangle.png'

const demo = [1, 2]

function Card() {
    const [current, setcurrent] = useState(0)
    const Pre = () => {
        if (current === 0) setcurrent(demo.length - 1)
        else setcurrent(current - 1)
    }
    const Next = () => {
        if (current === demo.length - 1) setcurrent(0)
        else setcurrent(current + 1)
    }
    console.log(current)
    return (
        <>
            <div className='p-[2rem]'>
                {
                    demo.map((item, index) => {
                        return (
                            <div className='transition-transform' style={{
                                transform: `translateX(-${current * 100}%)`,
                                transitionProperty: 'transform',
                                transitionDuration: '500ms',
                                transitionTimingFunction: 'ease-in-out'
                            }}>
                                <div key={index} className='flex relative ml-[30rem]'>
                                    <img src={img} className='absolute left-[-1rem] h-[20rem] z-10' alt='' />
                                    <div className='bg-[url("../images/Group.png")] absolute top-[1rem] bg-no-repeat p-[5rem] w-[32rem] h-[20rem]'>
                                        <h1 className='text-5xl text-white text-center mt-[.5rem]  font-bold'>GARLIC POWDER</h1>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <div className='relative'>
                    <div className="w-[3rem] h-[3rem] rounded-full bg-red-900 ml-[.1rem] absolute top-[10rem]" onClick={Pre}></div>
                    <div className="w-[3rem] h-[3rem] rounded-full bg-red-900 ml-[.1rem] absolute top-[10rem] right-[0rem]" onClick={Next}></div>
                </div>
            </div>
        </>
    )
}

export default Card
