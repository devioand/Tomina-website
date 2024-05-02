import React from 'react';

const ReciepeCard = ({ item }: any) => {
  return (
    <div className="scale-75 mx-auto max-w-[260px] sm:max-w-[320px] xl:max-w-[448px] w-min flex flex-col justify-center items-center target-component upscale opacity-40">
      <img
        src={item?.img}
        className="max-w-[260px] sm:max-w-[320px] xl:max-w-[448px] object-contain object-center"
        alt=""
      />

      <div className="bg-[#A51E1E] rounded-b-[30px] py-8 flex flex-col justify-center items-center space-y-6 px-4 md:px-8 lg:px-12 xl:px-20">
        <h3 className="text-sm font-medium md:text-2xl text-white text-center md:font-bold">
          {item.title}
        </h3>
        <p className="text-sm text-white text-center">{item.description}</p>

        <button
          type="button"
          className="focus:outline-none text-white border-2 border-white font-normal md:font-medium rounded-full text-md md:text-xl px-12 pt-1 pb-2"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ReciepeCard;
