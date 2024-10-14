import { create } from "zustand";
import axios from "../lib/axios.js";
import { toast } from "react-hot-toast";

export const useProjectStore = create((set, get) => ({
  projects: [],
  loading: false,

  getAllProjects: async () => {
    set({ loading: true });
    try {
      const res = await axios.get(`/project`);
      set({ projects: res.data.projects });
    } catch (error) {
      toast.error(error.message || "error in fetching projects");
    } finally {
      set({ loading: false });
    }
  },

  addProject: async (projectData) => {
    set({ loading: true });
    try {
      const res = await axios.post(`/project/addProject`, projectData);
      const newProject = res.data;
      set((prevState) => ({
        projects: [...prevState.projects, newProject],
      }));
      toast.success(res.data.message || "Project added successfully");
    } catch (error) {
      toast.error(error.message || "error occured in adding project");
    } finally {
      set({ loading: false });
    }
  },

  deleteProject: async (projectId) => {
    set({ loading: true });
    try {
      const res = await axios.delete(`/project/${projectId}`);
      set((prevState) => ({
        projects: prevState.projects.filter(
          (project) => project._id !== projectId
        ),
      }));
      toast.success(res.data.message || "project deleted successfully");
    } catch (error) {
      toast.error(error.message || "error in deleting project");
    } finally {
      set({ loading: false });
    }
  },
}));
