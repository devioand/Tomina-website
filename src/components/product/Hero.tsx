import React from 'react';
import Navigation from '../nav/Navigation';

const Hero = () => {
  return (
    <div className="bg-[url('../images/freshraw.png')] w-full h-[100vh] bg-center bg-cover">
      <div className="flex flex-col justify-between items-center w-full h-[100vh] bg-h-gradiant px-2 md:px-4 lg:px-8 py-12 ">
        <div className="w-full">
          <div className="block absolute left-0 right-0 top-12 lg:top-20">
            <Navigation />
          </div>
        </div>
        <div className="flex justify-center items-center flex-col">
          <h2 className="text-4xl md:text-6xl text-white text-center font-bold">
            Our Products
          </h2>
          <p className="text-sm text-white text-center w-[20rem] md:pt-3">
            Proudly located in - Fatoum, Egypt
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
