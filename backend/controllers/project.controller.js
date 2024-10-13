import Project from "../models/project.model.js";
import cloudinary from "../lib/cloudinary.js";

export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json({ projects });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addProject = async (req, res) => {
  try {
    const { projectName, description, image, tech } = req.body;

    let cloudinaryResponse = null;
    if (image) {
      cloudinaryResponse = await cloudinary.uploader.upload(image, {
        folder: "portfolio_projects",
      });
    }

    const existingProject = await Project.findOne({ projectName });
    if (existingProject) {
      return res.status(400).json({ error: "Project name already exist" });
    }
    const newProject = new Project({
      projectName,
      description,
      imageUrl: cloudinaryResponse?.secure_url
        ? cloudinaryResponse?.secure_url
        : "",
      tech,
    });
    await newProject.save();

    res
      .status(201)
      .json({ project: newProject, message: "Project added successfully" });
  } catch (error) {
    console.log("error in adding project:", error.message);
    res.status(500).json({ error: error.message });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const { projectId } = req.body;
    await Project.findByIdAndDelete({ _id: projectId });
    res.status(200).json({ message: "project deleted successfully" });
  } catch (error) {
    console.log("error deleting project", error.message);
    res.status(500).json({ error: error.message });
  }
};
