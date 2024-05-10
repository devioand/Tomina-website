import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import Footer from "../components/Footer";
import Hero from "../components/product/Hero";
import Product from "../components/product/Products";
import CustomersTestimonials from "../components/product/CustomersTestimonials";
import PlayButton from "../components/svgs/solid/PlayButton";

const ProductPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Hero />
      <Product />
      <div className="relative bg-size bg-[url('../images/imgs/products/garlicPowder.webp')] h-[50vh] md:h-[100vh] md:-mt-[108px]">
        <span className="absolute top-[42%] md:top-[52%] left-[47%]">
          <PlayButton />
        </span>
      </div>
      <div className="bg-size bg-[url('../images/imgs/products/our-mission.jpg')] h-[50vh] md:h-[118vh] md:-mt-[120px]"></div>
      <CustomersTestimonials />
      <Footer curveColor="#282828" />
    </main>
  );
};

export default ProductPage;

export const Head: HeadFC = () => <title>Our Products</title>;