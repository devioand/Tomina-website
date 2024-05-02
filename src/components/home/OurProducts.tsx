import React from 'react';
import ProductsCaurasel from './ProductsCaurasel';
import img from '../../images/Rectangle4.png';

const data = [
  {
    img,
  },
  {
    img,
  },
  {
    img,
  },
];

function Product() {
  return (
    <section className="bg-[#B8AA84] relative">
      <div className="max-w-[1536px] mx-auto px-2 md:px-4 lg:px-8 pt-8 pb-8 md:pb-16">
        <h2 className="text-[24px] md:text-[64px] font-[800] text-white text-center pb-8 md:pb-16 font-bold">
          Our Products
        </h2>

        <ProductsCaurasel data={data} />
        <div className="w-full flex justify-center items-center pt-3 xl:pt-8">
          <button
            type="button"
            className="focus:outline-none text-white bg-[#004F2D] font-normal md:font-medium rounded-full text-md md:text-xl px-12 pt-1 pb-2"
          >
            See More
          </button>
        </div>
      </div>
      {/* <div style={{ overflow: ' hidden;' }}>
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
          style={{ fill: '#A51E1E', width: '145%', height: 82 }}
        >
          <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
        </svg>
      </div> */}
    </section>
  );
}

export default Product;
