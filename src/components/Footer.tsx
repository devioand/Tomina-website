import React from "react";
import Facebook from "../images/svg/facebook.svg";
import Instagram from "../images/svg/Instagram.svg";
import Twitter from "../images/svg/Twitter.svg";
import Youtube from "../images/svg/Youtube.svg";
import Logo from "../images/tomina-logo.png";
import FacebookSVG from "./svgs/FaceBook";
import InstagramSVG from "./svgs/Instagram";
import TwitterSVG from "./svgs/Twitter";
import YoutubeSVG from "./svgs/Youtube";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <footer className="bg-[#B8AA84] w-full">
      <div className="xl:py-[45px] py-2 md:py-5 lg:py-7 xl:px-28 px-12 w-full max-w-[1536px] mx-auto">
        <img
          className="w-[80px] h-[50px] object-contain object-center"
          src={Logo}
          alt="logo"
        />
        <div className="hidden md:flex sm:pt-[40px] pt-5 flex justify-between w-full gap-5 md:flex-nowrap flex-wrap">
          <div className="sm:w-[40%] w-full">
            <p className="text-lg font-normal leading-[24px] text-white">
              Sadat Industrial City, District 7. land 7170, Egypt
            </p>
            <p className="pt-4 text-lg font-normal leading-[24px] text-white">
              +201435678902355
            </p>
            <div className="pt-12 flex items-center gap-2.5">
              <Link to="/">
                <img className="w-10 h-10" src={Facebook} alt="facebook" />
              </Link>
              <Link to="/">
                <img className="w-10 h-10" src={Youtube} alt="youtube" />
              </Link>
              <Link to="/">
                <img className="w-10 h-10" src={Instagram} alt="instagram" />
              </Link>
              <Link to="/">
                <img className="w-10 h-10" src={Twitter} alt="Twitter" />
              </Link>
            </div>
          </div>
          <div className="sm:w-[20%] w-full">
            <ul className="space-y-2">
              <li className="text-lg font-normal leading-[24px] text-white">
                <Link to="/">Home</Link>
              </li>
              <li className="text-lg font-normal leading-[24px] text-white">
                {" "}
                <Link to="/">Home Branch</Link>
              </li>
              <li className="text-lg font-normal leading-[24px] text-white">
                {" "}
                <Link to="/">Meet Christopher Family</Link>
              </li>
              <li className="text-lg font-normal leading-[24px] text-white">
                <Link to="/">Food Security</Link>
              </li>
              <li className="text-lg font-normal leading-[24px] text-white">
                <Link to="/">Field to Fork</Link>
              </li>
              <li className="text-lg font-normal leading-[24px] text-white">
                <Link to="/">Corporate Social Responsibility</Link>
              </li>
            </ul>
          </div>
          <div className="sm:w-[20%] w-full">
            <ul className="space-y-2">
              <li className="text-lg font-normal leading-[24px] text-white">
                <Link to="/">CR in the News</Link>
              </li>
              <li className="text-lg font-normal leading-[24px] text-white">
                <Link to="/">FAQ</Link>
              </li>
              <li className="text-lg font-normal leading-[24px] text-white">
                <Link to="/">CA Heirloom Garlic</Link>
              </li>
              <li className="text-lg font-normal leading-[24px] text-white">
                <Link to="/">Products</Link>
              </li>
              <li className="text-lg font-normal leading-[24px] text-white">
                {" "}
                <Link to="/">Conventional Garlic</Link>
              </li>
              <li className="text-lg font-normal leading-[24px] text-white">
                <Link to="/">Tradtional Garlic</Link>
              </li>
            </ul>
          </div>
          <div className="sm:w-[20%] w-full">
            <ul className="space-y-2">
              <li className="text-justify text-lg font-normal leading-[24px] text-white">
                Beyond Garlic
              </li>
              <li className="text-justify text-lg font-normal leading-[24px] text-white">
                Recipies
              </li>
              <li className="text-justify text-lg font-normal leading-[24px] text-white">
                Videos
              </li>
              <li className="text-justify text-lg font-normal leading-[24px] text-white">
                Contact Us
              </li>
            </ul>
          </div>
        </div>
        <div className="md:hidden pt-8 pb-4 flex items-center justify-center gap-x-4">
          <FacebookSVG color="#FFFFFF" />
          <YoutubeSVG color="#FFFFFF" />
          <InstagramSVG color="#FFFFFF" />
          <TwitterSVG color="#FFFFFF" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
