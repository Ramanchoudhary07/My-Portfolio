import React from "react";
import { motion } from "framer-motion";
import Skills from "./Skills";
import { FiFileText } from "react-icons/fi";
import { Link } from "react-router-dom";
import { BiLinkExternal } from "react-icons/bi";
import { useAdminStore } from "../store/useAdminStore";

const About = () => {
  const { resumeLink } = useAdminStore();
  return (
    <div
      id="About"
      className="min-h-screen w-full flex flex-col items-center
  justify-center gap-16 p-4 md:px-14 md:py-24"
    >
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-normal bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent"
      >
        About me
      </motion.h1>
      <div className="bg-gray-700/40 shadow-[#6622ee40] hover:scale-105 transition-all duration-300 shadow-lg p-8 rounded-lg">
        <div className="space-y-4 text-white/90 mb-3">
          <h2 className="text-2xl font-semibold">Raman Choudhary</h2>
          <p>
            <strong>Degree:</strong> Bachelor of Technology
          </p>
          <p>
            <strong>College:</strong> Sardar Vallabhbhai National Institute of
            Technology
          </p>

          <div>
            <h3 className="text-xl font-semibold mb-2">Interests</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#62e]  rounded-md p-2 text-sm">
                Web Development
              </span>

              <span className="bg-[#62e] rounded-md p-2 text-sm">Coding</span>
              <span className="bg-[#62e] rounded-md p-2 text-sm">Chess</span>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Summary</h3>
            <p className="text-muted-foreground">
              A dynamic Chemical Engineer in pre final year of under
              graduation,with hands-on experience in web development,JavaScript,
              and C++. Proficient in process engineering, problem-solving, and
              project management, with a focus on delivering practical
              solutions. Skilled in both technical development and engineering,
              I’m eager to leverage my interdisciplinary background to drive
              innovation and efficiency in industrial settings.
            </p>
          </div>
        </div>
        <div className="w-full border text-white/90 border-gray-500 rounded-lg p-8">
          <h1 className="text-2xl">My Resume</h1>
          <span className="text-sm text-white/60 mb-2">
            Click to view or download my full resume
          </span>
          <div className="flex items-center my-8 space-x-2">
            <FiFileText className="h-6 w-6" />
            <span>Raman_Resume.pdf</span>
          </div>
          <div className="my-2">
            <a
              href={resumeLink || "#"}
              target={resumeLink != "#" ? "_blank" : "#"}
              rel="noopener noreferrer"
            >
              <button className="bg-[#62e] p-2 rounded-md flex items-center gap-1">
                View Resume
                <BiLinkExternal />
              </button>
            </a>
          </div>
        </div>
        <div className="text-white/90 mt-5">
          <h1 className="text-center text-3xl ">Skills</h1>
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default About;
