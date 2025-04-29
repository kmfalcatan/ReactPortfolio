import { useEffect, useState } from "react";
import "../style/background.css";
import "../style/hero.css";
import Rocket from "../assets/spaceship.svg";
import Clouds from "../assets/clouds.svg";

export default function Background({ darkMode }) {
  const [clouds, setClouds] = useState([]);
  const MAX_CLOUDS = 10;

  useEffect(() => {
    let interval;
    if (!darkMode) {
      interval = setInterval(() => {
        setClouds((prev) => {
          if (prev.length >= MAX_CLOUDS) return prev;

          const id = Date.now();
          const newCloud = {
            id,
            top: Math.random() * 80, // stay within visible area
            duration: Math.random() * 10 + 10,
          };

          // Schedule removal
          setTimeout(() => {
            setClouds((curr) => curr.filter((c) => c.id !== id));
          }, newCloud.duration * 1000);

          return [...prev, newCloud];
        });
      }, 3000);
    } else {
      setClouds([]);
    }

    return () => clearInterval(interval);
  }, [darkMode]);

  return (
    <div className={`background ${darkMode ? "dark" : "light"}`}>
      {/* Stars only in dark mode */}
      {darkMode &&
        Array.from({ length: 50 }).map((_, index) => (
          <div
            key={`star-${index}`}
            className="star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 5 + 5}s`,
            }}
          ></div>
        ))}

      {/* Shooting stars only in dark mode */}
      {darkMode &&
        Array.from({ length: 20 }).map((_, index) => (
          <div
            key={`shooting-${index}`}
            className="shootingStar"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 5}s`,
            }}
          >
            <div className="star1" />
          </div>
        ))}

      {/* Rocket only in dark mode */}
      {darkMode &&
        Array.from({ length: 4 }).map((_, index) => (
          <div
            key={`rocket-${index}`}
            className="shootingStar1"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 5}s`,
            }}
          >
            <img className="rocket" src={Rocket} alt="Rocket" />
          </div>
        ))}

      {/* Floating clouds only in light mode */}
      {!darkMode &&
        clouds.map((cloud) => (
          <div
            key={cloud.id}
            className="clouds"
            style={{
              top: `${cloud.top}%`,
              animationDuration: `${cloud.duration}s`,
            }}
          >
            <img className="cloud-image" src={Clouds} alt="Cloud" />
          </div>
        ))}
    </div>
  );
}
