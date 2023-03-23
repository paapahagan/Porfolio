import React from "react";

function Skills() {
  return (
    <div className="px-10 py-10 min-h-screen bg-slate-800 ">
      <div className="container p-5 text-gray-500 lg:p-24">
        <p className="text-3xl font-bold p-4 lg:">My Skill</p>
        <div className="md:grid grid-cols-2 lg:">
          <div className="p-4">
            <p className=" font-bold">Web Design</p>
            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-400">
              <div className="bg-teal-900 h-2 w-9/12 rounded-full"></div>
            </div>
          </div>
          <div className="p-4">
            <p className=" font-bold">HTML/CSS</p>
            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-400">
              <div className="bg-teal-900  h-2 w-10/12 rounded-full"></div>
            </div>
          </div>
          <div className="p-4">
            <p className=" font-bold">Javascript</p>
            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-400">
              <div className="bg-teal-900  w-9/12 h-2 rounded-full"></div>
            </div>
          </div>
          <div className="p-4">
            <p className=" font-bold">React Js</p>
            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-400">
              <div className="bg-teal-900  w-9/12 h-2 rounded-full"></div>
            </div>
          </div>
          <div className="p-4">
            <p className=" font-bold">Tailwind</p>
            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-400">
              <div className="bg-teal-900  w-8/12 h-2 rounded-full"></div>
            </div>
          </div>
          <div className="p-4">
            <p className=" font-bold">Tailwind</p>
            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-400">
              <div className="bg-teal-700  w-8/12 h-2 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="text-justified md:flex lg:flex justify-between mt-10">
          <div className="mt-10">
            <div className="grid justify-items-center">
              <img src="paint.png" className="w-12 grid" />
            </div>
            <div className="m-5 text-3xl text-center font-bold">
              <p>Graphic Design</p>
            </div>
            <div>
              <p className="text-xl">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text.
              </p>
            </div>
          </div>

          <div className="p-10">
            <div className="grid justify-items-center">
              <img src="monitor.png" className="w-12" />
            </div>
            <div className="m-5 text-3xl text-center font-bold">
              <p>Web Design</p>
            </div>
            <div>
              <p className="text-xl">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text.
              </p>
            </div>
          </div>
          <div>
            <div className="mt-10">
              <div className="grid justify-items-center">
                <img src="design.png" className="w-12" />
              </div>
              <div className="m-5 text-3xl text-center font-bold">
                <p>UI/UX Design</p>
              </div>
              <div>
                <p className="text-xl">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard dummy text.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <button className=" border-2 border-teal-900 hover:bg-slate-900 px-8 py-4 font-bold hover:text-teal-600">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}

export default Skills;
