import * as React from "react";
import { useState } from "react";
import Logo from "../../images/Logo.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import { Link } from "gatsby";

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
          show ? "bg-[#B8AA84]" : "bg-transparent"
        } p-5 flex justify-between items-center md:hidden`}
      >
        <Link to="/">
          <img
            src={Logo}
            alt="Logo_of_Tomina"
            className={`relative top-[0rem] max-w-[8rem] md:w-[11.673rem] z-10 object-contain object-center ${
              bar ? "block" : "hidden"
            }`}
          />
        </Link>
        <div>
          {bar ? (
            <div onClick={checkbars}>
              <HiOutlineBars3 className="icons" />
            </div>
          ) : (
            <div onClick={checkbars}>
              <RxCross1 className="icons absolute right-3" />
            </div>
          )}
        </div>
      </div>
      <div
        className={`bg-[#B8AA84] md:bg-transparent ${
          show ? "block" : "hidden"
        } md:block`}
      >
        <div className="flex justify-center items-center flex-col py-28 md:py-0 md:flex-row">
          <div className="md:bg-[#B8AA84] md:py-[.3rem] px-[3rem] md:rounded-full md:relative md:left-[2rem]">
            <ul className="flex flex-col md:flex-row gap-6">
              <Link to="/">
                <li className="py-5 md:py-1 text-xl">Home</li>
              </Link>
              <Link to="/about">
                <li className="py-5 md:py-1 text-xl">About Us</li>
              </Link>
            </ul>
          </div>
          <div className="">
            <img
              src={Logo}
              alt="Logo_of_Tomina"
              className="relative top-[0rem] w-[8rem] md:w-[12rem] z-10 hidden md:block"
            />
          </div>
          <div className="md:bg-[#B8AA84] py-[.3rem] px-[3rem] md:rounded-full md:relative md:left-[-2rem]">
            <ul className="flex justify-center flex-col md:flex-row gap-6">
            <Link to="/products"><li className="py-5 md:py-1 text-xl ">Products</li></Link>
              <Link to="/recipes">
                <li className="py-5 md:py-1 text-xl">Recipes</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
