import React from "react";
import { projects } from "../demodata/data";
import SingleProject from "./SingleProject";

const Projects = () => {
  return (
    <section className="py-5" id="projects">
      <div className="container">
        <div className="inline-flex justify-center items-center w-full my-5">
          <hr className="my-8 w-64 h-1 bg-gray-200 rounded border-0 dark:bg-gray-700" />
          <div className="absolute left-1/2 px-4 text-white -translate-x-1/2 bg-gray-900 text-2xl">
            Projects
          </div>
        </div>

        <div className="">
          {projects.map((project, index) => (
            <SingleProject index={index} key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
