import express from "express";
import {
  addProject,
  deleteProject,
  getAllProjects,
} from "../controllers/project.controller.js";

const router = express.Router();

router.get(`/`, getAllProjects);
router.post(`/addProject`, addProject);
router.delete(`/:id`, deleteProject);

export default router;
