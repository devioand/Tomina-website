import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import Footer from "../components/Footer";
import Hero from "../components/product/Hero";
import Product from "../components/product/Products";
import CustomersTestimonials from "../components/product/CustomersTestimonials";
import PlayButton from "../components/svgs/solid/PlayButton";
import { StaticImage } from "gatsby-plugin-image";

const ProductPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Hero />
      <Product />
      <div className="relative">
        <StaticImage
          src="../images/imgs/products/our-products.webp"
          alt="bottles"
          // layout="fullWidth"
          placeholder="blurred"
          className="w-full max-h-screen"
        />
        <span className="absolute top-[42%] md:top-[45%] left-[45%] cursor-pointer">
          <PlayButton />
        </span>
      </div>
      <StaticImage
        src="../images/imgs/products/Products.webp"
        alt="Showcase"
        placeholder="blurred"
        className="w-full max-h-screen xxl:h-auto"
      />
      <CustomersTestimonials />
      <Footer curveColor="#282828" />
    </main>
  );
};

export default ProductPage;

export const Head: HeadFC = () => <title>Our Products</title>;
