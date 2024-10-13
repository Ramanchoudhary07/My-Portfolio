import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const varients = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div
      className="  min-h-screen w-full flex flex-col
  items-center justify-center gap-16 p-4 md:px-14 md:py-24 "
    >
      <motion.h1
        variants={varients}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-6xl font-light text-white"
      >
        Contacts
      </motion.h1>
      <div className="flex items-center justify-center text-white/90 font-bold text-2xl">
        Coming soon...
      </div>
    </div>
  );
};

export default Contact;
