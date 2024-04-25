import React from 'react';
import img from '../../images/1.png';

function Field() {
  return (
    <div className='bg-[url("../images/Garlic.png")] h-[80vh] md:h-[100vh] bg-center bg-cover '>
      <div className="flex flex-col items-center justify-center w-full h-[80vh] md:h-[100vh] gradiant-top px-2 md:px-4 lg:px-8 py-12">
        <div className="w-full flex flex-col justify-center items-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white text-center">
            Tomina Field Tour
          </h2>
          <img
            src={img}
            className="mt-16 md:mt-24 max-w-[300px] max-h-[200px] md:max-w-[500px] md:max-h-[300px] XXL:max-w-[700px] XXL:max-h-[400px] object-center object-contain"
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
