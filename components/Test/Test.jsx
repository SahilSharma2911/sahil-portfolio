"use client";
import React from "react";
import { motion } from "framer-motion";

const Test = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <motion.div
        className="h-20 w-20 bg-red-500"
        initial={{ opacity: 0.5, scale: 0.5 }}
        transition={{ duration: 2 }}
        whileHover={{ opacity: 1, scale: 2 }}
      ></motion.div>
    </div>
  );
};

export default Test;
