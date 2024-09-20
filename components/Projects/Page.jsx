"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaArrowRightToBracket } from "react-icons/fa6";

const items = [
  {
    id: "1",
    title: "Map Pin",
    desc: "Created a project, which is a dynamic web application built on the MERN stack, offering a seamless experience for mapping and pinning locations using the powerful MapBox API.",
    imgURL: "/Images/map.png",
    hostURL: "https://map-pin-frontend.onrender.com/",
    githubURL: "https://github.com/SahilSharma2911/map-pin",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
  },
  {
    id: "2",
    title: "ST Social",
    desc: "ST Social is a social media web app built with the MERN stack. Users can sign up, create profiles, and share posts, including photos and videos. The platform supports real-time chat using Socket.IO, and users can interact by liking and commenting on posts.",
    imgURL: "/Images/st-social.png",
    // hostURL: "https://github.com/SahilSharma2911/socialmedia",
    githubURL: "https://github.com/SahilSharma2911/socialmedia",
    tech: ["React.js", "Node.js", "Express.js", "Socket.IO"],
  },
];

const AnimatedButton = ({ children }) => (
  <motion.button
    className="w-auto px-4 py-1.5 rounded-3xl text-[14px] md:text-[1rem] border border-white hover:bg-amber-600"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
  >
    {children}
  </motion.button>
);

const AnimatedLink = ({ href, children }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex gap-2 items-center"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
  >
    {children}
  </motion.a>
);

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <section className="py-[4rem] md:py-[10rem] flex flex-col lg:flex-row gap-7 items-center font-dmSans">
      <div ref={ref} className="lg:w-1/2">
        <Image src={item.imgURL} alt={item.title} width={500} height={500} />
      </div>
      <motion.div
        className="lg:w-1/2 flex flex-col gap-3"
        style={isLargeScreen ? { y } : {}}
      >
        <h2 className="font-semibold text-2xl">{item.title}</h2>

        {/* GitHub and Live View Links */}
        <div className="flex gap-4 items-center text-[14px] md:text-[16px]">
          {item.githubURL && (
            <AnimatedLink href={item.githubURL}>
              <FaGithub className="text-2xl" />
            </AnimatedLink>
          )}

          {item.hostURL && (
            <AnimatedLink href={item.hostURL}>
              Live View <FaArrowRightToBracket />
            </AnimatedLink>
          )}
        </div>

        {/* Description */}
        <p className="md:text-[1.2rem] font-extralight leading-[150%]">
          {item.desc}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 md:gap-3">
          {item.tech.map((techItem, index) => (
            <AnimatedButton key={index}>{techItem}</AnimatedButton>
          ))}
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
