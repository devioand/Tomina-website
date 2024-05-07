import React from 'react';
import Navigation from '../nav/Navigation';
import AnimateY from '../animation/AnimateY';

function Hero({ title, discription }: any) {
  return (
    <div className="bg-[url('../images/imgs/recipes/recipes-header.webp')] w-full h-[100vh] bg-center bg-cover">
      <div className="flex w-full justify-center h-[100vh] bg-h-gradiant px-2 md:px-4 lg:px-8 py-12">
        <div className="block absolute left-0 right-0 top-12 lg:top-20">
          <Navigation />
        </div>
        <div className="mt-auto">
          <AnimateY fadePosition='top'>
            <div className="flex justify-center items-center flex-col">
              <h2 className="text-[24px] md:text-[64px] font-[800] text-white text-center">
                {title}
              </h2>
              <p className="text-sm text-white text-center w-[20rem] md:pt-3">
                {discription}
              </p>
            </div>
          </AnimateY>
        </div>
      </div>
    </div>
  );
}

export default Hero;
