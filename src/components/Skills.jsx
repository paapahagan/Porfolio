import React from "react";

function Skills() {
  return (
    <div className="px-10 py-10 min-h-screen ">
      <div className="container mx-auto p-5 text-gray-500 lg:p-24">
        <p className="text-3xl font-bold p-4 lg:">My Skill</p>
        <div className="md:grid grid-cols-2 lg:">
          <div className="p-4">
            <p className=" font-bold">Web Design</p>
            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-400">
              <div className="bg-teal-900 h-2 w-11/12 rounded-full"></div>
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
            <p className=" font-bold">React Native</p>
            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-400">
              <div className="bg-teal-900  w-5/12 h-2 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="text-justified md:flex lg:flex justify-between mt-10">
          <div className="mt-10">
            <div className="grid justify-items-center">
              <img src="pal.png" className="w-12 hover:animate-spin grid" />
            </div>
            <div className="m-5 text-3xl text-center font-bold">
              <p>Graphic Design</p>
            </div>
            <div>
              <p className="text-xl text-justify">
                Graphic design brings visual harmony to digital products,
                elevating the user experience and capturing attention through
                captivating visuals and effective communication. It blends
                creativity, aesthetics, and strategic thinking to create
                impactful designs that resonate with users.
              </p>
            </div>
          </div>

          <div className="p-10">
            <div className="grid justify-items-center">
              <img src="monitorr.png" className="w-12 hover:animate-spin" />
            </div>
            <div className="m-5 text-3xl text-center font-bold">
              <p>Web Design</p>
            </div>
            <div>
              <p className="text-xl text-justify">
                Web design is the art of creating visually appealing and
                user-friendly websites, striking a balance between aesthetics
                and functionality. As a developer, understanding web design
                principles allows you to create intuitive navigation, responsive
                layouts, and engaging user interfaces
              </p>
            </div>
          </div>
          <div>
            <div className="mt-10">
              <div className="grid justify-items-center">
                <img src="front.png" className="w-12 hover:animate-spin" />
              </div>
              <div className="m-5 text-3xl text-center font-bold">
                <p>UI/UX Design</p>
              </div>
              <div>
                <p className="text-xl text-justify">
                  UI/UX design is the art of crafting seamless and delightful
                  user experiences through intuitive interfaces and thoughtful
                  interactions. As a developer, embracing UI/UX principles
                  empowers you to create user-centric designs that prioritize
                  usability, accessibility, and engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <a href="/Resume1.pdf">
            <button className=" border-2 border-teal-800 hover:bg-slate-900 px-8 py-4 font-bold hover:text-teal-600 animate-bounce">
              Download CV
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Skills;
