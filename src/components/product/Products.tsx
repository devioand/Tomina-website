import React from 'react'
import Slider from './Slider'
import img from '../../images/nuts.png'
import img1 from '../../images/ketchup.png'

const Api = [
    img, img1
]
const Products = () => {
    return (
        <div className='bg-[#B8AA84]'>
            <div className='backgradiand py-12'></div>
            <div className=' px-[1rem]'>
                <Slider data={Api} />
            </div>
        </div>
    )
}

export default Products
