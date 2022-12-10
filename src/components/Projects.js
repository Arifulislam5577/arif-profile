import React from "react";

const Projects = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div class="inline-flex justify-center items-center w-full my-5">
          <hr class="my-8 w-64 h-1 bg-gray-200 rounded border-0 dark:bg-gray-700" />
          <div class="absolute left-1/2 px-4 text-white -translate-x-1/2 bg-gray-900 text-2xl">
            Porjects
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 w-full">
            <div className="bg-slate-900 rounded overflow-hidden">
              <img
                src="https://res.cloudinary.com/arif5577/image/upload/v1648128437/Shopping-cart/Untitled_design_k2szlu.png"
                alt=""
              />

              <div className="p-5 ">
                <div className="flex items-center justify-between">
                  <h2 className="text-white font-bold">Rolex</h2>
                  <h2 className="text-gray-500 text-sm">Ecommerce App</h2>
                </div>
                <p className="text-xs text-gray-600 my-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt, fugit illo maxime odit nostrum enim iure laudantium
                  quis? Laborum doloremque facere similique repudiandae fuga
                  amet porro delectus magnam quibusdam reiciendis!
                </p>
                <div className="flex items-center gap-5">
                  <a
                    href="https://rolex-ec266.web.app"
                    className="text-white text-sm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Website
                  </a>
                  <a
                    className="text-white text-sm"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Arifulislam5577/rolex-shopping"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 w-full">
            <div className="bg-slate-900 rounded overflow-hidden">
              <img
                src="https://res.cloudinary.com/arif5577/image/upload/v1648128436/Shopping-cart/Untitled_design_1_trund8.png"
                alt=""
              />

              <div className="p-5 ">
                <div className="flex items-center justify-between">
                  <h2 className="text-white font-bold">Newsman</h2>
                  <h2 className="text-gray-500 text-sm">Blog App</h2>
                </div>
                <p className="text-xs text-gray-600 my-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt, fugit illo maxime odit nostrum enim iure laudantium
                  quis? Laborum doloremque facere similique repudiandae fuga
                  amet porro delectus magnam quibusdam reiciendis!
                </p>
                <div className="flex items-center gap-5">
                  <a
                    href="https://newsman-849a8.web.app"
                    className="text-white text-sm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Website
                  </a>
                  <a
                    className="text-white text-sm"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Arifulislam5577/newsman-blog-app"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 w-full">
            <div className="bg-slate-900 rounded overflow-hidden">
              <img
                src="https://res.cloudinary.com/arif5577/image/upload/v1648118173/Shopping-cart/Untitled_design_1_icpbiz.png"
                alt=""
              />

              <div className="p-5 ">
                <div className="flex items-center justify-between">
                  <h2 className="text-white font-bold">Nikeshoe</h2>
                  <h2 className="text-gray-500 text-sm">Business App</h2>
                </div>
                <p className="text-xs text-gray-600 my-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt, fugit illo maxime odit nostrum enim iure laudantium
                  quis? Laborum doloremque facere similique repudiandae fuga
                  amet porro delectus magnam quibusdam reiciendis!
                </p>
                <div className="flex items-center gap-5">
                  <a
                    href="https://nikeshoe-a57fd.web.app"
                    className="text-white text-sm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Website
                  </a>
                  <a
                    className="text-white text-sm"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Arifulislam5577/newsman-blog-app"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
