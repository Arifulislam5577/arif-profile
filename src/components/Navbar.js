import React from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setShowNav(false);
  }, [location.pathname]);

  showNav &&
    window.addEventListener("scroll", () => {
      setShowNav(false);
    });
  return (
    <header className="py-5">
      <div className="container flex items-center justify-between">
        <div className="logo">
          <Link to="/" className=" text-xl text-white">
            <img src="/images/logo.png" alt="Logo" className="w-full" />
          </Link>
        </div>
        <nav className="text-white hidden text-sm lg:flex items-center justify-between gap-5">
          <Link to="/about">About Me</Link>
          <a href={location.pathname !== "/" ? "/" : "#contact"}>Contact Me</a>
          <a href={location.pathname !== "/" ? "/" : "#projects"}>Projects</a>
          <Link to="/blogs">My Blogs</Link>
          <a
            href="./files/MD ARIFUL ISLAM RESUME REACT.pdf"
            download
            className="bg-red-600 py-2 text-white px-5 block rounded-full"
          >
            Resume
          </a>
        </nav>
        <button className="lg:hidden" onClick={() => setShowNav(!showNav)}>
          <HiOutlineMenuAlt3 size={28} color="white" />
        </button>
        <nav
          className={`text-white lg:hidden text-base w-full md:w-2/5 bg-slate-900 h-full top-0 right-0 z-10 flex-col flex items-center justify-center  gap-5 fixed ${
            showNav ? "translate-x-0" : "translate-x-full"
          } duration-300 transition-all`}
        >
          <button
            className="absolute top-10 left-10"
            onClick={() => setShowNav(!showNav)}
          >
            <FaTimes size="32" />
          </button>
          <Link to="/about">About Me</Link>
          <a href={location.pathname !== "/" ? "/" : "#contact"}>Contact Me</a>
          <a href={location.pathname !== "/" ? "/" : "#projects"}>Projects</a>
          <Link to="/blogs">My Blogs</Link>
          <a
            href="./files/MD ARIFUL ISLAM RESUME REACT.pdf"
            download
            className="bg-red-600 py-2 text-white px-5 block rounded-full"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
