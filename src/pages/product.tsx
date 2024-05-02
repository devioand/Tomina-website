import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Hero from "../components/product/Hero";
import Product from "../components/product/Products";
import FeedSlider from "../components/product/FeedbackS";

const ProductPage: React.FC<PageProps> = () => {
    return (
        <main>
            <Hero />
            <Product />
            <FeedSlider />
        </main>
    );
};

export default ProductPage;

export const Head: HeadFC = () => <title>About Us</title>;
