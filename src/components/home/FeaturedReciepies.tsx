import React from "react";
import FeaturedReciepiesCaurasel from "./FeaturedReciepiesCaurasel";
import img from "../../images/Group2.webp";
import AnimateY from "../animation/AnimateY";

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
    <section className="relative bg-[#282828]">
      <AnimateY>
        <div className="max-w-[1536px] mx-auto px-2 md:px-4 lg:px-8 pt-12 pb-8 md:pb-16">
          <h2 className="text-[24px] md:text-[64px] font-[800] text-[#B8AA84] text-center pb-0">
            Featured Recipes
          </h2>

          <FeaturedReciepiesCaurasel data={data} />
          <div className="w-full flex justify-center items-center pt-3 xl:pt-8">
            <button
              type="button"
              className="focus:outline-none text-white border-2 border-white font-normal md:font-medium rounded-full text-md md:text-xl px-12 pt-1 pb-2"
            >
              Learn More
            </button>
          </div>
        </div>
      </AnimateY>
    </section>
  );
}

export default FeaturedRecipies;
