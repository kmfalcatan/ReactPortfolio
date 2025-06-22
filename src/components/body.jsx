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
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved === "true"; // returns true if saved is "true"
  });  

  return (
    <div className={`container ${darkMode ? "dark" : "light"}`}>
      <Background darkMode={darkMode} />
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <div id="home" className="homeContainer">
        <Home darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <div id="about" className="aboutContainer">
        <About darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <div className="skillContainer" id="skill">
        <Skill darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <div id="project" className="projectContainer">
        <Project darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      {/* <div id="blog" className="blogContainer">
        <Blog darkMode={darkMode} setDarkMode={setDarkMode} />
      </div> */}
      <div id="experience" className="experienceContainer">
        <Experience darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <div id="contact" className="contactContainer">
        <Contact darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </div>
  );
}
