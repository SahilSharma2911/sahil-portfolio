"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
const Cursor = () => {
  const [position, setPosition] = useState({ x: 14, y: 14 });
  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  return (
    <motion.div
      animate={{ x: position.x + 10, y: position.y + 10 }}
      className="w-[50px] h-[50px] rounded-full border border-1 border-white fixed z-50 hidden lg:block"
    ></motion.div>
  );
};

export default Cursor;
