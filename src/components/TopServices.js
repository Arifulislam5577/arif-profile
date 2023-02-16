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
    "data structures",
    "Algorithms",
  ];
  return (
    <div className="py-10">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
          <Zoom>
            <div className="col-span-1">
              <img src="/images/hero.png" alt="" />
            </div>
          </Zoom>
          <Reveal effect="fadeInUp">
            <div className="col-span-1">
              <h1 className="capitalize text-white text-2xl font-bold">
                my abilities and proficiencies
              </h1>
              <div className="flex flex-wrap gap-2 mt-4">
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
    </div>
  );
};

export default TopServices;
