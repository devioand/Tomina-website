import React from 'react'
import Slider from './Slider'
import img from '../../images/nuts.png'
import img1 from '../../images/ketchup.png'

const Api = [
    img, img1
]
const Products = () => {
    return (
        <div className='bg-[#B8AA84] relative'>
            <div className='pt-20 py-3 bg-gradient-to-t from-transparent to-red-800 opacity-60 w-full absolute top-0'></div>
            <div className=' px-[1rem]'>
                <Slider data={Api} />
            </div>
        </div>
    )
}

export default Products
