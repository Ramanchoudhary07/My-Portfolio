import express from "express";
import {
  addProject,
  deleteProject,
  getAllProjects,
} from "../controllers/project.controller.js";

const router = express.Router();

router.get(`/`, getAllProjects);
router.post(`/addProject`, addProject);
router.post(`/deleteProject`, deleteProject);

export default router;
