import React from "react";
import { Fade } from "react-reveal";
const Hero = () => {
  return (
    <section className="home py-20 grid items-center lg:justify-between justify-center lg:grid-cols-4 grid-cols-1 container   content-center gap-5">
      <Fade left>
        <div className=" col-span-2 lg:block flex items-center lg:justify-start justify-center flex-col lg:text-left text-center lg:order-1 order-2">
          <h1 className="text-gray-50 lg:text-4xl text-2xl lg:my-1 font-bold ">
            MD ARIFUL ISLAM
          </h1>

          <p className="text-gray-50 lg:max-w-md w-full">
            I'm a{" "}
            <span className="text-red-600 capitalize font-bold">
              mern stack developer
            </span>{" "}
            focused on developing Javascript based web applications. I love to
            manage everything from complex logic to the awesome layout of a web
            application.
          </p>
          <div className="mt-5">
            <a
              href="./files/MD ARIFUL ISLAM RESUME REACT.pdf"
              download
              className="bg-red-600 py-3 px-5 text-white rounded-full text-sm shadow-xl shadow-slate-900 inline-block"
            >
              Download Resume
            </a>
          </div>
        </div>
      </Fade>
      <Fade>
        <div className="order-1 lg:order-2 col-span-2 grid grid-cols-4 px-10 lg:px-5 lg:mb-0 ">
          <div className="col-span-1 -skew-x-12 animate-pulse">
            <img
              src="images/blog.png"
              alt=""
              className=" w-full rounded shadow-2xl shadow-slate-700"
            />
          </div>
          <div className="col-span-1 translate-y-10 -skew-y-12">
            <img
              src="images/watchLanding.png"
              alt=""
              className=" w-full rounded shadow-2xl shadow-slate-700"
            />
          </div>
          <div className="col-span-1 skew-y-12 animate-pulse">
            <img
              src="images/burger.png"
              alt=""
              className=" w-full rounded shadow-2xl shadow-slate-700"
            />
          </div>
          <div className="col-span-1 mt-10 skew-x-12">
            <img
              src="images/watches.png"
              alt=""
              className=" w-full rounded shadow-2xl shadow-slate-700"
            />
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Hero;
