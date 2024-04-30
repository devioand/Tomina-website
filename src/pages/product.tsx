import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Hero from "../components/product/Hero";
import Feedback from "../components/product/FeedBack";
import FeedSlider from "../components/product/FeedSlider";

const ProductPage: React.FC<PageProps> = () => {
    return (
        <main>
            {/* <Hero /> */}
            <FeedSlider />
        </main>
    );
};

export default ProductPage;

export const Head: HeadFC = () => <title>About Us</title>;
