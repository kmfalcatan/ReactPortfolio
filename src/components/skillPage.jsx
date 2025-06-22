import "../style/skillPage.css";
import Html from "../assets/html.svg";
import Css from "../assets/css.svg";
import Js from "../assets/js.svg";
import ReactLogo from "../assets/react.svg";
import Tailwind from "../assets/tailwind.svg";
import Figma from "../assets/figma.svg";
import Canva from "../assets/canva.svg";
import VsCode from "../assets/vsCode.svg";
import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const skills = [
  { name: "HTML", img: Html },
  { name: "CSS", img: Css },
  { name: "JAVASCRIPT", img: Js },
  { name: "FIGMA", img: Figma },
  { name: "CANVA", img: Canva },
  { name: "VS CODE", img: VsCode },
];

export default function Skill({ darkMode }) {
    
  useEffect(() => {
      AOS.init({ duration: 1000, once: false });
    }, []);
  return (
    <div className="subSkillContainer" data-aos="fade">
      <div className="titleContainer2" data-aos="fade-up">
        <p className={`text2 ${darkMode ? "dark" : "light"}`}>Skills</p>
      </div>

      <div className="logoContainer">
        {skills.map((skill, i) => (
          <div data-aos="fade-up"  data-aos-delay="300" className="logoTitleContainer" key={i}>
            <div className={`subLogoContainer ${darkMode ? "dark" : "light"}`}>
              <img className="logo" src={skill.img} alt={skill.name} />
            </div>
            <div className="textContainer4">
              <p className={`textStyle ${darkMode ? "dark" : "light"}`}>{skill.name}</p>
            </div>
          </div>
        ))}
      </div>

      
    </div>
  );
}
