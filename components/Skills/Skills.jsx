"use client";
import React from "react";
import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "NextJS",
  "NodeJS",
  "Express",
  "MongoDB",
  "Git",
  "SQL",
  "Prisma",
  "TailwindCSS",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <section
      className="py-[4rem] md:py-[8rem] px-[2rem] md:px-[5rem] lg:px-[10rem] flex flex-col gap-3 justify-center items-center"
      id="skills"
    >
      <h2 className="text-4xl font-dmSans font-semibold text-amber-500">
        Skills
      </h2>
      <motion.div
        className="font-dmSans mt-10 flex flex-wrap gap-7 md:gap-10 justify-between xl:px-[5rem]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        {skills.map((skill, index) => (
          <motion.button
            key={index}
            className="py-2.5 md:py-4 w-[8rem] md:w-[13rem] rounded-[5rem] text-[0.85rem] md:text-[1rem] border border-white hover:bg-amber-600 font-bold"
            variants={buttonVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.1, delay: 0.1 * index }}
            whileHover={{
              scale: 1.1,
              transition: { type: "spring", stiffness: 300 },
            }}
          >
            {skill}
          </motion.button>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
