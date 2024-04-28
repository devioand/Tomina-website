import React from 'react'
import img from '../../images/Recipes/FrameR.png'

const Product = () => {
    return (
        <div className='w-full bg-[#B8AA84]'>
            <div className='px-3 md:px-4 lg:px-8 py-8 md:py-12 gradiant-top'>
                <div className='h-[500px] md:h-[150px] lg:h-[300px] flex flex-col-reverse md:flex-row justify-center md:justify-center items-center'>
                    <div className='h-[300px] md:h-auto md:w-[50rem] py-5'>
                        <p className='text-center text-sm font-normal md:text-[.9rem] lg:text-[1.2rem] pb-[6rem] md:pb-0 text-white md:text-left '>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
                            veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip
                            ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
                            vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla
                            facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent
                            luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                        </p>
                    </div>
                    <div>
                        <img src={img} alt='Recips' className='w-[300px] md:w-[600px]  md:mt-12' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
