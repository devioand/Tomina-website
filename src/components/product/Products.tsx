import React from 'react';
import garlicPowderImg from '../../images/imgs/products/nuts.webp';
import PeeledGarlicImg from '../../images/imgs/products/peeled-garlic.webp';
import AnimateY from '../animation/AnimateY';
import ProductsCarousel from './ProductsCarousel';

const data = [
  {
    name: 'GARLIC POWDER',
    image: garlicPowderImg,
  },
  {
    name: 'PEELED GARLIC',
    image: PeeledGarlicImg,
  },
];
const Products = () => {
  return (
    <div className="bg-[#B8AA84] relative py-8 md:py-20 z-50">
      <div className="pt-20 py-3 bg-gradient-to-t from-transparent to-red-800 opacity-40 w-full absolute top-0"></div>
      <AnimateY>
        <ProductsCarousel data={data} />
      </AnimateY>
    </div>
  );
};

export default Products;
