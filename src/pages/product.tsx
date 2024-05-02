import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Hero from "../components/product/Hero";
import Product from "../components/product/Products";
import FeedSlider from "../components/product/FeedbackS";
import Garlicpowder from "../components/product/Garlicpowder";
import Mission from "../components/product/Mission";

const ProductPage: React.FC<PageProps> = () => {
    return (
        <main>
            <Hero />
            <Product />
            <Garlicpowder />
            <Mission />
            <FeedSlider />
        </main>
    );
};

export default ProductPage;

export const Head: HeadFC = () => <title>About Us</title>;
