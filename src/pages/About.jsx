import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaPhone,
} from "react-icons/fa";
const About = () => {
  const skills = [
    "html",
    "css",
    "scss",
    "bootstrap",
    "tailwind css",
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
  return (
    <section className="pb-10">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="lg:col-span-1 w-full">
            <div className="overflow-hidden border-8 border-red-600 ">
              <img
                src="./images/arif.jpg"
                alt="arif"
                className="h-full w-full"
              />
            </div>
          </div>
          <div className="lg:col-span-1 w-full text-white">
            <h1 className="text-3xl font-bold uppercase">Md ariful islam</h1>
            <h3 className="capitalize">mern stack web developer</h3>
            <p className="my-3">
              I'm a Mern Stack Web Developer focused on developing Javascript
              based web applications. I love to manage everything from complex
              logic to the awesome layout of a web application.
            </p>

            <p className="mb-2">
              I have a lot of interest in Saas products and Blockchain
              Development. I want to work on this field, if I get an
              opportunity.
            </p>

            <div className="flex items-center gap-5 my-5">
              <button>
                <FaFacebookF size="20" />
              </button>
              <button>
                <FaGithub size="20" />
              </button>
              <button>
                <FaLinkedinIn size="20" />
              </button>
              <button>
                <FaTwitter size="20" />
              </button>
              <button>
                <FaPhone size="20" />
              </button>
            </div>

            <div>
              <h3 className="uppercase font-bold">Skills</h3>
              <div className="flex flex-wrap items-center gap-3 my-3">
                {skills.map((item, index) => (
                  <button
                    key={index}
                    className="text-white bg-red-600 py-1 uppercase text-sm px-5 "
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
