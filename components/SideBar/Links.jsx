import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { LuDownload } from "react-icons/lu";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = ({ setOpen }) => {
  const items = ["Home", "About", "Skills", "Project", "Contact"];

  const handleClick = () => {
    setOpen(false);
  };

  return (
    <motion.div
      variants={variants}
      className="w-[100%] h-[100%] flex flex-col items-center justify-center gap-[20px] text-black z-50"
    >
      {items.map((item) => (
        <Link href={`#${item.toLowerCase()}`} key={item} passHref>
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-xl font-medium font-dmSans"
            onClick={handleClick}
          >
            {item}
          </motion.button>
        </Link>
      ))}

      {/* Resume Button */}
      <a
        href="/path/to/your/resume.pdf"
        download
        className="flex items-center gap-2 text-xl font-medium font-dmSans"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
      >
        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex gap-1 items-center"
        >
          <LuDownload />
          Resume
        </motion.button>
      </a>
    </motion.div>
  );
};

export default Links;
