import React from 'react'
// import img from '../../images/Group12.png'
import img1 from '../../images/Group11.png'
import img3 from '../../images/Group11.png'
import img2 from '../../images/Group13.png'

const images = [
    img1, img2, img3
]
const FeedBack = ({ user, i }) => {
    return (
        <div className='flex flex-col justify-center items-center pb-12'>
            <div className='container bg-white rounded-[1rem]'>
                <div className='p-2 md:p-3 px-3 lg:px-32 text-center '>
                    <p className='text-sm md:text-lg'>
                        Massa placerat duis ultricies lacus sed turpis tincidunt id. Interdum varius sit amet mattis  enim. Quis hendrerit dolor magna eget est lorem ipsum dolor. Sagittis scelerisque purus semper.
                    </p>
                    <h2 className='font-bold p-3'>{user}</h2>
                </div>
            </div>
            <div className='pt-12 flex justify-center  hidden md:flex'>
                {
                    images.map((item, index) => {
                        if (i == index) {
                            return (
                                <>
                                    <img src={item} alt='user' className='w-[70px] rounded-full absolute left-[48%]' />
                                </>
                            )
                        }
                        else {
                            return (
                                <>
                                    <img key={index} src={item} alt='user' className={`w-[70px] rounded-full`} style={{
                                        position: 'absolute',
                                        left: `${images.length < index ? "42%" : "54%"}`,
                                    }} />
                                </>
                            )
                        }
                    })
                }
            </div>
            <div className='pt-12 flex justify-center md:hidden'>
                {
                    images.map((item, index) => {
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
