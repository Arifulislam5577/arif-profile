import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaSass,
  FaReact,
  FaNode,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiRedux,
  SiFirebase,
  SiJavascript,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

import { TbBrandNextjs } from "react-icons/tb";
const Icons = () => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center">
      <div className="flex items-center gap-5 ">
        <FaHtml5 size="44" color="#F25320" />
        <FaCss3Alt size="44" color="#1F8EE7" />
        <FaSass size="44" color="#C26191" />
        <FaBootstrap size="44" color="#6E10E9" />
        <SiTailwindcss size="44" color="#35B3EB" />
      </div>
      <div className="flex items-center gap-5 ">
        <SiJavascript size="44" color="#F2D400" />
        {/* <SiTypescript size="44" color="#0074C2" /> */}
        <FaReact size="44" color="#08CCF1" />
        <SiRedux size="44" color="#7046B2" />
        <SiFirebase size="44" color="#F2C026" />
      </div>
      <div className="flex items-center gap-5 ">
        <FaNode size="44" color="#4E9741" />
        <SiExpress size="44" color="#000" />
        <SiMongodb size="44" color="#3D8C30" />
      </div>
      <div className="flex items-center gap-5">
        <TbBrandNextjs size="44" color="#000" />
      </div>
    </div>
  );
};

export default Icons;
