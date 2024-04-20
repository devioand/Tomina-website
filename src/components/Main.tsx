import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import img from '../images/garlic-182553-1.jpg'
import img1 from '../images/oldclassicpainting.jpg'
import img2 from '../images/image.png'
import Header from './Header'

function Main() {
    return (
        <div className="relative overflow-hidden">
            <div className="flex">
                <img src={img} alt='' className="w-[50vw] h-[100vh]" />
                <img src={img1} alt='' className="w-[50vw] h-[100vh]" />
            </div>
            <div className="absolute top-[0rem] z-10">
                <div className="w-[100vw] h-[2rem] flex p-[1.5rem] justify-end">
                    <div className="w-[3rem] h-[3rem] rounded-full bg-red-900 ml-[.1rem]"></div>
                    <div className="w-[3rem] h-[3rem] rounded-full bg-red-900 ml-[.1rem]"></div>
                    <div className="w-[3rem] h-[3rem] rounded-full bg-red-900 ml-[.1rem]"></div>
                    <div className="w-[3rem] h-[3rem] rounded-full bg-red-900 ml-[.1rem]"></div>
                </div>
                <div className="p-[2rem]">
                    <Header />
                </div>
                <div className="">
                    <h1 className="text-7xl text-white text-center mt-[2rem] font-bold">
                        FRESH NOW <br></br> AND ALWAYS
                    </h1>
                    <h1 className="text-7xl text-white text-center mt-[2rem] font-extralight">
                        Garlicious
                    </h1>
                    <img src={img2} alt="curve" className="w-[100vw] h-[20rem] absolute top-[20rem]" />
                </div>
            </div>
            <div className="absolute top-[0rem] w-[100vw] h-[100vh] bg-gradient-to-b from-transparent to-red-800"></div>
        </div>
    )
}

export default Main
