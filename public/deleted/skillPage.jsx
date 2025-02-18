import "../style/skillPage.css";
import Html from "../assets/html.svg"
import Css from "../assets/css.svg"
import Js from "../assets/js.svg"
import React from "../assets/react.svg"
import Tailwind from "../assets/tailwind.svg"
import Figma from "../assets/figma.svg"
import Canva from "../assets/canva.svg"
import VsCode from "../assets/vsCode.svg"
import { useState, useEffect, useRef } from "react";

export default function Skill() {
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
    <div ref={sectionRef} className={`subSkillContainer ${isVisible ? "visible" : "hidden"}`}>
      <div className="titleContainer2">
        <p className="text2">Background Skills and Accomplishment</p>
        <p className="text3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat corporis, vel ut neque hic recusandae dolore nulla, impedit facere laborum, eius sit veritatis porro provident repudiandae rerum non tenetur ab.</p>
      </div>

      <div className="logoContainer">
        <div className="logoTitleContainer">
          <div className="subLogoContainer">
            <img className="logo" src={Html} alt="" />
          </div>

          <div className="textContainer4">
            <p>HTML</p>
          </div>
        </div>

        
        <div className="logoTitleContainer">
          <div className="subLogoContainer">
          <img className="logo" src={Css} alt="" />
          </div>

          <div className="textContainer4">
            <p>CSS</p>
          </div>
        </div>

        
        <div className="logoTitleContainer">
          <div className="subLogoContainer">
          <img className="logo" src={Js} alt="" />
          </div>

          <div className="textContainer4">
            <p>JAVASCRIPT</p>
          </div>
        </div>

        
        <div className="logoTitleContainer">
          <div className="subLogoContainer">
          <img className="logo" src={React} alt="" />
          </div>

          <div className="textContainer4">
            <p>REACT.JS</p>
          </div>
        </div>

        
        <div className="logoTitleContainer">
          <div className="subLogoContainer">
          <img className="logo" src={Tailwind} alt="" />
          </div>

          <div className="textContainer4">
            <p>TAILWIND</p>
          </div>
        </div>

        
        <div className="logoTitleContainer">
          <div className="subLogoContainer">
          <img className="logo" src={Figma} alt="" />
          </div>

          <div className="textContainer4">
            <p>FIGMA</p>
          </div>
        </div>

        
        <div className="logoTitleContainer">
          <div className="subLogoContainer">
          <img className="logo" src={Canva} alt="" />
          </div>

          <div className="textContainer4">
            <p>CANVA</p>
          </div>
        </div>

        
        <div className="logoTitleContainer">
          <div className="subLogoContainer">
          <img className="logo" src={VsCode} alt="" />
          </div>

          <div className="textContainer4">
            <p>VS CODE</p>
          </div>
        </div>
      </div>

      <div className="percentContainer">
        <div className="devContainer">
          <div className="devContainer1">
            <div className="subDevContainer">
              <p>Front-End Developer</p>
            </div>

            <div className="subPercentContainer">
              <div className="iconContainer">
                <img className="icon" src={Html} alt="" />
              </div>

              <div className="percent">
                <div className="subPercent">
                  <div className="circleContainer">

                  </div>
                </div>
              </div>
              
              <div className="iconContainer">
                <p>70%</p>
              </div>
            </div>

            <div className="subPercentContainer">
              <div className="iconContainer">
                <img className="icon" src={Css} alt="" />
              </div>

              <div className="percent">
                <div className="subPercent">
                  <div className="circleContainer2">

                  </div>
                </div>
              </div>
              
              <div className="iconContainer">
                <p>60%</p>
              </div>
            </div>

            <div className="subPercentContainer">
              <div className="iconContainer">
                <img className="icon" src={Js} alt="" />
              </div>

              <div className="percent">
                <div className="subPercent">
                  <div className="circleContainer3">

                  </div>
                </div>
              </div>
              
              <div className="iconContainer">
                <p>40%</p>
              </div>
            </div>

            <div className="subPercentContainer">
              <div className="iconContainer">
                <img className="icon" src={React} alt="" />
              </div>

              <div className="percent">
                <div className="subPercent">
                  <div className="circleContainer4">

                  </div>
                </div>
              </div>
              
              <div className="iconContainer">
                <p>10%</p>
              </div>
            </div>

            <div className="subPercentContainer">
              <div className="iconContainer">
                <img className="icon" src={Tailwind} alt="" />
              </div>

              <div className="percent">
                <div className="subPercent">
                  <div className="circleContainer5">

                  </div>
                </div>
              </div>
              
              <div className="iconContainer">
                <p>50%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="toolContainer">
          <div className="subToolContainer">
            <div className="subDevContainer">
              <p>Developing tools</p>
            </div>

            <div className="subPercentContainer">
              <div className="iconContainer">
                <img className="icon" src={VsCode} alt="" />
              </div>

              <div className="percent">
                <div className="subPercent">
                  <div className="circleContainer6">

                  </div>
                </div>
              </div>
              
              <div className="iconContainer">
                <p>70%</p>
              </div>
            </div>
          </div>

          <div className="subToolContainer1">
            <div className="subDevContainer">
              <p>UI/UX Design Tools</p>
            </div>

            <div className="subPercentContainer">
              <div className="iconContainer">
                <img className="icon" src={Figma} alt="" />
              </div>

              <div className="percent">
                <div className="subPercent">
                  <div className="circleContainer7">

                  </div>
                </div>
              </div>
              
              <div className="iconContainer">
                <p>80%</p>
              </div>
            </div>

            <div className="subPercentContainer">
              <div className="iconContainer">
                <img className="icon" src={Canva} alt="" />
              </div>

              <div className="percent">
                <div className="subPercent">
                  <div className="circleContainer8">

                  </div>
                </div>
              </div>
              
              <div className="iconContainer">
                <p>90%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}