import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import Footer from "../components/Footer";
import Hero from "../components/product/Hero";
import Product from "../components/product/Products";
import CustomersTestimonials from "../components/product/CustomersTestimonials";

const ProductPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Hero />
      <Product />
      <div className="relative bg-size bg-[url('../images/imgs/products/garlicPowder.webp')] h-[50vh] md:h-[100vh] md:-mt-[108px]"></div>
      <div className="bg-size bg-[url('../images/imgs/products/our-mission.webp')] h-[50vh] md:h-[100vh] md:-mt-[105px]"></div>
      <CustomersTestimonials />
      <Footer curveColor="#282828" />
    </main>
  );
};

export default ProductPage;

export const Head: HeadFC = () => <title>About Us</title>;
