import React from "react";
import { useNavigate } from "react-router-dom";

import { servicesHeroImg } from "../../ImageExports/ServicesImages";

function ServicesHeroSection() {

    const navigate = useNavigate();

    return (

        <section
            className="hero-section"
            style={{
                backgroundImage: `url(${servicesHeroImg})`,
            }}
        >

            <div className="hero-overlay" />

            <div className="hero-content">

                <h1>
                    Transform Your Space
                    <br />
                    <span>Into Something Extraordinary</span>
                </h1>

                <p>
                    Premium Interior Design & Turnkey Solutions
                    <br />
                    for Homes & Commercial Spaces in Jaipur
                </p>

                <div className="hero-buttons">

                    <button
                        onClick={() => navigate("/portfolio")}
                        className="portfolio-btn"
                    >
                        View Portfolio
                    </button>

                </div>

            </div>

        </section>
    );
}

export default ServicesHeroSection;