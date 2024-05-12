import * as React from 'react';
import AnimateY from '../animation/AnimateY';
import Navigation from '../nav/Navigation';

function Header() {
  return (
    <div className="relative bg-center bg-cover bg-no-repeat h-[100vh] bg-[url('../images/imgs/home/header.webp')]">
      <div className="flex justify-center items-center h-[100vh]">
        <div className="block absolute left-0 right-0 top-12 lg:top-20">
          <Navigation />
        </div>
        <AnimateY>
          <div className="max-w-[320px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[900px] px-4 md:px-12 lg:px-24">
            <h1 className="max-w-[220px] sm:max-w-[500px] XXL:max-w-[600px] 2xl:max-w-[700px] text-[24px] sm:text-[64px] 2xl:text-[95px] md:leading-tight text-white text-center font-[800]">
              FRESH NOW AND ALWAYS
            </h1>
            <div className="flex justify-center relative hidden md:block">
              <h2 className="absolute custom-heading text-3xl lg:text-6xl text-white text-center font-thin right-12 -bottom-4 lg:-right-28 2xl:-right-20 lg:-bottom-12">
                Garlicious
              </h2>
            </div>
          </div>
        </AnimateY>
      </div>
    </div>
  );
}

export default Header;
