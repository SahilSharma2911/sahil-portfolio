"use client";
import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaArrowRightToBracket } from "react-icons/fa6";

const items = [
  {
    id: "1",
    title: "ST Social",
    desc: "ST Social is a social media web app built with the MERN stack. Users can sign up, create profiles, and share posts, including photos and videos. The platform supports real-time chat using Socket.IO, and users can interact by liking and commenting on posts.",
    imgURL: "/Images/st-social.png",
    texh: [" React.js", "Node.js", "Node.js", "Express.js", "Socket.IO"],
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <section className="py-[10rem] flex gap-7 items-center font-dmSans">
      <div ref={ref} className="w-1/2">
        <Image src={item.imgURL} width={500} height={500} />
      </div>
      <motion.div className="w-1/2 flex flex-col gap-3" style={{ y }}>
        <h2 className="font-semibold text-2xl">{item.title}</h2>
        <div className="flex gap-4 items-center">
          <FaGithub className="" />
          <span className="flex gap-2 items-center">
            Live View <FaArrowRightToBracket />
          </span>
        </div>
        <p className="text-[1.2rem] font-extralight leading-[150%]">
          {item.desc}
        </p>
        <div className="">
          <button className="w-[6rem] py-1.5 rounded-3xl border border-white">
            Html
          </button>
        </div>
      </motion.div>
    </section>
  );
};

const Projects = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <section
      ref={ref}
      className="px-[2rem] md:px-[5rem] xl:px-[10rem]"
      id="project"
    >
      <div className="sticky top-0 pt-[50px] flex flex-col gap-3 justify-center items-center text-amber-500">
        <h2 className="text-4xl font-dmSans font-bold">Projects</h2>
        {/* progress bar */}
        <motion.div
          style={{ scaleX: scaleX }}
          className="bg-white h-2 rounded-xl w-full origin-center"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </section>
  );
};

export default Projects;
