import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Card from "../components/AboutUs/Card";
import Slider from "../components/AboutUs/Slider";
import User from "../components/AboutUs/User";

const AboutPage: React.FC<PageProps> = () => {
  return (
    <main>
      <User />
    </main>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <title>About Us</title>;
