import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
const Home = () => {
  const [showSideBar, setShowSideBar] = useState(true);
  return (
    <section className="home relative">
      <div
        className={`bg-slate-900 min-h-screen w-2/5 flex flex-col items-center justify-center absolute left-0 top-0  ${
          showSideBar ? "translate-x-0" : "-translate-x-full"
        } duration-300`}
      >
        <div className="container  ">
          <button
            className="absolute text-gray-900 h-8 w-8 bg-gray-50 text-center flex items-center justify-center right-0 top-0 border-2 border-slate-900"
            onClick={() => setShowSideBar(!showSideBar)}
          >
            <FaTimes />
          </button>
          <p className="text-gray-50">Hi...</p>
          <h1 className="text-gray-50 text-3xl my-3 font-bold">
            I AM <span className="text-orange-500">MD ARIFUL ISLAM</span>
          </h1>

          <p className="text-gray-50 text-sm">
            A passionate Junior Javascript developer from Bangladesh. I'm highly
            passionate about JavaScript-based software development technologies
            such as: MERN STACK
          </p>
          <div className="mt-5">
            <div className="flex items-center gap-3">
              <button className="btn">about me</button>
              <button className="btn">hire me</button>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <button className="btn">dawnload cv</button>
              <button className="btn">my skills</button>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <button className="btn">projects</button>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-gray-100 ">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et architecto
          laboriosam, asperiores ad quae dolor est voluptatem in! Enim hic
          recusandae provident natus atque totam molestiae mollitia? Distinctio
          nihil cum laboriosam. Porro tempora et modi neque ea quia ullam
          voluptatum mollitia dolore quidem vitae corrupti reprehenderit eius
          nemo ratione, minus temporibus consectetur velit odit. Et illo ex
          provident modi obcaecati possimus, quae omnis? Asperiores, atque! Cum
          iste aliquid praesentium quis inventore ab aspernatur earum molestiae
          fuga similique minus eveniet pariatur ullam error fugiat rerum tenetur
          provident et dicta culpa voluptas explicabo, deleniti non?
          Exercitationem cupiditate dicta, vero officia inventore soluta!
        </p>
      </div>
    </section>
  );
};

export default Home;
