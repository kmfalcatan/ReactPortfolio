import "../style/aboutPage.css";
import { useState, useEffect, useRef } from "react";
import Person from "../assets/person.svg"

export default function About() {
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

  return (
    <div ref={sectionRef} className={`subHomeContainer1 ${isVisible ? "visible" : "hidden"}`}>
      <div className="subAboutContainer">
        <div className="aboutMeContainer">
          <div className="subAboutMeContainer">
            <img className="person" src={Person} alt="" />
          </div>

          <div className="textContainer3">
            <div className="titleContainer">
              <p>About me</p>
            </div>
            
            <div className="subTextContainer3">
              <p>Hi, I am Khriz Marr L. Falcatan, a third year student from Western Mindanao State University and a web designer.</p>
              <button className="button1" onClick={() => scrollToSection("home")}>Contact Me</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
