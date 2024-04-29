import React from 'react'
import img from '../../images/Recipes/FrameR.png'

const Product = () => {
    return (
        <div className='w-full bg-[#B8AA84] relative'>
            <div className='px-3 md:px-4 lg:px-8  gradiant-top py-32'>
                <div className='flex flex-col-reverse md:flex-row justify-center items-center'>
                    <div className='py-5  absolute md:left-0 max-[767px]:bottom-10 px-5'>
                        <p className='md:w-[50vw]  text-sm font-normal md:text-[.9rem] lg:text-[1.2rem] text-white md:text-left '>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
                            veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip
                            ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
                            vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla
                            facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent
                            luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                        </p>
                    </div>
                    <div className='md:absolute md:right-0 relative max-[767px]:top-[-10rem]'>
                        <img src={img} alt='Recips' className='w-[300px] md:w-[400px] ' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
