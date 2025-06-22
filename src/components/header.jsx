import "../style/header.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sun from "../assets/sun.svg";
import Moon from "../assets/moon-stars.svg";

export default function Header({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const toggleTheme = () => {
    setDarkMode(prev => {
      const newMode = !prev;
      localStorage.setItem("darkMode", newMode);
      return newMode;
    });
  };
  

  const scrollToSection = (id) => {
    setMenuOpen(false);
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }, 600);
  };

  return (
    <div className={`headerContainer ${darkMode ? "dark" : "light"}`}>
      <div className="subHeaderContainer1">
        {["home", "about", "skill", "project", "experience", "contact"].map((id) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`button textStyle ${darkMode ? "dark" : "light"}`}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </button>
        ))}
      </div>

      <div className="mobileHeaderContainer">
        <div className="subMobileHeaderContainer">
          <div
            className={`menubarContainer ${menuOpen ? "change" : ""}`}
            onClick={toggleMenu}
          >
            <div className={`line ${darkMode ? "dark" : "light"}`}></div>
            <div className={`line ${darkMode ? "dark" : "light"}`}></div>
            <div className={`line ${darkMode ? "dark" : "light"}`}></div>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                key="mobileMenu"
                initial={{ clipPath: "circle(0% at 0% 0%)", opacity: 0 }}
                animate={{ clipPath: "circle(150% at 0% 0%)", opacity: 1 }}
                exit={{ clipPath: "circle(0% at 0% 0%)", opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className={`subMenubarContainer ${darkMode ? "dark" : "light"}`}
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100vw",
                  height: "100vh",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "left",
                }}
              >
                {["home", "about", "skill", "project", "experience", "contact"].map((id) => (
                  <motion.button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`button2 textStyle ${darkMode ? "dark" : "light"}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: 0.3 }}
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div
        className={`darkLightModeContainer ${darkMode ? "dark" : "light"}`}
        onClick={toggleTheme}
      >
        <img
          src={darkMode ? Sun : Moon}
          alt="theme toggle"
          className={`themeIcon ${darkMode ? "dark" : "light"}`}
        />
      </div>
    </div>
  );
}
