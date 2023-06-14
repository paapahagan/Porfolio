import React from "react";

function Works() {
  return (
    <div className="bg-slate-700 px-5 py-5 " id="works">
      <div className="container mx-auto">
        <div className="text-center mb-5 md:text-center lg:text-center text-3xl font-bold text-slate-400">
          Projects
        </div>
        <div className="px-5 py-5 md:flex lg:flex justify-center">
          <div className="px-5 py-5">
            <a href="https://marryrightgh.com/">
              <img
                src="mt.png "
                className="  transition ease-in-out hover:-translate-y-2 hover:scale-105 duration-300"
              />
              <p className="text-slate-400 mt-2 font-bold hover:text-white">
                Web Application
              </p>
              <p className="text-xl text-slate-400 font-bold hover:text-white">
                MarryRight
              </p>
            </a>
            <p className="text-sm text-slate-500">Tech Stack</p>
            <p className="text-sm text-slate-500">
              React js, Type script, Redux
            </p>
          </div>
          <div className="px-5 py-5">
            <a href="https://justicelocator.com/">
              <img
                src="l.png"
                className=" transition ease-in-out hover:-translate-y-2 hover:scale-105 duration-300 "
              />
              <p className="text-slate-400 mt-2 font-bold hover:text-white">
                Web development
              </p>
              <p className="text-xl text-slate-400 font-bold hover:text-white">
                African Foresight Group
              </p>
            </a>
            <p className="text-sm text-slate-500">Tech Stack</p>
            <p className="text-sm text-slate-500">
              React js, Type script, Redux
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
