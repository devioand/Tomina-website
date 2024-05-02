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
    <section className="relative bg-[#282828]">
      {/* <div className="custom-shape-divider-top-1714682639">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div> */}
      {/* <div style={{ overflow: 'hidden;' }}>
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
          style={{ fill: '#A51E1E', width: '145%', height: 82 }}
        >
          <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
        </svg>
      </div> */}
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
    </section>
  );
}

export default FeaturedRecipies;
