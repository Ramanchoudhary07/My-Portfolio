import React from "react";
import {
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { SiExpress } from "react-icons/si";

import { motion } from "framer-motion";
const Skills = () => {
  const varients = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    //   <div
    //     id="skills"
    //     className="w-full min-h-[30vh] flex flex-col
    // items-center justify-center gap-16 md:gap-32 "
    //   >
    //     {/* <motion.h1
    //       variants={varients}
    //       initial="hidden"
    //       whileInView="visible"
    //       transition={{ duration: 0.5 }}
    //       className="text-4xl md:text-6xl font-light text-white"
    //     >
    //       Technologies
    //     </motion.h1> */}

    //   </div>
    <div className="flex flex-wrap gap-10 p-1 items-center justify-center ">
      <motion.div
        variants={varients}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
      >
        <BiLogoJavascript
          className="cursor-pointer text-[80px] text-yellow-400 
     transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"
        />
      </motion.div>

      <motion.div
        variants={varients}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
      >
        <BiLogoMongodb
          className="cursor-pointer text-[80px] text-green-500 
     transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"
        />
      </motion.div>

      <motion.div
        variants={varients}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
      >
        <SiExpress
          className="cursor-pointer text-[80px] text-green-500 
     transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"
        />
      </motion.div>

      <motion.div
        variants={varients}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
      >
        <BiLogoReact
          className="cursor-pointer text-[80px] text-sky-500 
     transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"
        />
      </motion.div>
      <motion.div
        variants={varients}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
      >
        <BiLogoTailwindCss
          className="cursor-pointer text-[80px] text-sky-500 
     transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"
        />
      </motion.div>
      <motion.div
        variants={varients}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
      >
        <BiLogoNodejs
          className="cursor-pointer text-[80px] text-green-500 
     transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"
        />
      </motion.div>
    </div>
  );
};

export default Skills;
