import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useLocation } from "react-router-dom";
const ProjectDetails = () => {
  const skills = [
    "javascript",
    "typescript",
    "react js",
    "next js",
    "node js",
    "express js",
    "mongodb",
    "data structures",
    "Algorithms",
  ];
  const { state } = useLocation();

  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
          <div className="lg:col-span-1 w-full">
            <Carousel autoPlay={true} infiniteLoop={true}>
              <div>
                <img src={state.coverImage} alt={state.title} />
              </div>
              <div>
                <img src={state.coverImage} alt={state.title} />
              </div>
              <div>
                <img src={state.coverImage} alt={state.title} />
              </div>
            </Carousel>
          </div>

          <div className="lg:col-span-1 w-full">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold text-white">{state.title}</h1>
              <p className="text-white text-sm">(May 12 - May -27)/2022</p>
            </div>
            <p className="text-white my-3">{state.description}</p>
            <div className="my-3 flex items-center gap-5">
              <button className="text-white bg-red-600 py-2 rounded  uppercase text-xs px-5 ">
                Live Website
              </button>
              <button className="text-white bg-red-600 py-2 rounded  uppercase text-xs px-5 ">
                Source Code
              </button>
            </div>
            <h2 className="text-white font-bold  uppercase">📑Features</h2>
            <ul className="text-white my-3 flex flex-col gap-3">
              <li>✅ Lorem ipsum dolor sit.</li>
              <li>✅ Lorem ipsum dolor sit.</li>
              <li>✅ Lorem ipsum dolor sit.</li>
              <li>✅ Lorem ipsum dolor sit.</li>
              <li>✅ Lorem ipsum dolor sit.</li>
            </ul>
            <h2 className="text-white font-bold  uppercase">✈️Technology</h2>
            <div className="flex items-center flex-wrap gap-3 my-3">
              {skills.map((item, index) => (
                <button
                  key={index}
                  className="text-white bg-slate-900 py-2 rounded shadow uppercase text-sm px-5 "
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
