import React from "react";
import { Outlet, Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="py-0">
      <div className="grid grid-cols-5">
        <div className="bg-gradient-to-l from-slate-800 to to-black min-h-screen col-span-2  flex flex-col items-center justify-center">
          <div className="container">
            <p className="text-gray-50">Hi...</p>
            <h1 className="text-gray-50 text-3xl my-3 font-bold">
              I AM <span className="text-orange-500">MD ARIFUL ISLAM</span>
            </h1>

            <p className="text-gray-50 text-sm">
              A passionate Junior Javascript developer from Bangladesh. I'm
              highly passionate about JavaScript-based software development
              technologies such as: MERN STACK
            </p>
            <div className="mt-5">
              <div className="flex items-center gap-3">
                <Link to="/about" className="btn">
                  about me
                </Link>
                <Link to="/hire" className="btn">
                  hire me
                </Link>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <button className="btn">dawnload cv</button>
                <Link to="/skills" className="btn">
                  my skills
                </Link>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <Link to="/projects" className="btn">
                  projects
                </Link>
                <Link to="/" className="btn">
                  home
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 min-h-screen flex flex-col gap-5 items-center justify-center">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Home;
