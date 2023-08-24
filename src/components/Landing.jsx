import React from "react";
import { Link } from "react-scroll";

function Landing() {
  return (
    <div className=" px-10 py-10 min-h-screen grid content-center ">
      {/* container */}
      <div className="container grid gap-y-10 text-gray-500 justify-items-center  md:flex justify-evenly flex-row-reverse ">
        {/* image */}
        <div className="">
          <img
            src="p.jpeg"
            className=" rounded-full border-8 border-teal-600 lg:h-96 "
          />
        </div>
        <div className="grid content-center lg:text-left">
          <div className="grid gap-y-5 text-start">
            <p className="text-3xl lg:text-7xl">HI, I AM A FREELANCER</p>
            <p className="text-5xl font-bold lg:text-8xl">DEVELOPER</p>
            <p className="text-2xl lg:text-4xl">based in Accra, GH.</p>
          </div>
          <div className="flex gap-x-5 mt-10 lg:justify-items-start">
            <a
              href="#works"
              className=" border-2 border-teal-900 font-bold hover:bg-slate-900 hover:text-teal-600 px-6 py-3"
            >
              View my works
            </a>

            <a
              href="#about"
              className="font-bold border-2 border-teal-900 hover:text-teal-600 hover:bg-slate-900  py-3 px-6"
            >
              Contact me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
