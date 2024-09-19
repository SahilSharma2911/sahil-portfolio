import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white py-6 md:py-8 px-[1.5rem] md:px-[6rem] flex flex-col-reverse gap-2 md:flex-row justify-center items-center md:justify-between">
      <div className="">
        <p>&copy; {currentYear} Sahil Sharma. All rights reserved.</p>
      </div>
      <div className="flex gap-6">
        <a
          href="https://github.com/SahilSharma2911"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-white text-2xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/sahil-sharma-47824722b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-white text-2xl" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
