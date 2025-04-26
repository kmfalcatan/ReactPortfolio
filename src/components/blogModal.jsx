import "../style/blogModal.css";
import WmsuCourse from "../assets/WmsuCourse.jpg";
import Day1 from "../assets/day1.jpg";
import Back from "../assets/back.svg";
import Next from "../assets/next.svg";
import Close from "../assets/x.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function BlogModal() {
  const navigate = useNavigate();
  const [currentBlogIndex, setCurrentBlogIndex] = useState(0);

  const blogImages = [Day1, WmsuCourse]; // Add more images if you want

  const handleNextBlog = () => {
    setCurrentBlogIndex((prevIndex) => (prevIndex + 1) % blogImages.length);
  };

  const handleBackBlog = () => {
    setCurrentBlogIndex((prevIndex) =>
      (prevIndex - 1 + blogImages.length) % blogImages.length
    );
  };

  return (
    <div className="blogModalContainer">
      <div className="backContainer">
        <div className="subBackContainer">
          <img className="arrow1" src={Back} onClick={() => navigate("/hero")} alt="" />
        </div>
      </div>

      <div className="blogImageContainer">
        <img className="blogImage" src={Day1} alt="" />
      </div>

      <div className="dayContainer">
        <div className="subDayContainer">
          <p className="dayText">Day 1</p>
          <p className="agenda">We visited Luneta Park, admired the Rizal Fountain, and explored the city on a tour.</p>
          <p className="dateTour">April 07, 2025</p>
        </div>
      </div>

      <div className="paragraphContainer">
        <div className="introductionContainer">
          <p className="intro">Introduction</p>
          <p className="fontStyle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis animi ipsa rerum illo cumque nam voluptatem deserunt iste praesentium minus in, fuga magnam ut commodi esse sunt. Veritatis, id provident.</p>
        </div>

        <div className="blogImageContainer1">
          <div className="subBlogImgContainer">
            <img
              key={currentBlogIndex}  // Important for re-triggering animation
              className="blogImg fade"
              src={blogImages[currentBlogIndex]}
              alt=""
            />

            <div className="nextContainer">
              <div className="subNextContainer" onClick={handleBackBlog}>
                <img className="arrowBack" src={Back} alt="" />
              </div>

              <div className="subNextContainer" onClick={handleNextBlog}>
                <img className="arrowBack" src={Next} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="expirienceContainer">
          <p className="experience">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur laborum quo, ipsum nostrum ad odit cupiditate, unde mollitia vero illum eveniet facilis perspiciatis tempore nesciunt delectus id iusto cumque fugiat.</p>
        </div>
      </div>
    </div>
  );
}

export default BlogModal;
