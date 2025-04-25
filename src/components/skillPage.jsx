import "../style/skillPage.css";
import Html from "../assets/html.svg";
import Css from "../assets/css.svg";
import Js from "../assets/js.svg";
import ReactLogo from "../assets/react.svg";
import Tailwind from "../assets/tailwind.svg";
import Figma from "../assets/figma.svg";
import Canva from "../assets/canva.svg";
import VsCode from "../assets/vsCode.svg";

const skills = [
  { name: "HTML", img: Html },
  { name: "CSS", img: Css },
  { name: "JAVASCRIPT", img: Js },
  { name: "REACT.JS", img: ReactLogo },
  { name: "TAILWIND", img: Tailwind },
  { name: "FIGMA", img: Figma },
  { name: "CANVA", img: Canva },
  { name: "VS CODE", img: VsCode },
];

const devSkills = [
  { img: Html, percent: "70%", className: "circleContainer" },
  { img: Css, percent: "60%", className: "circleContainer2" },
  { img: Js, percent: "40%", className: "circleContainer3" },
  { img: ReactLogo, percent: "10%", className: "circleContainer4" },
  { img: Tailwind, percent: "50%", className: "circleContainer5" },
];

const tools = [
  {
    title: "Developing tools",
    items: [{ img: VsCode, percent: "70%", className: "circleContainer6" }],
  },
  {
    title: "UI/UX Design Tools",
    items: [
      { img: Figma, percent: "80%", className: "circleContainer7" },
      { img: Canva, percent: "90%", className: "circleContainer8" },
    ],
  },
];

export default function Skill() {
  return (
    <div className="subSkillContainer">
      <div className="titleContainer2">
        <p className="text2 textStyle">Background Skills and Accomplishment</p>
        <p className="text3 textStyle">
        I developed these skills throughout my college years while studying Information Technology.
        </p>
      </div>

      <div className="logoContainer">
        {skills.map((skill, i) => (
          <div className="logoTitleContainer" key={i}>
            <div className="subLogoContainer">
              <img className="logo" src={skill.img} alt={skill.name} />
            </div>
            <div className="textContainer4">
              <p className="textStyle">{skill.name}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="percentContainer">
        <div className="devContainer">
          <div className="devContainer1">
            <div className="subDevContainer">
              <p className="textStyle">Front-End Developer</p>
            </div>
            {devSkills.map((skill, i) => (
              <div className="subPercentContainer" key={i}>
                <div className="iconContainer">
                  <img className="icon" src={skill.img} alt="" />
                </div>
                <div className="percent">
                  <div className="subPercent">
                    <div className={skill.className}></div>
                  </div>
                </div>
                <div className="iconContainer">
                  <p>{skill.percent}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="toolContainer">
          {tools.map((tool, i) => (
            <div className={i === 0 ? "subToolContainer" : "subToolContainer1"} key={i}>
              <div className="subDevContainer">
                <p className="textStyle">{tool.title}</p>
              </div>
              {tool.items.map((item, j) => (
                <div className="subPercentContainer" key={j}>
                  <div className="iconContainer">
                    <img className="icon" src={item.img} alt="" />
                  </div>
                  <div className="percent">
                    <div className="subPercent">
                      <div className={item.className}></div>
                    </div>
                  </div>
                  <div className="iconContainer">
                    <p>{item.percent}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
