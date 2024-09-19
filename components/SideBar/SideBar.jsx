"use client";
import React, { useState } from "react";
import Links from "./Links";
import { Fade as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(26px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const SideBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="fixed top-[25px] left-[25px] mt-0.5 mr-[3px] z-50">
        <Hamburger toggled={open} toggle={setOpen} size={20} color="black" />
      </div>

      <motion.div
        animate={open ? "open" : "closed"}
        variants={variants}
        className="fixed top-0 left-0 bottom-0 w-[70vw] md:w-[400px] bg-white z-40"
      >
        <Links setOpen={setOpen} />
      </motion.div>
    </>
  );
};

export default SideBar;
