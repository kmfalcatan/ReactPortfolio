import "../style/contact.css";
import { useState, useEffect, useRef } from "react";
import Insta from "../assets/instagram.svg"
import Arrow from "../assets/arrow.svg"
import Email from "../assets/mail.svg"
import Message from "../assets/chatbox.svg"

export default function Contact() {
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
    <div ref={sectionRef} className={`subContactContainer ${isVisible ? "visible" : "hidden"}`}>
      <div className="titleContainer2">
        <p className="text2">Contact Me Anythime!</p>
        <p className="text3">Feel free to reach out for collaborations, inquiries, or just to say hello!</p>
      </div>

      <div className="contact">
        <div className="subContact">
          <div className="socialIconContainer">
            <div className="subSocialIconContainer">
              <img className="social" src={Insta} alt="" />
            </div>
          </div>

          <div className="socialName">
            <p>Chat now</p>
          </div>

          <div className="messageContainer">
            <p>Chat me on Instagram</p>
          </div>

          <div className="messageButtonContainer">
            <a href="">
              <button className="messageButton">Start chat <img className="arrow" src={Arrow} alt="" /></button>
            </a>
          </div>
        </div>

        <div className="subContact">
          <div className="socialIconContainer">
            <div className="subSocialIconContainer">
              <img className="social" src={Email} alt="" />
            </div>
          </div>

          <div className="socialName">
            <p>Email me</p>
          </div>

          <div className="messageContainer">
            <p>Email me from you app</p>
          </div>

          <div className="messageButtonContainer">
            <p className="email">kmfalcatan2@gmail.com</p>
          </div>
        </div>

        <div className="subContact">
          <div className="socialIconContainer">
            <div className="subSocialIconContainer">
              <img className="social" src={Message} alt="" />
            </div>
          </div>

          <div className="socialName">
            <p>Text me</p>
          </div>

          <div className="messageContainer">
            <p>Text me from your phone</p>
          </div>

          <div className="messageButtonContainer">
            <p className="email">09999188228</p>
          </div>
        </div>
      </div>
    </div>
  );
}