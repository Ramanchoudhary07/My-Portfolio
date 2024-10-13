import React, { useEffect } from "react";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { useProjectStore } from "../store/useProjectStore";

const HomePage = () => {
  const { getAllProjects, projects } = useProjectStore();

  useEffect(() => {
    getAllProjects();
  }, [getAllProjects]);

  return (
    <div className="flex flex-col items-center px-4 md:px-8 lg:px-12">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default HomePage;
