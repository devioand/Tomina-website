import { Link } from 'gatsby';
import * as React from 'react';
import { useState } from 'react';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { RxCross1 } from 'react-icons/rx';
import Logo from '../../images/Logo.png';

function Navigation() {
  const [bar, setbar] = useState(true);
  const [show, setshow] = useState(false);
  const checkbars = () => {
    setshow(show ? false : true);
    setbar(bar ? false : true);
  };

  return (
    <div className="text-white">
      <div
        className={`${
          show ? 'bg-[#B8AA84]' : 'bg-transparent'
        } flex justify-center items-center lg:hidden`}
      >
        <Link className="w-[50%]" to="/">
          <img
            src={Logo}
            alt="Tomina Logo"
            className={`ml-auto relative lg:left-none -right-12 top-[0rem] w-[100px] h-[60px] md:w-[150px] z-10 object-contain object-center ${
              bar ? 'block' : 'hidden'
            }`}
          />
        </Link>
        <div className="flex w-[50%]">
          {bar ? (
            <div className="ml-auto mr-4" onClick={checkbars}>
              <HiOutlineBars3 className="w-[36px] h-[36px] text-[#B8AA84]" />
            </div>
          ) : (
            <div onClick={checkbars}>
              <RxCross1 className="icons absolute right-5 top-5" />
            </div>
          )}
        </div>
      </div>
      <div
        className={`bg-[#B8AA84] lg:bg-transparent ${
          show ? 'block' : 'hidden'
        } lg:block`}
      >
        <div className="flex justify-center items-center flex-col py-28 lg:py-0 lg:flex-row">
          <div className="lg:bg-[#B8AA84] lg:py-[.3rem] px-[3rem] lg:rounded-full lg:relative lg:left-[2rem]">
            <ul className="flex flex-col lg:flex-row gap-8">
              <Link to="/">
                <li className="lg:py-1 text-[20px] font-[500]">Home</li>
              </Link>
              <Link to="/about">
                <li className="pb-5 lg:py-1 text-[20px] font-[500]">
                  About Us
                </li>
              </Link>
            </ul>
          </div>
          <Link to="/" className="">
            <img
              src={Logo}
              alt="Logo_of_Tomina"
              className="relative top-[0rem] w-[8rem] lg:w-[12rem] z-10 hidden lg:block"
            />
          </Link>
          <div className="lg:bg-[#B8AA84] py-[.3rem] px-[3rem] lg:rounded-full lg:relative lg:left-[-2rem]">
            <ul className="flex justify-center flex-col lg:flex-row gap-8">
              <Link to="/products">
                <li className="lg:py-1 text-[20px] font-[500] ">Products</li>
              </Link>
              <Link to="/recipes">
                <li className="lg:py-1 text-[20px] font-[500]">Recipes</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
