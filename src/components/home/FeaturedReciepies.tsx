import React from 'react';
import FeaturedReciepiesCaurasel from './FeaturedReciepiesCaurasel';
import img from '../../images/Group2.png';

const data = [
  {
    img,
  },
  {
    img,
  },
  {
    img,
  },
  {
    img,
  },
  {
    img,
  },
  {
    img,
  },
];

function FeaturedRecipies() {
  return (
    <section className="bg-[#282828]">
      <div className="max-w-[1440px] mx-auto px-2 md:px-4 lg:px-8 py-12">
        <h2 className="text-4xl md:text-6xl text-white text-center pb-8 md:pb-16 font-bold">
          Featured Recipes
        </h2>

        <FeaturedReciepiesCaurasel data={data} />
        <div className="w-full flex justify-center items-center pt-3 xl:pt-8">
          <button
            type="button"
            className="focus:outline-none text-white border-2 border-white font-medium rounded-full text-xl px-12 pt-2 pb-3"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default FeaturedRecipies;
