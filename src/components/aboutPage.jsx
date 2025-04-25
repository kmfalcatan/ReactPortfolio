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
              <p className="textStyle">About me</p>
            </div>
            
            <div className="subTextContainer3">
              <div className="subTextContainer8">
              <p className="textStyle">Hi, I’m Khriz Marr L. Falcatan, a Forth-year student at Western Mindanao State University, currently pursuing a Bachelor of Science in Information Technology. I have a strong passion for front-end development, where I focus on creating visually appealing and user-friendly web interfaces. My interests lie in crafting responsive and interactive designs using modern technologies like HTML, CSS, JavaScript, and frameworks such as React. I enjoy solving UI/UX challenges and ensuring that web applications provide a seamless experience across different devices and browsers. As I continue to develop my skills, I am eager to learn more about emerging trends in front-end development and how I can apply them to real-world projects.</p>
              <button className="button1 textStyle" onClick={() => scrollToSection("home")}>Contact Me</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
