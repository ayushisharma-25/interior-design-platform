import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../Assets/logo.png";
import "./Navbar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Navbar({ openWishlist }) {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const getWishlist = () => {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const updateWishlist = () => {
      const data = getWishlist();
      setCount(data.length);
    };

    updateWishlist();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("wishlistUpdated", updateWishlist);
    window.addEventListener("storage", updateWishlist);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wishlistUpdated", updateWishlist);
      window.removeEventListener("storage", updateWishlist);
    };
  }, []);

  return (
    <nav
      className={scrolled ? "navbar scrolled" : "navbar"}
      aria-label="Main navigation"
    >
      <div className="container nav">

        <div
          className="logo"
          onClick={() => navigate("/")}
          role="button"
          tabIndex="0"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              navigate("/");
            }
          }}
          aria-label="Go to homepage"
        >
          <img src={logo} alt="INDOOR company logo" />
          <h2>INDOOR</h2>
        </div>

        <ul className="nav-links" role="menubar">
          <li role="none">
            <NavLink to="/" end role="menuitem">Home</NavLink>
          </li>
          <li role="none">
            <NavLink to="/about" role="menuitem">About Us</NavLink>
          </li>
          <li role="none">
            <NavLink to="/services" role="menuitem">Services</NavLink>
          </li>
          <li role="none">
            <NavLink to="/portfolio" role="menuitem">Portfolio</NavLink>
          </li>
        </ul>

        <div className="right-actions">

          <li className="nav-icon" onClick={() => navigate("/my-orders")}>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
          <button
            className="wishlist-icon"
            onClick={openWishlist}
            aria-label={`Wishlist with ${count} items`}
          >
            <i className="fas fa-heart" aria-hidden="true"></i>

            <span className="count" aria-live="polite">
              {count}
            </span>
          </button>

          <button
            className="contact-btn"
            onClick={() => navigate("/contact")}
            aria-label="Go to contact page"
          >
            Contact
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;