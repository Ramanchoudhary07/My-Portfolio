import { create } from "zustand";
import axios from "../lib/axios.js";
import { toast } from "react-hot-toast";

export const useUserStore = create((set, get) => ({
  user: null,
  loading: false,

  signup: async ({ fullName, email, password }) => {
    set({ loading: true });
    try {
      const res = await axios.post("/auth/signup", {
        fullName,
        email,
        password,
      });
      set({ user: res.data.user });
      toast.success("Account created successfully");
    } catch (error) {
      console.log("error is:", error.message);
      toast.error(error.message || "Error occured in signup");
    } finally {
      set({ loading: false });
    }
  },

  login: async ({ email, password }) => {
    set({ loading: true });
    try {
      const res = await axios.post("/auth/login", {
        email,
        password,
      });
      set({ user: res.data.user });
      toast.success("Logged in succesfully");
    } catch (error) {
      toast.error(error.message || "Error occured in login");
    } finally {
      set({ loading: false });
    }
  },

  logout: () => {
    set({ user: null });
  },
}));
