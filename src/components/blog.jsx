import "../style/blog.css";
import { useState, useEffect, useRef } from "react";
import Eye from "../assets/eye.svg"
import GitHub from "../assets/logo-github.svg"
import WmsuCourse from "../assets/wmsuCourse.jpg"
import Day1 from "../assets/day1.jpg"
import Back from "../assets/back.svg"
import Next from "../assets/next.svg"
import Close from "../assets/x.svg"

export default function Blog() {
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
        <p className="text2 textStyle">Blog Post</p>
        <p className="text3 textStyle">This project is a college-based web application I developed to showcase my front-end development skills using modern technologies.</p>
      </div>

      <div className="project">
        <a href="https://km0912412.pythonanywhere.com/" target="_blank">
          <div className="subProject1">
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
          </div>
        </a>
      </div>

      <div className="blogModalContainer">
        <div className="subBlogModalContainer">
          <div className="blogModal">
            <div className="pictureContainer">
              <div className="subPictureContainer">
                <img className="picture" src={Day1} alt="" />
                
                <div className="nextButtonContainer">
                  <img className="arrow1" src={Back} alt="" />
                  <img className="arrow2" src={Next} alt="" />
                </div>
              </div>

              <div className="selectPictureContainer">
                <div className="selectContainer">
                  <img className="select" src={Day1} alt="" />
                  <img className="select" src={Day1} alt="" />
                </div>
              </div>

              <div className="closeContainer">
                <img className="close" src={Close} alt="" />
              </div>
            </div>

            <div className="paragraphContainer">
              <div className="titleContainer1">
                <p className="title">Day 1</p>
              </div>

              <div className="subPragraphContainer3">
                <p className="title">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores magnam quam ut at accusamus numquam ullam nam natus autem voluptatibus nisi laboriosam ea, excepturi, tempora earum fugit eius expedita nobis?</p>
                <p className="title">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores magnam quam ut at accusamus numquam ullam nam natus autem voluptatibus nisi laboriosam ea, excepturi, tempora earum fugit eius expedita nobis?</p>
                <p className="title">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores magnam quam ut at accusamus numquam ullam nam natus autem voluptatibus nisi laboriosam ea, excepturi, tempora earum fugit eius expedita nobis?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}