import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./ScrollToTop.css";

function ScrollToTop() {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {visible && (
        <button className="scroll-top-btn" onClick={handleScrollTop}>
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </>
  );
}

export default ScrollToTop;