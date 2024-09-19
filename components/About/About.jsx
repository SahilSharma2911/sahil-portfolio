"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "start end"],
  });

  const ybg = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

  return (
    <section
      id="about"
      className="h-[100vh] relative overflow-hidden flex justify-center items-center px-[1.5rem] md:px-[6rem]"
      ref={ref}
    >
      <h2 className="font-dmSans text-[1.15rem] md:text-[1.6rem] font-light max-w-[80vw] text-center leading-[160%] md:leading-[190%]">
        I am a Full-Stack developer currently in my penultimate year of pursuing
        B.Tech in Computer Science & Engineering. Driven by a zeal for
        everything technology, I am more than willing to take on new challenges
        and learn wherever I get the chance. With this frame of mind, over time
        I&apos;ve cultivated expertise in front-end and back-end technologies,
        allowing me to design and build robust, interactive web solutions.
        Well-versed in Hindi and English, I understand the importance of as well
        as possess good communication skills and adaptability according to any
        work scenario, which makes me a great team player.
      </h2>
      <motion.div
        className="absolute bottom-10 md:-bottom-14 -left-[14rem] z-10" // Lower z-index to stay below the sidebar
        style={{ y: ybg, rotate: -20, opacity }}
      >
        <Image
          src={"/Images/p3.png"}
          width={550}
          height={550}
          alt="Image 1"
          className="rounded-xl w-[350px] md:w-[550px] h-[200px] md:h-[300px]"
        />
      </motion.div>
      <motion.div
        className="absolute bottom-6 -right-[10rem] md:-right-[12rem] z-10" // Lower z-index to stay below the sidebar
        style={{ y: ybg, rotate: -20, opacity }}
      >
        <Image
          src={"/Images/p2.png"}
          width={700}
          height={700}
          alt="Image 2"
          className="rounded-xl w-[300px] md:w-[500px] lg:w-[650px] h-[200px] md:h-[300px] lg:h-[350px]"
        />
      </motion.div>
      <motion.div
        className="absolute top-32 md:top-10 left-16 md:left-[15rem] z-10" // Lower z-index to stay below the sidebar
        style={{ y: ybg, rotate: -20, opacity }}
      >
        <Image
          src={"/Images/p1.png"}
          width={150}
          height={150}
          alt="Image 3"
          className="rounded-xl w-[105px] md:w-[150px] h-[220px] md:h-[320px]"
        />
      </motion.div>
    </section>
  );
};

export default About;
