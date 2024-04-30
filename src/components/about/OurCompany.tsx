import React from 'react';

const OurCompany = () => {
  return (
    <section className="bg-[url('../images/fields.png')] bg-no-repeat bg-cover bg-center">
      <div className="company-gradient relative justify-center items-center flex flex-col w-full md:h-[679.11px] h-[378px]">
        <div className="max-w-[1069px] w-full mx-auto px-2 md:px-5 lg:px-0">
          <h1 className=" text-white md:text-[64px] text-[24px] font-[800] md:leading-[78.02px] leading-[29.26px] text-center mx-auto">
            Our Company
          </h1>
          <p className="mt-5 px-2 md:px-5 lg:px-8 xl:px-0 text-white md:text-[20px] text-xs md:leading-[24.78px] leading-[14.23px] text-center mx-auto">
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
          <div className="flex justify-center mt-5">
            <button className="hover:bg-[#7e2121] border border-white bg-transparent md:py-3 py-2 md:rounded-full rounded-[24px] md:px-[90px] px-[34px] text-white md:text-[18px] text-xs md:leading-[24px] leading-[14.23px] text-center mx-auto">
              See More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCompany;
