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
    const {
      projectName,
      description,
      image,
      tech,
      deploymentLink,
      githubLink,
    } = req.body;

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

    const project = await Project.create({
      projectName,
      description,
      imageUrl: cloudinaryResponse?.secure_url
        ? cloudinaryResponse?.secure_url
        : "",
      tech,
      deploymentLink,
      githubLink,
    });

    res.status(201).json({ project });
  } catch (error) {
    console.log("error in adding project:", error.message);
    res.status(500).json({ error: error.message });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findById(id);
    if (!project) {
      return res.status(404).json({ message: "project not found" });
    }
    if (project.imageUrl) {
      const publicId = project.imageUrl.split("/").pop().split(".")[0];
      await cloudinary.uploader.destroy(`portfolio_projects/${publicId}`);
    }
    await Project.findByIdAndDelete(id);

    res.status(200).json({ message: "project deleted successfully" });
  } catch (error) {
    console.log("error deleting project", error.message);
    res.status(500).json({ error: error.message });
  }
};
