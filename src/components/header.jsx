import "../style/header.css";

export default function Header() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }e
  };

  return (
    <div className="headerContainer">
      <button onClick={() => scrollToSection("home")} className="button">Home</button>
      <button onClick={() => scrollToSection("about")} className="button">About</button>
      <button onClick={() => scrollToSection("skill")} className="button">Skills</button>
      <button onClick={() => scrollToSection("project")} className="button">Project</button>
      <button onClick={() => scrollToSection("contact")} className="button">Contact</button>
    </div>
  );
}
