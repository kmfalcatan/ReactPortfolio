import "../style/blogModal.css";
import Back from "../assets/back.svg";
import Next from "../assets/next.svg";
import Close from "../assets/x.svg";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react"
import AOS from "aos";
import "aos/dist/aos.css";;

function BlogModal() {
  const navigate = useNavigate();
  const location = useLocation();

  // Get the passed data from Blog.jsx
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

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" }); // you can also use "smooth" if you want
  }, []);
      
    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
      }, []);

  return (
    <div className="blogModalContainer" data-aos="fade">
      <div className="backContainer">
        <div className="subBackContainer">
          <img className="arrow1" src={Back} onClick={() => navigate("/hero")} alt="Back" />
        </div>
      </div>

      <div className="blogImageContainer">
        <img className="blogImage" src={blogImageMain} alt="Main Blog" />
      </div>

      <div className="dayContainer">
        <div className="subDayContainer">
          <p className="dayText">{dayTitle}</p>
          <p className="agenda">{agenda}</p>
          <p className="dateTour">{date}</p>
        </div>
      </div>

      <div className="paragraphContainer">
        <div className="introductionContainer">
          <p className="intro">Introduction</p>
          <p className="fontStyle">{introduction}</p>
        </div>

        <div className="blogImageContainer1">
          <div className="subBlogImgContainer">
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

        <div className="expirienceContainer">
          <p className="experience">{experience}</p>
        </div>
      </div>
    </div>
  );
}

export default BlogModal;
