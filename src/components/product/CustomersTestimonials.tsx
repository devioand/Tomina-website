import React from 'react';
import AnimateY from '../animation/AnimateY';
import TestimonialCaurosel from './TestimonialCaurosel';

const CustomersTestimonials = () => {
  return (
    <section className="bg-[#282828] w-full relative">
      <div className="pt-52 py-3 bg-gradient-to-t from-transparent to-red-900 opacity-40 w-full absolute top-0"></div>
      <AnimateY>
        <div className="pt-4 md:pt-8 pb-4 md:pb-16 w-full">
          <div className="mx-auto max-w-[1037px] px-4 md:px-12 md:mb-12">
            <div className="flex flex-col justify-center items-center ">
              <h2 className="text-24px lg:text-[64px] font-[800] text-white mb-2">
                Testimonials
              </h2>
              <p className="text-[8px] lg:text-[24px] font-[800] lg:font-[700] text-white mb-4 md:mb-8">
                All in good taste elementum integer enim neque volutpat ac.
              </p>
              <p className="text-[12px] lg:text-[20px] font-[400] lg:font-[500] text-white text-center">
                Massa placerat duis ultricies lacus sed turpis tincidunt id.
                Interdum varius sit amet mattis enim. Quis hendrerit dolor magna
                eget est lorem ipsum dolor. Sagittis scelerisque purus semper.
              </p>
            </div>
          </div>
          <TestimonialCaurosel />
        </div>
      </AnimateY>
    </section>
  );
};

export default CustomersTestimonials;
