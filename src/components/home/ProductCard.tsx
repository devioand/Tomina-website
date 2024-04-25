import React from 'react';

const ProductCard = ({ item }: any) => {
  return (
    <div className="flex justify-center items-center">
      <img
        src={item?.img}
        className="max-h-[250px] md:max-h-[320px] object-contain object-center"
        alt=""
      />
    </div>
  );
};

export default ProductCard;
