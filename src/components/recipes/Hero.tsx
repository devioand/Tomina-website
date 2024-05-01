import React from "react";

function Hero({ title, discription }: any) {
  return (
    <div className="background w-full h-[100vh] bg-center bg-cover">
      <div className="flex w-full justify-center h-[100vh] bg-h-gradiant px-2 md:px-4 lg:px-8 py-12">
        <div className="mt-auto flex justify-center items-center flex-col">
          <h2 className="text-[24px] md:text-[64px] font-[800] text-white text-center">
            {title}
          </h2>
          <p className="text-sm text-white text-center w-[20rem] md:pt-3">
            {discription}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;