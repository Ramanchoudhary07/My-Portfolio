import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      id="home"
      className=" px-16 min-h-screen w-full py-28 md:px-32 
  flex items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="raman.jpg"
            alt="image"
            className="w-[300px] opacity-90 rounded-full cursor-pointer shadow-xl 
          shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 
          hover:shadow-2xl hover:shadow-indigo-600 md:w-[350px]"
          />
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center justify-center 
        max-w-[600px] gap-3 text-center"
        >
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-4xl md:text-6xl font-light">
            Raman Choudhary
          </h1>
          <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl md:text-3xl">
            Web Developer
          </h3>
          <p className="md:text-base text-pretty text-sm text-gray-400">
            I am a web developer with a strong foundation in the MERN stack
            (MongoDB, Express, React, Node.js) and experience in building
            responsive and dynamic web applications. Along with web development,
            I have a solid understanding of data structures and algorithms in
            C++.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
