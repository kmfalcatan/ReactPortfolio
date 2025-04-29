import "../style/homePage.css";
import Moon from "../assets/moon.svg";
import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SunImage from "../assets/sunImg.svg"

export default function Home({ darkMode }) {
  const words = ["Khriz", "Front-End Developer", "UI/UX Designer"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = isDeleting ? 50 : 100;

  const sectionRef = useRef(null); 
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } 
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
    const currentWord = words[currentWordIndex];

    if (!isDeleting && displayedText === currentWord) {
      setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    const timer = setTimeout(() => {
      setDisplayedText((prev) =>
        isDeleting ? prev.slice(0, -1) : currentWord.slice(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentWordIndex]);
      
    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
      }, []);

  return (
    <div ref={sectionRef} className="subHomeContainer" data-aos="fade">
      <p className={`text ${darkMode ? "dark" : "light"}`}>
        Hi, I'm <span className="typingText">{displayedText}</span>
      </p>

      <div className="textContainer1">
        <div className="subTextContainer">
          <p className={`textColor1 ${darkMode ? "dark" : "light"}`}>WEB DESIGNER</p>
          <p className={`textColor2 ${darkMode ? "dark" : "light"}`}>WEB DESIGNER</p>
          <p className={`textColor3 ${darkMode ? "dark" : "light"}`}>WEB DESIGNER</p>
        </div>

        <div className="imageContainer">
          <img className="moon" src={darkMode ? Moon : SunImage} alt="Moon" />
        </div>
      </div>
    </div>
  );
}
