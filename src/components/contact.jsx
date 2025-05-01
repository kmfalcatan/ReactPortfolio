import "../style/contact.css";
import { useState, useEffect, useRef } from "react";
import Insta from "../assets/instagram.svg"
import Arrow from "../assets/arrow.svg"
import Email from "../assets/mail.svg"
import Message from "../assets/chatbox.svg"
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact({ darkMode }) {
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
    <div ref={sectionRef} className="subContactContainer" data-aos="fade">
      <div className="titleContainer2">
        <p className={`text2 ${darkMode ? "dark" : "light"}`}>Contact Me Anythime!</p>
        <p className={`text3 ${darkMode ? "dark" : "light"}`}>Feel free to reach out for collaborations, inquiries, or just to say hello!</p>
      </div>

      <div className="contact">
        <div className={`subContact ${darkMode ? "dark" : "light"}`}>
          <div className="socialIconContainer">
            <div className={`subSocialIconContainer ${darkMode ? "dark" : "light"}`}>
              <img className="social" src={Insta} alt="" />
            </div>
          </div>

          <div className="socialName">
            <p className={`textStyle ${darkMode ? "dark" : "light"}`}>Chat now</p>
          </div>

          <div className={`messageContainer ${darkMode ? "dark" : "light"}`}>
            <p className={`textStyle ${darkMode ? "dark" : "light"}`}>Chat me on LikedIn</p>
          </div>

          <div className="messageButtonContainer">
            <a href="https://www.linkedin.com/in/khriz-marr-falcatan-846a74179/" target="_blank">
              <button className={`messageButton ${darkMode ? "dark" : "light"}`}>Start chat <img className="arrow" src={Arrow} alt="" /></button>
            </a>
          </div>
        </div>

        <div className={`subContact ${darkMode ? "dark" : "light"}`}>
          <div className="socialIconContainer">
            <div className={`subSocialIconContainer ${darkMode ? "dark" : "light"}`}>
              <img className="social" src={Email} alt="" />
            </div>
          </div>

          <div className="socialName">
            <p className={`textStyle ${darkMode ? "dark" : "light"}`}>Email me</p>
          </div>

          <div className={`messageContainer ${darkMode ? "dark" : "light"}`}>
            <p className={`textStyle ${darkMode ? "dark" : "light"}`}>Email me from you app</p>
          </div>

          <div className="messageButtonContainer">
            <p className={`email ${darkMode ? "dark" : "light"}`}>kmfalcatan2@gmail.com</p>
          </div>
        </div>

        <div className={`subContact ${darkMode ? "dark" : "light"}`}>
          <div className="socialIconContainer">
            <div className={`subSocialIconContainer ${darkMode ? "dark" : "light"}`}>
              <img className="social" src={Message} alt="" />
            </div>
          </div>

          <div className="socialName">
            <p className={`textStyle ${darkMode ? "dark" : "light"}`}>Text me</p>
          </div>

          <div className={`messageContainer ${darkMode ? "dark" : "light"}`}>
            <p className={`textStyle ${darkMode ? "dark" : "light"}`}>Text me from your phone</p>
          </div>

          <div className="messageButtonContainer">
            <p className={`email ${darkMode ? "dark" : "light"}`}>09999188228</p>
          </div>
        </div>
      </div>
    </div>
  );
}