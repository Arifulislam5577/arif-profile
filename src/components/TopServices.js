import React from "react";

import Reveal from "react-reveal/Reveal";
import { Zoom } from "react-reveal";
const TopServices = () => {
  const skills = [
    "html",
    "css",
    "scss",
    "bootstrap",
    "tailwind css",
    "javascript",
    "typescript",
    "react js",
    "redux",
    "react-redux",
    "react-thunk",
    "react-toolkit",
    "RTK Query",
    "next js",
    "node js",
    "express js",
    "mongodb",
  ];
  return (
    <div className="py-10">
      <div className="container lg:w-2/3 mx-auto">
        <Reveal effect="fadeInUp">
          <div className="flex flex-col items-center justify-center">
            <h1 className="capitalize text-white text-2xl font-bold">
              my abilities and proficiencies
            </h1>
            <div className="flex flex-wrap md:gap-3 gap-2 mt-4 items-center justify-center">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-white px-5 hover:bg-red-600 hover:text-white transition-all duration-200 cursor-grab py-1.5 text-sm rounded-full border border-white capitalize"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default TopServices;
