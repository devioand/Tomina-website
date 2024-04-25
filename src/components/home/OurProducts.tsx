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
    <section className="bg-[#B8AA84]">
      <div className="max-w-[1440px] mx-auto px-2 md:px-4 lg:px-8 py-12">
        <h2 className="text-4xl md:text-6xl text-white text-center pb-8 md:pb-16 font-bold">
          Our Products
        </h2>

        <ProductsCaurasel data={data} />
        <div className="w-full flex justify-center items-center pt-3 xl:pt-8">
          <button
            type="button"
            className="focus:outline-none text-white bg-[#004F2D] font-medium rounded-full text-xl px-12 pt-2 pb-3"
          >
            See More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Product;
