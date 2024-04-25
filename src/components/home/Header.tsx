import * as React from 'react';
import Navigation from '../nav/Navigation';
import TickBar from './TickBar';

function Header() {
  return (
    <div className="relative bg-center bg-cover bg-norepeat h-[100vh] bg-[url('../images/oldclassicpainting.jpg')]">
      <div className="flex justify-center items-center h-[100vh] bg-h-gradiant">
        {/* <div className="w-[100vw] h-[2rem] flex p-[1.5rem] justify-end">
            <div className="w-[3rem] h-[3rem] rounded-full bg-red-900 ml-[.1rem]"></div>
            <div className="w-[3rem] h-[3rem] rounded-full bg-red-900 ml-[.1rem]"></div>
            <div className="w-[3rem] h-[3rem] rounded-full bg-red-900 ml-[.1rem]"></div>
            <div className="w-[3rem] h-[3rem] rounded-full bg-red-900 ml-[.1rem]"></div>
          </div> */}
        <div className="hidden md:block absolute top-12">
          <Navigation />
        </div>
        <div className="max-w-[320px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[900px] px-4 md:px-12 lg:px-24">
          <h1 className="max-w-[300px] sm:max-w-[500px] XXL:max-w-[700px] text-3xl sm:text-6xl 2xl:text-8xl md:leading-tight text-white text-center font-bold">
            FRESH NOW AND ALWAYS
          </h1>
          <div className="flex justify-center">
            <h2 className="text-3xl md:text-6xl text-white text-center font-extralight ml-auto">
              Garlicious
            </h2>
          </div>
        </div>
      </div>
      <TickBar />
    </div>
  );
}

export default Header;
