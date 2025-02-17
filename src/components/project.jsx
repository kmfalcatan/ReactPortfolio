import "../style/project.css";
import { useState, useEffect, useRef } from "react";
import Forest from "../assets/backgroundForest.svg"
import Eye from "../assets/eye.svg"
import GitHub from "../assets/logo-github.svg"

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
    <div ref={sectionRef} className={`subProjectContainer ${isVisible ? "visible" : "hidden"}`}>
      <div className="titleContainer2">
        <p className="text2">Projects</p>
        <p className="text3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat corporis, vel ut neque hic recusandae dolore nulla, impedit facere laborum, eius sit veritatis porro provident repudiandae rerum non tenetur ab.</p>
      </div>

      <div className="project">
        <div className="subProject">
          <div className="projectPictureContainer">
            <img className="projectPicture" src={Forest} alt="" />
          </div>

          <div className="projectNameContainer">
            <p>Project name</p>
          </div>

          <div className="projectDescriptionContainer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reiciendis delectus optio</p>
          </div>

          <div className="viewButtonContainer">
            <a href="">
              <img className="icon" src={Eye} alt="" /> 
            </a>
            
            <a href="">
              <img className="icon" src={GitHub} alt="" />
            </a>
          </div>
        </div>

        <div className="subProject">
          <div className="projectPictureContainer">
            <img className="projectPicture" src={Forest} alt="" />
          </div>

          <div className="projectNameContainer">
            <p>Project name</p>
          </div>

          <div className="projectDescriptionContainer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reiciendis delectus optio</p>
          </div>

          <div className="viewButtonContainer">
            <a href="">
              <img className="icon" src={Eye} alt="" /> 
            </a>
            
            <a href="">
              <img className="icon" src={GitHub} alt="" />
            </a>
          </div>
        </div>


        <div className="subProject">
          <div className="projectPictureContainer">
            <img className="projectPicture" src={Forest} alt="" />
          </div>

          <div className="projectNameContainer">
            <p>Project name</p>
          </div>

          <div className="projectDescriptionContainer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reiciendis delectus optio</p>
          </div>

          <div className="viewButtonContainer">
            <a href="">
              <img className="icon" src={Eye} alt="" /> 
            </a>
            
            <a href="">
              <img className="icon" src={GitHub} alt="" />
            </a>
          </div>
        </div>


        <div className="subProject">
          <div className="projectPictureContainer">
            <img className="projectPicture" src={Forest} alt="" />
          </div>

          <div className="projectNameContainer">
            <p>Project name</p>
          </div>

          <div className="projectDescriptionContainer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reiciendis delectus optio</p>
          </div>

          <div className="viewButtonContainer">
            <a href="">
              <img className="icon" src={Eye} alt="" /> 
            </a>
            
            <a href="">
              <img className="icon" src={GitHub} alt="" />
            </a>
          </div>
        </div>



        <div className="subProject">
          <div className="projectPictureContainer">
            <img className="projectPicture" src={Forest} alt="" />
          </div>

          <div className="projectNameContainer">
            <p>Project name</p>
          </div>

          <div className="projectDescriptionContainer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reiciendis delectus optio</p>
          </div>

          <div className="viewButtonContainer">
            <a href="">
              <img className="icon" src={Eye} alt="" /> 
            </a>
            
            <a href="">
              <img className="icon" src={GitHub} alt="" />
            </a>
          </div>
        </div>


        <div className="subProject">
          <div className="projectPictureContainer">
            <img className="projectPicture" src={Forest} alt="" />
          </div>

          <div className="projectNameContainer">
            <p>Project name</p>
          </div>

          <div className="projectDescriptionContainer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reiciendis delectus optio</p>
          </div>

          <div className="viewButtonContainer">
            <a href="">
              <img className="icon" src={Eye} alt="" /> 
            </a>
            
            <a href="">
              <img className="icon" src={GitHub} alt="" />
            </a>
          </div>
        </div>


        <div className="subProject">
          <div className="projectPictureContainer">
            <img className="projectPicture" src={Forest} alt="" />
          </div>

          <div className="projectNameContainer">
            <p>Project name</p>
          </div>

          <div className="projectDescriptionContainer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reiciendis delectus optio</p>
          </div>

          <div className="viewButtonContainer">
            <a href="">
              <img className="icon" src={Eye} alt="" /> 
            </a>
            
            <a href="">
              <img className="icon" src={GitHub} alt="" />
            </a>
          </div>
        </div>


        <div className="subProject">
          <div className="projectPictureContainer">
            <img className="projectPicture" src={Forest} alt="" />
          </div>

          <div className="projectNameContainer">
            <p>Project name</p>
          </div>

          <div className="projectDescriptionContainer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reiciendis delectus optio</p>
          </div>

          <div className="viewButtonContainer">
            <a href="">
              <img className="icon" src={Eye} alt="" /> 
            </a>
            
            <a href="">
              <img className="icon" src={GitHub} alt="" />
            </a>
          </div>
        </div>


        <div className="subProject">
          <div className="projectPictureContainer">
            <img className="projectPicture" src={Forest} alt="" />
          </div>

          <div className="projectNameContainer">
            <p>Project name</p>
          </div>

          <div className="projectDescriptionContainer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reiciendis delectus optio</p>
          </div>

          <div className="viewButtonContainer">
            <a href="">
              <img className="icon" src={Eye} alt="" /> 
            </a>
            
            <a href="">
              <img className="icon" src={GitHub} alt="" />
            </a>
          </div>
        </div>


        <div className="subProject">
          <div className="projectPictureContainer">
            <img className="projectPicture" src={Forest} alt="" />
          </div>

          <div className="projectNameContainer">
            <p>Project name</p>
          </div>

          <div className="projectDescriptionContainer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reiciendis delectus optio</p>
          </div>

          <div className="viewButtonContainer">
            <a href="">
              <img className="icon" src={Eye} alt="" /> 
            </a>
            
            <a href="">
              <img className="icon" src={GitHub} alt="" />
            </a>
          </div>
        </div>

        <div className="subProject">
          <div className="projectPictureContainer">
            <img className="projectPicture" src={Forest} alt="" />
          </div>

          <div className="projectNameContainer">
            <p>Project name</p>
          </div>

          <div className="projectDescriptionContainer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reiciendis delectus optio</p>
          </div>

          <div className="viewButtonContainer">
            <a href="">
              <img className="icon" src={Eye} alt="" /> 
            </a>
            
            <a href="">
              <img className="icon" src={GitHub} alt="" />
            </a>
          </div>
        </div>

        <div className="subProject">
          <div className="projectPictureContainer">
            <img className="projectPicture" src={Forest} alt="" />
          </div>

          <div className="projectNameContainer">
            <p>Project name</p>
          </div>

          <div className="projectDescriptionContainer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reiciendis delectus optio</p>
          </div>

          <div className="viewButtonContainer">
            <a href="">
              <img className="icon" src={Eye} alt="" /> 
            </a>
            
            <a href="">
              <img className="icon" src={GitHub} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}