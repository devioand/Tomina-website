import React from 'react';
import Card from './Card'; // Import the Card component
import img from '../images/Frame.png'; // Replace 'yourImage.png' with the actual image path

function Silder() {

    return (
        <div className='relative h-[90vh]' style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "100vw 90vh",
            backgroundPosition: 'center'
        }}>
            <div className='z-30'>
                <div className='z-10'>
                    <h1 className='text-7xl text-black text-center mt-[1rem] p-[1rem] font-bold'>Our Products</h1>
                </div>
                <div>
                    <Card />
                    <button className='bg-[#004F2D] w-[18.875rem] h-[4.313rem] text-white p-[.5rem] px-[1.5rem] rounded-full absolute top-[35rem] left-[40rem]'>
                        See More
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Silder;
