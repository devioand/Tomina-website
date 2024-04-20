import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/Header";
import Main from "../components/Main";
import Field from "../components/Field";
import Slider from "../components/Slider";
const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="heading">
      <Main />
      <Field />
      <Slider />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
