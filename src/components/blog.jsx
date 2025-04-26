import { Link } from "react-router-dom";
import "../style/blog.css";
import { useState, useEffect, useRef } from "react";
import Eye from "../assets/eye.svg"
import GitHub from "../assets/logo-github.svg"
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
    }
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

  return (
    <div ref={sectionRef} className="subProjectContainer">
      <div className="titleContainer2">
        <p className="text2 textStyle">Blog Post</p>
        <p className="text3 textStyle">This project is a college-based web application I developed to showcase my front-end development skills using modern technologies.</p>
      </div>

      <div className="project">
        <Link to="/blogModal">
          <div className="subProject1">
            <div className="projectPictureContainer">
              <img className="projectPicture" src={Day1} alt="" />
            </div>

            <div className="projectNameContainer">
              <p className="textStyle">WmsuCourse Recommendation</p>
            </div>

            <div className="projectDescriptionContainer">
              <p className="textStyle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reiciendis delectus optio</p>
            </div>

            <div className="dateContainer">
              <p className="text9">March <span className="textStyle4">18, 2025</span></p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
