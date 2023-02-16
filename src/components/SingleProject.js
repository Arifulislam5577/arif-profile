import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FiLink } from "react-icons/fi";

import { Fade } from "react-reveal";
const SingleProject = (props) => {
  const { index, project } = props;
  return (
    <div className="py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <Fade left>
          <div
            className={`col-span-1 ${
              index % 2 === 0 ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <img
              src={project?.coverImage}
              alt="project"
              className="rounded-xl"
            />
          </div>
        </Fade>
        <Fade right>
          <div
            className={`col-span-1 text-white ${
              index % 2 === 0 ? "lg:order-2" : "lg:order-1"
            }`}
          >
            <div className="flex items-center justify-between ">
              <h1 className="text-2xl font-bold">{project?.title}</h1>
              <div className="flex items-center gap-3">
                <a
                  href={project?.code}
                  className="text-white  bg-red-800 py-2 shadow-xl px-6 text-sm rounded-full flex items-center gap-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiLink />
                  Code
                </a>
                <a
                  href={project?.live}
                  className="text-white  bg-red-800 py-2 shadow-xl px-6 text-sm rounded-full flex items-center gap-2 animate-pulse"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaExternalLinkAlt />
                  Live
                </a>
              </div>
            </div>
            <p className="capitalize">{project?.projectType}</p>

            <div className="my-3">
              <h1 className="mb-1">Description</h1>
              <hr className="border-b mb-3 border-b-slate-600 h-1 w-1/2 border-t-0" />
              <p>{project?.description}</p>
            </div>
            <div className="my-3">
              <h1 className="mb-1">Used Technology</h1>
              <hr className="border-b mb-3 border-b-slate-600 h-1 w-1/2 border-t-0" />
              <div className="flex flex-wrap gap-2">
                {project?.usedTechnology.map((tech) => (
                  <span
                    key={tech}
                    className="border px-3 py-1.5 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default SingleProject;
