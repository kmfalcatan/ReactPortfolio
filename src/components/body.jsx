import "../style/loading.css";
import "../style/hero.css";
import Header from "./header";
import Background from "./background";
import Home from "./hero";
import About from "./aboutPage";
import Skill from "./skillPage";
import Project from "./project";
import Contact from "./contact";
import Blog from "./blog"

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

      <div className="skillContainer" id="skill">
        <Skill/>
      </div>

      <div id="project" className="projectContainer">
        <Project/>
      </div>
      
      <div id="blog" className="blogContainer">
        <Blog/>
      </div>

      <div id="contact" className="contactContainer">
        <Contact/>
      </div>
    </div>
  );
}
