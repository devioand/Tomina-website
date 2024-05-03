import React from 'react';

const Testimonial = ({ item }: any) => {
  return (
    <div className="mt-8 mt-24 w-full flex flex-col">
      <div className="mx-auto bg-white p-4 md:p-8 max-w-[260px] small:max-w-[380px] md:max-w-[600px] lg:max-w-[885px] rounded-md mb-8 md:mb-12">
        <p className="text-[#171717] text-[12px] font-[400] md:text-[20px] md:font-[500] mb-2 text-center">
          {item.comment}
        </p>
        <p className="text-[#171717] text-[8px] md:text-[20px] font-[800] md:font-[700] text-center">
          {item.user}
        </p>
      </div>
      <div className='mx-auto'>
        <img
          src={item.image}
          alt="Customer Image"
          className="rounded-full w-[50px] md:w-[80px] h-[50px] md:h-[80px] border-2 md:border-4 border-white"
        />
      </div>
    </div>
  );
};

export default Testimonial;
