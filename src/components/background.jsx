import "../style/background.css";
import "../style/hero.css";
import Rocket from "../assets/spaceship.svg";

export default function background() {
  return (
    <div className="background">
      {Array.from({ length: 50 }).map((_, index) => (
        <div key={index} className="star" style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, animationDuration: `${Math.random() * 5 + 5}s`, }}></div>
      ))}

      {Array.from({ length: 20 }).map((_, index) => (
        <div key={index} className="shootingStar" style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, animationDuration: `${Math.random() * 10 + 5}s`, }}>
          <div className="star1">

          </div>
        </div>
      ))}

      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="shootingStar1" style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, animationDuration: `${Math.random() * 10 + 5}s`, }}>
          <img className="rocket" src={Rocket} alt="" />
        </div>
      ))}
    </div>
  );
}
