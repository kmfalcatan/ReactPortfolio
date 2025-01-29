import "../style/loading.css";
import "../style/hero.css";

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
    </div>
  );
}
