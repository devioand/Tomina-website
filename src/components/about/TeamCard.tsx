import React from "react";
import user from "../../images/user.png";
import FacebookSVG from "../svgs/faceBook.svg";
import InstagramSVG from "../svgs/instagram.svg";
import TwitterSVG from "../svgs/twitter.svg";
import YoutubeSVG from "../svgs/youtube.svg";

const TeamCard = () => {
  return (
    <div className="scale-75 py-10 flex flex-col items-center justify-center target-component upscale opacity-40">
      <div className="bg-[#A51E1E] px-[4rem] md:px-[7rem] py-[7rem] md:py-[13rem] flex justify-center items-center">
        <img
          src={user}
          alt="User"
          className="md:w-[300px] h-[261px] md:h-[457px] absolute top-1 md:-top-0 images"
        />
      </div>
      <div className="flex flex-col items-center justify-center pt-4 gap-y-2">
        <h2 className="text-[24px] font-[500] lg:text-[48px] lg:font-[800] text-white text-center -mb-4 mr-btm">
          MINA MILAD
        </h2>
        <p className="md:text-[30px] md:font-[500] text-[#B8AA84]">Founder</p>
        <div className="flex justify-center items-center gap-x-4">
          <FacebookSVG color="#B8AA84" />
          <YoutubeSVG color="#B8AA84" />
          <InstagramSVG color="#B8AA84" />
          <TwitterSVG color="#B8AA84" />
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
