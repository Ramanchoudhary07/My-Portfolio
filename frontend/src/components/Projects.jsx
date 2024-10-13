import React from "react";
import { useProjectStore } from "../store/useProjectStore";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-col gap-8 items-center md:flex-row md:gap-24">
      <img
        src={project.imageUrl}
        alt="Project Image"
        className="w-full rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 md:w-[300px]"
      />

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <div className="text-xl font-semibold">{project.projectName}</div>
          <p className="text-gray-400">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-5">
          {project.tech.map((tech, index) => (
            <span key={index} className="rounded-lg bg-black">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const varients = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  const { projects } = useProjectStore();

  return (
    <div
      className=" min-h-screen w-full flex flex-col
  items-center justify-center gap-16 p-4 md:px-14 md:py-24 "
    >
      <motion.h1
        variants={varients}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-6xl font-light text-white"
      >
        Projects
      </motion.h1>

      {/* <h1 className="text-4xl font-light text-white md:text-6xl"></h1> */}
      <div className="flex flex-col gap-16 w-full max-w-[1000px] text-white">
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
