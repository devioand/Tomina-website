import * as React from 'react';
import { useState } from 'react';
import Logo from '../../images/Logo.png';
import { HiOutlineBars3 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";

function Header() {
  const [bar, setbar] = useState(true)
  const [show, setshow] = useState(false)
  const checkbars = () => {
    setshow(show ? false : true)
    setbar(bar ? false : true)
  }
  return (
    <div className='font-mono text-white z-20'>
      <div className={`${show ? "bg-[#B8AA84]" : "bg-transparent"} p-5 flex justify-between items-center md:hidden`}>
        <img src={Logo} alt='Logo_of_Tomina' className={`relative top-[0rem] max-w-[8rem] md:w-[11.673rem] z-10 object-contain object-center ${bar ? "block" : "hidden"}`} />
        <div className=''>
          {
            bar ? <div onClick={checkbars}><HiOutlineBars3 className='icons' /></div> : <div onClick={checkbars}><RxCross1 className='icons absolute right-3 top-7' /></div>
          }
        </div>
      </div>
      <div className={`bg-[#B8AA84] py-28 md:py-0 md:bg-transparent	 ${show ? "block" : "hidden"} md:block`}>
        <div className='flex justify-center items-center flex-col md:flex-row'>
          <div className='md:bg-[#B8AA84] py-[.3rem] px-[3rem] md:rounded-full md:relative md:left-[2rem]'>
            <ul className='flex flex-col md:flex-row'>
              <li className='py-5 md:py-1 text-xl'>Home</li>
              <li className='py-5 md:py-1 text-xl md:pl-4'>AboutUs</li>
            </ul>
          </div>
          <div className="">
            <img src={Logo} alt='Logo_of_Tomina' className='relative top-[0rem] w-[8rem] md:w-[12rem] z-10 hidden md:block' />
          </div>
          <div className='md:bg-[#B8AA84] py-[.3rem] px-[3rem] md:rounded-full md:relative md:left-[-2rem]'>
            <ul className='flex justify-center  flex-col md:flex-row ' >
              <li className='py-5 md:py-1 text-xl '>Products</li>
              <li className='py-5 md:py-1 text-xl md:pl-4' >Recipes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
