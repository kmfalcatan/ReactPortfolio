import "../style/homePage.css";
import Moon from "../assets/moon.svg";
import { useState, useEffect } from "react";

export default function Home() {
  const words = ["Khriz", "Front-End Developer", "UI/UX Designer"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = isDeleting ? 50 : 100;

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    if (!isDeleting && displayedText === currentWord) {
      setTimeout(() => setIsDeleting(true), 1500); 
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length); 
    }

    const timer = setTimeout(() => {
      setDisplayedText((prev) =>
        isDeleting ? prev.slice(0, -1) : currentWord.slice(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentWordIndex]);

  return (
    <div className="subHomeContainer">
      <p className="text">
        Hi, I'm <span className="typingText">{displayedText}</span>
      </p>

      <div className="textContainer1">
        <div className="subTextContainer">
          <p className="textColor1">WEB DESIGNER</p>
          <p className="textColor2">WEB DESIGNER</p>
          <p className="textColor3">WEB DESIGNER</p>
        </div>

        <div className="imageContainer">
          <img className="moon" src={Moon} alt="Moon" />
        </div>
      </div>
    </div>
  );
}
