import React from "react";
import { motion } from "framer-motion";

const ToggleButton = ({ setOpen }) => {
  return (
    <button
      onClick={() => setOpen((prev) => !prev)}
      className="w-[50px] h-[50px] rounded-full top-[25px] left-[25px] bg-transparent text-black border-none cursor-pointer fixed flex justify-center items-center z-50"
    >
      <svg width={23} height={23} viewBox="0 0 23 23" className="mt-1">
        {/* Top bar */}
        <motion.path
          strokeWidth={3}
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
          initial="closed"
          animate="open"
        />
        {/* Middle bar */}
        <motion.path
          d="M 2 9.423 L 20 9.423"
          strokeWidth={3}
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          initial="closed"
          animate="open"
        />
        {/* Bottom bar */}
        <motion.path
          strokeWidth={3}
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
          initial="closed"
          animate="open"
        />
      </svg>
    </button>
  );
};

export default ToggleButton;
