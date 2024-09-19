"use client";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const iconVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
    hover: {
      scale: 1.2,
      transition: { type: "spring", stiffness: 500, damping: 10 },
    },
  };

  return (
    <nav className="px-[3rem] py-8">
      <div className="space-x-4 flex justify-end">
        <motion.a
          href="https://github.com/SahilSharma2911"
          target="_blank"
          rel="noopener noreferrer"
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <FaGithub className="text-white text-4xl" />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/sahil-sharma-47824722b/"
          target="_blank"
          rel="noopener noreferrer"
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <FaLinkedin className="text-white text-4xl" />
        </motion.a>
      </div>
    </nav>
  );
};

export default Navbar;
