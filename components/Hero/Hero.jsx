"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const textVariants = {
  initial: {
    y: 10,
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
      type: "spring",
      stiffness: 300,
    },
  },
};

const sliderVariant = {
  animate: {
    x: ["10%", "-160%"],
    transition: {
      duration: 20,
      ease: "linear",
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false });

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"} // Start animation when in view
      variants={textVariants}
      className="h-[calc(100vh-100px)] px-[2rem] md:px-[5rem] flex flex-col items-center justify-center font-bebas text-white relative text-center"
    >
      <motion.h2
        variants={textVariants}
        className="font-black text-3xl md:text-6xl mb-4 tracking-[4px]"
      >
        G&apos;day, I&apos;m
      </motion.h2>
      <motion.h1
        variants={textVariants}
        className="font-black text-7xl md:text-9xl tracking-[10px]"
      >
        SAHIL SHARMA
      </motion.h1>
      <motion.div
        variants={textVariants}
        className="font-poppins text-center text-[16px] md:text-xl leading-[160%] mt-6"
      >
        <motion.p variants={textVariants}>
          I&apos;m a self-taught Full-Stack Web Developer{" "}
          <br className="hidden md:block" /> that specializes in creating High
          Converting & Efficient web applications.
        </motion.p>
      </motion.div>
      <motion.button
        variants={textVariants}
        whileHover={{ scale: 1.1 }}
        className="mt-8 md:mt-12 bg-amber-500 font-medium text-[18px] rounded-md px-8 md:px-12 py-2 md:py-3 z-30 text-black"
      >
        <Link href={"#contact"}>Let&apos;s Chat</Link>
      </motion.button>
      {/* Sliding text */}
      <div className="absolute bottom-[-120px] w-full overflow-hidden z-20">
        <motion.div
          variants={sliderVariant}
          initial="initial"
          animate="animate"
          className="flex whitespace-nowrap text-[#ffffff09] font-dmSans text-[50vh]"
        >
          &lt;h1&gt; sahil sharma &lt;/h1&gt;
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
