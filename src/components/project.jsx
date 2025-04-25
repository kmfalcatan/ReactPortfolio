import "../style/project.css";
import { useState, useEffect, useRef } from "react";
import Eye from "../assets/eye.svg"
import GitHub from "../assets/logo-github.svg"
import WmsuCourse from "../assets/wmsuCourse.jpg"
import TodoList from "../assets/todoList.jpg"
import Pokemon from "../assets/pokemon.jpg"

export default function Project() {
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

  return(
    <div ref={sectionRef} className="subProjectContainer">
      <div className="titleContainer2">
        <p className="text2 textStyle">Projects</p>
        <p className="text3 textStyle">This project is a college-based web application I developed to showcase my front-end development skills using modern technologies.</p>
      </div>

      <div className="project">
        <a href="https://km0912412.pythonanywhere.com/" target="_blank">
          <div className="subProject">
            <div className="projectPictureContainer">
              <img className="projectPicture" src={WmsuCourse} alt="" />
            </div>

            <div className="projectNameContainer">
              <p className="textStyle">WmsuCourse Recommendation</p>
            </div>

            <div className="projectDescriptionContainer">
              <p className="textStyle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reiciendis delectus optio</p>
            </div>

            <div className="dateContainer">
              <p className="text9">March 18, 2025</p>
            </div>

            <div className="viewButtonContainer">
              <a href="https://km0912412.pythonanywhere.com/" target="_blank">
                <img className="icon" src={Eye} alt="" /> 
              </a>
              
              <a href="">
                <img className="icon" src={GitHub} alt="" />
              </a>
            </div>
          </div>
        </a>

        <a href="https://falcatantodolist.netlify.app/" target="_blank">
          <div className="subProject">
            <div className="projectPictureContainer">
              <img className="projectPicture" src={TodoList} alt="" />
            </div>

            <div className="projectNameContainer">
              <p className="textStyle">ToDo List</p>
            </div>

            <div className="projectDescriptionContainer">
              <p className="textStyle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reiciendis delectus optio</p>
            </div>

            <div className="dateContainer">
              <p className="text9">April 7, 2025</p>
            </div>

            <div className="viewButtonContainer">
              <a href="https://falcatantodolist.netlify.app/" target="_blank">
                <img className="icon" src={Eye} alt="" /> 
              </a>
              
              <a href="">
                <img className="icon" src={GitHub} alt="" />
              </a>
            </div>
          </div>
        </a>

        <a href="https://km0912412.pythonanywhere.com/" target="_blank">
          <div className="subProject">
            <div className="projectPictureContainer">
              <img className="projectPicture" src={Pokemon} alt="" />
            </div>

            <div className="projectNameContainer">
              <p className="textStyle">Pokemon Game</p>
            </div>

            <div className="projectDescriptionContainer">
              <p className="textStyle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reiciendis delectus optio</p>
            </div>

            <div className="dateContainer">
              <p className="text9">April 7, 2025</p>
            </div>

            <div className="viewButtonContainer">
              <a href="https://km0912412.pythonanywhere.com/" target="_blank">
                <img className="icon" src={Eye} alt="" /> 
              </a>
              
              <a href="">
                <img className="icon" src={GitHub} alt="" />
              </a>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}