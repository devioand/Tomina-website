import React from 'react';
import img from '../../images/imgs/recipes/bar-garlic.webp';

const Product = () => {
  return (
    <section className="bg-[#B8AA84]">
      <div className="gradiant-top">
        <div className="max-w-[1536px] mx-auto flex lg:flex-row flex-col-reverse px-12 xl:px-28 pt-12 pb-4">
          <div className="lg:min-w-[50%] w-full">
            <p className="text-white text-[12px] md:text-[20px] font-normal text-justify lg:text-left">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue duis
              dolore te feugait nulla facilisi.
            </p>
          </div>
          <div className="lg:min-w-[50%] w-full z-10 mb-8 lg:mb-0 flex justify-center lg:justify-end items-center">
            <img
              src={img}
              className="sm:w-[300px] md:w-[350px] lg:w-[400px] -mt-[80px] lg:-mt-[120px] lg:-mb-[80px] object-contain object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
