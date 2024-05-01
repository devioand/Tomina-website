import React from 'react';
import OurTeamCarousel from './OurTeamCarousel';

const OurTeam = () => {
  return (
    <div className="bg-[#282828]">
      <div className="team-gradiant">
        <div className="max-w-[1536px] mx-auto">
          <div className="flex flex-col items-center justify-center px-2 py-5 md:p-12">
            <div className="pt-0 pb-5">
              <h1 className="text-white text-5xl font-bold">Our team</h1>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-white text-[.7rem] md:text-lg font-bold text-center pb-4 px-5">
                All in good taste elementum integer enim neque volutpat ac.
              </h2>
              <p className="text-white text-center font-sm pt-4 px-[2rem] min-[500px]:px-[5rem] md:px-[3rem] lg:px-[10rem]">
                Massa placerat duis ultricies lacus sed turpis tincidunt id.
                Interdum varius sit amet mattis enim. Quis hendrerit dolor magna
                eget est lorem ipsum dolor. Sagittis scelerisque purus semper.
              </p>
            </div>
          </div>
          <div className="px-7 md:px-5">
            <OurTeamCarousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
