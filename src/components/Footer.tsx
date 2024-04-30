import React from 'react';
import Facebook from '../images/svg/facebook.svg';
import Instagram from '../images/svg/Instagram.svg';
import Twitter from '../images/svg/Twitter.svg';
import Youtube from '../images/svg/Youtube.svg';
import Logo from '../images/tomina-logo.png';
import FacebookSVG from './svgs/FaceBook';
import InstagramSVG from './svgs/Instagram';
import TwitterSVG from './svgs/Twitter';
import YoutubeSVG from './svgs/Youtube';

const Footer = () => {
  return (
    <footer className="bg-[#B8AA84] w-full">
      <div className="xl:py-[45px] py-2 md:py-5 lg:py-7 xl:px-28 px-12 w-full max-w-[1536px] mx-auto">
        <img
          className="w-[80px] h-[50px] object-contain object-center"
          src={Logo}
          alt="logo"
        />
        <div className="hidden md:block sm:pt-[40px] pt-5 flex justify-between w-full gap-5 md:flex-nowrap flex-wrap">
          <div className="sm:w-[40%] w-full">
            <p className="text-lg font-normal leading-[24px] text-white">
              Sadat Industrial City, District 7. land 7170, Egypt
            </p>
            <p className="pt-4 text-lg font-normal leading-[24px] text-white">
              +201435678902355
            </p>
            <div className="pt-12 flex items-center gap-2.5">
              <a href="/">
                <img className="w-10 h-10" src={Facebook} alt="facebook" />
              </a>
              <a href="/">
                <img className="w-10 h-10" src={Youtube} alt="youtube" />
              </a>
              <a href="/">
                <img className="w-10 h-10" src={Instagram} alt="instagram" />
              </a>
              <a href="/">
                <img className="w-10 h-10" src={Twitter} alt="Twitter" />
              </a>
            </div>
          </div>
          <div className="sm:w-[20%] w-full">
            <ul className="space-y-2">
              <li className="text-lg font-normal leading-[24px] text-white">
                <a href="/">Home</a>
              </li>
              <li className="text-lg font-normal leading-[24px] text-white">
                {' '}
                <a href="/">Home Branch</a>
              </li>
              <li className="text-lg font-normal leading-[24px] text-white">
                {' '}
                <a href="/">Meet Christopher Family</a>
              </li>
              <li className="text-lg font-normal leading-[24px] text-white">
                <a href="/">Food Security</a>
              </li>
              <li className="text-lg font-normal leading-[24px] text-white">
                <a href="/">Field to Fork</a>
              </li>
              <li className="text-lg font-normal leading-[24px] text-white">
                <a href="/">Corporate Social Responsibility</a>
              </li>
            </ul>
          </div>
          <div className="sm:w-[20%] w-full">
            <ul className="space-y-2">
              <li className="text-lg font-normal leading-[24px] text-white">
                <a href="/">CR in the News</a>
              </li>
              <li className="text-lg font-normal leading-[24px] text-white">
                <a href="/">FAQ</a>
              </li>
              <li className="text-lg font-normal leading-[24px] text-white">
                <a href="/">CA Heirloom Garlic</a>
              </li>
              <li className="text-lg font-normal leading-[24px] text-white">
                <a href="/">Products</a>
              </li>
              <li className="text-lg font-normal leading-[24px] text-white">
                {' '}
                <a href="/">Conventional Garlic</a>
              </li>
              <li className="text-lg font-normal leading-[24px] text-white">
                <a href="/">Tradtional Garlic</a>
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
