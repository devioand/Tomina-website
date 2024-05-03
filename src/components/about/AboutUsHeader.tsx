import React from 'react';
import Navigation from '../nav/Navigation';

const AboutUsHeader = () => {
  return (
    <section>
      <div className='bg-[url("../images/imgs/about/soil-garlic.webp")] bg-no-repeat object-cover bg-cover bg-center'>
        <div className="relative flex flex-col about-header w-full h-lvh">
          <div className="block absolute left-0 right-0 top-12 lg:top-20">
            <Navigation />
          </div>
          <div className="pb-16 mt-auto">
            <h1 className="text-white text-[24px] md:text-[64px] font-[800] text-center mx-auto">
              About Us
            </h1>
            <p className="text-white text-sm md:text-[20px] font-normal text-center mx-auto">
              Proudly located in - Fatoum, Egypt
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHeader;
