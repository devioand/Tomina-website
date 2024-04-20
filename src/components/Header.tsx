import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Logo from '../images/Logo.png'

function Header() {
    return (
        <div className='font-mono text-white'>
            <div className='flex justify-center items-center'>
                <div className='bg-[#B8AA84] w-[15rem] p-[.4rem] rounded-full relative left-[1rem]'>
                    <ul className='flex '>
                        <li className='ml-[2rem]'>Home</li>
                        <li className='ml-[2rem]'>About Us</li>
                    </ul>
                </div>
                <div>
                    <img src={Logo} alt='Logo_of_Tomina' className='relative top-[0rem] w-[11.673rem] h-[5.433rem] z-10' />
                </div>
                <div className='bg-[#B8AA84] w-[15rem] p-[.4rem] px-[2rem] rounded-full relative right-[1rem] '>
                    <ul className='flex justify-end ' >
                        <li className='ml-[2rem]'>Products</li>
                        <li className='ml-[2rem]' >Recipes</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header

