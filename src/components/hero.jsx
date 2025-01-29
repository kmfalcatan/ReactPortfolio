import "../style/loading.css";
import "../style/hero.css";
import Header from "./header";
import Background from "./background";
import Home from "./homePage";

export default function hero() {
  return (
    <div className="container">
      <Background/>
      <Header/>

      <div id="home" className="homeContainer">
        <Home/>
      </div>

      <div id="about" className="aboutContainer">

      </div>
    </div>
  );
}
