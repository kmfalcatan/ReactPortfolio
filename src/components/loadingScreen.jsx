import "../style/loading.css";
import { useEffect, useState } from "react";

export default function Loading() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    setDarkMode(savedMode === "true");
  }, []);

  return (
    <div
      className="background"
      style={{
        backgroundColor: darkMode ? "#0b0c10" : "#FFF8E1",
        fontFamily: darkMode ? "" : "Rubik, sans-serif",
      }}
    >
      {darkMode &&
        Array.from({ length: 50 }).map((_, index) => (
          <div key={index} className="star"></div>
        ))}

      {darkMode &&
        Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="shootingStar"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 5}s`,
            }}
          >
            <div className="star1"></div>
          </div>
        ))}

      <div className={`textContainer ${darkMode ? "dark" : "light"}`}>
        <p>
          Welcome to my <span>Portfolio</span>
        </p>
      </div>
    </div>
  );
}
