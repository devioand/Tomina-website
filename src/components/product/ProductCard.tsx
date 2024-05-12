import React from 'react';

const ProductCard = ({ item }: any) => {
  return (
    <div className="flex flex-col ustify-center items-center">
      <img
        src={item.image}
        alt="Products"
        className="w-[400px] h-[350px] object-contain object-center"
      />
      <h2 className="uppercase text-[24px] md:text-[48px] font-[800] text-center text-[#282828] mt-4">
        {item.name}
      </h2>
    </div>
  );
};

export default ProductCard;
