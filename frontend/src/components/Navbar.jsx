import React, { useState } from "react";
import {
  BiLock,
  BiLogIn,
  BiLogOut,
  BiMenu,
  BiUserPlus,
  BiX,
} from "react-icons/bi";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useUserStore } from "../store/useUserStore.js";

const Navbar = () => {
  const { user, logout } = useUserStore();
  const isAdmin = user?.role === "admin";
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 z-10 w-full flex items-center justify-between border-b border-b-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
      <Link
        to={`/`}
        className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100"
      >
        Portfolio
      </Link>

      <ul className="hidden md:flex gap-10">
        <a
          href="#home"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Home</li>
        </a>
        <a
          href="#About"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>About</li>
        </a>
        <a
          href="#projects"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Projects</li>
        </a>
        <a
          href="#contact"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Contact</li>
        </a>
      </ul>

      <ul className="hidden md:flex gap-5">
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100 hover:text-orange-500 ">
          <a
            href="https://linkedin.com/in/raman-choudhary-79b4b2316"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100 hover:text-white ">
          <a
            href="https://github.com/Ramanchoudhary07"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </li>
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100 hover:text-green-500 ">
          <a
            href="https://www.instagram.com/raman_choudhary01/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </li>
      </ul>

      <div className="hidden md:flex gap-2">
        {user ? (
          <>
            {isAdmin && (
              <Link
                to={`/admin`}
                className="flex items-center text-white/70 bg-[#5419cb] py-2 px-4 rounded-md
              bg-opacity-70 hover:bg-opacity-100 transition-all duration-300 "
              >
                <BiLock size={18} />
                <span className="ml-2 ">Admin</span>
              </Link>
            )}
            <button
              onClick={handleLogout}
              className="flex items-center py-2 px-4 rounded-md bg-slate-600
            opacity-70 hover:opacity-100 transition-all duration-300 "
            >
              <BiLogOut size={18} />
              <span className="ml-2">Logout</span>
            </button>
          </>
        ) : (
          <>
            <Link
              to={`/signup`}
              className="flex items-center text-white/70 py-2 px-4  rounded-md bg-[#5419cb]
            bg-opacity-70 hover:bg-opacity-100 transition-all duration-300 "
            >
              <BiUserPlus size={18} />
              <span className="ml-2 md:hidden lg:inline">Signup</span>
            </Link>
            <Link
              to={`/login`}
              className="flex items-center text-white/70 py-2 px-4 rounded-md bg-slate-600
            bg-opacity-70 hover:bg-opacity-100 transition-all duration-300"
            >
              <BiLogIn size={18} />
              <span className="ml-2 md:hidden lg:inline">Login</span>
            </Link>
          </>
        )}
      </div>

      {isOpen ? (
        <BiX className="block md:hidden text-4xl" onClick={toggleMenu} />
      ) : (
        <BiMenu className="block md:hidden text-4xl" onClick={toggleMenu} />
      )}

      {isOpen && (
        <div
          className={`${
            isOpen ? `block` : `hidden`
          } fixed md:hidden right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-l border-gray-800 bg-black/70 backdrop-blur-md p-12
          `}
        >
          <ul className="flex flex-col gap-5">
            <a
              href=""
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Home</li>
            </a>
            <a
              href=""
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Skills</li>
            </a>
            <a
              href=""
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Projects</li>
            </a>
            <a
              href=""
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Contact</li>
            </a>
          </ul>

          <ul className="flex flex-wrap gap-5">
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100 hover:text-orange-500 ">
              <FaLinkedin />
            </li>
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100 hover:text-white ">
              <FaGithub />
            </li>
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100 hover:text-green-500 ">
              <FaInstagram />
            </li>
          </ul>

          <div className="flex flex-col gap-5">
            {user ? (
              <>
                {isAdmin && (
                  <button
                    className="flex items-center py-2 px-4 rounded-md
              opacity-70 hover:opacity-100 transition-all duration-300 "
                  >
                    <BiLock size={18} />
                    <span className="ml-2">Admin</span>
                  </button>
                )}
                <button
                  className="flex items-center py-2 px-4 rounded-md
            opacity-70 hover:opacity-100 transition-all duration-300 "
                >
                  <BiLogOut size={18} />
                  <span className="ml-2">Logout</span>
                </button>
              </>
            ) : (
              <>
                <button
                  className="flex items-center py-2 px-4  rounded-md bg-blue-900
            opacity-70 hover:opacity-100 transition-all duration-300 "
                >
                  <BiUserPlus size={18} />
                  <span className="ml-2">Signup</span>
                </button>
                <button
                  className="flex items-center py-2 px-4 rounded-md bg-blue-950
            opacity-70 hover:opacity-100 transition-all duration-300"
                >
                  <BiLogIn size={18} />
                  <span className="ml-2">Login</span>
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
