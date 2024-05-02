import React from 'react';
import Logo from '../images/Logo.png';
import FacebookSVG from './svgs/outlined/Facebook';
import InstagramSVG from './svgs/outlined/Instagram';
import TwitterSVG from './svgs/outlined/Twitter';
import YoutubeSVG from './svgs/outlined/Youtube';
import { Link } from 'gatsby';

const Footer = ({ curveColor }: any) => {

  return (
    <footer className="relative bg-[#B8AA84] w-full">
      <div className="custom-shape-divider-top-1714674667">
        <div className="custom-shape-divider-top-1714675502">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              style={{ fill: curveColor }}
            ></path>
          </svg>
        </div>
      </div>
      <div className="xl:py-[45px] py-2 md:py-5 lg:py-7 xl:px-28 px-12 w-full max-w-[1536px] mx-auto">
        <img
          className="w-[80px] h-[50px] md:w-auto md:h-auto absolute top-1 md:top-8 object-contain object-center"
          src={Logo}
          alt="logo"
        />
        <div className="hidden mt-24 md:flex sm:pt-[40px] pt-5 justify-between w-full gap-5 md:flex-nowrap flex-wrap">
          <div className="sm:w-[40%] w-full">
            <p className="text-sm lg:text-[15px] font-normal lg:font-medium leading-[18px] text-white">
              Sadat Industrial City, District 7. land 7170, Egypt
            </p>
            <p className="pt-8 text-sm lg:text-[15px] font-normal lg:font-medium leading-[18px] text-white">
              +201435678902355
            </p>
            <div className="pt-12 flex items-center gap-2.5">
              <FacebookSVG color="#A51E1E" />
              <YoutubeSVG color="#A51E1E" />
              <InstagramSVG color="#A51E1E" />
              <TwitterSVG color="#A51E1E" />
            </div>
          </div>
          <div className="sm:w-[20%] w-full">
            <ul className="space-y-2">
              <li className="text-sm lg:text-[15px] font-normal lg:font-medium leading-[18px] text-white">
                <Link to="/">Home</Link>
              </li>
              <li className="text-sm lg:text-[15px] font-normal lg:font-medium leading-[18px] text-white">
                {' '}
                <Link to="/">Home Branch</Link>
              </li>
              <li className="text-sm lg:text-[15px] font-normal lg:font-medium leading-[18px] text-white">
                {' '}
                <Link to="/">Meet Christopher Family</Link>
              </li>
              <li className="text-sm lg:text-[15px] font-normal lg:font-medium leading-[18px] text-white">
                <Link to="/">Food Security</Link>
              </li>
              <li className="text-sm lg:text-[15px] font-normal lg:font-medium leading-[18px] text-white">
                <Link to="/">Field to Fork</Link>
              </li>
              <li className="text-sm lg:text-[15px] font-normal lg:font-medium leading-[18px] text-white">
                <Link to="/">Corporate Social Responsibility</Link>
              </li>
            </ul>
          </div>
          <div className="sm:w-[20%] w-full">
            <ul className="space-y-2">
              <li className="text-sm lg:text-[15px] font-normal lg:font-medium leading-[18px] text-white">
                <Link to="/">CR in the News</Link>
              </li>
              <li className="text-sm lg:text-[15px] font-normal lg:font-medium leading-[18px] text-white">
                <Link to="/">FAQ</Link>
              </li>
              <li className="text-sm lg:text-[15px] font-normal lg:font-medium leading-[18px] text-white">
                <Link to="/">CA Heirloom Garlic</Link>
              </li>
              <li className="text-sm lg:text-[15px] font-normal lg:font-medium leading-[18px] text-white">
                <Link to="/">Products</Link>
              </li>
              <li className="text-sm lg:text-[15px] font-normal lg:font-medium leading-[18px] text-white">
                {' '}
                <Link to="/">Conventional Garlic</Link>
              </li>
              <li className="text-sm lg:text-[15px] font-normal lg:font-medium leading-[18px] text-white">
                <Link to="/">Tradtional Garlic</Link>
              </li>
            </ul>
          </div>
          <div className="sm:w-[20%] w-full">
            <ul className="space-y-2">
              <li className="text-justify text-sm lg:text-[15px] font-normal lg:font-medium leading-[18px] text-white">
                <Link to="/"> Beyond Garlic </Link>
              </li>
              <li className="text-justify text-sm lg:text-[15px] font-normal lg:font-medium leading-[18px] text-white">
                <Link to="/"> Recipies </Link>
              </li>
              <li className="text-justify text-sm lg:text-[15px] font-normal lg:font-medium leading-[18px] text-white">
                <Link to="/"> Videos </Link>
              </li>
              <li className="text-justify text-sm lg:text-[15px] font-normal lg:font-medium leading-[18px] text-white">
                <Link to="/"> Contact Us </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:hidden pt-20 pb-4 flex items-center justify-center gap-x-2">
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
