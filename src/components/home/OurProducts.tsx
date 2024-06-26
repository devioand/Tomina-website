import { Link } from "gatsby";
import React from "react";
import garlicPowderImage from "../../images/imgs/home/garlic-powder-slider.webp";
import AnimateY from "../animation/AnimateY";
import ProductsCaurasel from "./ProductsCaurasel";

const data = [
  {
    img: garlicPowderImage,
  },
  {
    img: garlicPowderImage,
  },
  {
    img: garlicPowderImage,
  },
];

function Product() {
  return (
    <section className="bg-[#B8AA84] relative">
      <AnimateY>
        <div className="max-w-[1536px] mx-auto px-2 md:px-4 lg:px-8 pt-8 pb-8 md:pb-16">
          <h2 className="text-[24px] md:text-[64px] font-[800] text-white text-center pb-8 md:pb-16 font-bold">
            Our Products
          </h2>

          <ProductsCaurasel data={data} />
          <div className="w-full flex justify-center items-center pt-3 xl:pt-8">
            <Link
              to="/products"
              className="focus:outline-none text-white bg-[#004F2D] font-normal md:font-medium rounded-full text-md md:text-xl px-12 pt-1 pb-2"
            >
              See More
            </Link>
          </div>
        </div>
      </AnimateY>
    </section>
  );
}

export default Product;
