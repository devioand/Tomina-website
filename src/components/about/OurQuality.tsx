import React from 'react';
import onionImage from '../../images/imgs/about/onion.webp';
import Organic from '../../images/organic.png';
import Trusted from '../../images/trusted.png';
import AnimateY from '../animation/AnimateY';

const OurQuality = () => {
  return (
    <section className="gradient-bg">
      <AnimateY>
      <div className="max-w-[1536px] mx-auto flex lg:flex-row flex-col-reverse px-12 xl:px-28 pt-12 pb-4">
        <div className="lg:min-w-[60%] w-full">
          <p className="text-white text-[12px] lg:text-[20px] font-normal lg:font-[500] text-justify lg:text-left lg:pr-12">
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
              className="lg:w-[105px] w-[42px] lg:h-[81px] h-[27px] object-contain object-center"
            />
            <img
              src={Trusted}
              alt="trusted"
              className="md:w-[154px] w-[62px] md:h-[67px] h-[23px] object-contain object-center"
            />
          </div>
        </div>
        <div className="lg:min-w-[40%] w-full z-10 mb-8 lg:mb-0 flex justify-center lg:justify-end items-center">
          <img
            src={onionImage}
            className="lg:-mt-[200px] lg:-mb-[150px] object-contain object-center"
          />
        </div>
      </div>
      </AnimateY>
    </section>
  );
};

export default OurQuality;
