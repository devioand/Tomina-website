import { Link } from 'gatsby';
import React from 'react';
import AnimateY from '../animation/AnimateY';
import Slider from './RecipeCarousel';

const Recipes = () => {
  return (
    <section className="px-0 mx-0 py-8 md:py-16 bg-[#282828]">
      <AnimateY>
        <h2 className="text-center text-[#B8AA84] text-[24px] font-[800] md:text-5xl md:font-bold md:pt-12">
          RECIPES
        </h2>
        <div className="pt-8 pb-4 md:pt-16">
          <Slider />
        </div>
        <div className="flex justify-center items-center">
          <Link
            to="/recipe"
            className="focus:outline-none border border-2 text-white font-medium rounded-full text-xl px-12 pt-2 pb-3"
          >
            Learn more
          </Link>
        </div>
      </AnimateY>
    </section>
  );
};

export default Recipes;
