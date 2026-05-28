import { useState, useEffect } from "react";
import './FloatingSocial.css'

function FloatingSocial() {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen((prev) => !prev);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="fab-container">

      <div
        className={`fab-social-icons ${open ? "show" : ""}`}
        role="menu"
        aria-hidden={!open}
      >
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noreferrer"
          className="fab-icon whatsapp"
          aria-label="Chat on WhatsApp"
        >
          <i className="fab fa-whatsapp" aria-hidden="true"></i>
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="fab-icon instagram"
          aria-label="Visit Instagram profile"
        >
          <i className="fab fa-instagram" aria-hidden="true"></i>
        </a>

        <a
          href="mailto:your@email.com"
          className="fab-icon email"
          aria-label="Send email"
        >
          <i className="fas fa-envelope" aria-hidden="true"></i>
        </a>
      </div>

      <button
        className={`main-btn ${open ? "active" : ""}`}
        onClick={toggleOpen}
        aria-label={open ? "Close social links" : "Open social links"}
        aria-expanded={open}
        aria-controls="social-menu"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>

    </div>
  );
}

export default FloatingSocial;