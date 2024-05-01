import { default as React } from 'react';
import Fda from '../../images/fda.png';
import Iso from '../../images/iso.png';

const Certificates = () => {
  return (
    <section>
      <div className="bg-[#A51E1E] py-10 w-full mx-auto">
        <div className="max-w-[1037px] w-full px-2 md:px-5 lg:px-8 xl:px-0 mx-auto">
          <h1 className="md:uppercase capitalize text-white text-[24px] sm:text-[32px] lg:text-[64px] font-[800] md:leading-[78.02px] leading-[29.26px] text-center mx-auto">
            Certificates
          </h1>
          <p className="md:mt-5 mt-2 text-[#B8AA84] md:text-[24px] font-[700] text-[8px] md:leading-[29.26px] leading-[9.75px] text-center mx-auto">
            All in good taste elementum integer enim neque volutpat ac.
          </p>
          <p className="md:mt-5 mt-2 text-[#B8AA84] md:text-[20px] text-[6px] md:leading-[24.78px] leading-[7.31px] text-center mx-auto">
            Massa placerat duis ultricies lacus sed turpis tincidunt id.
            Interdum varius sit amet mattis enim. Quis hendrerit dolor magna
            eget est lorem ipsum dolor. Sagittis scelerisque purus semper.
          </p>
          <div className="pt-4 md:pt-24 mt:pb-20 flex justify-center items-center md:gap-8 gap-4">
            <img
              className="lg:w-[300px] md:w-[180px] w-[68px] lg:h-[300px] md:h-[180px] h-[68px]"
              src={Iso}
              alt="iso"
            />
            <img
              className="lg:w-[300px] md:w-[180px] w-[68px] lg:h-[300px] md:h-[180px] h-[68px]"
              src={Fda}
              alt="fda"
            />
            <img
              className="lg:w-[300px] md:w-[180px] w-[68px] lg:h-[300px] md:h-[180px] h-[68px]"
              src={Iso}
              alt="iso2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
