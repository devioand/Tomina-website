import * as React from 'react';
import { useState } from 'react';
import Logo from '../../images/Logo.png';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { RxCross1 } from 'react-icons/rx';
import { Link } from 'gatsby';

function Navigation() {
  const [bar, setbar] = useState(true);
  const [show, setshow] = useState(false);
  const checkbars = () => {
    setshow(show ? false : true);
    setbar(bar ? false : true);
  };

  return (
    <div className="font-mono text-white">
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
              <RxCross1 className="icons absolute right-3" />
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
            <ul className="flex flex-col lg:flex-row gap-6">
              <Link to="/">
                <li className="py-5 lg:py-1 text-xl">Home</li>
              </Link>
              <Link to="/about">
                <li className="py-5 lg:py-1 text-xl">About Us</li>
              </Link>
            </ul>
          </div>
          <div className="">
            <img
              src={Logo}
              alt="Logo_of_Tomina"
              className="relative top-[0rem] w-[8rem] lg:w-[12rem] z-10 hidden lg:block"
            />
          </div>
          <div className="lg:bg-[#B8AA84] py-[.3rem] px-[3rem] lg:rounded-full lg:relative lg:left-[-2rem]">
            <ul className="flex justify-center flex-col lg:flex-row gap-6">
              <Link to="/products">
                <li className="py-5 lg:py-1 text-xl ">Products</li>
              </Link>
              <Link to="/recipes">
                <li className="py-5 lg:py-1 text-xl">Recipes</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
