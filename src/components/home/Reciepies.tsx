import React from 'react';
import img from '../../images/Rectangle3.png';
import ReciepiesCaurasel from './ReciepiesCaurasel';

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
    <section className='bg-[#004F2D]'>
      <div className="max-w-[1440px] mx-auto px-2 md:px-4 lg:px-8 py-12">
        <ReciepiesCaurasel data={data} />
      </div>
    </section>
  );
}

export default Reciepies;
