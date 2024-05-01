import React from 'react';

const MissionAndVision = () => {
  return (
    <section className="bg-[#282828]">
      <div className="gradient-mission-vission">
        <div className="md:py-[65px] py-8 flex md:flex-row flex-col justify-between mx-auto">
          <div className="text-center px-12 xl:px-28 md:w-[44%] w-full md:pt-[49px] pb-5 md:pb-0">
            <h3 className="md:w-[293px] w-full text-white md:text-[64px] text-[24px] font-[800] md:leading-[78px] leading-[29px] md:text-justify text-center">
              Our Mission
            </h3>
          </div>
          <div className="md:w-[56%] w-full flex justify-center text-center md:px-0 px-5">
            <div className="xl:pl-20 md:pl-12 md:pr-8 py-7 bg-[#B8AA84] md:rounded-r-[0px] rounded-[20px] px-5 md:px-0">
              <p className="text-white lg:text-[20px] text-xs lg:font-medium font-normal leading-[14px] md:leading-[18px] lg:leading-[24px] md:text-left text-justify">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat, vel
                illum dolore eu feugiat nulla facilisis at vero eros et accumsan
                et iusto odio dignissim qui blandit praesent luptatum zzril
                delenit augue duis dolore te feugait nulla facilisi.
              </p>
            </div>
          </div>
        </div>

        <div className="md:py-[65px] pb-8 flex md:flex-row flex-col-reverse justify-between mx-auto ">
          <div className="md:w-[66%] w-full flex justify-center text-center md:px-0 px-5">
            <div className="xl:pl-20 md:pr-8 md:pl-12 py-7 bg-[#B8AA84] md:rounded-l-[0px] rounded-[20px] px-5 md:px-0">
              <p className="text-white lg:text-[20px] text-xs lg:font-medium font-normal md:leading-[18px] lg:leading-[24px] leading-[14px] md:text-right text-justify">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat, vel
                illum dolore eu feugiat nulla facilisis at vero eros et accumsan
                et iusto odio dignissim qui blandit praesent luptatum zzril
                delenit augue duis dolore te feugait nulla facilisi.
              </p>
            </div>
          </div>
          <div className="flex px-12 xl:px-28 pb-5 md:w-[44%]">
            <h3 className="md:ml-auto text-center md:text-right md:justify-center text-white md:text-[64px] text-[24px] font-[800] md:leading-[78px] leading-[29px] md:w-[239px] w-full">
              Our Vision
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionAndVision;
