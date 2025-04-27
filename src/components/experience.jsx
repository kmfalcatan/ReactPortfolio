import "../style/experience.css"
import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Experience(){
    
  useEffect(() => {
      AOS.init({ duration: 1000, once: false });
    }, []);

  return(
    <div className="subExperienceContainer" data-aos="fade">
      <div className="titleContainer3">
        <div className="educationContainer">
          <div className="education5">
            <p>Education</p>
          </div>

          <div className="subEducationContainer">
            <div className="lineContainer">
              <div className="line3">

              </div>
            </div>

            <div className="schoolContainer">
              <div className="yearContainer">
                <p className="textStyle1">2021 - 2025</p>
              </div>

              <div className="school">
                <p>Western Mindanao State University</p>
              </div>

              <div className="aboutSchool">
                <p>I am currently studying at Western Mindanao State University, taking up Bachelor of Science in Information Technology (BSIT).</p>
              </div>

              <div className="circleContainer1">

              </div>
            </div>
          </div>
          
          <div className="subEducationContainer">
            <div className="lineContainer">
              <div className="line3">

              </div>
            </div>

            <div className="schoolContainer">
              <div className="yearContainer">
                <p className="textStyle1">2019 - 2021</p>
              </div>

              <div className="school">
                <p>Baliwasan National High School - Stand Alone</p>
              </div>

              <div className="aboutSchool">
                <p>I pursued my senior high school education at Baliwasan National High School - Stand Alone, taking the Technical-Vocational-Livelihood (TVL) track.</p>
              </div>

              <div className="circleContainer1">

              </div>
            </div>
          </div>

          <div className="subEducationContainer">
            <div className="lineContainer">
              <div className="line3">

              </div>
            </div>

            <div className="schoolContainer">
              <div className="yearContainer">
                <p className="textStyle1">2015 - 2019</p>
              </div>

              <div className="school">
                <p>Zamboanga National High School - West</p>
              </div>

              <div className="aboutSchool">
                <p>I continued my education at Zamboanga National High School - West, where I further developed my skills and knowledge.</p>
              </div>

              <div className="circleContainer1">

              </div>
            </div>
          </div>

          <div className="subEducationContainer">
            <div className="lineContainer">
              <div className="line3">

              </div>
            </div>

            <div className="schoolContainer">
              <div className="yearContainer">
                <p className="textStyle1">2009 - 2015</p>
              </div>

              <div className="school">
                <p>Pasonanca Elementary School</p>
              </div>

              <div className="aboutSchool">
                <p>I studied at Pasonanca Elementary School, where I built a strong foundation for my academic journey.</p>
              </div>

              <div className="circleContainer1">

              </div>
            </div>
          </div>
        </div>

        <div className="educationContainer">
          <div className="education5">
            <p>Experience</p>
          </div>

          <div className="subEducationContainer">
            <div className="lineContainer">
              <div className="line3">

              </div>
            </div>

            <div className="schoolContainer">
              <div className="yearContainer">
                <p className="textStyle1">January - May</p>
              </div>

              <div className="school">
                <p>Software Engineering</p>
              </div>

              <div className="aboutSchool">
                <p>Our company name is Webcraft, where I specialized in Software Engineering and worked as a Front-End Developer, focusing on creating responsive and user-friendly web applications.</p>
              </div>

              <div className="circleContainer1">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;