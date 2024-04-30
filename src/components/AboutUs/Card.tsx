import React from 'react'
import about from '../../images/about.png'

const Card = () => {
    return (
        <div className='py-10  flex flex-col items-center justify-center target-component opacity-40'>
            <div className='bg-[#A51E1E] px-[4rem] md:px-[7rem] py-[7rem] md:py-[13rem] flex justify-center items-center box'>
                <img src={about} alt='User' className='md:w-[313px] h-[270px] md:h-[29rem] absolute top-[0rem] images' />
            </div>
            <div className='flex flex-col items-center justify-center py-3'>
                <h2 className='text-2xl text-white heading text-center '>MINA MILAD</h2>
                <p className='text-xl text-[#B8AA84] para'>Founder</p>
                <div className='flex justify-center items-center'>
                    <div className='bg-[#B8AA84] p-3 rounded ml-1'></div>
                    <div className='bg-[#B8AA84] p-3 rounded ml-1'></div>
                    <div className='bg-[#B8AA84] p-3 rounded ml-1'></div>
                    <div className='bg-[#B8AA84] p-3 rounded ml-1'></div>
                </div>
            </div>
        </div>
    )
}

export default Card
