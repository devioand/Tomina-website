import React from 'react';

const ReciepeCard = ({ item }: any) => {
  return (
    <div className="mx-auto max-w-[260px] sm:max-w-none w-min flex flex-col justify-center items-center target-component opacity-40">
      <img
        src={item?.img}
        className="max-w-[260px] sm:max-w-auto object-contain object-center"
        alt=""
      />

      <div className="bg-[#A51E1E] rounded-b-[30px] py-8 flex flex-col justify-center items-center space-y-6 px-4">
        <h3 className="text-sm font-medium md:text-2xl text-white text-center md:font-bold">
          {item.title}
        </h3>
        <p className="text-sm text-white text-center">{item.description}</p>

        <button
          type="button"
          className="focus:outline-none text-white border-2 border-white font-medium rounded-full text-xl px-12 pt-2 pb-3"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ReciepeCard;
