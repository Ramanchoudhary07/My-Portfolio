import toast from "react-hot-toast";
import { create } from "zustand";

export const useAdminStore = create((set, get) => ({
  resumeLink:
    "https://drive.google.com/file/d/1r6zq2an31I1OU5YijObI3rjBNWsbg0DT/view?usp=sharing",

  addResumeLink: (link) => {
    set({ resumeLink: link });
    toast.success("resume uploaded successfully");
  },
}));
