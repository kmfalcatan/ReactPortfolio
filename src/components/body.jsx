import "../style/loading.css";
import "../style/hero.css";
import Header from "./header";
import Background from "./background";
import Home from "./hero";
import About from "./aboutPage";
import Skill from "./skillPage";
import Project from "./project";
import Contact from "./contact";

export default function body() {
  return (
    <div className="container">
      <Background/>
      <Header/>

      <div id="home" className="homeContainer">
        <Home/>
      </div>

      <div id="about" className="aboutContainer">
        <About/>
      </div>

      <div id="skill" className="skillContainer">
        <Skill/>
      </div>

      <div id="project" className="projectContainer">
        <Project/>
      </div>

      <div id="contact" className="contactContainer">
        <Contact/>
      </div>
    </div>
  );
}
