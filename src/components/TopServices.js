import React from "react";
import { FaLaptopCode, FaMobileAlt, FaCode } from "react-icons/fa";
const TopServices = () => {
  return (
    <section>
      <div className="inline-flex justify-center items-center w-full my-5">
        <hr className="my-8 w-64 h-1 bg-gray-200 rounded border-0 dark:bg-gray-700" />
        <div className="absolute left-1/2 px-4 text-white -translate-x-1/2 bg-gray-900 text-2xl">
          Top Skills
        </div>
      </div>
      <div className="container grid grid-cols-1  lg:grid-cols-3 gap-5">
        <div className="lg:col-span-1">
          <div className="grid grid-cols-4 gap-3 border-l-4 border-red-600 p-5 bg-slate-800 shadow-2xl items-center justify-center">
            <div className="col-span-1 flex items-center justify-center">
              <FaMobileAlt size={44} color="white" />
            </div>
            <div className="col-span-3">
              <div className="">
                <h2 className="text-white capitalize font-bold text-base ">
                  Front end web development
                </h2>
                <p className="text-white text-xs mt-3 text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  illum accusamus ex error ratione quisquam esse? Mollitia
                  commodi quidem necessitatibus harum, quaerat cum doloremque
                  quia.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="grid grid-cols-4 gap-3 border-l-4 border-red-600 p-5 bg-slate-800 shadow-2xl items-center justify-center">
            <div className="col-span-1 flex items-center justify-center">
              <FaCode size={44} color="white" />
            </div>
            <div className="col-span-3">
              <div className="">
                <h2 className="text-white capitalize font-bold text-base ">
                  backend web development
                </h2>
                <p className="text-white text-xs mt-3 text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  illum accusamus ex error ratione quisquam esse? Mollitia
                  commodi quidem necessitatibus harum, quaerat cum doloremque
                  quia.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="grid grid-cols-4 gap-3 border-l-4 border-red-600 p-5 bg-slate-800 shadow-2xl items-center justify-center">
            <div className="col-span-1 flex items-center justify-center">
              <FaLaptopCode size={44} color="white" />
            </div>
            <div className="col-span-3">
              <div className="">
                <h2 className="text-white capitalize font-bold text-base ">
                  Full stack web development
                </h2>
                <p className="text-white text-xs mt-3 text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  illum accusamus ex error ratione quisquam esse? Mollitia
                  commodi quidem necessitatibus harum, quaerat cum doloremque
                  quia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopServices;
