import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Cursor from "@/components/Cursor/Cursor";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Page";
import SideBar from "@/components/SideBar/SideBar";
import Skills from "@/components/Skills/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white">
      <Cursor />
      <SideBar />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
