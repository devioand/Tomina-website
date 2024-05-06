import React from 'react';
import img from '../../images/imgs/home/garlic.webp';
import ReciepiesCaurasel from './ReciepiesCaurasel';
import AnimateY from '../animation/AnimateY';

const data = [
  {
    img,
    title: 'Garlic harvest beats expectations',
    description:
      "Gilroy Garlic sales spike as 49ers head to Super Bowl According to a press release from Christopher Ranch, the nation's largest grower and packer of fresh garlic, sales of their products have increased by 20%",
  },
  {
    img,
    title: 'Garlic harvest beats expectations',
    description:
      "Gilroy Garlic sales spike as 49ers head to Super Bowl According to a press release from Christopher Ranch, the nation's largest grower and packer of fresh garlic, sales of their products have increased by 20%",
  },
  {
    img,
    title: 'Garlic harvest beats expectations',
    description:
      "Gilroy Garlic sales spike as 49ers head to Super Bowl According to a press release from Christopher Ranch, the nation's largest grower and packer of fresh garlic, sales of their products have increased by 20%",
  },
  {
    img,
    title: 'Garlic harvest beats expectations',
    description:
      "Gilroy Garlic sales spike as 49ers head to Super Bowl According to a press release from Christopher Ranch, the nation's largest grower and packer of fresh garlic, sales of their products have increased by 20%",
  },
  {
    img,
    title: 'Garlic harvest beats expectations',
    description:
      "Gilroy Garlic sales spike as 49ers head to Super Bowl According to a press release from Christopher Ranch, the nation's largest grower and packer of fresh garlic, sales of their products have increased by 20%",
  },
  {
    img,
    title: 'Garlic harvest beats expectations',
    description:
      "Gilroy Garlic sales spike as 49ers head to Super Bowl According to a press release from Christopher Ranch, the nation's largest grower and packer of fresh garlic, sales of their products have increased by 20%",
  },
];
function Reciepies() {
  return (
    <section className="bg-[#004F2D] py-4 md:py-8">
      <AnimateY>
        <div className="max-w-[1536px] mx-auto px-2 md:px-4 lg:px-8 py-12">
          <ReciepiesCaurasel data={data} />
        </div>
      </AnimateY>
    </section>
  );
}

export default Reciepies;
