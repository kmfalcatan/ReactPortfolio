import "../style/contact.css";
import { useState, useEffect, useRef } from "react";
import Insta from "../assets/instagram.svg"
import Arrow from "../assets/arrow.svg"
import Email from "../assets/mail.svg"
import Message from "../assets/chatbox.svg"
import AOS from "aos";
import "aos/dist/aos.css";

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

  useEffect(() => {
      AOS.init({ duration: 1000, once: false });
    }, []);
  
  return(
    <div ref={sectionRef} className="subContactContainer" data-aos="fade">
      <div className="titleContainer2">
        <p className="text2 textStyle">Contact Me Anythime!</p>
        <p className="text3 textStyle">Feel free to reach out for collaborations, inquiries, or just to say hello!</p>
      </div>

      <div className="contact">
        <div className="subContact">
          <div className="socialIconContainer">
            <div className="subSocialIconContainer">
              <img className="social" src={Insta} alt="" />
            </div>
          </div>

          <div className="socialName">
            <p className="textStyle">Chat now</p>
          </div>

          <div className="messageContainer">
            <p className="textStyle">Chat me on Instagram</p>
          </div>

          <div className="messageButtonContainer">
            <a href="https://www.instagram.com/khriz_marr/" target="_blank">
              <button className="messageButton textStyle">Start chat <img className="arrow" src={Arrow} alt="" /></button>
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
            <p className="textStyle">Email me</p>
          </div>

          <div className="messageContainer">
            <p className="textStyle">Email me from you app</p>
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
            <p className="textStyle">Text me</p>
          </div>

          <div className="messageContainer">
            <p className="textStyle">Text me from your phone</p>
          </div>

          <div className="messageButtonContainer">
            <p className="email">09999188228</p>
          </div>
        </div>
      </div>
    </div>
  );
}