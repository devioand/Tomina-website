import React from 'react'
import Main from "../recipes/Hero";
import Product from './Products';

const Hero = () => {
    return (
        <div>
            <Main title={'Our Products'} discription={'Proudly located in - Fatoum, Egypt'} />
            <Product />
        </div>
    )
}

export default Hero
