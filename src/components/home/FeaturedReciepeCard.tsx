import React from 'react';

const ReciepeCard = ({ item }: any) => {
  return (
    <div className="flex justify-center items-center target-component opacity-40">
      <img
        src={item?.img}
        className="max-w-[250px] sm:max-w-[350px] lg:max-w-[450px] xl:max-w-none max-h-[250px] md:max-h-[320px] object-contain object-center"
        alt=""
      />
    </div>
  );
};

export default ReciepeCard;