import React, { useState } from "react";
import { motion } from "framer-motion";
import { BiPhone } from "react-icons/bi";
import { GoMail } from "react-icons/go";

const Contact = () => {
  const loading = false;
  const varients = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setContactData({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <div
      id="contact"
      className="  min-h-screen w-full flex flex-col
  items-center justify-center gap-16 p-4 md:px-14 md:py-24 "
    >
      <motion.h1
        variants={varients}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-6xl font-normal  bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent"
      >
        Get in Touch
      </motion.h1>

      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row gap-8 text-white/70">
          {/* Contact Information */}
          <div className="flex-1 bg-gray-800 text-card-foreground rounded-lg shadow-md p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4">Contacts</h2>

            <div className="space-y-4">
              <p>
                Feel free to reach out! You can contact me via email, phone, or
                simply fill out the given form. I’ll get back to you as soon as
                possible!
              </p>
              <div className="flex items-center space-x-3">
                <GoMail className="h-5 w-5 text-muted-foreground" />
                <span>ramantarar1@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <BiPhone className="h-5 w-5 text-muted-foreground" />
                <span>+91 6350196225</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1 bg-gray-800 text-card-foreground rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-center">Form</h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={contactData.name}
                  onChange={(e) =>
                    setContactData((prevState) => ({
                      ...prevState,
                      name: e.target.value,
                    }))
                  }
                  className="w-full block px-4 py-2 rounded-md
            bg-gray-700 text-white/70 text-sm"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={contactData.email}
                  onChange={(e) =>
                    setContactData((prevState) => ({
                      ...prevState,
                      email: e.target.value,
                    }))
                  }
                  className="w-full block px-4 py-2 rounded-md
            bg-gray-700 text-white/70 text-sm"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  type="textarea"
                  rows="5"
                  cols="40"
                  value={contactData.message}
                  onChange={(e) =>
                    setContactData((prevState) => ({
                      ...prevState,
                      message: e.target.value,
                    }))
                  }
                  className="w-full block px-4 py-2 rounded-md
            bg-gray-700 text-white/70 text-sm"
                  placeholder="Enter your message here"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                onClick={handleFormSubmit}
                className="w-full rounded-md text-md px-4 py-1 mt-2  bg-[#62e] font-medium text-center text-white/70"
              >
                {loading ? (
                  <BiLoader className="animate-spin text-center mx-auto" />
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
