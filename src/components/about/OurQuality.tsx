import React from 'react';
import About1 from '../../images/about1.png';
import Organic from '../../images/organic.png';
import Trusted from '../../images/trusted.png';

const OurQuality = () => {
  return (
    <section className="gradient-bg">
      <div className="max-w-[1440px] mx-auto flex lg:flex-row flex-col-reverse px-12 xl:px-28 pt-12 pb-4">
        <div className="lg:min-w-[50%] w-full">
          <p className="text-white text-[12px] md:text-[20px] font-normal text-justify lg:text-left">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore te feugait
            nulla facilisi.
          </p>
          <div className="mt-5 flex items-center justify-center lg:justify-start gap-x-2">
            <img
              src={Organic}
              alt="organic"
              className="md:w-[105px] w-[42px] md:h-[81px] h-[27px] object-contain object-center"
            />
            <img
              src={Trusted}
              alt="trusted"
              className="md:w-[154px] w-[62px] md:h-[67px] h-[23px] object-contain object-center"
            />
          </div>
        </div>
        <div className="lg:min-w-[50%] w-full z-10 mb-8 lg:mb-0 flex justify-center lg:justify-end items-center">
          <img
            src={About1}
            className="-mt-[80px] md:-mt-[100px] lg:-mb-[50px] object-contain object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default OurQuality;
