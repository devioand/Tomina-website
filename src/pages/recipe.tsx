import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import Description from "../components/garlic/Description";
import Ratio from "../components/garlic/Ratio";
import Video from "../components/garlic/VideoSection";
import Hero from "../components/recipes/Hero";
import Footer from "../components/Footer";

const RecipePage: React.FC<PageProps> = () => {
  return (
    <main>
      <Hero
        title={"40 Clove Garlic Chicken"}
        discription={
          "There's no such thing as 'too much garlic' withour 40 Clove Garlic Chicken."
        }
      />
      <Video />
      <Ratio />
      <Description />
      <Footer curveColor="#B8AA84" />
    </main>
  );
};

export default RecipePage;

export const Head: HeadFC = () => <title>Recipe</title>;
