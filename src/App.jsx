import Loading from "./components/loadingScreen";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import BlogModal from "./components/blogModal"; // Adjust path if needed
import Body from "./components/body";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoadingPage />} />
        <Route path="/hero" element={<Body />} />
        <Route path="/blogModal" element={<BlogModal />} />
      </Routes>
    </Router>
  );
}

function LoadingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/hero");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return <Loading />;
}

export default App;
