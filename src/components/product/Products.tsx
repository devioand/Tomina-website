import React from 'react';
import img1 from '../../images/imgs/products/peeled-garlic.webp';
import img from '../../images/nuts.png';
import Slider from './Slider';

const Api = [img, img1];
const Products = () => {
  return (
    <div className="bg-[#B8AA84] relative py-8 md:py-20 z-50">
      <div className="pt-20 py-3 bg-gradient-to-t from-transparent to-red-800 opacity-40 w-full absolute top-0"></div>
      <div>
        <Slider data={Api} />
        <h2 className="text-[24px] md:text-[48px] font-[800] text-center text-[#282828] mt-4">
          GARLIC POWDER
        </h2>
      </div>
    </div>
  );
};

export default Products;
