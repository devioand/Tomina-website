import React from 'react';
import img from '../../images/imgs/recipes/onion-logo.webp';
import RecipeVideo from './RecipeVideo';
import AnimateY from '../animation/AnimateY';

const RecipesTip = () => {
  return (
    <div className="bg-[#004F2D]">
      <AnimateY>
        <div className="flex flex-col justify-center items-center px-2 md:px-4 lg:px-8 py-12">
          <img src={img} alt="logo" className="h-12 w-12 md:w-24 md:h-24" />
          <h2 className="text-white md:text-[40px] font-bold pt-5 pb-4 mt:pb-8">
            Recipe Tip:
          </h2>
          <p className="text-white text-[12px] md:text-[40px] font-[800] md:font-medium text-center pb-8 md:pb-12">
            1 Clove of Fresh Garlic
            <br />
            = 1 tsp of Chopped Garlic
            <br />
            or 2 tsp of Minced Garlic
          </p>

          <RecipeVideo />
        </div>
      </AnimateY>
    </div>
  );
};

export default RecipesTip;
