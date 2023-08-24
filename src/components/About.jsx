import React from "react";

function About() {
  return (
    <div
      className="px-10 py-10 min-h-screen bg-slate-200 lg:min-h-min"
      id="about"
    >
      <div className="container mx-auto grid gap-y-5 text-gray-400 justify-items-center p-5 ">
        <p className="text-center text-2xl">About me</p>
        <p className="text-center text-4xl font-semibold mb-10">Know me more</p>
        <div className="lg:flex justify-between space-x-10">
          <div className="text-center lg:text-start">
            <h2 className="text-3xl font-semibold mb-5">
              Hi, I'm Paa kwesi Hagan
            </h2>
            <p className="text-2xl lg:max-w-3xl text-justify">
              I'm a designer & developer with a passion for web design. I enjoy
              developing simple, clean and slick websites that provide real
              value to the end user. Thousands of clients have procured
              exceptional results while working with me. Delivering work within
              time and budget which meets client’s requirements is our motto.
            </p>
          </div>
          <div className="mt-5 lg:flex ">
            <div className="text-center grid justify-items-center space-x-5">
              <p className="text-7xl font-bold  bg-teal-800 rounded-full p-7">
                3
              </p>
              <p className="text-4xl text-center font-semibold">
                Years of experience
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-2 md:flex md:gap-x-52">
          <div className="">
            <p>Name:</p>
            <p className=" font-bold">Paa Kwesi Hagan</p>
          </div>
          <div>
            <p>Email:</p>
            <p className=" font-bold">paakwesihagan@gmail.com</p>
          </div>
          <div>
            <p>Date of birth:</p>
            <p className=" font-bold">25 February</p>
          </div>
          <div>
            <p>From:</p>
            <p className=" font-bold">Accra, GH</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
