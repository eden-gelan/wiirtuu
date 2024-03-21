import React from "react";
import Nav from "./nav";
import HeroLogo from "./../assets/logoHero.png";
import HeroMessage from "./heroMessage";

export default function HeroSection() {
  return (
    <div
      className="hero h-full bg-cover "
      style={{ backgroundImage: `url(./src/assets/backroundupdate.png)` }}
    >
      <Nav />
      <div className=" bg-white w-full h-[1px]" />
      <div className=" flex flex-row justify-center items-center my-auto py-20 space-x-10 ">
        <div className=" flex flex-col justify-center items-center space-y-5">
          <img src={HeroLogo} alt="" className=" mx-auto sm:w-[100px] lg:w-[200px]" />
          <div className="text-white lg:text-2xl">
            {" "}
            Your projects , our priority
          </div>
        </div>

        <div className=" flex flex-col text-white sm:gap-2 lg:gap-10 justify-center">
          <div className=" sm:text-2xl lg:text-7xl font-bold"> WIIRTUU</div>
          <div className=" sm:text-1xl lg:text-4xl font-bold"> CONSTRATION </div>
          <div className=" sm:text-1xl  lg:text-4xl font-bold"> PLC</div>
        </div>
      </div>

      <HeroMessage/>
    </div>
  );
}
