import React from 'react';
import PlayButton from '../svgs/solid/PlayButton';

const OurCompanyTour = () => {
  return (
    <section className="bg-[url('../images/imgs/about/garlic-soil.webp')] bg-no-repeat bg-cover bg-center">
      <div className="relative company-gradient h-screen">
        <span className='absolute top-[41%] left-[45%]'>
          <PlayButton />
        </span>
      </div>
    </section>
  );
};

export default OurCompanyTour;
