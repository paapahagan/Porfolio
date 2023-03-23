import React from "react";

function Nav() {
  return (
    <div className="fixed bg-black w-screen">
      <div className="container text-gray-500 p-5 ">
        <ul className="flex justify-between">
          <li className="text-lg">PAAPA HAGAN</li>
          <li className="flex text-lg">
            +233 209 597 000
            <button>
              <img src="menu.png" className="w-10 px-2 ml-2 bg-slate-500" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
