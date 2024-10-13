import React, { useState } from "react";
import { BiUser } from "react-icons/bi";
import { motion } from "framer-motion";
import AddProjectForm from "../components/AddProjectForm";
import Messages from "../components/Messages";
import ProjectSummary from "../components/projectSummary";

const tabs = [
  { id: "add", label: "Add Project", icon: BiUser },
  { id: "projects", label: "Projects", icon: BiUser },
  { id: "contacts", label: "contacts", icon: BiUser },
];
const AdminPage = () => {
  const [activeTab, setActiveTab] = useState("add");
  return (
    <div className="min-h-screen flex flex-col mt-10 justify-center items-center">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="sm:text-3xl lg:text-5xl font-medium bg-gradient-to-r from-blue-500 to-pink-500 text-center bg-clip-text text-transparent mb-6"
      >
        Admin Dashboard
      </motion.h1>
      <div className="flex gap-10 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center text-white/70 py-2 px-4 rounded-md
                transition-all duration-300
              ${
                tab.id === activeTab
                  ? "bg-[#5419cb]"
                  : "bg-slate-600 hover:bg-slate-800"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {activeTab === "add" && <AddProjectForm />}
      {activeTab === "projects" && <ProjectSummary />}
      {activeTab === "contacts" && <Messages />}
    </div>
  );
};

export default AdminPage;
