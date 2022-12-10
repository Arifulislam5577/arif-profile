import React from "react";

import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="home min-h-screen py-20 grid items-center lg:justify-between justify-center lg:grid-cols-4 grid-cols-1 container   content-center gap-5">
      <div className=" col-span-2 lg:block flex items-center lg:justify-start justify-center flex-col lg:text-left text-center lg:order-1 order-2">
        <h1 className="text-gray-50 lg:text-4xl text-2xl lg:my-1 font-bold ">
          MERN STACK DEVELOPER
        </h1>
        <h1 className="text-gray-50 lg:text-3xl text-xl lg:my-1 my-2 font-bold">
          <span className="text-orange-500">MD ARIFUL ISLAM</span>
        </h1>

        <p className="text-gray-50 lg:max-w-md w-full">
          I'm a mern stack developer focused on developing Javascript based web
          applications. I love to manage everything from complex logic to the
          awesome layout of a web application.
        </p>
        <div className="mt-5">
          <Link
            to="/hire"
            className="btn shadow-xl shadow-slate-900 inline-block"
          >
            hire me
          </Link>
        </div>
      </div>
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
    </section>
  );
};

export default Hero;
