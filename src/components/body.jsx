import { useState } from "react";
import "../style/loading.css";
import "../style/hero.css";
import Header from "./header";
import Background from "./background";
import Home from "./hero";
import About from "./aboutPage";
import Skill from "./skillPage";
import Project from "./project";
import Contact from "./contact";
import Blog from "./blog";
import Experience from "./experience";

export default function Body() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`container ${darkMode ? "dark" : "light"}`}>
      <Background darkMode={darkMode} />
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <div id="home" className="homeContainer">
        <Home darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <div id="about" className="aboutContainer">
        <About />
      </div>
      <div className="skillContainer" id="skill">
        <Skill />
      </div>
      <div id="project" className="projectContainer">
        <Project />
      </div>
      <div id="blog" className="blogContainer">
        <Blog />
      </div>
      <div id="experience" className="experienceContainer">
        <Experience />
      </div>
      <div id="contact" className="contactContainer">
        <Contact />
      </div>
    </div>
  );
}
