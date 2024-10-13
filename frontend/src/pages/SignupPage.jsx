import React, { useState } from "react";
import { BiEnvelope, BiLoader, BiUser, BiUserPlus } from "react-icons/bi";
import { GoArrowRight, GoLock } from "react-icons/go";
import { useUserStore } from "../store/useUserStore";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, signup, user } = useUserStore();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    signup({ fullName, email, password });
    navigate("/");
  };

  return (
    <div className=" min-h-screen w-full flex flex-col justify-center items-center space-y-5 py-12 sm:px-6 lg:px-12">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center bg-gradient-to-r h-14 from-blue-500 to-pink-500
         bg-clip-text"
      >
        <h1 className="text-4xl md:text-5xl text-transparent font-medium ">
          Sign Up
        </h1>
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="rounded-md max-w-sm w-full bg-gray-800  text-white/70 p-10"
      >
        <form onSubmit={handleFormSubmit} className="space-y-6">
          <div className="flex flex-col gap-1">
            <label htmlFor="fullName">Full Name</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 pointer-events-none flex items-center">
                <BiUser />
              </div>
              <input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full block px-4 py-2 pl-10 rounded-md
            bg-gray-700 text-white/70 text-sm"
                placeholder="Enter your name"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 pointer-events-none flex items-center">
                <BiEnvelope />
              </div>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full block px-4 py-2 pl-10 rounded-md
            bg-gray-700 text-white/70 text-sm"
                placeholder="Enter your Email"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 pointer-events-none flex items-center">
                <GoLock />
              </div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full block px-4 py-2 pl-10 rounded-md
            bg-gray-700 text-white/70 text-sm"
                placeholder="Enter your Password"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center items-center px-4 py-2 bg-[#63e] bg-opacity-70
          border-transparent rounded-md shadow-sm text-md font-medium hover:bg-opacity-100
          transition-all duration-300"
            disabled={loading}
          >
            {loading ? (
              <>
                <BiLoader className="mr-2 h-4 w-4 animate-spin" />
                loading...
              </>
            ) : (
              <>
                <BiUserPlus className="mr-2 h-5 w-5" />
                Sign Up
              </>
            )}
          </button>
        </form>
        <p className="text-center mt-8 text-sm font-medium text-white/70">
          Already have an account?{" "}
          <Link to={`/login`} className="hover:text-[#6521ed] text-[#62e]">
            login here <GoArrowRight className="inline h-4 w-4" />
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default SignupPage;
