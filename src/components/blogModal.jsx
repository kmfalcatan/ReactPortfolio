import "../style/blogModal.css";
import Back from "../assets/back.svg";
import Next from "../assets/next.svg";
import Close from "../assets/x.svg";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react"
import AOS from "aos";
import "aos/dist/aos.css";

function BlogModal() {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    blogImageMain,
    blogImages = [],
    dayTitle,
    agenda,
    date,
    introduction,
    experience
  } = location.state || {};

  const [currentBlogIndex, setCurrentBlogIndex] = useState(0);

  const handleNextBlog = () => {
    setCurrentBlogIndex((prevIndex) => (prevIndex + 1) % blogImages.length);
  };

  const handleBackBlog = () => {
    setCurrentBlogIndex((prevIndex) =>
      (prevIndex - 1 + blogImages.length) % blogImages.length
    );
  };

  // Get dark mode from localStorage
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const storedTheme = localStorage.getItem("darkMode");
    setDarkMode(storedTheme === "true");
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
      
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className={`blogModalContainer ${darkMode ? "dark" : "light"}`} data-aos="fade">
      <div className={`backContainer ${darkMode ? "dark" : "light"}`}>
        <div className="subBackContainer">
          <img className={`arrow1 ${darkMode ? "dark" : "light"}`} src={Back} onClick={() => navigate("/hero")} alt="Back" />
        </div>
      </div>

      <div className="blogImageContainer">
        <img className="blogImage" src={blogImageMain} alt="Main Blog" />
      </div>

      <div className="dayContainer" data-aos="fade-up"  data-aos-delay="300">
        <div className={`subDayContainer ${darkMode ? "dark" : "light"}`}>
          <p className={`dayText ${darkMode ? "dark" : "light"}`}>{dayTitle}</p>
          <p className={`agenda ${darkMode ? "dark" : "light"}`}>{agenda}</p>
          <p className={`dateTour ${darkMode ? "dark" : "light"}`}>{date}</p>
        </div>
      </div>

      <div className="paragraphContainer">
        <div className="introductionContainer" data-aos="fade-up"  data-aos-delay="500">
          <p className={`intro ${darkMode ? "dark" : "light"}`}>Introduction</p>
          <p className={`fontStyle ${darkMode ? "dark" : "light"}`}>{introduction}</p>
        </div>

        <div className="blogImageContainer1" data-aos="fade-up"  data-aos-delay="700">
          <div className={`subBlogImgContainer ${darkMode ? "dark" : "light"}`}>
            <img
              key={currentBlogIndex}
              className="blogImg fade"
              src={blogImages[currentBlogIndex]}
              alt="Blog Gallery"
            />

            <div className="nextContainer">
              <div className="subNextContainer" onClick={handleBackBlog}>
                <img className="arrowBack" src={Back} alt="Previous" />
              </div>

              <div className="subNextContainer" onClick={handleNextBlog}>
                <img className="arrowBack" src={Next} alt="Next" />
              </div>
            </div>
          </div>
        </div>

        <div className="expirienceContainer" data-aos="fade"  data-aos-delay="900">
          <p className={`experience ${darkMode ? "dark" : "light"}`}>{experience}</p>
        </div>
      </div>
    </div>
  );
}

export default BlogModal;
