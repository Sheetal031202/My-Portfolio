import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BgCircle from "./Components/BgCircle/BgCircle";
import Skills from "./Components/Skills/Skills";
import AboutMe from "./Components/About me/AboutMe";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";


export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    // <main className="bg-[#0d182e]">
    <main className="bg-black">

      <BgCircle />
      <Skills/>
      <AboutMe/>
      <Projects/>
      <Contact/>
    </main>
  );
}
