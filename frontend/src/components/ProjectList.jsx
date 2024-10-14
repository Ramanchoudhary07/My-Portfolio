import React from "react";
import { motion } from "framer-motion";
import { useProjectStore } from "../store/useProjectStore";
import { BiTrash } from "react-icons/bi";
import toast from "react-hot-toast";

const ProjectList = () => {
  const { projects, deleteProject } = useProjectStore();

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="rounded-md max-w-md w-full bg-gray-800  text-white/70 px-10 py-8"
    >
      <div className="flex flex-col gap-5">
        {projects?.map((project, i) => (
          <div key={i} className="flex justify-between">
            <div className="flex gap-2">
              <div>{i + 1}.</div>
              <div>{project.projectName}</div>
            </div>

            <button
              onClick={() => deleteProject(project._id)}
              className="text-red-500 text-2xl hover:scale-110 transition-all duration-300"
            >
              <BiTrash />
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectList;
