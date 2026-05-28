import { Link, useNavigate } from "react-router-dom";
import "./Footer.css";

function Footer() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/contact");
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="footer">
            <div className="footer-cta">
                <div>
                    <p className="footer-tag">READY TO TRANSFORM YOUR SPACE?</p>
                    <h2>
                        Book Your Complimentary <br />
                        <span>Design Consultation</span>
                    </h2>
                </div>

                <button onClick={handleClick} className="footer-btn">
                    Get in Touch
                </button>
            </div>

            <div className="footer-main">
                <div className="footer-watermark">INDOOR</div>
                <div className="footer-brand">
                    <p>
                        Creating timeless interiors with a balance of elegance,
                        comfort and thoughtful functionality.
                    </p>

                    <div className="footer-contact">
                        <a href="mailto:indoor@gmail.com">
                            <i className="fas fa-envelope"></i> indoor@gmail.com
                        </a>
                        <a href="tel:+15555555555">
                            <i className="fas fa-phone-alt"></i>555-555-5555
                        </a>
                    </div>
                </div>

                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h4>Services</h4>
                    <ul>
                        <li><Link to="/">Commercial Elegance</Link></li>
                        <li><Link to="/">Retail Ambiance</Link></li>
                        <li><Link to="/">Residential Design</Link></li>
                        <li><Link to="/">Lighting Concepts</Link></li>
                    </ul>
                </div>
                <div className="footer-details">
                    <h4>Why Choose INDOOR</h4>

                    <ul>
                        <li>Bespoke Interior Concepts</li>
                        <li>Functional Space Planning</li>
                        <li>Luxury Material Selection</li>
                        <li>End-to-End Design Execution</li>
                    </ul>
                </div>
            </div>
            <div className="footer-divider">
                <span></span>
            </div>
            <div className="footer-marquee">
                <div>
                    INTERIOR DESIGN • SPACE STYLING • LUXURY LIVING • CUSTOM CONCEPTS •
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 INDOOR. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;