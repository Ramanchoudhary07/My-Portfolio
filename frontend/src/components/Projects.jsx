import React, { useEffect } from "react";
import { useProjectStore } from "../store/useProjectStore";
import { motion } from "framer-motion";
import { BiGlobe, BiLogoGithub } from "react-icons/bi";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col gap-8 items-center md:flex-row md:gap-24">
        <img
          src={project.imageUrl}
          alt="Project Image"
          className="w-full rounded-2xl shadow-2xl shadow-[#6622ee] cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#62e] md:w-[400px]"
        />

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <div className="text-xl font-semibold">{project.projectName}</div>
            <p className="text-gray-400">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-5">
            {project?.tech?.map((tech, index) => (
              <span key={index} className="rounded-lg bg-black px-2">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            <div className="flex items-center px-2 rounded-sm py-1 bg-[#6622eec0] cursor-pointer text-white/70 justify-center gap-2">
              <BiGlobe />
              <a
                href={project.deploymentLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Deployment Link
              </a>
            </div>

            <div className="flex items-center px-2 py-1 rounded-sm bg-[#6622eec0] cursor-pointer text-white/70 justify-center gap-2">
              <BiLogoGithub />
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectCardSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="flex flex-col gap-8 items-center md:flex-row md:gap-24">
        <div className="w-full h-64 bg-gray-300/50 rounded-2xl shadow-md shadow-gray-400/20 md:w-[400px]"></div>

        <div className="flex flex-col gap-5 w-full md:w-1/2">
          <div className="flex flex-col gap-3">
            <div className="h-6 bg-gray-300/50 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300/50 rounded w-full"></div>
            <div className="h-4 bg-gray-300/50 rounded w-5/6"></div>
          </div>
          <div className="flex flex-wrap gap-5">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="h-6 w-16 bg-gray-300/50 rounded-lg"
              ></div>
            ))}
          </div>
          <div className="flex gap-3">
            <div className="h-8 w-32 bg-gray-300/50 rounded"></div>
            <div className="h-8 w-32 bg-gray-300/50 rounded"></div>
          </div>
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
  const { projects, getAllProjects, loading } = useProjectStore();

  useEffect(() => {
    getAllProjects();
  }, [getAllProjects]);

  return (
    <div
      id="projects"
      className=" min-h-screen w-full flex flex-col
  items-center justify-center gap-24 p-4 md:px-14 md:py-24 "
    >
      <motion.h1
        variants={varients}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-6xl font-normal pb-2  bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent"
      >
        Projects
      </motion.h1>

      <div className="flex flex-col gap-16 w-full max-w-[1000px] text-white">
        {loading ? (
          <ProjectCardSkeleton />
        ) : (
          <>
            {projects?.map((project) => (
              <ProjectCard key={project.projectName} project={project} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Projects;
