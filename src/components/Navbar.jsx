import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { VscListSelection } from "react-icons/vsc";
const Navbar = () => {
  const [showSideBar, setShowSideBar] = useState(true);
  window.addEventListener("scroll", () => {
    setShowSideBar(false);
  });
  return (
    <header className=" relative py-2.5">
      {/* <div
        className={`bg-gradient-to-l from-slate-800 to to-black min-h-screen lg:w-2/5 md:w-1/2 w-full flex flex-col items-center justify-center absolute left-0 top-0  ${
          showSideBar ? "translate-x-0" : "-translate-x-full"
        } duration-300 z-10`}
      >
        <div className="container  ">
          <button
            className="absolute text-gray-100 h-8 w-8  text-center flex items-center justify-center right-2 top-2 "
            onClick={() => setShowSideBar(!showSideBar)}
          >
            <FaTimes size="24" />
          </button>
          <p className="text-gray-50">Hi...</p>
          <h1 className="text-gray-50 text-3xl my-3 font-bold">
            I AM <span className="text-orange-500">MD ARIFUL ISLAM</span>
          </h1>

          <p className="text-gray-50 text-sm">
            A passionate Junior Javascript developer from Bangladesh. I'm highly
            passionate about JavaScript-based software development technologies
            such as: MERN STACK
          </p>
          <div className="mt-5">
            <div className="flex items-center gap-3">
              <button className="btn">about me</button>
              <button className="btn">hire me</button>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <button className="btn">dawnload cv</button>
              <button className="btn">my skills</button>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <button className="btn">projects</button>
            </div>
          </div>
        </div>
      </div> */}
      <div className=" z-0 ">
        <nav className="container">
          <button
            className="  text-gray-50 p-3 bg-gradient-to-b from-black to to-slate-900 font-bold border-t-2 border-orange-500 duration-500 "
            onClick={() => setShowSideBar(!showSideBar)}
          >
            <VscListSelection size="20" />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
