import React from "react";
import { Link } from "react-router-dom";

const ProjectLayout = ({ project }) => {
  const { coverImage, title, projectType, id, description, live, code } =
    project;
  return (
    <div className="lg:col-span-1 w-full">
      <div className="bg-slate-800 rounded overflow-hidden shadow-lg">
        <img src={coverImage} alt="" />

        <div className="px-5 pt-5 pb-6 ">
          <div className="flex items-center justify-between">
            <h2 className="text-white text-xl font-bold">{title}</h2>
            <p className="text-gray-500 text-xs capitalize">{projectType}</p>
          </div>
          <p className="text-xs text-gray-500 my-3">
            {description.split(" ").slice(0, 17).join(" ")}...
          </p>
          <div className="flex items-center gap-2">
            <a
              href={live}
              className="text-white text-xs bg-red-600 py-1.5 shadow-xl px-3 rounded"
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
            <a
              className="text-white text-xs bg-red-600 py-1.5 shadow-xl px-3 rounded"
              target="_blank"
              rel="noreferrer"
              href={code}
            >
              Code
            </a>
            <Link
              className="text-white text-xs bg-red-600 py-1.5 shadow-xl px-3 rounded"
              to={`/project/${id}`}
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectLayout;
