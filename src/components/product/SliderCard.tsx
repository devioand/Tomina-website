import React from 'react';

const SliderCard = ({ item }: any) => {
  return (
    <div className="flex justify-center items-center">
      <img
        src={item}
        alt="Products"
        className="w-[400px] h-[350px] object-contain object-center"
      />
    </div>
  );
};

export default SliderCard;
