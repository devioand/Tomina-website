import * as React from 'react';
import Logo from '../../images/Logo.png';

function Header() {
  return (
    <div className="font-mono text-white">
      <div className="flex justify-center items-center">
        <div className="bg-[#B8AA84] py-[.3rem] px-[3rem] rounded-full relative left-[1rem]">
          <ul className="flex ">
            <li className="">Home</li>
            <li className="md:pl-4">AboutUs</li>
          </ul>
        </div>
        <div>
          <img
            src={Logo}
            alt="Logo_of_Tomina"
            className="relative top-[0rem] w-[6rem] h-[5rem] md:w-[11.673rem] md:h-[5.433rem] z-10"
          />
        </div>
        <div className="bg-[#B8AA84] py-[.3rem] px-[3rem]  rounded-full relative right-[1rem] ">
          <ul className="flex justify-center ">
            <li className="">Products</li>
            <li className="md:pl-4">Recipes</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
