import "../style/project.css";
import { useState, useEffect, useRef } from "react";
import Eye from "../assets/eye.svg"
import GitHub from "../assets/logo-github.svg"
import WmsuCourse from "../assets/WmsuCourse.jpg"
import TodoList from "../assets/todoList.jpg"
import Pokemon from "../assets/pokemon.jpg"
import AOS from "aos";
import "aos/dist/aos.css";

export default function Project({ darkMode }) {
  const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    
    const scrollToSection = (id) => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }e
    };
  
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        { threshold: 0.3 }
      );
  
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
  
      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
    }, []);
    
    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
      }, []);

  return(
    <div ref={sectionRef} className="subProjectContainer" data-aos="fade">
      <div className="titleContainer2">
        <p className={`text2 ${darkMode ? "dark" : "light"}`}>Projects</p>
        <p className={`text3 ${darkMode ? "dark" : "light"}`}>This project is a college-based web application I developed to showcase my front-end development skills using modern technologies.</p>
      </div>

      <div className="project">
        <a href="https://km0912412.pythonanywhere.com/" target="_blank">
          <div className={`subProject ${darkMode ? "dark" : "light"}`}>
            <div className="projectPictureContainer">
              <img className="projectPicture" src={WmsuCourse} alt="" />
            </div>

            <div className={`projectNameContainer ${darkMode ? "dark" : "light"}`}>
              <p className={`textStyle ${darkMode ? "dark" : "light"}`}>WmsuCourse Recommendation</p>
            </div>

            <div className={`projectDescriptionContainer ${darkMode ? "dark" : "light"}`}>
              <p className={`textStyle ${darkMode ? "dark" : "light"}`}>The WMSU course recommendation system suggests courses based on student performance, including grades, CET scores, and personality assessments.</p>
            </div>

            <div className="dateContainer">
              <p className={`textStyle ${darkMode ? "dark" : "light"}`}>March <span className={`textStyle4 ${darkMode ? "dark" : "light"}`}>18, 2025</span></p>
            </div>

            <div className="viewButtonContainer">
              <a href="https://km0912412.pythonanywhere.com/" target="_blank">
                <img className={`icon ${darkMode ? "dark" : "light"}`} src={Eye} alt="" /> 
              </a>
              
              <a href="https://github.com/kmfalcatan/CapstoneProject.git" target="_blank">
                <img className={`icon ${darkMode ? "dark" : "light"}`} src={GitHub} alt="" />
              </a>
            </div>
          </div>
        </a>

        <a href="https://falcatantodolist.netlify.app/" target="_blank">
          <div className={`subProject ${darkMode ? "dark" : "light"}`}>
            <div className="projectPictureContainer">
              <img className="projectPicture" src={TodoList} alt="" />
            </div>

            <div className="projectNameContainer">
              <p className={`textStyle ${darkMode ? "dark" : "light"}`}>ToDo List</p>
            </div>

            <div className={`projectDescriptionContainer ${darkMode ? "dark" : "light"}`}>
              <p className={`textStyle ${darkMode ? "dark" : "light"}`}>The To-Do List allows users to manage and track tasks, ensuring they stay organized and on top of their responsibilities.</p>
            </div>

            <div className="dateContainer">
            <p className={`textStyle ${darkMode ? "dark" : "light"}`}>April <span className={`textStyle4 ${darkMode ? "dark" : "light"}`}>03, 2025</span></p>
            </div>

            <div className="viewButtonContainer">
              <a href="https://falcatantodolist.netlify.app/" target="_blank">
                <img className={`icon ${darkMode ? "dark" : "light"}`} src={Eye} alt="" /> 
              </a>
              
              <a href="https://github.com/kmfalcatan/ToDoList.git" target="_blank">
                <img className={`icon ${darkMode ? "dark" : "light"}`} src={GitHub} alt="" />
              </a>
            </div>
          </div>
        </a>

        <a href="https://km0912412.pythonanywhere.com/" target="_blank">
          <div className={`subProject ${darkMode ? "dark" : "light"}`}>
            <div className="projectPictureContainer">
              <img className="projectPicture" src={Pokemon} alt="" />
            </div>

            <div className="projectNameContainer">
              <p className={`textStyle ${darkMode ? "dark" : "light"}`}>Pokemon Game</p>
            </div>

            <div className={`projectDescriptionContainer ${darkMode ? "dark" : "light"}`}>
              <p className={`textStyle ${darkMode ? "dark" : "light"}`}>The Pokémon game lets players build teams, battle, and explore the world of Pokémon, enhancing their experience through strategic gameplay.</p>
            </div>

            <div className="dateContainer">
            <p className={`textStyle ${darkMode ? "dark" : "light"}`}>April <span className={`textStyle4 ${darkMode ? "dark" : "light"}`}>25, 2025</span></p>
            </div>

            <div className="viewButtonContainer">
              <a href="https://km0912412.pythonanywhere.com/" target="_blank">
                <img className={`icon ${darkMode ? "dark" : "light"}`} src={Eye} alt="" /> 
              </a>
              
              <a href="https://github.com/kmfalcatan/PokemonGame.git" target="_blank">
                <img className={`icon ${darkMode ? "dark" : "light"}`} src={GitHub} alt="" />
              </a>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}