import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useProjectStore } from "../store/useProjectStore";
import { BiLoader } from "react-icons/bi";
const AddProjectForm = () => {
  const { loading, addProject } = useProjectStore();
  const [projectData, setProjectData] = useState({
    projectName: "",
    description: "",
    tech: [],
    image: "",
    deploymentLink: "",
    githubLink: "",
  });

  const [newTech, setNewTech] = useState("");

  const imageInputRef = useRef(null);

  const handleAddTech = (e) => {
    e.preventDefault();
    if (newTech) {
      setProjectData((prevState) => ({
        ...prevState,
        tech: [...prevState.tech, newTech],
      }));
    }
    setNewTech("");
  };

  const handleRemoveTech = (e, index) => {
    e.preventDefault();
    setProjectData((prevState) => ({
      ...prevState,
      tech: projectData.tech.filter((_, i) => i !== index),
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setProjectData((prevState) => ({
          ...prevState,
          image: reader.result,
        }));
      };

      reader.readAsDataURL(file);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    try {
      addProject(projectData);
      setProjectData({
        projectName: "",
        description: "",
        tech: [],
        image: "",
        deploymentLink: "",
        githubLink: "",
      });
      if (imageInputRef.current) {
        imageInputRef.current.value = "";
      }
    } catch (error) {
      console.log("error adding a project:", error.message);
    }
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="rounded-md max-w-sm w-full bg-gray-800  text-white/70 px-10 py-8"
    >
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="projectName">Project Name</label>
          <div className="relative">
            <input
              id="projectName"
              type="text"
              value={projectData.projectName}
              onChange={(e) =>
                setProjectData({
                  ...projectData,
                  projectName: e.target.value,
                })
              }
              className="w-full block px-4 py-2 rounded-md
            bg-gray-700 text-white/70 text-sm"
              placeholder="Enter Project Name"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="description">Description</label>
          <div className="relative">
            <textarea
              id="description"
              type="textarea"
              rows="5"
              cols="40"
              value={projectData.description}
              onChange={(e) =>
                setProjectData({
                  ...projectData,
                  description: e.target.value,
                })
              }
              className="w-full block px-4 py-2 rounded-md
            bg-gray-700 text-white/70 text-sm"
              placeholder="Enter project's description here"
            ></textarea>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="image">Image</label>
          <div className="relative text-white/70 bg-opacity-70">
            <input
              id="image"
              type="file"
              accept="image/*"
              ref={imageInputRef}
              onChange={handleImageChange}
              className="w-full block px-4 py-2 rounded-md
            bg-gray-700 text-white/70 text-sm"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="tech">Technologies</label>
            <div className="flex relative">
              <input
                id="image"
                type="text"
                value={newTech}
                onChange={(e) => setNewTech(e.target.value)}
                className="w-full block px-4 py-2 rounded-md
               bg-gray-700 text-white/70 text-sm"
                placeholder="Enter Technology here"
              />
              <button
                onClick={handleAddTech}
                className="rounded-md absolute inset-y-0 right-0.5 top-0.5 text-xs text-white/70 size-8 bg-[#6e2df0d8]"
              >
                Add
              </button>
            </div>
            <ul
              className="w-full py-2 flex flex-wrap gap-1 rounded-md
             text-white/70 text-sm"
            >
              {projectData.tech.map((item, index) => (
                <li
                  key={index}
                  className="bg-gray-600 px-2 text-white/70 rounded-sm text-sm p-1 flex gap-2 "
                >
                  {item}
                  <button
                    onClick={(e) => handleRemoveTech(e, index)}
                    className="text-xs inline bg-gray-700 px-2 border-none"
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="deploymentLink">Deployment Link</label>
            <div className="relative">
              <input
                id="deploymentLink"
                type="text"
                value={projectData.deploymentLink}
                onChange={(e) =>
                  setProjectData({
                    ...projectData,
                    deploymentLink: e.target.value,
                  })
                }
                className="w-full block px-4 py-2 rounded-md
            bg-gray-700 text-white/70 text-sm"
                placeholder="Enter Project's deployment link here"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="githubLink">Github Link</label>
            <div className="relative">
              <input
                id="githubLink"
                type="text"
                value={projectData.githubLink}
                onChange={(e) =>
                  setProjectData({
                    ...projectData,
                    githubLink: e.target.value,
                  })
                }
                className="w-full block px-4 py-2 rounded-md
            bg-gray-700 text-white/70 text-sm"
                placeholder="Enter Project's github link here"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md px-4 py-2 mt-2  bg-[#62e] font-medium text-center text-white/70"
          >
            {loading ? (
              <BiLoader className="animate-spin text-center mx-auto" />
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default AddProjectForm;
