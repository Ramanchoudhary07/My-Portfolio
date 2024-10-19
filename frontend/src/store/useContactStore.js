import { create } from "zustand";
import axios from "../lib/axios.js";
import { toast } from "react-hot-toast";

export const useContactStore = create((set, get) => ({
  loading: false,
  contacts: [],

  sendContact: async ({ name, email, message }) => {
    set({ loading: true });
    try {
      await axios.post(`/contact/sendMessage`, {
        name,
        email,
        message,
      });
      toast.success("message sent successfully");
    } catch (error) {
      toast.error(res.data.error || "Error in sending contact message");
    } finally {
      set({ loading: false });
    }
  },

  fetchContactData: async () => {
    set({ loading: true });
    try {
      const res = await axios.get(`/contact/fetchAllContacts`);
      set({ contacts: res.data });
    } catch (error) {
      toast.error("error in fetching contacts");
    } finally {
      set({ loading: false });
    }
  },
}));
