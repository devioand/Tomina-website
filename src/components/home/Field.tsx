import React from 'react';
import img from '../../images/imgs/home/rounded-onions.webp';

function Field() {
  return (
    <div className='bg-[url("../images/imgs/home/fresh-garlic.webp")] h-[80vh] md:h-[100vh] bg-center bg-cover'>
      <div className="flex flex-col items-center justify-center w-full h-[80vh] md:h-[100vh] gradiant-top px-2 md:px-4 lg:px-8">
        <div className="w-full flex flex-col justify-center items-center">
          <h2 className="text-[24px] font-[800] md:text-6xl text-white text-center md:mt-8 mb-4 md:mb-12 ">
            Tomina Field Tour
          </h2>
          <img
            src={img}
            className="rounded-full md:rounded-none max-w-[300px] max-h-[200px] md:max-w-[500px] md:max-h-[220px] lg:max-h-[300px] XXL:max-w-[700px] XXL:max-h-[380px] object-center object-contain"
          />
          <p className="text-sm font-medium text-white mt-4 text-center">
            Watch a tour of our facility
          </p>
        </div>
      </div>
    </div>
  );
}

export default Field;
