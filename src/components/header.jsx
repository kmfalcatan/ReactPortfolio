import "../style/header.css";
import { useState, useEffect } from "react";

export default function Header() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  useEffect(() => {
    const header = document.querySelector(".menubarContainer");
    const navbar = document.querySelector(".subMenubarContainer");

    if (header && navbar) {
      header.addEventListener("click", function () {
        navbar.classList.toggle("fadeIn");
      });
    }

    return () => {
      if (header) {
        header.removeEventListener("click", toggleMenu);
      }
    };
  }, []);

  return (
    <div className="headerContainer">
      <div className="subHeaderContainer1">
        <button onClick={() => scrollToSection("home")} className="button">Home</button>
        <button onClick={() => scrollToSection("about")} className="button">About</button>
        <button onClick={() => scrollToSection("skill")} className="button">Skills</button>
        <button onClick={() => scrollToSection("project")} className="button">Project</button>
        <button onClick={() => scrollToSection("contact")} className="button">Contact</button>
      </div>

      <div className="mobileHeaderContainer">
        <div className="subMobileHeaderContainer">
          <div 
            className={`menubarContainer ${menuOpen ? "change" : ""}`} 
            onClick={toggleMenu}
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>

          <div className={`subMenubarContainer ${menuOpen ? "fadeIn" : ""}`} >
            <button onClick={() => scrollToSection("home")} className="button2">Home</button>
            <button onClick={() => scrollToSection("about")} className="button2">About</button>
            <button onClick={() => scrollToSection("skill")} className="button2">Skills</button>
            <button onClick={() => scrollToSection("project")} className="button2">Project</button>
            <button onClick={() => scrollToSection("contact")} className="button2">Contact</button>
          </div>
        </div>
      </div>
    </div>
  );
}
