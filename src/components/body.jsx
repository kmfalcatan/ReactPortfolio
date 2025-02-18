import "../style/loading.css";
import "../style/hero.css";
import Header from "./header";
import Background from "./background";
import Home from "./hero";
import About from "./aboutPage";

export default function body() {
  return (
    <div className="container">
      <Background/>
      <Header/>

      <div id="home" className="homeContainer">
        <Home/>
      </div>

      <div id="about" className="aboutContainer">
        <About/>
      </div>
    </div>
  );
}
