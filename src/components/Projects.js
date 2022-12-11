import React from "react";
import { projects } from "../demodata/data";
import ProjectLayout from "./ProjectLayout";

const Projects = () => {
  return (
    <section className="py-5" id="projects">
      <div className="container">
        <div className="inline-flex justify-center items-center w-full my-5">
          <hr className="my-8 w-64 h-1 bg-gray-200 rounded border-0 dark:bg-gray-700" />
          <div className="absolute left-1/2 px-4 text-white -translate-x-1/2 bg-gray-900 text-2xl">
            Porjects
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((project) => (
            <ProjectLayout key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
