import "../style/loading.css";

export default function Loading() {
  return (
    <div className="background">
      {Array.from({ length: 50 }).map((_, index) => (
        <div key={index} className="star"></div>
      ))}

      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="shootingStar" style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, animationDuration: `${Math.random() * 10 + 5}s`, }}>
          <div className="star1">

          </div>
        </div>
      ))}

      <div className="textContainer">
        <p>Welcome to my <span>Portfolio</span></p>
      </div>
    </div>
  );
}
