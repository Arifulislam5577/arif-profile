import React from "react";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import TopServices from "../components/TopServices";

const Home = () => {
  return (
    <>
      <Hero />
      <TopServices />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
